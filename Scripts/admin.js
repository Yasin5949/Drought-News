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
                document.getElementById("adminNameMenu").innerText = data.Fname;
            });
}
user();
function postForm(){
    document.querySelector('.display').innerHTML=`
        <form action="../Backend/news.php" method="POST" id="news">
            <h1>Post News</h1>
            
            <label for="newsMessage">
                News Message:<textarea id="newsMessage" name="newsMessage"></textarea>
            </label><br>
            <label for="newsImage">
                UpLoad News Image:<input type="file" id="newsImage" name="newsImage"><br>
            </label>
            <button>Post</button>
        </form>
    `;
}
function eventForm(){
    document.querySelector('.display').innerHTML=`
    <form action="../Backend/events.php" method="POST" id="news">
            <h1>Post Event</h1>
            
            <label for="newsMessage">
                Event Reason:<textarea id="newsMessage" name="eventMessage"></textarea>
            </label><br>
            <label for="newsImage">
                UpLoad Event Image:<input type="file" id="newsImage" name="eventImage"><br>
            </label>
            <button>Post</button>
        </form>
    `;
}
let mode=0;
function Menu(){
    if(mode===0){
        document.querySelector('.hideMenu').classList.add('menu');
        mode=1;
    }
    else{
        document.querySelector('.hideMenu').classList.remove('menu');
        mode=0;
    }
}