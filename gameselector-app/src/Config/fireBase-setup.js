import{getFirestore, collection, getDocs, doc ,addDoc, deleteDoc, setDoc} from 'firebase/firestore';





//This is my webapps Firebase configutration



const firebaseConfig = {
    apiKey: "AIzaSyBIiuTFdHgo_bPINlu0T79rp8fmMlFi-dw",
    authDomain: "game-selector-app-51630.firebaseapp.com",
    projectId: "game-selector-app-51630",
    storageBucket: "game-selector-app-51630.appspot.com",
    messagingSenderId: "411624489114",
    appId: "1:411624489114:web:d5c349bce80da24c5f9f23"
  };
  
  //This initializes Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const gameCol = collection(db,"GameLibrary");