function allNews(){
    document.querySelector('.display').innerHTML=`<h1>NEWS</h1>`;
    fetch('../Backend/allNews.php')
    .then(response=>response.json())
    .then(data=>{
        if(data.length > 0){
            data.forEach(news=>{
                document.querySelector('.display').innerHTML+=`
            <div class="news">
            <div class="imageContainer">
                <img src="../${news.NewsImage}" alt="">
            </div>
            <div class="newsContainer">
            ${news.NewsMessage}
            </div>
            <div class="ownerContainer">
                by: ${news.Fname}
            </div>
        </div>  
                `;
            })
        }else{
            document.querySelector('.display').innerHTML=`<h1>No News Posted</h1>`;
        }
    })
}
allNews();