//CREATE & APPEND MAIN STRUCTURE
let overlay = document.createElement('div');
let popup = document.createElement('div');
let leftSide = document.createElement('div');
let rightSide = document.createElement('div');
let closeButton = document.createElement('button');

document.body.appendChild(overlay);
overlay.appendChild(popup);
popup.appendChild(leftSide);
popup.appendChild(rightSide);
rightSide.appendChild(closeButton);

popup.classList.add('popup');

//CREATING MODAL ELEMENTS

let beforeState = document.createElement('div');
let beforeTitleArea = document.createElement('div');
let beforeTitle = document.createElement('h1');
let beforeSubtitle = document.createElement('h5');
let mailInput = document.createElement('input');
let phoneInput = document.createElement('input');
let submitButton = document.createElement('button');
let gdprArea = document.createElement('div');
let gdprCheckbox = document.createElement('input');
let gdprInfo = document.createElement('a');

let afterState = document.createElement('div');
let afterTitleArea = document.createElement('div');
let afterTitle = document.createElement('h1');
let afterSubTitle = document.createElement('h5');
let coupon = document.createElement('h5');
let copyButton = document.createElement('button');

//APPEND MODAL ELEMENTS

rightSide.appendChild(beforeState);
beforeTitleArea.appendChild(beforeTitle);
beforeTitleArea.appendChild(beforeSubtitle);
beforeState.appendChild(beforeTitleArea);
beforeState.appendChild(mailInput);
beforeState.appendChild(phoneInput);
beforeState.appendChild(submitButton);
beforeState.appendChild(gdprArea);
gdprArea.appendChild(gdprCheckbox);
gdprArea.appendChild(gdprInfo);

afterTitleArea.appendChild(afterTitle);
afterTitleArea.appendChild(afterSubTitle);
afterState.appendChild(afterTitleArea);
afterState.appendChild(coupon);
afterState.appendChild(copyButton);

//CUSTOMIZE ELEMENTS
closeButton.innerText = 'X';
gdprCheckbox.type = 'checkbox';
beforeTitle.innerText = 'Title';
beforeSubtitle.innerText = 'Short Text';
mailInput.placeholder = 'E-mail';
phoneInput.placeholder = 'Phone Number';
phoneInput.type = 'number';
submitButton.innerText = 'BE FIRST';
gdprInfo.innerText =
  'By submitting this form, you are giving consent for your e-mail to be used and disclosed. *';
gdprInfo.href =
  'https://en.wikipedia.org/wiki/General_Data_Protection_Regulation';
gdprInfo.target = '_blank';

afterTitle.innerText = 'Amazing!';
afterSubTitle.innerText =
  'Here is your discount code you use in your next order. This coupon code will be valid until 01.01.2020.';
coupon.innerText = 'test';
copyButton.innerText = 'Copy';

//FUNCTIONALITY

submitButton.addEventListener('click', handleSubmit);
closeButton.addEventListener('click', handleClose);
copyButton.addEventListener('click', handleCopy);
overlay.addEventListener('click', handleClickOutside);

function handleSubmit() {
  if (gdprCheckbox.checked) {
    if (mailInput.value !== '' && phoneInput.value.length != 0) {
      let data = {
        phone: phoneInput.value,
        email: mailInput.value,
      };

      fetch('https://insider-optimus.herokuapp.com/lead-collection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(
        (res) => console.log(res)
        /*
        res.status <199 && res.status < 300
          ? goToOtherPage()
          : alert(
              'Lütfen E-mail ve Telefon bilgilerinin doğruluğunu kontrol ediniz.'
            )
            */
      );
    } else {
      alert('Değerler boş olamaz.');
    }
  } else {
    alert("GDRP'yi kabul etmelisiniz!");
  }
}

function goToOtherPage() {
  rightSide.removeChild(beforeState);
  rightSide.appendChild(afterState);
}

function handleCopy() {
  window.navigator.clipboard.writeText(coupon.innerText);
  copyButton.innerText = 'Copied!';
  setTimeout(() => {
    copyButton.innerText = 'Copy';
  }, 2000);
}

