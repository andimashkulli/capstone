import {initializeApp} from 'firebase/app'; //ky eshte konfigurimi i aplikacionit tane qe lidhet me firebase
import { 
getFirestore,
doc,
getDoc,setDoc,
collection,
writeBatch,
query,
getDocs, // All the things that we need to make a database in Firestore

} from 'firebase/firestore'
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
// KRIJIMI I COLLECTIONAVE DHE DOKUMENTEVE NE FIREBASE BEHET ME KETE KOD POSHTE
export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {

  const collectionRef = collection(db,collectionKey)
    //krijon dokumentin vet vetiu qe te paraqitet ne databazen tone firestore 
const batch = writeBatch(db) 

objectsToAdd.forEach((object) => {
  const docRef = doc(collectionRef,object.title.toLowerCase())
  batch.set(docRef,object)
 
})
await batch.commit();
console.log("done");
} 

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db,'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q)
   const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot) => {
    const {title,items} = docSnapshot.data();
    acc[title.toLowerCase()] = items
    return acc
   },{})
   return categoryMap;
}

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