import { initializeApp } from 'firebase/app'

const firebaseConfig = {
   apiKey: 'AIzaSyCtro3uG02p53lkSJCCDa8V_OrC09_D_1Y',

   authDomain: 'merch-store-603bc.firebaseapp.com',

   projectId: 'merch-store-603bc',

   storageBucket: 'merch-store-603bc.appspot.com',

   messagingSenderId: '266917850541',

   appId: '1:266917850541:web:f4ead8126769ac3fc90524',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// const d = database.ref('anime_merchandise')

export default app
