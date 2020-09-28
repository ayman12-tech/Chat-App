var myName = prompt("Enter your name");
function sendMessage(){
    //get message
    var message=document.getElementById("message").value;
    
    //save in database
    firebase.database().ref("message").push().set({
        "sender":myName,
        "message":message
    });

    //prevent form from submitting
    return false;
}

//listen to upcoming messages:
firebase.database().ref("message").on("child_added",function(snapshot){
var html="";
html+="<li>";
html+=snapshot.val().sender + ": " + snapshot.val().message;
html+="</li>";
document.getElementById("messages").innerHTML+=html;
});