function submit(){
    let count=document.getElementById("numOfCircle").value;
    if (count > 10){
        count = 10;
        document.getElementById("numOfCircle").value = 10;
    }
    let red=document.getElementById("red_ball");
    red.innerHTML = "";
    const red_inp=`<div style="height:60px;width:60px;background-color:red; margin:6px;border-radius: 50%"></div>`;
    for(var i=1;i<=count;i++){
        red.innerHTML+=red_inp;
    }
    let green=document.getElementById("green_ball");
    green.innerHTML = "";
    const green_inp=`<div style="height:60px;width:60px;background-color:green; margin:6px;border-radius: 50%"></div>`;
    for(var i=1;i<=count;i++){
        green.innerHTML+=green_inp;
    }
    let blue=document.getElementById("blue_ball");
    blue.innerHTML = "";
    const blue_inp=`<div style="height:60px;width:60px;background-color:blue; margin:6px;border-radius: 50%"></div>`;
    for(var i=1;i<=count;i++){
        blue.innerHTML+=blue_inp;
    }
    let butn1=document.getElementById("btn1");
    butn1.style.display = "block";
    let butn2=document.getElementById("btn2");
    butn2.style.display = "block";
}
function fun1(){
    let x=document.getElementById("red").value;
    let y=document.getElementById("green").value;
    let z=document.getElementById("blue").value;
    setTimeout(()=>{
    document.getElementById("red_ball").style.display="none";
    },x*1000);
    setTimeout(()=>{
        document.getElementById("green_ball").style.display="none";
    },y*1000);
     setTimeout(()=>{
            document.getElementById("blue_ball").style.display="none";
     },z*1000);
    
}
function fun2(){
    let first=document.getElementById("red_ball");
    first.innerHTML="";
    first.style.display="flex";
    let second=document.getElementById("green_ball");
    second.innerHTML="";
    second.style.display="flex";
    let third=document.getElementById("blue_ball");
    third.innerHTML="";
    third.style.display="flex";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";
}