function rain(){

    let amount = Math.floor(window.innerWidth/8);
    let topPage = document.querySelector('.topPage');
    for(let i =0;i<amount;i++){
        let drop = document.createElement('i');
        let posX = Math.floor(Math.random()*100);
        let posY = Math.floor(Math.random()*40);
        let delay = Math.random()*-20;
        let duration = Math.random()*-20;
        drop.className='drop';
        drop.style.left = posX + '%';
        drop.style.animationDelay=delay+'s';
        drop.style.animationDuration=duration+'s';
        topPage.appendChild(drop);
    }
}
rain();