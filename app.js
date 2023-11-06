// Import required modules
const express = require("express");
const app = express();
const firebase = require("firebase");
const bodyParser = require("body-parser");
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   databaseURL: "YOUR_DATABASE_URL",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBDuYuSkH1-b8JImUsmRT5URK3wJSuIxMk",
  authDomain: "avachatapp-ac130.firebaseapp.com",
  projectId: "avachatapp-ac130",
  storageBucket: "avachatapp-ac130.appspot.com",
  messagingSenderId: "136702132969",
  appId: "1:136702132969:web:dd0369bb5161156b7ca678",
  measurementId: "G-Y9F6ZWHR2N",
};
firebase.initializeApp(firebaseConfig);

app.use(bodyParser.urlencoded({ extended: true }));

// Routes for signup, login, and OTP verification
app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      res.send("User registered successfully");
    })
    .catch((error) => {
      res.status(400).send("Registration failed: " + error.message);
    });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      res.send("User logged in successfully");
    })
    .catch((error) => {
      res.status(401).send("Login failed: " + error.message);
    });
});

app.post("/send-otp", (req, res) => {
  const { phoneNumber } = req.body;
  firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber)
    .then((confirmationResult) => {
      res.send("OTP sent successfully");
    })
    .catch((error) => {
      res.status(400).send("Failed to send OTP: " + error.message);
    });
});

app.post("/verify-otp", (req, res) => {
  const { verificationCode, confirmationId } = req.body;
  firebase
    .auth()
    .signInWithPhoneNumber(confirmationId, verificationCode)
    .then((userCredential) => {
      res.send("User verified successfully");
    })
    .catch((error) => {
      res.status(401).send("OTP verification failed: " + error.message);
    });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
