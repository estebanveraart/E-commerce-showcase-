export const pageP = (data) => {
    
    let main = document.querySelector('main');
    let headerE = document.querySelector('header');
    let articleP = document.querySelectorAll('article');

    headerE.style.display = "none";

    for (let i = 0; i < articleP.length; i++) {
        
        articleP[i].style.display = "none";
        
    }

    
    let buttonback = document.createElement('button');
    buttonback.className = "back";
    buttonback.textContent = "back";


    let newHr = document.createElement('hr');
    let sectionArticle = document.createElement('section');
    sectionArticle.className = "articleS";
    let nomSection = document.createElement('h1');
    nomSection.innerHTML = data.title;
    nomSection.className = "titreP";
    let imageSection = document.createElement('img');
    imageSection.src = data.image;
    imageSection.className = "imgP";
    let descriptionSection = document.createElement('p');
    descriptionSection.className = "texteP";
    descriptionSection.innerHTML = data.description;
    let achatSection = document.createElement('div');
    achatSection.className = 'achatsection';
    let ajoutPanier = document.createElement('button');
    ajoutPanier.className = 'shopButton';
    ajoutPanier.innerHTML = 'add to shop'
    let prixSection = document.createElement('p');
    prixSection.className = "texteP";
    prixSection.innerHTML = "Prix : " + data.price + " euros.";

    sectionArticle.appendChild(nomSection);
    sectionArticle.appendChild(imageSection);
    sectionArticle.appendChild(newHr);
    sectionArticle.appendChild(descriptionSection);
    sectionArticle.appendChild(newHr);
    achatSection.appendChild(prixSection);
    achatSection.appendChild(ajoutPanier);
    sectionArticle.appendChild(achatSection);
    main.appendChild(buttonback);
    main.appendChild(sectionArticle);

    buttonback.addEventListener('click', () => {

        sectionArticle.style.display = "none";

        headerE.style.display = "block";

        for (let i = 0; i < articleP.length; i++) {
        
            articleP[i].style.display = "block";
            
        }
    
        buttonback.remove();
        sectionArticle.remove();

    })


}