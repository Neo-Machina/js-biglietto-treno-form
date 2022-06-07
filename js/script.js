// Generate-button
const generateButton = document.getElementById('generate-ticket');
generateButton.addEventListener('click',
    function() {
        // Variabili Nome Cognome, Km da percorrere e Fascia d'età
        const userName = document.getElementById('user-name').value;
        const userKm = parseInt( document.getElementById('user-km').value );
        const userAge = document.getElementById('user-age').value;
        
        // Prezzo standard
        const price = userKm * 0.21;

        // Sconto prezzo del biglietto per i minorenni e gli over 65
        let discount = 0;

        if (userAge === 'minorenne') {
            discount = price * (20 / 100);
        } else if (userAge === 'over') {
            discount = price * (40 / 100);
        }

        // Prezzo finale
        const finalPrice = price - discount;

        // Stampo l'userName nella sezione ticket
        document.getElementById('ticket-name').innerHTML = userName;

        // Tipologia di biglietto
        let ticketDiscount = 'Biglietto Standard';

        if (userAge === 'minorenne') {
            ticketDiscount = 'Biglietto Minorenne';
        } else if (userAge === 'over') {
            ticketDiscount = 'Biglietto Over 65';
        }
        
        // Stampo tipologia biglietto nella sezione ticket
        document.getElementById('ticket-discount').innerHTML = ticketDiscount;
        // Stampo numero carrozza nella sezione ticket
        document.getElementById('ticket-carriage').innerHTML = Math.floor(Math.random() * 10) + 1;
        // Stampo codice CP nella sezione ticket
        document.getElementById('ticket-cp-code').innerHTML = Math.floor(Math.random() * 99999) + 1;
        // Stampo il finalPrice nella sezione ticket
        document.getElementById('ticket-price').innerHTML = finalPrice.toFixed(2) + '€';
        // Aggiunta della classe active 
        document.getElementById('ticket').classList.add('active');
    }
)

// Cancel-ticket button
const cancelTicket = document.getElementById('cancel-ticket');
cancelTicket.addEventListener('click',
    function() {
        // Sostizione valori del ticket
        document.getElementById('ticket-name').value = '';
        document.getElementById('ticket-discount').value = '';
        document.getElementById('ticket-carriage').value = '';
        document.getElementById('ticket-cp-code').value = '';
        document.getElementById('ticket-price').value = '';
        // Hidden ticket
        document.getElementById('ticket').classList.remove('active');
        // Sostituzione valori dei dati dell'utente
        document.getElementById('user-name').value = '';
        document.getElementById('user-km').value = '';
        document.getElementById('user-age').value = 'maggiorenne';
        
    }
)
