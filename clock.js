let myName = document.querySelector("#myName");

myName.innerHTML = prompt("Kullanici Adinizi Giriniz", "Misafir");

function showTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let day = date.getDay();
    let session = "AM";

    switch (day) {
        case 1:
            day = "Pazartesi";
            break;
        case 2:
            day = "Salı";
            break;
        case 3:
            day = "Çarşamba";
            break;
        case 4:
            day = "Perşembe";
            break;
        case 5:
            day = "Cuma";
            break;
        case 6:
            day = "Cumartesi";
            break;
        case 7:
            day = "Pazar";
            break;
    };

    if (hh === 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session + " " + day;

    document.getElementById("myClock").innerText = time;
    let t = setTimeout(function() { showTime() }, 1000);
}

showTime();