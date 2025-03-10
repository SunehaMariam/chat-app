 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
 import { getDatabase, ref, push, onChildAdded } from
"https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDxFjYMfIcW3o4zZjwj395EcWuZhlKoiKo",
   authDomain: "chat-app-34c55.firebaseapp.com",
   projectId: "chat-app-34c55",
   storageBucket: "chat-app-34c55.firebasestorage.app",
   messagingSenderId: "337960679253",
   appId: "1:337960679253:web:a133024c62fe0f417d21dc",
   measurementId: "G-JWB8M9BDSV"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
const db = getDatabase(app);

window.sendMessage = function () {
    let username = document.getElementById("username").value;
    let message = document.getElementById("message").value;
    if (username === "" || message === "") return;
    // Push message to Firebase
    push(ref(db, "messages"), {
    name: username,
    text: message
    });
    document.getElementById("message").value = ""; // Clear input
    };
    // Function to listen for new messages
    onChildAdded(ref(db, "messages"), function(snapshot) {
    let data = snapshot.val();
    let messageBox = document.getElementById("messages");
    let msgElement = document.createElement("p");
    msgElement.textContent = data.name + ": " + data.text;
    messageBox.appendChild(msgElement);
    messageBox.scrollTop = messageBox.scrollHeight;
    });