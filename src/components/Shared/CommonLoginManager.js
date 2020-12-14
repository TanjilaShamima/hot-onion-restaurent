import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";

if(firebase.apps.length ===0){
    firebase.initializeApp(firebaseConfig);
}

export const logInUser = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {

            return res.user;
        })
        .catch((error) => {
            const errorMessage = error.message;
            return errorMessage;
        });

    }

export const signUpUser = (name, email, password) =>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            updateUser(name)
            return res.user;
        })
        .catch((error) => {
            const errorMessage = error.message;
            return errorMessage;
        });
}


const updateUser = name =>{
    const user = firebase.auth().currentUser;

    user.updateProfile({
    displayName: name
    })
    .then((res) => {
    })
    .catch(function(error) {
    // An error happened.
    });
}
   

