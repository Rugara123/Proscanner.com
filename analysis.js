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




function setValue(id,value){

    let box = document.getElementById(id);

    if(box){
        box.innerHTML = value + "%";
    }

}




function setMarketData(title,first,second,firstName,secondName,firstValue,secondValue){


    document.getElementById("marketTitle").innerHTML = title;


    setValue("firstPercent",firstValue);
    setValue("secondPercent",secondValue);


    document.getElementById("firstLabel").innerHTML =
    firstName;


    document.getElementById("secondLabel").innerHTML =
    secondName;


    let strength =
    Math.max(firstValue,secondValue);



    let bar =
    document.getElementById("strengthBar");


    if(bar){

        bar.style.width =
        strength+"%";

    }



    let label =
    document.getElementById("strengthLabel");


    if(label){

        label.innerHTML =
        title+" Strength";

    }


}




function analyze(){


    let even = 0;
    let odd = 0;

    let over = 0;
    let under = 0;



    ticks.forEach(d=>{


        if(d%2===0){
            even++;
        }
        else{
            odd++;
        }


        if(d>5){
            over++;
        }
        else{
            under++;
        }


    });



    let total = ticks.length;



    let evenP =
    Math.round(even/total*100);


    let oddP =
    100-evenP;



    let overP =
    Math.round(over/total*100);


    let underP =
    100-overP;





    if(currentMarket==="evenodd"){


        setMarketData(
        "Even / Odd",
        evenP,
        oddP,
        "Even",
        "Odd",
        evenP,
        oddP
        );

    }






    if(currentMarket==="overunder"){


        setMarketData(
        "Over / Under",
        overP,
        underP,
        "Over 5",
        "Under 5",
        overP,
        underP
        );

    }






    if(currentMarket==="matches"){


        setMarketData(
        "Matches",
        10,
        90,
        "Match",
        "No Match",
        10,
        90
        );

    }







    if(currentMarket==="differs"){


        setMarketData(
        "Differs",
        90,
        10,
        "Different",
        "Same",
        90,
        10
        );

    }







    if(currentMarket==="higherlower"){


        setMarketData(
        "Higher / Lower",
        overP,
        underP,
        "Higher",
        "Lower",
        overP,
        underP
        );

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

        history.innerHTML="";


        ticks.forEach(d=>{


            let c =
            document.createElement("div");


            c.className="tick";


            c.innerHTML=d;



            if(d%2===0){

                c.style.background="#16a34a";

            }
            else{

                c.style.background="#f97316";

            }



            history.appendChild(c);


        });


    }






    // Flow

    let flow =
    document.getElementById("tickFlow");


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







document.querySelectorAll(".trade-btn")
.forEach(btn=>{


    btn.onclick=function(){


        document.querySelectorAll(".trade-btn")
        .forEach(b=>b.classList.remove("active"));



        this.classList.add("active");


        currentMarket =
        this.dataset.market;


        analyze();


    };


});





setInterval(addNewTick,2000);


analyze();
