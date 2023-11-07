// // // Import required modules
// // const express = require("express");
// // const app = express();
// // const cors = require("cors");
// // const User = require("./config");
// // const firebase = require("firebase");
// // const bodyParser = require("body-parser");
// // // const firebaseConfig = {
// // //   apiKey: "YOUR_API_KEY",
// // //   authDomain: "YOUR_AUTH_DOMAIN",
// // //   databaseURL: "YOUR_DATABASE_URL",
// // //   projectId: "YOUR_PROJECT_ID",
// // //   storageBucket: "YOUR_STORAGE_BUCKET",
// // //   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
// // //   appId: "YOUR_APP_ID",
// // // };
// // app.use(express.json());
// // app.use(cors());
// // app.use(bodyParser.urlencoded({ extended: true }));

// // // Routes for signup, login, and OTP verification
// // // app.post("/signup", (req, res) => {
// // //   const { email, password } = req.body;
// // //   firebase
// // //     .auth()
// // //     .createUserWithEmailAndPassword(email, password)
// // //     .then((userCredential) => {
// // //       res.send("User registered successfully");
// // //     })
// // //     .catch((error) => {
// // //       res.status(400).send("Registration failed: " + error.message);
// // //     });
// // // });

// // app.post("/signup", (req, res) => {
// //   const { email, password } = req.body;
// //   firebase
// //     .auth()
// //     .createUserWithEmailAndPassword(email, password)
// //     .then((userCredential) => {
// //       // Add the user to the Firestore database
// //       const user = {
// //         email: email,
// //         // Add other user data as needed
// //       };
// //       db.collection("users")
// //         .add(user)
// //         .then((docRef) => {
// //           res.send("User registered successfully");
// //         })
// //         .catch((error) => {
// //           res.status(400).send("Failed to store user data: " + error.message);
// //         });
// //     })
// //     .catch((error) => {
// //       res.status(400).send("Registration failed: " + error.message);
// //     });
// // });

// // app.post("/login", (req, res) => {
// //   const { email, password } = req.body;
// //   firebase
// //     .auth()
// //     .signInWithEmailAndPassword(email, password)
// //     .then((userCredential) => {
// //       res.send("User logged in successfully");
// //     })
// //     .catch((error) => {
// //       res.status(401).send("Login failed: " + error.message);
// //     });
// // });

// // app.post("/send-otp", (req, res) => {
// //   const { phoneNumber } = req.body;
// //   firebase
// //     .auth()
// //     .signInWithPhoneNumber(phoneNumber)
// //     .then((confirmationResult) => {
// //       res.send("OTP sent successfully");
// //     })
// //     .catch((error) => {
// //       res.status(400).send("Failed to send OTP: " + error.message);
// //     });
// // });

// // app.post("/verify-otp", (req, res) => {
// //   const { verificationCode, confirmationId } = req.body;
// //   firebase
// //     .auth()
// //     .signInWithPhoneNumber(confirmationId, verificationCode)
// //     .then((userCredential) => {
// //       res.send("User verified successfully");
// //     })
// //     .catch((error) => {
// //       res.status(401).send("OTP verification failed: " + error.message);
// //     });
// // });

// // // Start the server
// // const port = process.env.PORT || 3000;
// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // // });

// // const express = require("express");
// // const cors = require("cors");
// // const User = require("./config");
// // const app = express();
// // app.use(express.json());
// // app.use(cors());

// // app.get("/", async (req, res) => {
// //   const snapshot = await User.get();
// //   const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
// //   res.send(list);
// // });

// // app.post("/create", async (req, res) => {
// //   const data = req.body;
// //   await User.add({ data });
// //   res.send({ msg: "User Added" });
// // });

// // app.post("/update", async (req, res) => {
// //   const id = req.body.id;
// //   delete req.body.id;
// //   const data = req.body;
// //   await User.doc(id).update(data);
// //   res.send({ msg: "Updated" });
// // });

// // app.post("/delete", async (req, res) => {
// //   const id = req.body.id;
// //   await User.doc(id).delete();
// //   res.send({ msg: "Deleted" });
// // });
// // app.listen(4000, () => console.log("Up & RUnning *4000"));

// // import express from "express";
// // import cors from "cors";
// // import db from "./config.js"; // Note the added .js extension

// // const db = require("./config");

// // const app = express();
// // app.use(express.json());
// // app.use(cors());

// // app.get("/", async (req, res) => {
// //   const snapshot = await User.get();
// //   const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
// //   res.send(list);
// // });

// // app.post("/create", async (req, res) => {
// //   const data = req.body;
// //   await User.add({ data });
// //   res.send({ msg: "User Added" });
// // });

// // app.post("/update", async (req, res) => {
// //   const id = req.body.id;
// //   delete req.body.id;
// //   const data = req.body;
// //   await User.doc(id).update(data);
// //   res.send({ msg: "Updated" });
// // });

// // app.post("/delete", async (req, res) => {
// //   const id = req.body.id;
// //   await User.doc(id).delete();
// //   res.send({ msg: "Deleted" });
// // });

// // app.listen(4000, () => console.log("Up & Running on port 4000"));

// import express from "express";
// import cors from "cors";
// // import db from "./config."; // Note the added .js extension
// import User from "./config"; // Note the added .js extension
// const app = express();
// app.use(express.json());
// app.use(cors());

// app.get("/", async (req, res) => {
//   const snapshot = await User.get();
//   const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   res.send(list);
// });

// app.post("/create", async (req, res) => {
//   const data = req.body;
//   await User.add({ data });
//   res.send({ msg: "User Added" });
// });

// app.post("/update", async (req, res) => {
//   const id = req.body.id;
//   delete req.body.id;
//   const data = req.body;
//   await User.doc(id).update(data);
//   res.send({ msg: "Updated" });
// });

// app.post("/delete", async (req, res) => {
//   const id = req.body.id;
//   await User.doc(id).delete();
//   res.send({ msg: "Deleted" });
// });

// app.listen(4000, () => console.log("Up & Running on port 4000"));

const express = require("express");
const cors = require("cors");
// const User = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

const firebase = require("firebase");

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
const db = firebase.firestore();
const User = db.collection("Users");

app.get("/", async (req, res) => {
  const snapshot = await User.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.post("/create", async (req, res) => {
  const data = req.body;
  await User.add({ data });
  res.send({ msg: "User Added" });
});

app.post("/update", async (req, res) => {
  const id = req.body.id;
  delete req.body.id;
  const data = req.body;
  await User.doc(id).update(data);
  res.send({ msg: "Updated" });
});

app.post("/delete", async (req, res) => {
  const id = req.body.id;
  await User.doc(id).delete();
  res.send({ msg: "Deleted" });
});
app.listen(5000, () => console.log("Up & RUnning *5000"));
