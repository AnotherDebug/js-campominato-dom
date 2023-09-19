/* 
**Consegna:**

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba, fare visulaizzare tutte le bombe in gliglia e congelare la griglia.

**BONUS:**

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

=======================================================================================

1. Creo una select dove scegliere i vari livelli di difficoltà (facile, medio, difficile);
2. Assegno alle opzioni dei valori numerici che verranno poi richiamati e letti per passare da un livello ad un altro;
   a. Salvo in una costante il riferimento della select;
   b. Creo un array con valori numerici corrispondenti all'indice della select ed alle classi che dovranno essere richiamate per contenere il giusto numero di square;
   c. Dichiaro una variabile globale dove salvo il valore della select;
   d. Il valore della select lo prendo dalla funzione init;
   c. Nalla funzione createSquare aggiungo la classe corrispondente;
   d. La funzione init richiama createSquare che crea dinamicamente i div;
3. Creo 16 numeri random che saranno le bombe;
   a. Creo una array vuoto che conterrà i 16 numeri randomici che utilizzo come indice per la griglia di gioco a cui applicherò una classe per le bombe;
   b. Creo una funzione random;
   c. Utilizzo un ciclo do while che cicla il valore tra 0 e l'array levels, per 16 volte quante sono le bombe;
   d. Pusho tutto nell'array vuoto;
*/



const containerRef = document.querySelector('.container');
//2. a.
const levelGameRef = document.getElementById('levelGame');
let levelGame;

//2. b.
const levels = [100, 81, 49];

start();
reset();



function init () {
    levelGame = levelGameRef.value;
    console.log(levelGame);
    for (let i = 0; i < levels[levelGame]; i++) {
     
        const square = createSquare(i);
      
        containerRef.append(square);
       
        square.addEventListener ('click', function () {
          
            this.classList.toggle('active');
            console.log(this);
           
            console.log(this._index);
        });
    
    };
};


function createSquare (index) {
    const newSquare = document.createElement('div');
    newSquare.className = 'square';
    newSquare.classList.add('square' + levels[levelGame]);
    newSquare._index = index;
    return newSquare;
};


function reset () {
   
    const btnResetRef = document.getElementById('btnReset');
    btnResetRef.addEventListener('click', function() {
        containerRef.innerHTML = '';
    });
    return btnResetRef;
};


function start () {
  
    const btnStartRef = document.getElementById('btnStart');
    btnStartRef.addEventListener ('click', function() {
        containerRef.innerHTML = '';
        init();
    });
    return btnStartRef;
};