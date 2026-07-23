let ticks = [7,2,9,4,1,6,7,8,3,5];


function addNewTick(){

    // Create new random digit
    let newDigit = Math.floor(Math.random() * 10);

    ticks.push(newDigit);


    // Keep latest 10 ticks only
    if(ticks.length > 10){
        ticks.shift();
    }


    analyzeDigits();
}



function analyzeDigits(){

    let even = 0;
    let over = 0;
    let frequency = {};


    ticks.forEach(digit => {

        // Even calculation
        if(digit % 2 === 0){
            even++;
        }


        // Over 5 calculation
        if(digit > 5){
            over++;
        }


        // Frequency calculation
        frequency[digit] =
        (frequency[digit] || 0) + 1;

    });



    let total = ticks.length;


    let evenPercent =
    Math.round((even / total) * 100);


    let overPercent =
    Math.round((over / total) * 100);



    // Update circle meters

    let evenMeter =
    document.getElementById("evenMeter");

    if(evenMeter){
        evenMeter.style.background =
        `conic-gradient(#00ff88 0% ${evenPercent}%, #374151 ${evenPercent}% 100%)`;
    }



    let overMeter =
    document.getElementById("overMeter");

    if(overMeter){
        overMeter.style.background =
        `conic-gradient(#00ff88 0% ${overPercent}%, #374151 ${overPercent}% 100%)`;
    }



    // Update percentage text

    let evenText =
    document.getElementById("evenPercent");

    if(evenText){
        evenText.innerHTML =
        evenPercent + "%";
    }



    let overText =
    document.getElementById("overPercent");

    if(overText){
        overText.innerHTML =
        overPercent + "%";
    }



    // Update latest digit

    let latest =
    document.getElementById("latestDigit");

    if(latest){
        latest.innerHTML =
        ticks[ticks.length - 1];
    }



    // Update history

    let history =
    document.getElementById("tickHistory");

    if(history){
        history.innerHTML =
        ticks.join(" → ");
    }


}



// Start live tick simulation

setInterval(addNewTick,2000);


// Run immediately

analyzeDigits();
