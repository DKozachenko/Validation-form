'use strict'

const phone = document.querySelector('#phone'),
  mail = document.querySelector('#mail'),
  name = document.querySelector('#name'),
  warnings = document.querySelectorAll('.warning')
  ;

const regExpPhone = /^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/,  
  regExpMail = /^[a-zA-Z0-9]+@\w+\.\w+(\.\w+)*$/,
  regExpName = /^[a-zA-Z]+$/;  

phone.addEventListener('input', () => {
  checkData(phone, regExpPhone);
})

mail.addEventListener('input', () => {
  checkData(mail, regExpMail);
})

name.addEventListener('input', () => {
  checkData(name, regExpName);
})

const checkData = (input, regExp) => {
  const curStr = input.value;
  const ind = input.dataset.warn - 1;

  if (curStr) {
    if (!regExp.test(curStr)) {
      input.style.borderColor = 'red';
      warnings[ind].style.display = 'flex';
    } else {
      input.style.borderColor = 'black';
      warnings[ind].style.display = 'none';
    }
  } else {
    input.style.borderColor = 'black';
    warnings[ind].style.display = 'none';
  }
}