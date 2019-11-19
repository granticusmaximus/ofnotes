import * as firebase from 'firebase';

//Initialize Firebase
var config = {
    apiKey: "AIzaSyCiUyobrpMYN29KNKiWwIrXOEBvogC0ibg",
    authDomain: "trello-e0e05.firebaseapp.com",
    databaseURL: "https://trello-e0e05.firebaseio.com",
    projectId: "trello-e0e05",
    storageBucket: "trello-e0e05.appspot.com",
    messagingSenderId: "422345269309"
}

firebase.initializeApp(config);

export default firebase;