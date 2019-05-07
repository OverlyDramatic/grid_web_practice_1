var nav = document.getElementById('nav');
var navExtendedClassName = 'nav-container-extended';

document.getElementById('header-button-toggle').onclick = function(){
  if(nav.classList.contains(navExtendedClassName)){
    // 收起
    console.log('yes');
    nav.classList.remove(navExtendedClassName);
  }else{
    // 展开
    nav.classList.add(navExtendedClassName);
  }
}