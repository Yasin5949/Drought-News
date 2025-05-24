function logIn(){
    let form=document.getElementById('loginForm');
    let formData=new FormData(form);
    fetch('../Backend/login.php',{
        method:"POST",
        body:formData
    }).then(response=>response.json())
    .then(data=>{
        console.log(data)
        if(data.loggedIn){
            console.log(data);
            window.location.href='adminPage.html';
        }else if(data.incorrect){
            alert(data.incorrect);
        }
    })
}