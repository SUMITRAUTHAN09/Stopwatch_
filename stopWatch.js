let timer, run=false , hr=0, min=0, sec=0, msec=0;
function update(){
  let h,m,s,ms;
  h=hr<10? "0"+hr:hr;
  m=min<10? "0"+min:min;
  s=sec<10? "0"+sec:sec;
  ms=msec<10? "0"+msec:msec;
  document.querySelector("#watch").innerText=`${h}:${m}:${s}:${ms}`;
}

function startWatch(){
  if(!run){
    run=true;
    timer=setInterval(function(){
      msec++;
      if(msec==100){
        msec=0;
        sec++;
      }
      if(sec==60){
        sec=0;
        min++;
      }
      if(min==60){
        min=0;
        hr++;
      }
      update();
    },10);
  }
}

function stopWatch(){
  run =false;
  clearInterval(timer);
}

function resetWatch(){
  stopWatch();
  hr=0;
  min=0;
  sec=0;
  msec=0;
  update();
}