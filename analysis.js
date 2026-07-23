let ticks = [7,2,9,4,1,6,7,8,3,5];

function analyzeDigits(){

    let even = 0;
    let odd = 0;
    let over = 0;
    let under = 0;

    let frequency = {};

    ticks.forEach(digit => {

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


        frequency[digit] = (frequency[digit] || 0) + 1;

    });


    let total = ticks.length;


    let evenPercent = Math.round((even/total)*100);
    let oddPercent = Math.round((odd/total)*100);

    let overPercent = Math.round((over/total)*100);
    let underPercent = Math.round((under/total)*100);



    let mostDigit = Object.keys(frequency)
    .reduce((a,b)=>frequency[a]>frequency[b]?a:b);


    console.log("Even:",evenPercent+"%");
    console.log("Odd:",oddPercent+"%");
    console.log("Over 5:",overPercent+"%");
    console.log("Under 5:",underPercent+"%");
    console.log("Most frequent:",mostDigit);


}


analyzeDigits();
