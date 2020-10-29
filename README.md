# flyers

E' possibile verificare il parziale sviluppo della one page app scaricando il contenuto in una cartella con git, successivamente è possibile installare le dipendenze con npm install.

Attualmente il frontEnd e il backEnd girano su 2 server differenti: localhost:5000 backend e localhost:3000.

Per il frontEnd, un proxy server dirotta le chiamate Api.

Con il modulo concurrently(npm i concurrently da scaricare nella cartella principale) è possibile avviarli entrambi.

Ho comunque esportato una cartella di files statici chiamata build nella sottocartella client.

Lavoro sviluppato con NodeJs React ed Express.

Dipendenze: Bootstrap per la UI Axios per le chiamate asincrone
