function getEvent(){
   document.querySelector('.display').innerHTML=`
           <h1>EVENTS</h1>
   `;
    fetch('../Backend/allEvents.php')
    .then(response=>response.json())
    .then(data=>{
        if(data.length > 0){
            data.forEach(news=>{
                document.querySelector('.display').innerHTML+=`
            <div class="event">
            <div class="topic">${news.Topic}</div>
            <div class="date">Date; ${news.EventDate} at ${news.EventTime}</div>
            <div class="eventImage">
                <img src="../${news.EventImage}" alt="">
            </div>
            <div class="eventReason">${news.EventMessage}</div>
            <div class="eventOwner">
                By: ${news.Fname}
            </div>
        </div>
                `;
            })
        }else{
            document.querySelector('.display').innerHTML=`<h1>No News Posted</h1>`;
        }
    })
}
getEvent();