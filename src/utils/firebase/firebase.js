import {initializeApp} from 'firebase/app'; //ky eshte konfigurimi i aplikacionit tane qe lidhet me firebase
import { getFirestore, doc,getDoc,setDoc } from 'firebase/firestore'
import {
    getAuth,
signInWithRedirect,
signInWithPopup,  //kto jane mikro librarite per authentication(siguri) te nje klienti
GoogleAuthProvider,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAMHXhm5CkXqDgMp6Lbncf9nxS5oaW4UoI",
    authDomain: "crwn-clothing-db-c627f.firebaseapp.com",
    projectId: "crwn-clothing-db-c627f",
    storageBucket: "crwn-clothing-db-c627f.appspot.com",
    messagingSenderId: "123998725457",
    appId: "1:123998725457:web:617e5f47e4edf6daa3df70"
  };

  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig); // ketu ndodh inicializimi i aplikacionit

  const provider = new GoogleAuthProvider(); //// ky eshte ofruesi nga google nese dojne mu kyc
  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopUp = () => signInWithPopup(auth,provider)
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider)

  export const db = getFirestore(); // merr databazen
  export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
   
    //mundeson krijimin e dokumentin te userit qe marrim prej authenticationit
    const userDocRef = await doc(db,"user",userAuth.uid);
    console.log(userDocRef);
// ketu e kallxon dokumentin e atij userit qe kemi marr idin prej google user authenticationit
const userSnapshot = await getDoc(userDocRef)
if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
        setDoc(userDocRef,{
            displayName,
            email,
            createdAt,
            ...additionalInformation
        });
    }
    catch(error){
     console.log('Error creating the user', error.message);
    }
}
return userDocRef;
  // if user document exist - show it. Else if it doesnt, then create it 
  }
export const userAuthWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password)
}
export const signInAUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;

 return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser = async () => await signOut(auth)

export const authChangeListener = (callback) => onAuthStateChanged(auth,callback)