const anime = document.querySelector(".anime");
const Quote = document.querySelector(".quote");
const character = document.querySelector(".character");
// fetch("https://animechan.xyz/api/random/anime?title=naruto").then(res => {
//     // console.log(res.json());
//     return res.json();
// }).then(data => {
//     console.log(data.anime)
//     console.log(data.character)
//     console.log(data.quote)
//     // Quote.innerText = data.quote;
//     if(data){
//         // if(data.anime !== null && data.anime !== undefined){
//         //     anime.textContent = data.anime;
//         //     console.log(data.anime);
//         // }
//         // if(data.quote !== null && data.quote !== undefined){
//         //     quote.textContent = data.quote;
//         //     console.log(data.quote);
//         // }
//         // if(data.character !== null && data.character !== undefined){
//         //     character.textContent = data.character;
//         //     console.log(data.character);
//         // }
//     }
// }).catch(error => {
//     console.log(error);
// })
fetch("https://animechan.xyz/api/quotes/anime?title=naruto")
          .then((response) => response.json())
          .then((quotes) => console.log(quotes));