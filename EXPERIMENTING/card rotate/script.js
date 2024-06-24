    const card = document.getElementById("cardParent");
    const cardFront = card.children[0].children[0];
    const cardBack = card.children[0].children[1];
    function clickhndler(){
        console.log("clicked");
        if(cardBack.hasAttribute("style") || cardFront.hasAttribute("style")){
            cardFront.removeAttribute("style");
            cardBack.removeAttribute("style");
        }else{
            cardFront.style.transform = "perspective(1000px) rotateY(180deg)";
            cardBack.style.transform = "perspective(1000px) rotateY(359.99deg)";
        }
    }
    cardFront.addEventListener("click", clickhndler);
    cardBack.addEventListener("click", clickhndler);