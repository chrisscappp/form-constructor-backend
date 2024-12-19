const firebase = require("firebase/app")
const { getFirestore } = require("firebase/firestore/lite")
const { initializeApp } = require("firebase-admin")

const firebaseConfig = {
  apiKey: "AIzaSyDHf1OYD2P-XotAULEmlZZPaqRCQ4WYPM8",
  authDomain: "form-constructor-app-staging.firebaseapp.com",
  projectId: "form-constructor-app-staging",
  storageBucket: "form-constructor-app-staging.firebasestorage.app",
  messagingSenderId: "439379123433",
  appId: "1:439379123433:web:27a828d3bf4088e6f82478",
  measurementId: "G-RDMZBZH43V"
}

let admin = require("firebase-admin")
let serviceAccount = require("../../form-constructor-app-staging-firebase-adminsdk-ief2e-69d7069dfe.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

const collections = {
	forms: "forms",
  questions: "questions",
  completedForms: "completed-forms"
}

module.exports = { collections, db }