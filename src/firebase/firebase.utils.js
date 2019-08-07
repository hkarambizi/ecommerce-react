import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"; // this includes this packages with firebase

const config = {
  apiKey: "AIzaSyAdfqD2YqY-fjk55r9ZkUcIp7aVMcAI_iU",
  authDomain: "ecommerce-react-d1091.firebaseapp.com",
  databaseURL: "https://ecommerce-react-d1091.firebaseio.com",
  projectId: "ecommerce-react-d1091",
  storageBucket: "",
  messagingSenderId: "1030489711571",
  appId: "1:1030489711571:web:f141b278482d46cf"
};

firebase.initializeApp(config);
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("Error creating user:", err.message);
    }
  }
  return userRef;
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};
// utility used on demand to set collections into firebase. To-do: make this a script to run in the CLI
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  // batch write to maintain consistency and avoid error on failure
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
