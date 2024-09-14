import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyD9GepXnZieRCC7dWu5VgBEhgeKha5xk8I",
 authDomain: "inventory-app-3-663d1.firebaseapp.com",
 projectId: "inventory-app-3-663d1",
 storageBucket: "inventory-app-3-663d1.appspot.com",
 messagingSenderId: "169157905652",
 appId: "1:169157905652:web:b4626a26fb5b5508a422a1"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };

