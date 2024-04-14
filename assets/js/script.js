'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});

function addcmnt(){
  let temp = document.getElementById('cmntbox');
  let valu = document.getElementById('inp').value;
  temp.innerHTML += "<br>" + valu + "<br>";
  alert("Comment submitted");
  valu.innerHTML = "";
}

function it_btn(){
  let content = document.getElementById('frst');
  content.innerHTML = "<iframe src="https://www.youtube.com/embed/vth5unRwCqY" frameborder="0" style="text-decoration: none; color: #fff;" width="300px" height="500px"></iframe>";
}