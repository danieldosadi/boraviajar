let installPrompt;
const installButton=document.querySelector('#installApp');
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;});
installButton.addEventListener('click',async()=>{if(!installPrompt){document.querySelector('#installHelp').showModal();return;}await installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;});
window.addEventListener('appinstalled',()=>{document.querySelector('.install-panel').hidden=true;notify('BoraViajar instalado!');});
if('serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('./sw.js').catch(()=>{notify('Modo offline indisponível. Você pode continuar online.');});});}
