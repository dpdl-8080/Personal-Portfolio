const deg = 6;
    
            const hr = document.querySelector('#hr');
            const mn = document.querySelector('#mn');
            const sc = document.querySelector('#sc');
    
            setInterval(() => {
    
                let day = new Date();
                let hh = day.getHours() * 30;
                let mm = day.getMinutes() * deg;
                let ss = day.getSeconds() * deg;
    
                hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
                mn.style.transform = `rotateZ(${mm}deg)`;
                sc.style.transform = `rotateZ(${ss}deg)`;
            })

            let options = {
                startAngle: -1.55,
                size: 150,
                value: 0.50,
                fill: {gradient: ['red']}
              }
              
              $(".circle .bar").circleProgress(options).on('circle-animation-progress',
              function(event, progress, stepValue){
                $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
              });
              $(".js .bar").circleProgress({
                value: 0.30
              });
              $(".react .bar").circleProgress({
                value: 0.20
              });
              $(".python .bar").circleProgress({
                value: 0.20
              });
              $(".node .bar").circleProgress({
                value: 0.35
              });
              $(".wp .bar").circleProgress({
                value: 0.50
              });


