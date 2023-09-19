/* 
**Consegna:**

L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

==============================================

1. Salvo il riferimento del mio container dove inserisco dinamicamente gli elementi 'div';

2. Creo un ciclo che ad ogni iterazione genera il mio elemento 'div', che di fatto sarà un quadrato;
   a. creo la funzione che aggiunge i quadrati, a cui vado ad applicare la classe square;
   b. Creo una variabile che contiene la funzione per inserire dinamicamente il div;
   c. Aggiungo square al mio container con .append();
   
3. Ogni quadrato avrà un evento al click, che aggiunge o toglie la classe active;
   a. Ad ogni iterazione del ciclo c'è un evento al click;
   b. Per richiamare il div all'evento al click, utilizzo la keyword this che è riferita a square che ha ricevuto l'evento, gli applico il metodo toggle che aggiunge o toglie la classe active dall'elemento div;

4. Stampo in console il numero corrispondente della cella cliccata;
   a. Per stampare il numero della cella corrispondente in console utilizzo l'indice, che lo passo come parametro della funzione atta a creare un nuovo elemento div;
   b. Nel corpo della funzione creo una proprietà custom che raccoglie il valore dell'indice;

5. Creo due button, uno per generare il gioco ed uno per resettarlo;
   a. Prendo i riferimenti dei due button;
   b. Creo una funzione per il button reset, dove all'evento click sovrascrivo i valori contenuti nel container tramite assegnazione stringa vuota;
   c. Tutto il ciclo lo chiudo in una funzione che verrà richiamata all'evento click del button start;
   d. Creo una funzione per il button start, dove all'evento click faccio ripartire tutto il blocco del ciclo for contenuta in una funzione;
*/


//1.
const containerRef = document.querySelector('.container');

start();
reset();

//2.

function init (n) {
    for (let i = 0; i < n; i++) {
        //2. b.
        const square = createSquare(i);
        //2. c.
        containerRef.append(square);
        //3. a.
        square.addEventListener ('click', function () {
            //3. b.
            this.classList.toggle('active');
            console.log(this);
            //4.
            console.log(this._index);
        });
    
    };
};

//2. a. (function) + 4. a. (index)
function createSquare (index) {
    const newSquare = document.createElement('div');
    newSquare.className = 'square';
    //4.b.
    newSquare._index = index;
    return newSquare;
};

//5. b.
function reset () {
    //5. a.
    const btnResetRef = document.getElementById('btnReset');
    btnResetRef.addEventListener('click', function() {
        containerRef.innerHTML = '';
    });
    return btnResetRef;
};

//5. c.
function start () {
    //5. a.
    const btnStartRef = document.getElementById('btnStart');
    btnStartRef.addEventListener ('click', function() {
        containerRef.innerHTML = '';
        init(100);
    });
    return btnStartRef;
};