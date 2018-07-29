let button   = document.getElementsByClassName('btn')[0] 
let labels   = document.getElementsByClassName('label');
let section  = document.getElementsByClassName('panel')[0];
let items    = JSON.parse(data.value).items;
data.value   = "";

let removeClass = (element, className) => {
  element.classList.remove(className);
} 

let addClass = (element, className) => {
  element.classList.add(className)
}

let activeLabels = (des, act) => {
  labels[des].classList.remove('active');
  labels[act].classList.add('active');
}

let validateNumCard = (input) => {
  if(!/^\d{4}\-\d{4}\-\d{4}\-\d{4}$/.test(input.value)){
    addClass(input, 'input-danger');
    return false;
  } else {
    removeClass(input, 'input-danger');
    return true;
  }
}

let validateTitular = (input) => {
  console.log(input.value);
  if(!/^[a-zA-Z]{5,}$/.test(input.value)){
    addClass(input, 'input-danger');
    return false;
  } else {
    removeClass(input, 'input-danger');
    return true;
  }
}

let validateDate = (input) => {
  if(!/^\d{2}\/\d{4}$/.test(input.value)){
    addClass(input, 'input-danger');
    return false;
  } else {
    removeClass(input, 'input-danger');
    return true;
  }
}

let validateCVV = (input) => {
  if(!/^\d{3}$/.test(input.value)){
    addClass(input, 'input-danger');
    return false;
  } else {
    removeClass(input, 'input-danger');  
    return true;
  }
}

let validateFields = (form) => {
  let fields = {
    numCard: form.inputCard, 
    titular: form.inputTitular, 
    date   : form.inputDate, 
    cvv    : form.inputCVV
  };

  let isValidate = [validateNumCard(fields.numCard), validateTitular(fields.titular), 
                    validateDate(fields.date), validateCVV(fields.cvv)].every((v => v));
  
  if(isValidate)
    button.disabled = false;
  else
    button.disabled = true;
}

let confirmPay = (e) => {
  let info = {
    numCard : document.forms[0].inputCard,
    titular : document.forms[0].inputTitular,
    date    : document.forms[0].inputDate,
  }
  
  button.style.display = 'none';
  section.innerHTML    = createTemplateProducts(items, false);
  activeLabels(1, 2);
  createTemplateInfo(info);
  createIconTemplate();
}

let formPay = function(e) {
  activeLabels(0, 1);
  section.innerHTML = createFormTemplate();

  $('#inputCard').mask('0000-0000-0000-0000');
  $('#inputDate').mask('00/0000');
  $('#inputCVV').mask('000');
  $('input').on('input', function(e){
    this.addEventListener('input', (e) => validateFields(e.target.form));
  });

  button.innerHTML = "CONFIRMAR PAGAMENTO";
  button.disabled  = true;
  button.removeEventListener('click', arguments.callee);
  button.addEventListener('click'   , confirmPay);
}

button.addEventListener('click', formPay);
section.innerHTML = createTemplateProducts(items);