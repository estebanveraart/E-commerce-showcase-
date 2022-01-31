
export const navPiece = () => {

    let home = document.querySelector('.homeP');
    let men = document.querySelector('.menP');
    let women = document.querySelector('.womenP');
    let jewel = document.querySelector('.jewelP');
    let elec = document.querySelector('.elecP');
    let categorie = [home, men, women, jewel, elec];

    let menPiece = document.querySelectorAll(".men");
    let jewelPiece = document.querySelectorAll(".jewelery");
    let elecPiece = document.querySelectorAll(".electronics");
    let womenPiece = document.querySelectorAll(".women");

    let menDisplay = ["block", "block", "none", "none","none"];
    let womenDisplay = ["block", "none", "block", "none", "none"];
    let jewelDisplay = ["block", "none", "none", "block", "none"];
    let elecDisplay = ["block", "none", "none", "none", "block"];

    for (let i = 0; i < 5; i++) {
        
        categorie[i].addEventListener('click', () => {

            blockNone(menPiece, menDisplay[i]);
            blockNone(womenPiece, womenDisplay[i]);
            blockNone(jewelPiece, jewelDisplay[i]);
            blockNone(elecPiece, elecDisplay[i]);

        })
        
    }
            
    const blockNone = (array, display) => {

        array.forEach(element => {

            element.style.display = display
            
        })

    }

}