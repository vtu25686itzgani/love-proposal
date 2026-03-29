// Replace with your config
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "XXX",
  appId: "XXX"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function saveResponse(answer) {
    const username = localStorage.getItem("username");

    db.collection("responses").add({
        name: username,
        answer: answer,
        time: new Date()
    });
}