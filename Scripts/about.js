function remover(){
    document.querySelectorAll('.researcher').forEach((researcher)=>{
        researcher.classList.remove('current');
        researcher.classList.remove('next');
    })
}
document.querySelectorAll('.researcher').forEach((researcher)=>{
    researcher.addEventListener('click',()=>{
        if(researcher.classList.contains('one')){
            remover();
            document.querySelector('.one').innerHTML=`
                 <div class="imageContainer">
                <img src="../images/50082823-removebg-preview.png" alt="">
            </div>
            <div class="nameContainer">pr.YASIN SHALO</div>
            <div class="aboutResearcher">
            <h3>Professor Yasin Shalo</h3>

                <h3>Professor Yasin Shalo: A Leading Drought Scientist</h3>
                <p>Professor Yasin Shalo is a distinguished <b>drought scientist</b> dedicated to understanding and mitigating the impacts of drought on ecosystems, agriculture, and communities. With years of expertise in <b>climate science, hydrology, and environmental sustainability</b>, he has contributed groundbreaking research on drought prediction, water conservation, and climate resilience.
                His work focuses on analyzing <strong>weather patterns, soil moisture levels, and water resource management </strong>to develop innovative solutions for drought-prone regions. Through his research, Professor Shalo has helped governments, farmers, and policymakers implement strategies to combat water scarcity and adapt to changing climate conditions.<br><br>
                Beyond his scientific contributions, he is a passionate educator and advocate for <strong>sustainable water management</strong>, working closely with international organizations to promote drought awareness and preparedness. His dedication to environmental science continues to shape the future of drought resilience worldwide.
                </p>
            </div>
            `;
            document.querySelector('.two').innerHTML=`
                <img src="../images/50082823-removebg-preview.png" alt="">
            `;
            document.querySelector('.three').innerHTML=`
                <img src="../images/50082823-removebg-preview.png" alt="">
            `;
            document.querySelector('.two').classList.add('next');
            document.querySelector('.three').classList.add('next');
            researcher.classList.add('current');
        }
        if(researcher.classList.contains('two')){
            remover();
            researcher.innerHTML=`
            <div class="imageContainer">
                <img src="../images/50082823-removebg-preview.png" alt="">
            </div>
            <div class="nameContainer">pr.YASIN SHALO</div>
            <div class='aboutResearcher'>
        <h3>Professor Bezawit</h3>
        <h2>Leading Expert in Drought Science & Climate Resilience</h2>
        <p>
            Professor Bezawit is a distinguished <strong>drought scientist</strong> dedicated to researching and developing 
            solutions for climate resilience, water conservation, and sustainable agriculture. Her work focuses on 
            <em>understanding drought patterns, improving water management strategies, and mitigating the effects of climate change</em>.
        </p>
        <p>
            With extensive experience in <strong>hydrology, environmental sustainability, and climate adaptation</strong>, 
            Professor Bezawit has contributed to groundbreaking studies that help communities prepare for and respond to 
            drought conditions. Her research has been instrumental in shaping policies that promote efficient water use 
            and agricultural sustainability.
        </p>
        <p>
            As an advocate for climate awareness, she collaborates with international organizations to develop 
            <strong>drought-resistant farming techniques, early warning systems, and community-based adaptation strategies</strong>. 
            Her dedication to environmental science continues to make a lasting impact on global efforts to combat drought 
            and ensure a sustainable future.
        </p>
        </div>
            `;
            document.querySelector('.one').classList.add('next');
            document.querySelector('.one').innerHTML=`
                <img src="../images/50082823-removebg-preview.png" alt="">
            `;
            document.querySelector('.three').innerHTML=`
                <img src="../images/50082823-removebg-preview.png" alt="">
            `;
            document.querySelector('.three').classList.add('next');
            researcher.classList.add('current');
        }
        if(researcher.classList.contains('three')){
            remover();
            researcher.innerHTML=`
            <div class="imageContainer">
                <img src="../images/50082823-removebg-preview.png" alt="">
            </div>
            <div class="nameContainer">pr.Ayub Yesuf</div>
            <div class="aboutResearcher">
        <h3>Professor Ayub Yesuf</h3>
        <h2>Drought Scientist & Climate Resilience Expert</h2>
        <p>
            Professor Ayub Yesuf is a renowned <strong>drought scientist</strong> specializing in climate resilience, 
            water resource management, and sustainable agriculture. His research focuses on understanding the complex 
            interactions between <em>climate change, soil health, and water scarcity</em>, helping communities adapt 
            to increasingly unpredictable weather patterns.
        </p>
        <p>
            With a deep commitment to environmental sustainability, Professor Yesuf has led groundbreaking studies on 
            <strong>drought prediction models, irrigation efficiency, and ecosystem restoration</strong>. His work has 
            been instrumental in developing strategies to mitigate the effects of prolonged dry periods, ensuring food 
            security and water availability for vulnerable populations.
        </p>
        <p>
            Beyond his research, he is a dedicated educator and advocate, collaborating with international organizations 
            to promote <strong>climate adaptation policies</strong> and empower local communities with knowledge and tools 
            to combat drought. His contributions continue to shape the future of drought science, making a lasting impact 
            on global sustainability efforts.
        </p>

            </div>
            `;
            document.querySelector('.one').innerHTML=`
                <img src="../images/50082823-removebg-preview.png" alt="">
            `;
            document.querySelector('.two').innerHTML=`
                <img src="../images/50082823-removebg-preview.png" alt="">
            `;
            document.querySelector('.two').classList.add('next');
            document.querySelector('.one').classList.add('next');
            researcher.classList.add('current');
        }
    })
})