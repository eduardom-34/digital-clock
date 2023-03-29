const hourEl = document.getElementById("hour");
const minutEl = document.getElementById("minutes");
const secondtEl = document.getElementById("seconds");
const ampmtEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;
    
    hourEl.innerText = h;
    minutEl.innerText = m;
    secondtEl.innerText = s;
    ampmtEl.innerText = ampm;
    setTimeout(()=>{
        updateClock()
    }, 1000)
}

updateClock()