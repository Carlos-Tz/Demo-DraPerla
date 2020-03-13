var modal = document.getElementById('myModal');
var span = document.getElementById('close');
var canvas = document.getElementById('canvas');
var modal2 = document.getElementById('myModal2');
var span2 = document.getElementById('close2');
var canvas2 = document.getElementById('canvas2');
var modal3 = document.getElementById('myModal3');
var span3 = document.getElementById('close3');
var canvas3 = document.getElementById('canvas3');
var modal4 = document.getElementById('myModal4');
var span4 = document.getElementById('close4');
var canvas4 = document.getElementById('canvas4');
var modal5 = document.getElementById('myModal5');
var span5 = document.getElementById('close5');
var canvas5 = document.getElementById('canvas5');
var modal6 = document.getElementById('myModal6');
var span6 = document.getElementById('close6');
var canvas6 = document.getElementById('canvas6');
var modal7 = document.getElementById('myModal7');
var span7 = document.getElementById('close7');
var canvas7 = document.getElementById('canvas7');
var modal8 = document.getElementById('myModal8');
var span8 = document.getElementById('close8');
var canvas8 = document.getElementById('canvas8');
var modal9 = document.getElementById('myModal9');
var span9 = document.getElementById('close9');
var canvas9 = document.getElementById('canvas9');
var modal10 = document.getElementById('myModal10');
var span10 = document.getElementById('close10');
var canvas10 = document.getElementById('canvas10');
var modal11 = document.getElementById('myModal11');
var span11 = document.getElementById('close11');
var canvas11 = document.getElementById('canvas11');
var modal12 = document.getElementById('myModal12');
var span12 = document.getElementById('close12');
var canvas12 = document.getElementById('canvas12');
var modal13 = document.getElementById('myModal13');
var span13 = document.getElementById('close13');
var canvas13 = document.getElementById('canvas13');

var signaturePad = new SignaturePad(canvas, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});

var signaturePad2 = new SignaturePad(canvas2, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});
var signaturePad3 = new SignaturePad(canvas3, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});
var signaturePad4 = new SignaturePad(canvas4, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});
var signaturePad5 = new SignaturePad(canvas5, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});
var signaturePad6 = new SignaturePad(canvas6, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});
var signaturePad7 = new SignaturePad(canvas7, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});
var signaturePad8 = new SignaturePad(canvas8, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});
var signaturePad9 = new SignaturePad(canvas9, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});
var signaturePad10 = new SignaturePad(canvas10, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});
var signaturePad11 = new SignaturePad(canvas11, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});
var signaturePad12 = new SignaturePad(canvas12, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});
var signaturePad13 = new SignaturePad(canvas13, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});
//btn.onclick = function () {
function btn_click() {
    modal.style.display = "block";
    resizeCanvas();
}
function btn_click2() {
    modal2.style.display = "block";
    resizeCanvas2();
}
function btn_click3() {
    modal3.style.display = "block";
    resizeCanvas3();
}
function btn_click4() {
    modal4.style.display = "block";
    resizeCanvas4();
}
function btn_click5() {
    modal5.style.display = "block";
    resizeCanvas5();
}
function btn_click6() {
    modal6.style.display = "block";
    resizeCanvas6();
}
function btn_click7() {
    modal7.style.display = "block";
    resizeCanvas7();
}
function btn_click8() {
    modal8.style.display = "block";
    resizeCanvas8();
}
function btn_click9() {
    modal9.style.display = "block";
    resizeCanvas9();
}
function btn_click10() {
    modal10.style.display = "block";
    resizeCanvas10();
}
function btn_click11() {
    modal11.style.display = "block";
    resizeCanvas11();
}
function btn_click12() {
    modal12.style.display = "block";
    resizeCanvas12();
}
function btn_click13() {
    modal13.style.display = "block";
    resizeCanvas13();
}
function btn_clear() {
    /* document.getElementById('imgSign').src = '';
    document.getElementById('imgSign2').src = '';
    document.getElementById('imgSign3').src = '';
    document.getElementById('imgSign4').src = ''; */
  }
