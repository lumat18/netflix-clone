import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  // paste firebase credentials here
};

const firebase = Firebase.initializeApp(config);

export { firebase };
