responsivemap();

function responsivemap(){

    var w = window.innerWidth;
    var maptop = -(w-200)*2/3-15;
    document.getElementById('responsive-map').style.marginTop = maptop + "px";
}