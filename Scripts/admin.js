function user(){
    fetch('../Backend/session.php')
            .then(response => {
                if (!response.ok) {
                    window.location.href = "login.html";
                }
            });

        fetch('../Backend/getUser.php')
            .then(response => response.json())
            .then(data => {
                document.getElementById("adminName").innerText = data.Fname;
            });
}
user();
function postForm(){
    document.querySelector('.display').innerHTML=`
        <form id="news">
            <h1>Post News</h1>
            
            <label for="newsMessage">
                News Message:<textarea id="newsMessage" name="newsMessage"></textarea>
            </label><br>
            <label for="newsImage">
                UpLoad News Image:<input type="file" id="newsImage" name="newsImage"><br>
            </label>
            <button type="button" onclick="postNews()">Post</button>
        </form>
    `;
}
function eventForm(){
    document.querySelector('.display').innerHTML=`
    <form id="news" class="event">
            <h1>Post Event</h1>
             <label for="Topic">
                Event Topic:<textarea id="Topic" name="topic"></textarea>
            </label><br>
            <label for="newsMessage">
                Event Message:<textarea id="eventMessage" name="eventMessage"></textarea>
            </label><br>
            <label for="newsImage">
                UpLoad Event Image:<input type="file" id="eventImage" name="eventImage"><br>
            </label><br>
            <label for="newsImage">
                Event Date:<input type="Date" id="eventImage" name="EventDate"><br>
            </label><br>
            <label for="newsImage">
                Event Time:<input type="Time" id="eventImage" name="EventTime"><br>
            </label><br>
            <button type="button" onclick="postEvent()">Post</button>
        </form>
    `;
}
let mode=0;
function Menu(){
    if(mode===0){
        document.querySelector('.hiddenMenu').innerHTML=`
        <button onclick="logOut()">Log-Out</button>
        `;
        mode=1;
    }
    else{
        document.querySelector('.hiddenMenu').innerHTML=``;
        mode=0;
    }
}
function postNews(){
    let form=document.getElementById('news');
    let formData=new FormData(form);
    fetch('../Backend/news.php',{
        method:"POST",
        body:formData
    }).then(response=>response.json())
    .then(data=>{
        if(data.posted){
            alert(data.posted);
        }else if (data.notPosted){
            document.getElementById('newsMessage').value=``;
            document.getElementById('newsImage').value=``;
            alert(data.notPosted)
        }else if(data.noImage){
            alert(data.noImage);
        }
    })
}
function postEvent(){
    let form=document.querySelector('.event');
    let formData=new FormData(form);
    fetch('../Backend/event.php',{
        method:"POST",
        body:formData
    }).then(response=>response.json())
    .then(data=>{
        if(data.posted){
            alert(data.posted);
        }else if (data.notPosted){
            document.getElementById('eventMessage').innerTML=``;
            document.getElementById('eventImage').innerHTML=``;
            alert(data.notPosted)
        }else if(data.noImage){
            alert(data.noImage);
        }
    })
}
function allNews(){
    document.querySelector('.display').innerHTML=``;
    fetch('../Backend/allNews.php')
    .then(response=>response.json())
    .then(data=>{
        if(data.length > 0){
            data.forEach(news=>{
                document.querySelector('.display').innerHTML+=`
            <div class="newsContainer">
                <div class="newsImage">
                <img src="../${news.NewsImage}" alt="">
                </div>
                <div class="message">
                ${news.NewsMessage}
                </div>
                <div class="postedBy">Posted By: ${news.Fname}</div>
            </div>
                `;
            })
        }else{
            document.querySelector('.display').innerHTML=`<h1>No News Posted</h1>`;
        }
    })
}
function allEvents(){
    document.querySelector('.display').innerHTML=``;
    fetch('../Backend/allEvents.php')
    .then(response=>response.json())
    .then(data=>{
        if(data.length > 0){
            data.forEach(news=>{
                document.querySelector('.display').innerHTML+=`
            <div class="newsContainer eventContainer">
            <div class="topic">${news.Topic}</div>
            <div class="date">
                Date: ${news.EventDate} at ${news.EventTime}
            </div>
                <div class="newsImage">
                <img src="../${news.EventImage}" alt="">
                </div>
                <div class="message">
                ${news.EventMessage}
                </div>
                <div class="postedBy">Event Host: ${news.Fname}</div>
            </div>
                `;
            })
        }else{
            document.querySelector('.display').innerHTML=`<h1>No News Posted</h1>`;
        }
    })
}
function logOut(){
    fetch('../Backend/logout.php')
    .then(response=>response.json())
    .then(data=>{
        if(data.logout){
            window.location.href='adminLogin.html';
        }else{
            alert("Unable to Log Out");
        }
    })
}
function getMyEvent(){
    document.querySelector('.display').innerHTML=``;
    fetch('../Backend/userEventPost.php')
    .then(response=>response.json())
    .then(data=>{
        if(data.length > 0){
            data.forEach(news=>{
                document.querySelector('.display').innerHTML+=`
            <div class="newsContainer eventContainer">
            <div class="topic">${news.Topic}</div>
            <div class="date">
                Date: ${news.EventDate} at ${news.EventTime}
            </div>
                <div class="newsImage">
                <img src="../${news.EventImage}" alt="">
                </div>
                <div class="message">
                ${news.EventMessage}
                </div>
                <div class="postedBy">You Posted</div>
            </div>
                `;
            })
        }else{
            document.querySelector('.display').innerHTML=`<h1>No News Posted</h1>`;
        }
    })
}
function getMyNews(){
     document.querySelector('.display').innerHTML=``;
    fetch('../Backend/getUserNews.php')
    .then(response=>response.json())
    .then(data=>{
        if(data.length > 0){
            data.forEach(news=>{
                document.querySelector('.display').innerHTML+=`
            <div class="newsContainer">
                <div class="newsImage">
                <img src="../${news.NewsImage}" alt="">
                </div>
                <div class="message">
                ${news.NewsMessage}
                </div>
                <div class="postedBy">You Posted</div>
            </div>
                `;
            })
        }else{
            document.querySelector('.display').innerHTML=`<h1>No News Posted</h1>`;
        }
    })
}