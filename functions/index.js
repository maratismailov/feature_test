// import { searchQuerie } from '../src/App'

const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();


const axios = require('axios');
const cors = require('cors')({ origin: true });



exports.checkIP = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "GET") {
      return res.status(401).json({
        message: "Not allowed"
      });
    }

    return axios.get(searchQuerie)
      .then(response => {
        console.log(response.data);
        return res.status(200).json({
          message: response.data.ip
        })
      })
      .catch(err => {
        return res.status(500).json({
          error: err
        })
      })
  })
});