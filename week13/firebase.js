// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBQKi7IdnX2PR_-fe0Pio3-GqHaperi25w",
    authDomain: "i210-test-kaitlyn.firebaseapp.com",
    projectId: "i210-test-kaitlyn",
    storageBucket: "i210-test-kaitlyn.firebasestorage.app",
    messagingSenderId: "34660291052",
    appId: "1:34660291052:web:1aad1c67a9f2d3e55430c9",
    measurementId: "G-8C67E3NL07"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);