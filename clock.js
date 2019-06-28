//import setInterval from timers;

function disptime(num){
    if(num <= 9){
        num="0" + num;
    }
    return num;
}

function clock(){

    var getnowtime = new Date();

    ye= getnowtime.getFullYear(),
    mo=getnowtime.getMonth(),
    da =getnowtime.getDay(),
    wdArr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
    wd=wdArr[getnowtime.getDay()],

    hh=disptime(getnowtime.getHours()),
    mm=disptime(getnowtime.getMinutes()),
    ss=disptime(getnowtime.getSeconds()),

    printtime =hh+":"+mm+":"+ss,
    printcal=ye+"/"+(mo+1)+"/"+da+"/"+wd;

    document.getElementById('timer').innerHTML = printtime;
     document.getElementById('date').innerHTML = printcal;
}

setInterval(function(){
    clock();
},1000);