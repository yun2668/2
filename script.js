const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('#main-nav');
const backTop=document.querySelector('.back-top');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));
document.querySelectorAll('.faq-item button').forEach(button=>button.addEventListener('click',()=>{const item=button.closest('.faq-item');const open=item.classList.toggle('open');button.setAttribute('aria-expanded',String(open));button.querySelector('span').textContent=open?'－':'＋';}));
window.addEventListener('scroll',()=>backTop.classList.toggle('visible',window.scrollY>500));
backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
