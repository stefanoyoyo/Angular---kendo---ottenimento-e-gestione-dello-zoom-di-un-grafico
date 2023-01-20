import { Component } from '@angular/core';
import { ZoomEvent } from '@progress/kendo-angular-charts';
import { data } from './data';

@Component({
    selector: 'my-app',
    template: `
      <kendo-chart 
        renderAs="canvas" 
        [pannable]="true" 
        [zoomable]="true" 
        (zoom)=zoomHandler($event)
        [categoryAxis]="categoryAxis" 
        [valueAxis]="valueAxis">
        <kendo-chart-series>
          <kendo-chart-series-item [data]="data" field="value" categoryField="category">
          </kendo-chart-series-item>
        </kendo-chart-series>
      </kendo-chart>
    `
})
export class AppComponent {
    public data: any[] = data;

    public zoomHandler(e: ZoomEvent) {
      console.log("zoom", e.axisRanges);
      const actualZoom = this.getAtualZoom(e.axisRanges.test.min as number, e.axisRanges.test.max as number); 
      console.log(actualZoom)
      if (actualZoom > 10) {
        console.log('zoom denied')
        e.preventDefault();
      }
    }

    getAtualZoom(max: number, min: number) {
      if (min == null) return -1;
      if (max == null) return -1;
      return -(max - min);
    }

    public categoryAxis: any = {
        min: 0,
        max: 100,
        name: "test",
        labels: {
          step: 5,
        }
        // visible: true // visible asse
    };

    public valueAxis: any = {
        labels: {
            format: '#.00'
        }
    };
}
