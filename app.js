let price=Number(localStorage.getItem('teslaPrice')||0.195),kwh=14.7;
const $=s=>document.querySelector(s);
function render(){ $('#price').value=price; $('#costToday').textContent=`€${(kwh*price).toFixed(2).replace('.',',')}`; }
$('#settingsBtn').onclick=()=>$('#settings').classList.remove('hidden');
$('#close').onclick=()=>$('#settings').classList.add('hidden');
$('#save').onclick=()=>{price=Number($('#price').value)||0;localStorage.setItem('teslaPrice',price);render();$('#settings').classList.add('hidden')};
render();