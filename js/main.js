function getNavButton(){
  return document.querySelector('nav ul li:last-child');
}

function getNavItems(){
  return document.querySelectorAll('nav ul li:not(:last-child)');
}

function closeNav(){
  let button = getNavButton();
  let items = getNavItems();

  button.removeEventListener('click', closeNav, false);
  button.addEventListener('click', openNav, false);

  for(let i = 0; i < items.length; i++){
    items[i].setAttribute('class', 'closed');
  }
}

function openNav(){
  let button = getNavButton();
  let items = getNavItems();

  button.removeEventListener('click', openNav, false);
  button.addEventListener('click', closeNav, false);

  for(let i = 0; i < items.length; i++){
    items[i].removeAttribute('class');
  }
}

function navMenu(){
  let button = getNavButton();
  button.addEventListener('click', openNav, false);
}

function setup(){
  navMenu();
}

window.addEventListener('load', setup, false);
