let ticks = [7,2,9,4,1,6,7,8,3,5];

function addNewTick(){

    // Generate a new digit 0-9
    let newDigit = Math.floor(Math.random() * 10);

    ticks.push(newDigit);


    // Keep only the latest 10 ticks
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

        if(digit % 2 === 0){
            even++;
        }

        if(digit > 5){
            over++;
        }

        frequency[digit] =
        (frequency[digit] || 0) + 1;

    });


    let total = ticks.length;


    let evenPercent =
    Math.round((even / total) * 100);


    let overPercent =
    Math.round((over / total) * 100);



    document.getElementById("evenPercent").innerHTML =
    evenPercent + "%";


    document.getElementById("overPercent").innerHTML =
    overPercent + "%";


    document.getElementById("latestDigit").innerHTML =
    ticks[ticks.length - 1];


    document.getElementById("tickHistory").innerHTML =
    ticks.join(" → ");

}


// Start live simulation
setInterval(addNewTick, 2000);


// Load first result
analyzeDigits();
