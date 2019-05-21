import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAPwe2HFgXUbNDQWjdskVdLSfHO12mvSYM",
  authDomain: "expensify-53aa9.firebaseapp.com",
  databaseURL: "https://expensify-53aa9.firebaseio.com",
  projectId: "expensify-53aa9",
  storageBucket: "expensify-53aa9.appspot.com",
  messagingSenderId: "495603144102"
};
firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Prasad'
}).then( () => {
    console.log('successful')
}).catch( () => {
    console.log('unsuccessful')
});
