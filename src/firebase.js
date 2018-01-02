import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCZ7lvCejrpRnKcVWQ4-8XXZLWEBDZjSG4",
  authDomain: "goalcoach-dbd36.firebaseapp.com",
  databaseURL: "https://goalcoach-dbd36.firebaseio.com",
  projectId: "goalcoach-dbd36",
  storageBucket: "",
  messagingSenderId: "804875937663"
};


export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
