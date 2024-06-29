document.addEventListener("DOMContentLoaded", function(){
    let body = document.querySelector('body');
    let cellules = document.querySelectorAll('.game-row');
    let character = document.querySelector('.character');
    let pockets = document.querySelectorAll('.pocket');
    let appleToPlant = document.querySelector('.apple-to-plant');
    let positionY = 0;
    let positionX = 0;
    let pocketSelection=pockets[0].firstChild.className;
    let stocksPockets = {
        "apple":10
    };
    let appleStock = document.createElement("p");
    appleStock.innerText = stocksPockets.apple;
    appleToPlant.appendChild(appleStock);

    document.addEventListener('keydown', function(e) {
        let characterContent = character;
        let background = characterContent.parentElement;
        // Make Sprout move with the correct disposition
        for (let i = 0; i < cellules.length; i++) {
            if (cellules[i].firstChild && cellules[i].firstChild.classList[0] === "character") {
                if (e.key === "z") {
                    j=i-1;
                    if(cellules[j] && (positionY%10 !== 0 || positionY ===10)){
                        cellules[i].firstChild.remove();
                        let firstChild;
                        cellules[j].firstChild ? firstChild = cellules[j].firstChild : firstChild = "none";
                        if(firstChild !== "none"){
                            cellules[j].insertBefore(characterContent,firstChild);
                        }else{
                            cellules[j].appendChild(characterContent);
                        }
                        characterContent.classList.remove(characterContent.classList[1]);
                        characterContent.classList.add('character-back');           
                        positionY--;
                    }
                } else if (e.key === "s") {
                    j=i+1;
                    if(cellules[j] && (positionY%10 !== 0 || positionY === 0)){
                        cellules[i].firstChild.remove();
                        let firstChild;
                        cellules[j].firstChild ? firstChild = cellules[j].firstChild : firstChild = "none";
                        if(firstChild !== "none"){
                            cellules[j].insertBefore(characterContent,firstChild);
                        }else{
                            cellules[j].appendChild(characterContent);
                        }
                        characterContent.classList.remove(characterContent.classList[1]);
                        characterContent.classList.add('character-front');
                        positionY++;
                    }
                } else if (e.key === "q") {
                    j=i-11;
                    if(cellules[j] && (positionX%18 !== 0 || positionX === 18)){
                        cellules[i].firstChild.remove();
                        let firstChild;
                        cellules[j].firstChild ? firstChild = cellules[j].firstChild : firstChild = "none";
                        if(firstChild !== "none"){
                            cellules[j].insertBefore(characterContent,firstChild);
                        }else{
                            cellules[j].appendChild(characterContent);
                        }
                        characterContent.classList.remove(characterContent.classList[1]);
                        characterContent.classList.add('character-left');
                        positionX--;
                    }
                } else if (e.key === "d") {
                    j=i+11;
                    if(cellules[j] && (positionX%18!==0 || positionX === 0)){
                        cellules[i].firstChild.remove();
                        let firstChild;
                        cellules[j].firstChild ? firstChild = cellules[j].firstChild : firstChild = "none";
                        if(firstChild !== "none"){
                            cellules[j].insertBefore(characterContent,firstChild);
                        }else{
                            cellules[j].appendChild(characterContent);
                        }
                        characterContent.classList.remove(characterContent.classList[1]);
                        characterContent.classList.add('character-right');
                        positionX++;
                    }
                }
                break;
            }
        }

        if(e.key === " "){
            background.classList.remove(background.classList[1]);
            background.classList.add("dirt");
        }

        if(e.key === "ArrowRight"){
            for(let i = 0; i<pockets.length; i++){
                if(pockets[i].className.includes("pocket-select")){
                    let j = i+1;
                    if(pockets[j]){
                        pockets[i].classList.remove("pocket-select");
                        pockets[j].classList.add("pocket-select");
                        if(pockets[j].firstChild){
                            pocketSelection = pockets[j].firstChild.className;
                        }else{
                            pocketSelection="none";
                        }
                    }
                    break;
                }
            }
        }else if(e.key==="ArrowLeft"){
            for(let i = 0; i<pockets.length; i++){
                if(pockets[i].className.includes("pocket-select")){
                    let j = i-1
                    if(pockets[j]){
                        pockets[i].classList.remove("pocket-select");
                        pockets[j].classList.add("pocket-select");
                        if(pockets[j].firstChild){
                            pocketSelection = pockets[j].firstChild.className;
                        }else{
                            pocketSelection="none";
                        }
                    }
                    break;
                }
            }
        }

        if(e.key==="n"){
            if(background.className.includes("dirt")){
                if(pocketSelection === "apple-to-plant"){
                    if(stocksPockets.apple > 0){
                        stocksPockets.apple--;
                        appleStock.innerText = stocksPockets.apple;
                        let seed = document.createElement("div");
                        seed.classList.add("seed");
                        background.appendChild(seed);
                    }else if(stocksPockets.apple === 0){
                        pockets[0].removeChild(appleToPlant);
                    }
                }
            }
        }
    });

})