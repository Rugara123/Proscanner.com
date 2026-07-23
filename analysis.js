let ticks = [7,2,9,4,1,6,7,8,3,5];


function addNewTick(){

    let newDigit = Math.floor(Math.random() * 10);

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




function update(id,value){

    let element = document.getElementById(id);

    if(element){
        element.innerHTML = value + "%";
    }

}




function analyzeDigits(){


    let even = 0;
    let odd = 0;

    let over = 0;
    let under = 0;


    let frequency = {};



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



        frequency[digit] =
        (frequency[digit] || 0) + 1;


    });




    let total = ticks.length;



    let evenPercent =
    Math.round((even / total) * 100);



    let oddPercent =
    100 - evenPercent;



    let overPercent =
    Math.round((over / total) * 100);



    let underPercent =
    100 - overPercent;





    update("evenPercent",evenPercent);

    update("oddPercent",oddPercent);


    update("overPercent",overPercent);

    update("underPercent",underPercent);






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







    // Hot and Cold digits


    let sorted =
    Object.entries(frequency)
    .sort((a,b)=>b[1]-a[1]);



    let hot =
    sorted.slice(0,3)
    .map(x=>x[0]+" ("+x[1]+"x)")
    .join(" | ");




    let cold =
    sorted.slice(-3)
    .map(x=>x[0]+" ("+x[1]+"x)")
    .join(" | ");




    let hotBox =
    document.getElementById("hotDigits");


    if(hotBox){
        hotBox.innerHTML =
        "🔥 "+hot;
    }





    let coldBox =
    document.getElementById("coldDigits");


    if(coldBox){
        coldBox.innerHTML =
        "❄️ "+cold;
    }





    document.getElementById("latestDigit").innerHTML =
    ticks[ticks.length-1];



    document.getElementById("tickHistory").innerHTML =
    ticks.join(" → ");



}





setInterval(addNewTick,2000);


analyzeDigits();
