import { Component } from '@angular/core';
import { data } from './data';

@Component({
    selector: 'my-app',
    template: `
      <kendo-chart renderAs="canvas" [pannable]="true" [zoomable]="true" [categoryAxis]="categoryAxis" [valueAxis]="valueAxis" (zoom)=zoomHandler($event)>
        <kendo-chart-series>
          <kendo-chart-series-item [data]="data" field="value" categoryField="category">
          </kendo-chart-series-item>
        </kendo-chart-series>
      </kendo-chart>
    `
})
export class AppComponent {
    public data: any[] = data;

    public zoomHandler(e) {
      console.log("zoom", e.axisRanges);

      const actualZoom = this.getAtualZoom(e.axisRanges.test.min, e.axisRanges.test.max); 
      console.log(actualZoom)
      if (actualZoom > 10) {
        e.preventDefault();
      }
    }

    getAtualZoom(max: number, min: number) {
      if (min == null) return -1;
      if (max == null) return -1;
      return -(max - min);
    }

    public categoryAxis: any = {
        min: 10,
        max: 20,
        name: "test"
    };

    public valueAxis: any = {
        labels: {
            format: '#.00'
        }
    };
}
