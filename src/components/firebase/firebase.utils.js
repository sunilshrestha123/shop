import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD5CSviWpvkdE85EiZkyLev1iIOF2OtdL0',
  authDomain: 'my-project-1536053156541.firebaseapp.com',
  databaseURL: 'https://my-project-1536053156541.firebaseio.com',
  projectId: 'my-project-1536053156541',
  storageBucket: '',
  messagingSenderId: '403079233178',
  appId: '1:403079233178:web:6181063afd5e4f39'
};

// Initialize Firebase
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const collectionRef = firestore.collection('user')
  const snapShot = await userRef.get();
  const collectionSnapshot = await collectionRef.get();
  console.log({ collection: collectionSnapshot.docs.map(doc => doc.data()) });
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const cerateAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        cerateAt,

        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
  console.log(snapShot);
  // console.log(firestore.doc('users/qewqeqwewer '));
};
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  console.log(collectionRef)
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
    console.log(newDocRef)
  })
  return await batch.commit()
}



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
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  },{})
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// const provider2 = new firebase.auth.FacebookAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
// provider2.setCustomParameters({ prompt: 'select_account' });
// export const signInWithFacebook = () => auth.signInWithPopup(provider2);
export default firebase;
