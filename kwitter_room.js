
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAaW18LTn3RB-z6FwV5_7_taZLKLKhCNTI",
      authDomain: "kwitter-b3561.firebaseapp.com",
      databaseURL: "https://kwitter-b3561-default-rtdb.firebaseio.com",
      projectId: "kwitter-b3561",
      storageBucket: "kwitter-b3561.appspot.com",
      messagingSenderId: "124777583356",
      appId: "1:124777583356:web:3398b64d2d94376491fd79",
      measurementId: "G-47N8ES8EP6"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
