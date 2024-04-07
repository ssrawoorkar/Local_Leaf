const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyDqw9De3qwZ_47xN4wqRiYkaeu4J75Zy18",

  authDomain: "hackathon1-2ed62.firebaseapp.com",
  databaseURL: "https://hackathon1-2ed62-default-rtdb.firebaseio.com/",
  projectId: "hackathon1-2ed62",

  storageBucket: "hackathon1-2ed62.appspot.com",

  messagingSenderId: "345821820205",

  appId: "1:345821820205:web:f68c428d9441ae43d74fa4",

  measurementId: "G-T2EGDPMBM5"

  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var msgContent = getElementVal("msgContent");
    console.log(msgContent)
    saveMessages(msgContent);
  
    //   enable alert
    //document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    //setTimeout(() => {
     // document.querySelector(".alert").style.display = "none";
   // }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