span.onclick = function () {
    modal.style.display = "none";
    document.getElementById('imgSign').src = signaturePad.toDataURL();
}
span2.onclick = function () {
    modal2.style.display = "none";
    document.getElementById('imgSign2').src = signaturePad2.toDataURL();
}
span3.onclick = function () {
    modal3.style.display = "none";
    document.getElementById('imgSign3').src = signaturePad3.toDataURL();
}
span4.onclick = function () {
    modal4.style.display = "none";
    document.getElementById('imgSign4').src = signaturePad4.toDataURL();
}
span5.onclick = function () {
    modal5.style.display = "none";
    document.getElementById('imgSign5').src = signaturePad5.toDataURL();
}
span6.onclick = function () {
    modal6.style.display = "none";
    document.getElementById('imgSign6').src = signaturePad6.toDataURL();
}
span7.onclick = function () {
    modal7.style.display = "none";
    document.getElementById('imgSign7').src = signaturePad7.toDataURL();
}
span8.onclick = function () {
    modal8.style.display = "none";
    document.getElementById('imgSign8').src = signaturePad8.toDataURL();
}
span9.onclick = function () {
    modal9.style.display = "none";
    document.getElementById('imgSign9').src = signaturePad9.toDataURL();
}
span10.onclick = function () {
    modal10.style.display = "none";
    document.getElementById('imgSign10').src = signaturePad10.toDataURL();
}
span11.onclick = function () {
    modal11.style.display = "none";
    document.getElementById('imgSign11').src = signaturePad11.toDataURL();
}
span12.onclick = function () {
    modal12.style.display = "none";
    document.getElementById('imgSign12').src = signaturePad12.toDataURL();
}
span13.onclick = function () {
    modal13.style.display = "none";
    document.getElementById('imgSign13').src = signaturePad13.toDataURL();
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById('imgSign').src = signaturePad.toDataURL();
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
        document.getElementById('imgSign2').src = signaturePad2.toDataURL();
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
        document.getElementById('imgSign3').src = signaturePad3.toDataURL();
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
        document.getElementById('imgSign4').src = signaturePad4.toDataURL();
    }
    if (event.target == modal5) {
        modal5.style.display = "none";
        document.getElementById('imgSign5').src = signaturePad5.toDataURL();
    }
    if (event.target == modal6) {
        modal6.style.display = "none";
        document.getElementById('imgSign6').src = signaturePad6.toDataURL();
    }
    if (event.target == modal7) {
        modal7.style.display = "none";
        document.getElementById('imgSign7').src = signaturePad7.toDataURL();
    }
    if (event.target == modal8) {
        modal8.style.display = "none";
        document.getElementById('imgSign8').src = signaturePad8.toDataURL();
    }
    if (event.target == modal9) {
        modal9.style.display = "none";
        document.getElementById('imgSign9').src = signaturePad9.toDataURL();
    }
    if (event.target == modal10) {
        modal10.style.display = "none";
        document.getElementById('imgSign10').src = signaturePad10.toDataURL();
    }
    if (event.target == modal11) {
        modal11.style.display = "none";
        document.getElementById('imgSign11').src = signaturePad11.toDataURL();
    }
    if (event.target == modal12) {
        modal12.style.display = "none";
        document.getElementById('imgSign12').src = signaturePad12.toDataURL();
    }
    if (event.target == modal13) {
        modal13.style.display = "none";
        document.getElementById('imgSign13').src = signaturePad13.toDataURL();
    }
}

