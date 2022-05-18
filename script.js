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
let showDate = document.getElementById('showDate');
showDate.addEventListener('click', function(e){
    document.getElementById('emptySpace').innerText = Date();
});
showDate.addEventListener('dblclick',function(e){
    document.getElementById('emptySpace').innerText = null;
});