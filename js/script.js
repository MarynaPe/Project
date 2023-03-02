'use strict';
// Закрытие / Открытие кнопок Prices

function Menu1() {
   if (document.getElementById('myDropdown1').style.display == "none") { // если закрыто, то открыть
      document.getElementById('myDropdown1').style.display = "block";
      document.getElementById('basics').classList.add('dropbtn__active');
      document.getElementById("myDropdown2").setAttribute("style", "display: none");
      document.getElementById("myDropdown3").setAttribute("style", "display: none");
      document.getElementById('standard').classList.remove('dropbtn__active');
      document.getElementById('pro-care').classList.remove('dropbtn__active');
   }
   else { // если menuBox открыто, то закрыть
      document.getElementById('myDropdown1').style.display = "none";
      document.getElementById('basics').classList.remove('dropbtn__active');

   }
}

function Menu2() {
   if (document.getElementById('myDropdown2').style.display == "none") { // если закрыто, то открыть
      document.getElementById('myDropdown2').style.display = "block";
      document.getElementById('standard').classList.add('dropbtn__active');
      document.getElementById("myDropdown1").setAttribute("style", "display: none");
      document.getElementById("myDropdown3").setAttribute("style", "display: none");
      document.getElementById('basics').classList.remove('dropbtn__active');
      document.getElementById('pro-care').classList.remove('dropbtn__active');
   }
   else { // если menuBox открыто, то закрыть
      document.getElementById('myDropdown2').style.display = "none";
      document.getElementById('standard').classList.remove('dropbtn__active');
   }
}

function Menu3() {
   if (document.getElementById('myDropdown3').style.display == "none") { // если закрыто, то открыть
      document.getElementById('myDropdown3').style.display = "block";
      document.getElementById('pro-care').classList.add('dropbtn__active');
      document.getElementById("myDropdown1").setAttribute("style", "display: none");
      document.getElementById("myDropdown2").setAttribute("style", "display: none");
      document.getElementById('standard').classList.remove('dropbtn__active');
      document.getElementById('basics').classList.remove('dropbtn__active');
   }
   else { // если menuBox открыто, то закрыть
      document.getElementById('myDropdown3').style.display = "none";
      document.getElementById('pro-care').classList.remove('dropbtn__active');
   }
}
// ------------------------------------------------


function Menu4() {
   document.getElementById('contact__button').classList.toggle('contact__button_open');
   document.getElementById('contact__list').classList.toggle('contact__list_items--open');
   document.getElementById('item_1_open').classList.remove('item__open');
   document.getElementById('item_2_open').classList.remove('item__open');
   document.getElementById('item_3_open').classList.remove('item__open');
   document.getElementById('item_4_open').classList.remove('item__open');
   document.getElementById('contact__button').innerText = 'City';
}


function Menu5() {
   document.getElementById('item_1_open').classList.toggle('item__open');
   document.getElementById('contact__list').classList.remove('contact__list_items--open');
   document.getElementById('contact__button').classList.remove('contact__button_open');
   document.getElementById('contact__button').innerText = 'Canandaigua, NY';
}

function Menu6() {
   document.getElementById('item_2_open').classList.toggle('item__open');
   document.getElementById('contact__list').classList.remove('contact__list_items--open');
   document.getElementById('contact__button').classList.remove('contact__button_open');
   document.getElementById('contact__button').innerText = 'New York City';
}

function Menu7() {
   document.getElementById('item_3_open').classList.toggle('item__open');
   document.getElementById('contact__list').classList.remove('contact__list_items--open');
   document.getElementById('contact__button').classList.remove('contact__button_open');
   document.getElementById('contact__button').innerText = 'Yonkers, NY';
}

function Menu8() {
   document.getElementById('item_4_open').classList.toggle('item__open');
   document.getElementById('contact__list').classList.remove('contact__list_items--open');
   document.getElementById('contact__button').classList.remove('contact__button_open');
   document.getElementById('contact__button').innerText = 'Sherrill, NY';
}

// burger

(function () {
   const burgerItem = document.querySelector('.burger');
   const menu = document.querySelector('.header__navbar');
   const menuCloseItem = document.querySelector('.header__nav-close');
   const menuLinks = document.querySelectorAll('.navbar__link');
   burgerItem.addEventListener('click', () => {
      menu.classList.add('header__nav_active');
   });
   menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('header__nav_active');
   });
   if (window.innerWidth <= 767) {
      for (let i = 0; i < menuLinks.length; i += 1) {
         menuLinks[i].addEventListener('click', () => {
            menu.classList.remove('header__nav_active');
         });
      }
   }
}());


window.onclick = function (event) {
   if (!event.target.matches('.dropbtn')) {
      document.getElementById("myDropdown1").setAttribute("style", "display: none");
      document.getElementById("myDropdown2").setAttribute("style", "display: none");
      document.getElementById("myDropdown3").setAttribute("style", "display: none");

      document.getElementById('basics').classList.remove('dropbtn__active');
      document.getElementById('standard').classList.remove('dropbtn__active');
      document.getElementById('pro-care').classList.remove('dropbtn__active');

      document.getElementById('contact__list').classList.remove('contact__list_items--open');
      document.getElementById('contact__button').classList.remove('contact__button_open');


   }
}


   