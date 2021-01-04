import "firebase/auth";
import firebase from 'firebase/app';
import firebaseConfig from './firebase.config'
export const initializeLoginFramework = () => {
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}
// // const [loggedInUser , setLoggedInUser] = useContext(UserContext)

// export const handleSignOut = () => {
//     return firebase.auth().signOut()
//     .then(res => {
//       const signedOutUser = {
//         isSignedIn: false,
//         name: '',
//         email: '',
//         photo: '',
//         error: '',
//         success: false
//       }
//       return signedOutUser;
//     }).catch(err => {
//       // An error happened.
//     });
//   }