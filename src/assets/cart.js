import { pageP } from "./pagePiece";

export let cartPiece = (data) => { 
    
    const main = document.querySelector('main');

    for (let i = 0; i < data.length; i++) {
                        
        let newArticle = document.createElement('article');
        newArticle.id = data[i].id;

        newArticle.addEventListener("click", () => pageP(data[i]))

        if(data[i].category === "men's clothing") {

            newArticle.className = "men";

        }

        else if(data[i].category === "women's clothing") {

            newArticle.className = "women";

        }

        else {

            newArticle.className = data[i].category
            
        }

        let newDivP = document.createElement('div');
        newDivP.className = "produitCart";
        let newDivS = document.createElement('div');
        newDivS.className = "produitCartBack";
        let newDivVisuel = document.createElement('div');
        newDivVisuel.className = "VisuelCase"
        let newImg = document.createElement('img')
        newImg.src = data[i].image
        newImg.className = "imgPiece";
        let newHr = document.createElement('hr')
        let newPrix = document.createElement('p')
        newPrix.innerText = "Prix : " + data[i].price + " euros";

        newDivVisuel.appendChild(newImg)
        newDivP.appendChild(newDivVisuel);
        newDivP.appendChild(newHr);
        newDivP.appendChild(newPrix);
        newArticle.appendChild(newDivP);
        newArticle.appendChild(newDivS);
        main.appendChild(newArticle);

    }

}