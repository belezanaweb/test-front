
let createTemplateProducts = (items, showPrice = true) => {
  return `<div class="title">PRODUTOS</div>
          <div class="section items">
            ${items.map(item => { 
              return `<div class="col d-flex align-items-end item">
                        <div class="col-3">
                          <img class="img-fluid" src="${item.product.imageObjects[0].medium}" alt="">
                        </div>
                        <div class="col-9 item-description">
                          <p>${item.product.name.split('- Máscara de Rec')[0]}</p>
                          ${showPrice ? 
                          `<p class="price">${item.product.priceSpecification.price.toFixed(2).toString().replace('.', ',')}</p>` :
                          ''}   
                        </div>
                      </div>`
            }).join('')}
          </div>
          <br>`;
}

let createFormTemplate = () => {
  return `<div class="title">CARTÃO DE CREDITO</div>
          <div class="col items">
            <form action="">
              <div class="form-group">
                <label class="field-description">Número do cartão:</label>
                <input autofocus  placeholder="_ _ _ _-_ _ _ _-_ _ _ _-_ _ _ _" id="numCard" placeholder="" class="form-control" type="text">
              </div>
              <div class="form-group">
                <label class="field-description">Nome do títular:</label> 
                <input placeholder="Como no cartão" class="form-control" id="titular" type="text">
              </div>
              <div class="form-group inline-block w-50">
                <label class="field-description">Validade (mês/ano):</label> 
                <input placeholder="_ _ /_ _ _ _" class="form-control" id="date" type="text"> 
              </div>
              &nbsp;
              &nbsp;
              <div class="form-group inline-block w-40">
                <label class="field-description">CVV:</label>
                <input placeholder="_ _ _" id="cvv" inline-block class="form-control" type="text">
              </div>
            </form>
          </div>
          <br>`;
}

let createTemplateInfo = (data) => {
  let div       = document.createElement('div');
  let content   = document.body.firstElementChild;
  div.className = 'section';
  div.innerHTML = `<div class="title">PAGAMENTO</div>
                   <div class="section items pay">
                    <p>
                      ${data.numCard.value.replace(/\d{4}\-\d{4}\-\d{4}\-/, '****.****.****.')}<br>
                      ${data.titular.value.toUpperCase()}<br>
                      ${data.date.value}<br>
                    </p>
                   </div>`;
  content.insertBefore(div, content.children[1]);
}

let createIconTemplate = () => {
  let div       = document.createElement('div');
  let content   = document.body.firstElementChild;
  div.className = 'row';
  div.innerHTML = `<div class="col icon">
                      <i class="far fa-3x fa-check-circle"></i>
                      <p class="bold">COMPRA EFETUADA COM SUCESSO</p>
                  </div>`;
  content.insertBefore(div, content.children[1]);
}