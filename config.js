// // import * as firebase from "firebase";
// // const firebase = require("firebase/app");
// // // import { initializeApp } from "firebase/app";
// // const { initializeApp } = require("firebase/app");
// // const { getFirestore, collection, getDocs } = require("firebase/firestore");

// // // require("firebase/firestore");

// // export var firebaseConfig = {
// //   apiKey: "AIzaSyBDuYuSkH1-b8JImUsmRT5URK3wJSuIxMk",
// //   authDomain: "avachatapp-ac130.firebaseapp.com",
// //   projectId: "avachatapp-ac130",
// //   storageBucket: "avachatapp-ac130.appspot.com",
// //   messagingSenderId: "136702132969",
// //   appId: "1:136702132969:web:dd0369bb5161156b7ca678",
// //   measurementId: "G-Y9F6ZWHR2N",
// // };
// // // firebase.initializeApp(firebaseConfig);
// // const app = initializeApp(firebaseConfig);

// // //  const db = firebase.firestore;
// // const db = getFirestore(app);

// // const User = db.collection("Users");
// // module.exports = User;

// // const { initializeApp } = require("firebase/app");
// // const { getFirestore, collection, getDocs } = require("firebase/firestore");

// // import firebase from "firebase/app";
// // import "firebase/firestore";
// const firebase = require("firebase/app");
// require("firebase/firestore");

// export const firebaseConfig = {
//   apiKey: "AIzaSyBDuYuSkH1-b8JImUsmRT5URK3wJSuIxMk",
//   authDomain: "avachatapp-ac130.firebaseapp.com",
//   projectId: "avachatapp-ac130",
//   storageBucket: "avachatapp-ac130.appspot.com",
//   messagingSenderId: "136702132969",
//   appId: "1:136702132969:web:dd0369bb5161156b7ca678",
//   measurementId: "G-Y9F6ZWHR2N",
// };
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// // Add a document to a collection
// db.collection("User")
//   .add({
//     field1: "value1",
//     field2: "value2",
//   })
//   .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
//   })
//   .catch((error) => {
//     console.error("Error adding document: ", error);
//   });

// module.exports = User;

const firebase = require("firebase/app");

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
module.exports = User;
