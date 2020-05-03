import firebase  from 'firebase'

firebase.initializeApp( {
    apiKey: "AIzaSyDGAGqIkZ8GdvTcvrYsdAoUVYwzw54qP-0",
    authDomain: "gec-biennale.firebaseapp.com",
    databaseURL: "https://gec-biennale.firebaseio.com",
    projectId: "gec-biennale",
    storageBucket: "gec-biennale.appspot.com",
    messagingSenderId: "502111684427",
    appId: "1:502111684427:web:70000229bce2f57e30cace"
  });
const db = firebase.firestore()
export{db}; 
