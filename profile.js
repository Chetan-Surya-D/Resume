var b1=document.getElementById("b1");
var b2=document.getElementById("b2");
var b3=document.getElementById("b3");
var b4=document.getElementById("b4");
var b5=document.getElementById("b5");
var d1=document.getElementById("d1");
var d2=document.getElementById("d2");
var d3=document.getElementById("d3");
var d4=document.getElementById("d4");
var d5=document.getElementById("d5");

d2.style.display="none";
d3.style.display="none";
d4.style.display="none";
d5.style.display="none";

b1.onclick = function () {

    d1.style.display="block";
    b1.class="nav-item nav-link active";

    d2.style.display="none";
    b2.class="nav-item nav-link";

    d3.style.display="none";
    b3.class="nav-item nav-link";

    d4.style.display="none";
    b4.class="nav-item nav-link";

    d5.style.display="none";
    b5.class="nav-item nav-link";

}

b2.onclick = function () {

    d2.style.display="block";
    b2.class="nav-item nav-link active";

    d1.style.display="none";
    b1.class="nav-item nav-link";

    d3.style.display="none";
    b3.class="nav-item nav-link";

    d4.style.display="none";
    b4.class="nav-item nav-link";

    d5.style.display="none";
    b5.class="nav-item nav-link";

}

b3.onclick = function () {

    d3.style.display="block";
    b3.class="nav-item nav-link active";

    d2.style.display="none";
    b2.class="nav-item nav-link";

    d1.style.display="none";
    b1.class="nav-item nav-link";

    d4.style.display="none";
    b4.class="nav-item nav-link";

    d5.style.display="none";
    b5.class="nav-item nav-link";

}

b4.onclick = function () {

    d4.style.display="block";
    b4.class="nav-item nav-link active";

    d2.style.display="none";
    b2.class="nav-item nav-link";

    d3.style.display="none";
    b3.class="nav-item nav-link";

    d1.style.display="none";
    b1.class="nav-item nav-link";

    d5.style.display="none";
    b5.class="nav-item nav-link";

}

b5.onclick = function () {

    d5.style.display="block";
    b5.class="nav-item nav-link active";

    d2.style.display="none";
    b2.class="nav-item nav-link";

    d3.style.display="none";
    b3.class="nav-item nav-link";

    d4.style.display="none";
    b4.class="nav-item nav-link";

    d1.style.display="none";
    b1.class="nav-item nav-link";

}