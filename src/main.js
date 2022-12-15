import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "../src/assets/mojCSS.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyChVOFezJWSC_pWN0yAtfE-K7GDTQ4G_mo",
//   authDomain: "kasljariguessingwords.firebaseapp.com",
//   projectId: "kasljariguessingwords",
//   storageBucket: "kasljariguessingwords.appspot.com",
//   messagingSenderId: "711018248825",
//   appId: "1:711018248825:web:9ef23fff680cb95f4032a8",
//   measurementId: "G-WGGVXPE3QL"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);