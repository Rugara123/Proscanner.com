let ticks = [7,2,9,4,1,6,7,8,3,5];

let currentMarket = "evenodd";



function addNewTick(){

    let digit = Math.floor(Math.random()*10);

    ticks.push(digit);


    if(ticks.length > 10){

        ticks.shift();

    }


    analyze();

}







function updateBar(id,value){

    let bar = document.getElementById(id);

    if(bar){

        bar.style.width = value + "%";

    }

}



function updateText(id,text){

    let element = document.getElementById(id);

    if(element){

        element.innerHTML = text;

    }

}







function calculate(){


    let even=0;
    let odd=0;

    let over=0;
    let under=0;



    ticks.forEach(d=>{


        if(d%2===0){

            even++;

        }else{

            odd++;

        }



        if(d>5){

            over++;

        }else{

            under++;

        }


    });



    let total=ticks.length;



    return {

        even:Math.round(even/total*100),

        odd:100-Math.round(even/total*100),

        over:Math.round(over/total*100),

        under:100-Math.round(over/total*100)

    };


}








function analyze(){


let data=calculate();



if(currentMarket==="evenodd"){


updateText("marketTitle","Even / Odd");


updateText("firstLabel","Even");

updateText("secondLabel","Odd");


updateText("firstPercent",data.even+"%");

updateText("secondPercent",data.odd+"%");


updateBar("firstBar",data.even);

updateBar("secondBar",data.odd);



document.getElementById("firstChoice").innerHTML="EVEN";

document.getElementById("secondChoice").innerHTML="ODD";


}






if(currentMarket==="overunder"){


updateText("marketTitle","Over / Under");


updateText("firstLabel","Over 5");

updateText("secondLabel","Under 5");


updateText("firstPercent",data.over+"%");

updateText("secondPercent",data.under+"%");


updateBar("firstBar",data.over);

updateBar("secondBar",data.under);



document.getElementById("firstChoice").innerHTML="OVER";

document.getElementById("secondChoice").innerHTML="UNDER";


}






if(currentMarket==="matches"){


updateText("marketTitle","Matches");


updateText("firstLabel","Match");

updateText("secondLabel","No Match");


updateText("firstPercent","10%");

updateText("secondPercent","90%");


updateBar("firstBar",10);

updateBar("secondBar",90);


document.getElementById("firstChoice").innerHTML="MATCH";

document.getElementById("secondChoice").innerHTML="NO MATCH";


}








if(currentMarket==="differs"){


updateText("marketTitle","Differs");


updateText("firstLabel","Different");

updateText("secondLabel","Same");


updateText("firstPercent","90%");

updateText("secondPercent","10%");


updateBar("firstBar",90);

updateBar("secondBar",10);


document.getElementById("firstChoice").innerHTML="DIFFER";

document.getElementById("secondChoice").innerHTML="SAME";


}







// latest digit

updateText(
"latestDigit",
ticks[ticks.length-1]
);








// tick history

let history=document.getElementById("tickHistory");


if(history){


history.innerHTML="";


ticks.forEach(d=>{


let circle=document.createElement("div");


circle.className="tick";


circle.innerHTML=d;



circle.style.background =
d%2===0 ? "#16a34a" : "#f97316";



history.appendChild(circle);



});


}








// flow

let flow=document.getElementById("tickFlow");


if(flow){


let first=ticks[0];

let last=ticks[ticks.length-1];


if(last>first){

flow.innerHTML="⬆ Rising Flow";

}

else if(last<first){

flow.innerHTML="⬇ Falling Flow";

}

else{

flow.innerHTML="➡ Sideways Flow";

}


}



}







// top menu switching

document.querySelectorAll(".trade-btn")
.forEach(btn=>{


btn.onclick=function(){


document.querySelectorAll(".trade-btn")
.forEach(b=>b.classList.remove("active"));



this.classList.add("active");


currentMarket=this.dataset.market;


analyze();



};


});






// trade selection buttons

document.querySelectorAll(".choice-btn")
.forEach(btn=>{


btn.onclick=function(){


document.querySelectorAll(".choice-btn")
.forEach(b=>b.classList.remove("selected"));


this.classList.add("selected");


};


});








setInterval(addNewTick,2000);


analyze();
