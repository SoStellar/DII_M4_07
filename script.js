function alert1(){
    alert('let me see...');
}
let ok = document.getElementById('ok');
ok.addEventListener('click', alert1);
function alert2(){
    alert('not ok...');
}
let cancel = document.getElementById('cancel');
cancel.addEventListener('click', alert2);