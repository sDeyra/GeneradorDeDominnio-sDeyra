import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

   let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  for(let i = 0; i<pronoun.length; i++){
    for (let o = 0; o < adj.length; o++) {
      for (let p = 0; p < noun.length; p++) {
        console.log(pronoun[i] +adj[o] +noun[p] +".com")
        
      }
    }
    
  }

};
