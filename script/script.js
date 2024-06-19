document.addEventListener("DOMContentLoaded", function(){
    let body = document.querySelector('body');
    let cellules = document.querySelectorAll('.game-row');
    let character = document.querySelector('.character');
    let positionY = 0;
    let positionX = 0;


    // Make Sprout move with the correct disposition
    document.addEventListener('keydown', function(e) {
        let characterContent = character;
        for (let i = 0; i < cellules.length; i++) {
            if (cellules[i].firstChild && cellules[i].firstChild.classList[0] === "character") {
                if (e.key === "ArrowUp") {
                    j=i-1;
                    if(cellules[j] && (positionY%10 !== 0 || positionY ===10)){
                        cellules[i].firstChild.remove();
                        cellules[j].appendChild(characterContent);
                        characterContent.classList.remove(characterContent.classList[1]);
                        characterContent.classList.add('character-back');           
                        positionY--;
                    }
                } else if (e.key === "ArrowDown") {
                    j=i+1;
                    if(cellules[j] && (positionY%10 !== 0 || positionY === 0)){
                        cellules[i].firstChild.remove();
                        cellules[j].appendChild(characterContent);
                        characterContent.classList.remove(characterContent.classList[1]);
                        characterContent.classList.add('character-front');
                        positionY++;
                    }
                } else if (e.key === "ArrowLeft") {
                    j=i-11;
                    if(cellules[j] && (positionX%18 !== 0 || positionX === 18)){
                        cellules[i].firstChild.remove();
                        cellules[j].appendChild(characterContent);
                        characterContent.classList.remove(characterContent.classList[1]);
                        characterContent.classList.add('character-left');
                        positionX--;
                    }
                } else if (e.key === "ArrowRight") {
                    j=i+11;
                    if(cellules[j] && (positionX%18!==0 || positionX === 0)){
                        cellules[i].firstChild.remove();
                        cellules[j].appendChild(characterContent);
                        characterContent.classList.remove(characterContent.classList[1]);
                        characterContent.classList.add('character-right');
                        positionX++;
                    }
                }
                break;
            }
        }
    });
    
})