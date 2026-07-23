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
    let over = 0;
    let frequency = {};


    ticks.forEach(digit => {

        if(digit % 2 === 0){
            even++;
        }

        if(digit > 5){
            over++;
        }


        // Count digit frequency
        frequency[digit] =
        (frequency[digit] || 0) + 1;

    });



    let total = ticks.length;


    let evenPercent =
    Math.round((even / total) * 100);


    let overPercent =
    Math.round((over / total) * 100);



    // Circle updates

    let evenMeter = document.getElementById("evenMeter");

    if(evenMeter){
        evenMeter.style.background =
        `conic-gradient(#00ff88 0% ${evenPercent}%, #374151 ${evenPercent}% 100%)`;
    }


    let overMeter = document.getElementById("overMeter");

    if(overMeter){
        overMeter.style.background =
        `conic-gradient(#00ff88 0% ${overPercent}%, #374151 ${overPercent}% 100%)`;
    }



    // Needle movement

    let evenNeedle = document.getElementById("evenNeedle");

    if(evenNeedle){
        evenNeedle.style.transform =
        `rotate(${(evenPercent * 1.8)-90}deg)`;
    }


    let overNeedle = document.getElementById("overNeedle");

    if(overNeedle){
        overNeedle.style.transform =
        `rotate(${(overPercent * 1.8)-90}deg)`;
    }



    // Confidence labels

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



    // Hot & Cold digits

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



    let hotBox =
    document.getElementById("hotDigits");

    if(hotBox){
        hotBox.innerHTML =
        "🔥 " + hot;
    }


    let coldBox =
    document.getElementById("coldDigits");

    if(coldBox){
        coldBox.innerHTML =
        "❄️ " + cold;
    }



    // Update display

    document.getElementById("evenPercent").innerHTML =
    evenPercent + "%";


    document.getElementById("overPercent").innerHTML =
    overPercent + "%";


    document.getElementById("latestDigit").innerHTML =
    ticks[ticks.length - 1];


    document.getElementById("tickHistory").innerHTML =
    ticks.join(" → ");

}



setInterval(addNewTick,2000);


analyzeDigits();
