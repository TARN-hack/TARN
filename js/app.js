// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBkcLrQaixp8dhiMrNfrWdJ52nyadLS4cU",
  authDomain: "login-demo-254f7.firebaseapp.com",
  projectId: "login-demo-254f7",
  storageBucket: "login-demo-254f7.appspot.com",
  messagingSenderId: "228883805517",
  appId: "1:228883805517:web:db9063121d6bf3a79ab304",
  measurementId: "G-C8Q2HYKHY1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
let STATE = "NONE";

console.log(STATE);
if (STATE === "IN") {
  document.getElementById("authBtns").innerHTML("Welcome");
  document.getElementById("authBtns2").innerHTML("Welcome");
}
//signup function
function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  //
  STATE = "IN";

  if (document.getElementById("rec").value == "1") {
    window.location.replace("/pages/recruiter-profile.html");
  } else {
    window.location.replace("../");
  }
}

//signIN function
function signIn() {
  // var email = document.getElementById("email");
  // var password = document.getElementById("password");
  // const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  // STATE = "IN";
  // console.log(document.getElementById("rec").value);

  if (document.getElementById("rec").value == "1") {
    window.location.replace("/pages/recruiter-profile.html");
  } else {
    window.location.replace("../");
  }
}

//signOut

function signOut() {
  auth.signOut();
}

//active user to homepage
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var email = user.email;
  } else {
  }
});