function handleClose() {
  overlay.style.display = 'none';
}

function handleClickOutside(e) {
  if (!e.target.closest('.popup')) {
    handleClose();
  }
}

//STYLING

document
  .querySelectorAll('*')
  .forEach((element) => (element.style.boxSizing = 'border-box'));

overlay.style.width = '100vw';
overlay.style.height = '100vh';
overlay.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
overlay.style.display = 'flex';
overlay.style.alignItems = 'center';
overlay.style.justifyContent = 'center';
overlay.style.position = 'fixed';
overlay.style.zIndex = '100000';
overlay.style.top = 0;

popup.style.width = '700px';
popup.style.height = '400px';
popup.style.display = 'flex';
popup.style.alignItems = 'center';
popup.style.justifyContent = 'space-between';

leftSide.style.width = '100%';
leftSide.style.height = '100%';

rightSide.style.width = 'calc(100% - 80px)';
rightSide.style.height = '100%';
rightSide.style.backgroundColor = 'white';
rightSide.style.position = 'relative';
rightSide.style.display = 'flex';
rightSide.style.flexDirection = 'column';
rightSide.style.alignItems = 'center';
rightSide.style.justifyContent = 'space-between';
rightSide.style.padding = '50px 40px 50px 40px';

closeButton.style.width = '30px';
closeButton.style.height = '30px';
closeButton.style.backgroundColor = 'transparent';
closeButton.style.border = 'none';
closeButton.style.position = 'absolute';
closeButton.style.right = '10px';
closeButton.style.top = '10px';
closeButton.style.fontWeight = 'bolder';

mailInput.style.width = '100%';
mailInput.style.height = '35px';
mailInput.style.marginBottom = '15px';

phoneInput.style.width = '100%';
phoneInput.style.height = '35px';
phoneInput.style.marginBottom = '15px';

submitButton.style.width = '100%';
submitButton.style.height = '35px';
submitButton.style.marginBottom = '15px';
submitButton.style.backgroundColor = '#23282c';
submitButton.style.color = 'white';

gdprArea.style.display = 'flex';
gdprArea.style.flexDirection = 'row';
gdprArea.style.alignItems = 'center';
gdprArea.style.fontSize = '13px';
gdprArea.firstElementChild.style.marginRight = '10px';

beforeTitleArea.style.height = '70px';
beforeTitleArea.style.marginBottom = '30px';
beforeTitle.style.textAlign = 'center';
beforeTitle.style.height = '30px';
beforeSubtitle.style.textAlign = 'center';
beforeSubtitle.style.height = '30px';

beforeState.style.width = '100%';
beforeState.style.display = 'flex';
beforeState.style.flexDirection = 'column';
beforeState.style.alignItems = 'center';
beforeState.style.justifyContent = 'space-between';

leftSide.style.backgroundImage =
  'url(https://images.unsplash.com/photo-1638760159135-c9512d707801?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80)';
leftSide.style.backgroundSize = 'cover';

afterState.style.display = 'flex';
afterState.style.flexDirection = 'column';
afterState.style.alignItems = 'center';
afterState.style.justifyContent = 'space-between';
afterState.style.width = '100%';
afterState.style.marginTop = '20px';

afterTitleArea.style.textAlign = 'center';
afterTitleArea.style.display = 'flex';
afterTitleArea.style.flexDirection = 'column';
afterTitleArea.style.alignItems = 'center';
afterTitle.style.textAlign = 'center';

coupon.style.width = '200px';
coupon.style.height = '30px';
coupon.style.border = '1px dashed gray';
coupon.style.display = 'flex';
coupon.style.alignItems = 'center';
coupon.style.justifyContent = 'center';
coupon.style.marginBottom = '20px';

copyButton.style.backgroundColor = '#23282c';
copyButton.style.color = 'white';
copyButton.style.width = '100%';
copyButton.style.height = '35px';
