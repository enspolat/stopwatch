let ms = 0;
let s = 0;
let dk = 0;

const btstart = document.getElementById('btstart')
const btstop = document.getElementById('btstop')

let timer1;

btstart.addEventListener("click",start);
btstop.addEventListener("click",stop);

function start() {

    ms1 = document.getElementById('salise')
    s1 = document.getElementById('saniye')
    dk1 = document.getElementById('dakika')

btstop.disabled = false;
btstart.disabled = true;
btstop.innerText = "Stop";


    timer1 = setInterval(function(){
        ms = ms + 1;
        if (ms == 10){
            ms = 0;
            s = s+1
            if (s<10){
                s1.innerText = "0" + s;
                }else{
                    s1.innerText =  s;

                    if(s == 60){
                    s = 0;
                    dk = dk +1 ;
                    if(dk<10){
                        dk1.innerText = "0" + dk;
                    }else{
                        dk1.innerText = dk;
                    }
                }
                }
                
            
        }
        ms1.innerText = "0" + ms;
    }, 100 )
}  

function stop(){
    if(btstop.innerText == "Reset"){
        document.getElementById('salise').innerText = "00";
        document.getElementById('saniye').innerText = "00";
        document.getElementById('dakika').innerText = "00";

        ms = 0;
        s = 0;
        dk = 0;
        
        btstop.innerText = "Stop";
        btstop.disabled = "true";
        btstart.innerText = "Start";
    }else{
        clearInterval(timer1);
        btstop.innerText = "Reset";
        btstart.innerText = "Resume";
        btstart.disabled = false;
    }
}