function Time(){
    var date = new Date();
    var year=date.getFullYear();
    var months=String(date.getMonth()+1).padStart(2,'0');
    var days=String(date.getDate()).padStart(2,'0');
    document.getElementById('date').innerHTML=`<i>Date: ${year}-${months}-${days}</i>`;
    
    var hours=String(date.getHours()).padStart(2,'0');
    var minutes=String(date.getMinutes()).padStart(2,'0');
    var seconds=String(date.getSeconds()).padStart(2,'0');
    var milliseconds=date.getMilliseconds();
    document.getElementById('hours').innerHTML=hours%12;
    document.getElementById('minutes').innerHTML=minutes;
    document.getElementById('seconds').innerHTML=seconds;
    document.getElementById('milliseconds').innerHTML=`MILLISECONDS: ${milliseconds}`;
    }
    setInterval(Time,1);
    Time();