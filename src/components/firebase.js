
import firebase from 'firebase'
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBRz-OFr8wL_TR3vob0QDYLXXmYv1HdJHw",
    authDomain: "booksearch-14e8b.firebaseapp.com",
    databaseURL: "https://booksearch-14e8b.firebaseio.com",
    projectId: "booksearch-14e8b",
    storageBucket: "booksearch-14e8b.appspot.com",
    messagingSenderId: "406217728752"
  };

  class Firebase {
    constructor() {
      firebase.initializeApp(config);
    }
  }

  export default Firebase;