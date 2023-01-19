# Angular---kendo---ottenimento-e-gestione-dello-zoom-di-un-grafico

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-jz8npi-pnmd5q)

**Come definire lo zoom minimo e massimo / come indicare quanti elementi possono essere visualizzati su asse x 
Lo faccio definendo min e max in categoryAxis!
ESMEPIO: 
  public categoryAxis: any = {
      min: 0,
      max: 10,
  };
In questo modo mostro massimo 10 elementi (da x= 0 a x=10)
ATTENZIONE: min e maz definiscono solo il il livello iniziale di zoom. 
Se l'utente poi esegue zoom, quei valori cambiano.