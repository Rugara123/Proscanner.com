let ticks = [7,2,9,4,1,6,7,8,3,5];

let currentMarket = "even";



function addNewTick(){

    let newDigit = Math.floor(Math.random()*10);

    ticks.push(newDigit);


    if(ticks.length > 10){
        ticks.shift();
    }


    analyzeDigits();

}




function updatePercent(id,value){

    let box = document.getElementById(id);

    if(box){

        box.innerHTML = value + "%";


        let meter = box.parentElement;


        if(meter){

            meter.style.background =
            `conic-gradient(
            #00ff88 ${value}%,
            #374151 ${value}%
            )`;

        }

    }

}




function setBar(value){

    let bar =
    document.getElementById("strengthBar");


    if(bar){

        bar.style.width =
        value + "%";

    }

}





function analyzeDigits(){


    let even = 0;
    let odd = 0;

    let over = 0;
    let under = 0;



    ticks.forEach(digit=>{


        if(digit % 2 === 0){

            even++;

        }else{

            odd++;

        }



        if(digit > 5){

            over++;

        }else{

            under++;

        }


    });




    let total = ticks.length;



    let evenPercent =
    Math.round((even/total)*100);


    let oddPercent =
    100-evenPercent;



    let overPercent =
    Math.round((over/total)*100);


    let underPercent =
    100-overPercent;







    updatePercent("evenPercent",evenPercent);

    updatePercent("oddPercent",oddPercent);



    updatePercent("overPercent",overPercent);

    updatePercent("underPercent",underPercent);







    let strength;


    if(currentMarket === "over"){

        strength = overPercent;

    }
    else{

        strength = evenPercent;

    }




    setBar(strength);





    let strengthLabel =
    document.getElementById("strengthLabel");


    if(strengthLabel){

        strengthLabel.innerHTML =
        currentMarket === "over"
        ?
        "Over/Under Strength"
        :
        "Even/Odd Strength";

    }






    let status =
    document.getElementById("marketStatus");


    if(status){

        if(strength >= 66){

            status.innerHTML =
            "🟢 Strong Market";

        }
        else if(strength >= 40){

            status.innerHTML =
            "🟡 Balanced Market";

        }
        else{

            status.innerHTML =
            "🔴 Weak Market";

        }

    }







    let latest =
    document.getElementById("latestDigit");


    if(latest){

        latest.innerHTML =
        ticks[ticks.length-1];

    }








    let history =
    document.getElementById("tickHistory");


    if(history){

        history.innerHTML="";


        ticks.forEach(digit=>{


            let circle =
            document.createElement("div");


            circle.className="tick";


            circle.innerHTML=digit;



            if(digit % 2 === 0){

                circle.style.background="#16a34a";

            }
            else{

                circle.style.background="#f97316";

            }



            history.appendChild(circle);


        });


    }








    let flow =
    document.getElementById("tickFlow");


    if(flow){


        let first = ticks[0];

        let last = ticks[ticks.length-1];



        if(last > first){

            flow.innerHTML =
            "⬆ Rising flow";

        }
        else if(last < first){

            flow.innerHTML =
            "⬇ Falling flow";

        }
        else{

            flow.innerHTML =
            "➡ Sideways flow";

        }

    }


}





// Trade menu buttons

document.querySelectorAll(".trade-btn")
.forEach(button=>{


    button.onclick=function(){


        document.querySelectorAll(".trade-btn")
        .forEach(btn=>btn.classList.remove("active"));



        this.classList.add("active");



        if(this.innerHTML.includes("Over")){

            currentMarket="over";

        }
        else{

            currentMarket="even";

        }



        analyzeDigits();


    };


});






setInterval(addNewTick,2000);


analyzeDigits();
