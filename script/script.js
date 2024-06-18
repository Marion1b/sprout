document.addEventListener("DOMContentLoaded", function(){
    let body = document.querySelector('body');
    let cellules = document.querySelectorAll('.game-row');
    let character = document.querySelector('.character');

    // let positionX = 0;
    // let positionY = 0;
    // let decrementIntervalUp;
    // let decrementIntervalBottom;
    // let decrementIntervalLeft;
    // let decrementIntervalRight;

    // document.addEventListener('keydown', function(e){
    //     if(e.key === "ArrowUp"){
    //         decrementIntervalUp = setInterval(function(){
    //             positionY -=5;
    //             character.style.transform=`translate(${positionX}px, ${positionY}px)`;
    //         }, 20);
    //         console.log(decrementIntervalUp);
    //     }else if(e.key === "ArrowDown"){
    //         decrementIntervalBottom = setInterval(function(){
    //             positionY+=5;
    //             character.style.transform=`translate(${positionX}px, ${positionY}px)`;
    //         }, 20);
    //         console.log(decrementIntervalBottom);
    //     }else if(e.key === "ArrowRight"){
    //         decrementIntervalRight = setInterval(function(){
    //             positionX+=5;
    //             character.style.transform=`translate(${positionX}px, ${positionY}px)`;
    //         }, 20);
    //     }else if(e.key === "ArrowLeft"){
    //         decrementIntervalLeft = setInterval(function(){
    //             positionX-=5;
    //             character.style.transform=`translate(${positionX}px, ${positionY}px)`;
    //         }, 20);
    //     }
    // })

    // document.addEventListener('keyup', function(e){
    //     clearInterval(decrementIntervalUp);
    //     clearInterval(decrementIntervalBottom);
    //     clearInterval(decrementIntervalRight);
    //     clearInterval(decrementIntervalLeft);
    // })

    console.log(cellules[0]);
    document.addEventListener('keydown', function(e) {
        let characterContent = character;
        console.log(characterContent);
        for (let i = 0; i < cellules.length; i++) {
            if (cellules[i].firstChild && cellules[i].firstChild.className === "character") {
                if (e.key === "ArrowUp") {
                    j=i-1;
                    if(cellules[j]){
                        cellules[i].firstChild.remove();
                        cellules[j].appendChild(characterContent);
                    }
                } else if (e.key === "ArrowDown") {
                    j=i+1;
                    if(cellules[j]){
                        cellules[i].firstChild.remove();
                        cellules[j].appendChild(characterContent);
                    }
                } else if (e.key === "ArrowLeft") {
                    j=i-11;
                    if(cellules[j]){
                        cellules[i].firstChild.remove();
                        cellules[j].appendChild(characterContent);
                    }
                } else if (e.key === "ArrowRight") {
                    j=i+11;
                    if(cellules[j]){
                        cellules[i].firstChild.remove();
                        cellules[j].appendChild(characterContent);
                    }
                }
                break;
            }
        }
    });
    
})