function resizeCanvas() {
    var w = modal.clientWidth;
    var h = modal.clientHeight;
    canvas.width = Math.ceil(w * 0.75);
    canvas.height = Math.ceil(h * 0.7);
    signaturePad.clear();
}
function resizeCanvas2() {
    var w = modal2.clientWidth;
    var h = modal2.clientHeight;
    canvas2.width = Math.ceil(w * 0.75);
    canvas2.height = Math.ceil(h * 0.7);
    signaturePad2.clear();
}
function resizeCanvas3() {
    var w = modal3.clientWidth;
    var h = modal3.clientHeight;
    canvas3.width = Math.ceil(w * 0.75);
    canvas3.height = Math.ceil(h * 0.7);
    signaturePad3.clear();
}
function resizeCanvas4() {
    var w = modal4.clientWidth;
    var h = modal4.clientHeight;
    canvas4.width = Math.ceil(w * 0.75);
    canvas4.height = Math.ceil(h * 0.7);
    signaturePad4.clear();
}
function resizeCanvas5() {
    var w = modal5.clientWidth;
    var h = modal5.clientHeight;
    canvas5.width = Math.ceil(w * 0.75);
    canvas5.height = Math.ceil(h * 0.7);
    signaturePad5.clear();
}
function resizeCanvas6() {
    var w = modal6.clientWidth;
    var h = modal6.clientHeight;
    canvas6.width = Math.ceil(w * 0.75);
    canvas6.height = Math.ceil(h * 0.7);
    signaturePad6.clear();
}
function resizeCanvas7() {
    var w = modal7.clientWidth;
    var h = modal7.clientHeight;
    canvas7.width = Math.ceil(w * 0.75);
    canvas7.height = Math.ceil(h * 0.7);
    signaturePad7.clear();
}
function resizeCanvas8() {
    var w = modal8.clientWidth;
    var h = modal8.clientHeight;
    canvas8.width = Math.ceil(w * 0.75);
    canvas8.height = Math.ceil(h * 0.7);
    signaturePad8.clear();
}
function resizeCanvas9() {
    var w = modal9.clientWidth;
    var h = modal9.clientHeight;
    canvas9.width = Math.ceil(w * 0.75);
    canvas9.height = Math.ceil(h * 0.7);
    signaturePad9.clear();
}
function resizeCanvas10() {
    var w = modal10.clientWidth;
    var h = modal10.clientHeight;
    canvas10.width = Math.ceil(w * 0.75);
    canvas10.height = Math.ceil(h * 0.7);
    signaturePad10.clear();
}
function resizeCanvas11() {
    var w = modal11.clientWidth;
    var h = modal11.clientHeight;
    canvas11.width = Math.ceil(w * 0.75);
    canvas11.height = Math.ceil(h * 0.7);
    signaturePad11.clear();
}
function resizeCanvas12() {
    var w = modal12.clientWidth;
    var h = modal12.clientHeight;
    canvas12.width = Math.ceil(w * 0.75);
    canvas12.height = Math.ceil(h * 0.7);
    signaturePad12.clear();
}
function resizeCanvas13() {
    var w = modal13.clientWidth;
    var h = modal13.clientHeight;
    canvas13.width = Math.ceil(w * 0.75);
    canvas13.height = Math.ceil(h * 0.7);
    signaturePad13.clear();
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("resize", resizeCanvas2);
window.addEventListener("resize", resizeCanvas3);
window.addEventListener("resize", resizeCanvas4);
window.addEventListener("resize", resizeCanvas5);
window.addEventListener("resize", resizeCanvas6);
window.addEventListener("resize", resizeCanvas7);
window.addEventListener("resize", resizeCanvas8);
window.addEventListener("resize", resizeCanvas9);
window.addEventListener("resize", resizeCanvas10);
window.addEventListener("resize", resizeCanvas11);
window.addEventListener("resize", resizeCanvas12);
window.addEventListener("resize", resizeCanvas13);
function showMyImage(fileInput) {
    var files = fileInput.files;
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var imageType = /image.*/;
        if (!file.type.match(imageType)) {
            continue;
        }
        var container = fileInput.parentNode;
        container.file = file;
        var reader = new FileReader();
        reader.onload = (function (aImg) {
            return function (e) {
                container.style.backgroundImage = `url(${e.target.result})`;
            };
        })(container);
        reader.readAsDataURL(file);
    }
}

document.addEventListener('keypress', function(evt) {
    if (evt.key !== 'Enter') {
      return;
    }
  
    let element = evt.target;
    if (!element.classList.contains('focusNext')) {
      return;
    }
    let tabIndex = element.tabIndex + 1;
    var next = document.querySelector('[tabindex="'+tabIndex+'"]');
    if (next) {
      next.focus();
      event.preventDefault();
    }
  });