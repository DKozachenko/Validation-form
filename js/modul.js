export const activateBurger = (burgerEl, navEl, burgerClass = 'burger_active', navClass = 'nav_show') => {
  burgerEl.classList.toggle(burgerClass);
  navEl.classList.toggle(navClass);
}

export const addFixedHeader = (firstBlockEl, headerEl, headerClass = 'header_fixed') => {
  let scrollTop = window.pageYOffset;
  let requiredHeight = firstBlockEl.offsetHeight;

  if (scrollTop >= requiredHeight) {
    headerEl.classList.add(headerClass);
  } else {
    headerEl.classList.remove(headerClass);
  }
}

export const scrollToBlock = (event, link, burgerEl, navEl, burgerClass = 'burger_active', navClass = 'nav_show') => {
  event.preventDefault();

  const blockName = link.dataset.link;
  const block = document.querySelector(`.${blockName}`);

  const scrollTop = block.offsetTop;

  window.scrollTo({
    top: scrollTop - 100,
    behavior: "smooth"
  })

  burgerEl.classList.remove(burgerClass);
  navEl.classList.remove(navClass);
}

export const scrollToSecondBlock = (firstBlockEl) => {
  const requiredHeight = firstBlockEl.offsetHeight;

  window.scrollTo({
    top: requiredHeight,
    behavior: 'smooth'
  })
}

export const getRandomInteger = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
}