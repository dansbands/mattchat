import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCzNrTm_a-b-yrLKHKGVHAgzXZZ5eqxFw8",
    authDomain: "ript-react.firebaseapp.com",
    databaseURL: "https://ript-react.firebaseio.com",
    projectId: "ript-react",
    storageBucket: "ript-react.appspot.com",
    messagingSenderId: "65945876160"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');


