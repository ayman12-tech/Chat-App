//SIGN-UP FUNCTION
let signup=()=>{
    let email=document.getElementById("email")
    let password=document.getElementById("password")
    console.log(email.value) // checking getting email and password in JS
    console.log(password.value)
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((result)=>{
        alert("Successfully Registered!","index.html")
        window.location.href = "index.html";

   
    })

    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
        // ...
      });
}

//LOGIN FUNCTION
let signin=()=>{
    let email=document.getElementById("l_email")
    let password=document.getElementById("l_password")
    firebase.auth().signInWithEmailAndPassword(l_email.value, l_password.value)
    .then((result)=>{
        window.location.href = "chat-app.html";
    })

    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
        // ...
      });
}
