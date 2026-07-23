let ticks = [7,2,9,4,1,6,7,8,3,5];


function addNewTick(){

    let newDigit = Math.floor(Math.random()*10);

    ticks.push(newDigit);


    if(ticks.length > 10){
        ticks.shift();
    }


    analyzeDigits();

}



function getConfidence(value){

    if(value >= 66){
        return "🟢 Strong";
    }

    if(value >= 40){
        return "🟡 Medium";
    }

    return "🔴 Weak";

}



function updatePercent(id,value){

    let box = document.getElementById(id);

    if(box){
        box.innerHTML = value + "%";
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
        }
        else{
            odd++;
        }



        if(digit > 5){
            over++;
        }
        else{
            under++;
        }


    });




    let total = ticks.length;



    let evenPercent =
    Math.round((even/total)*100);


    let oddPercent =
    100 - evenPercent;



    let overPercent =
    Math.round((over/total)*100);


    let underPercent =
    100 - overPercent;






    updatePercent("evenPercent",evenPercent);

    updatePercent("oddPercent",oddPercent);


    updatePercent("overPercent",overPercent);

    updatePercent("underPercent",underPercent);






    let evenConfidence =
    document.getElementById("evenConfidence");


    if(evenConfidence){

        evenConfidence.innerHTML =
        getConfidence(evenPercent);

    }




    let overConfidence =
    document.getElementById("overConfidence");


    if(overConfidence){

        overConfidence.innerHTML =
        getConfidence(overPercent);

    }







    // Latest digit

    let latest =
    document.getElementById("latestDigit");


    if(latest){

        latest.innerHTML =
        ticks[ticks.length-1];

    }







    // Tick circles

    let history =
    document.getElementById("tickHistory");


    if(history){

        history.innerHTML = "";


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






    // Flow analysis

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





setInterval(addNewTick,2000);


analyzeDigits();
