
function showLondon() {

    var dateHolder = new Date();
    var h = dateHolder.getHours();
    var m = dateHolder.getMinutes();
    var s = dateHolder.getSeconds();

    h =	checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('LondonTime').style.fontWeight = "900";
    document.getElementById('LondonTime').style.fontFamily = "open-sans";
    document.getElementById('LondonTime').style.textAlign = "center"
    document.getElementById('LondonTime').style.fontSize = "100px"
    document.getElementById('LondonTime').style.color = "#96a6ff"
    document.getElementById('LondonTime').innerHTML = h + ":" + m + ":" + s;
    
    var t = setTimeout(showLondon, 0);

}

function showAPJ() {

    var dateHolder = new Date();
    var h = dateHolder.getHours();
    var m = dateHolder.getMinutes();
    var s = dateHolder.getSeconds();

    h = checkTime((h+10)%24);
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('APJTime').style.fontWeight = "900";
    document.getElementById('APJTime').style.fontFamily = "open-sans";
    document.getElementById('APJTime').style.textAlign = "center"
    document.getElementById('APJTime').style.fontSize = "100px"
    document.getElementById('APJTime').style.color = "#93ffc9"
    document.getElementById('APJTime').innerHTML = h + ":" + m + ":" + s;

    var t = setTimeout(showAPJ, 0);

}

function showSantaClara() {

    var dateHolder = new Date();
    var h = dateHolder.getHours();
    var m = dateHolder.getMinutes();
    var s = dateHolder.getSeconds();

    h = checkTime((h-8)%24);
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('SantaClaraTime').style.fontWeight = "900";
    document.getElementById('SantaClaraTime').style.fontFamily = "open-sans";
    document.getElementById('SantaClaraTime').style.textAlign = "center"
    document.getElementById('SantaClaraTime').style.fontSize = "100px"
    document.getElementById('SantaClaraTime').style.color = "#96e06d"
    document.getElementById('SantaClaraTime').innerHTML = h + ":" + m + ":" + s;

    var t = setTimeout(showSantaClara, 0);

}


function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
