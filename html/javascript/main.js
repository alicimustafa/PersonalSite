var main = (function(ev) {
  'use  strict';

  function navResponse(ev){
    if(ev.target.nodeName === 'LI'){
      var openSection = document.getElementsByClassName('open-section')[0];
      openSection.classList.add('closed-section');
      openSection.classList.remove('open-section');
      var tab = ev.target;
      document.getElementsByClassName('select')[0].classList.remove('select');
      tab.classList.add('select');
      var section = tab.getAttribute("data-section");
      document.getElementById(section).classList.add('open-section');
      document.getElementById(section).classList.remove('closed-section');
    }
  }
  return {
    start:function(){
      document.getElementById('nav-bar').addEventListener('click',navResponse);
    }
  }
})();
document.addEventListener('DOMContentLoaded', main.start);
