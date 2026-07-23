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





function analyzeDigits(){


    let even = 0;
    let odd = 0;

    let over = 0;
    let under = 0;

    let frequency = {};




    ticks.forEach(digit => {



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



        frequency[digit] =
        (frequency[digit] || 0) + 1;



    });





    let total = ticks.length;



    let evenPercent =
    Math.round((even / total) * 100);



    let oddPercent =
    Math.round((odd / total) * 100);



    let overPercent =
    Math.round((over / total) * 100);



    let underPercent =
    Math.round((under / total) * 100);





    // Update percentages


    document.getElementById("evenPercent").innerHTML =
    evenPercent + "%";



    document.getElementById("oddPercent").innerHTML =
    oddPercent + "%";



    document.getElementById("overPercent").innerHTML =
    overPercent + "%";



    document.getElementById("underPercent").innerHTML =
    underPercent + "%";





    // Confidence


    document.getElementById("evenConfidence").innerHTML =
    getConfidence(evenPercent);



    document.getElementById("overConfidence").innerHTML =
    getConfidence(overPercent);






    // Hot and cold digits


    let sortedDigits =
    Object.entries(frequency)
    .sort((a,b)=>b[1]-a[1]);



    let hot =
    sortedDigits.slice(0,3)
    .map(item => item[0]+" ("+item[1]+"x)")
    .join(" | ");




    let cold =
    sortedDigits.slice(-3)
    .map(item => item[0]+" ("+item[1]+"x)")
    .join(" | ");





    document.getElementById("hotDigits").innerHTML =
    "🔥 " + hot;



    document.getElementById("coldDigits").innerHTML =
    "❄️ " + cold;





    // Latest digit


    document.getElementById("latestDigit").innerHTML =
    ticks[ticks.length-1];



    document.getElementById("tickHistory").innerHTML =
    ticks.join(" → ");

}





setInterval(addNewTick,2000);



analyzeDigits();
