window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  let header      = document.createElement('header'),
    menu        = document.createElement('ul'),
    headerCont  = document.createElement('div'),
    headerTitle = document.createElement('h1'),
    headerDiscr = document.createElement('p'),
    headerLink  = document.createElement('a'),
    socialLink  = document.createElement('div'),
    socialImg   = document.createElement('img'),
    socialImg2  = document.createElement('img');


let menuItem    = document.getElementsByTagName('li'),
    widthWindow = window.innerWidth;

function body() {
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.head.innerHTML = '<meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Create by JS</title>';
}  
  
function addChild() {
  document.body.prepend(header);
  header.appendChild(menu);
  menu.innerHTML = '<li class="header__menu-item">Главная</li><li class="header__menu-item">Каталог</li><li class="header__menu-item">Контакты</li><li class="header__menu-item">О Нас</li>';
  header.append(headerCont);
  headerCont.appendChild(headerTitle);
  headerCont.appendChild(headerDiscr);
  headerCont.appendChild(headerLink);
  header.append(socialLink);
  socialLink.append(socialImg);
  socialLink.append(socialImg2);
  // socialLink.appendChild(socialImg);
  console.log(socialImg2)
}
function menuAdd() {
  menu.className = 'header__menu';
  menu.style.display = 'flex';
  menu.style.justifyContent = 'flex-start';
  menu.style.listStyleType = 'none';
  menu.style.margin ='0 40px';
  for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].style.margin = '20px';
    menuItem[i].style.cursor = 'pointer';
    }
}

function headerAdd() {
  header.className = "header";
  header.style.backgroundImage = 'url(img/bg.jpg)';
  header.style.backgroundPosition = 'center top';
  header.style.backgroundSize = 'cover';
  header.style.height = '100vh';
  header.style.backgroundColor = '#000000';
  header.style.position = 'relative';
}

function headerContent() {
  headerCont.className = 'header__content';
  headerTitle.className = 'header__title';
  headerDiscr.className = 'header__discription';
  headerLink.className = 'header__link';
  headerLink.href = 'https://github.com/slavon4ik1';
  headerTitle.textContent = 'Весь HTML,CSS прописан в JavaScript';
  headerDiscr.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid animi laborum ducimus, at hic eaque, consequuntur esse mollitia eos nam sapiente vitae voluptatibus, fugit deleniti iusto eligendi tempore laudantium inventore!';
  headerLink.textContent = 'Перейти на Github';
  headerCont.style.width = '400px';
  headerCont.style.margin = '70px 0 0 70px';
  headerCont.style.position = 'absolute';
  headerCont.style.top = '100px';
  headerLink.style.color = '#fff';
  headerLink.style.background = 'blue';
  headerLink.style.padding = '10px 22px';
  headerLink.style.borderRadius = '5px';
  headerLink.style.display = 'inline-block';
  headerLink.style.marginTop = '30px';
  headerLink.style.textDecoration = 'none';

}
function social() {
  socialLink.className = 'header__social';
  socialImg2.src = 'img/in.png';
  socialImg.src = 'img/be.png';
  socialLink.style.position = 'absolutte';
  socialLink.style.margin = '500px 0 0 70px';
  socialImg.style.marginRight = '70px' 
}


function hoverGit() {
  headerLink.addEventListener('mouseover', function() {
    headerLink.style.color = 'blue';
    headerLink.style.background = '#fff';
    headerLink.style.border = '1px solid blue';
    headerLink.style.transition = '0.5s ease-in-out';
  });
  headerLink.addEventListener('mouseout', function() {
    headerLink.style.color = '#fff';
    headerLink.style.background = 'blue';
    headerLink.style.transition = '0.5s ease-in-out';
  });
}
function hoverMenu() {
  
for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener('mouseover', function () {
    menuItem[i].style.color = 'blue';
    menuItem[i].style.borderBottom = '1px solid blue';
    menuItem[i].style.transition = '0.5s ease-in-out';
  });
}
 
for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener('mouseout', function () {
    menuItem[i].style.color = 'black';
    menuItem[i].style.border = 'none';
  });
}
}

function hoverSocial() {
  
  socialImg.addEventListener('mouseover', function () {
      socialImg.style.transform = 'scale(1.1)';
      socialImg.style.transition = '0.5s ease-in-out';  
    });

  socialImg.addEventListener('mouseout', function () {
    socialImg.style.transform = 'scale(1.0)';
  });

    socialImg2.addEventListener('mouseover', function () {
    socialImg2.style.transform = 'scale(1.1)';
    socialImg2.style.transition = '0.5s ease-in-out';  
  });

    socialImg2.addEventListener('mouseout', function () {
    socialImg2.style.transform = 'scale(1.0)';
  });
  
  }


body();
headerAdd();
addChild();
menuAdd();
headerContent();
social();
hoverGit();
hoverMenu();
hoverSocial();






if(widthWindow > 1400) {
  headerCont.style.top = '200px';
  socialLink.style.margin = '600px 0 0 70px';
  }
});