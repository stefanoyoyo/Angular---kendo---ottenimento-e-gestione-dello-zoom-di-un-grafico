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
DUNQUE: per far ein modo che i grafico parta con un certo zoom su 
una definita porzione del grafico, bisogna impostare 
chart.categoryAxis.min e chart.categoryAxis.max


-----23/01/2023-----

E' possibile definire il numero di labels da visualizzare sull'asse x in due modi: 
- assegnando l'oggetto categoryAxis.labels.steps
- inserendo un elemento kendo-chart-category-axis-item-labels nel tmeplate del grafico.
Il secondo modo permette di avere un controllo a runtime sul valore di steps. 
Posso ad esmepio fare in modo che il valore di steps cambi a seconda dello stato di 
apertura / chiusura della dialog del grafico.

ESMPPIO:
<kendo-chart-category-axis>
  <kendo-chart-category-axis-item [categories]="categories">
    <kendo-chart-category-axis-item-labels color="#ff00ff" [step]="xAxisLabelsSteps">
    </kendo-chart-category-axis-item-labels>
  </kendo-chart-category-axis-item>
</kendo-chart-category-axis>