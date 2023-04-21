import {Component} from '@angular/core';
import {single} from '../../../../assets/data';

@Component({
  selector: 'app-bargraph',
  templateUrl: './bargraph.component.html',
  styleUrls: ['./bargraph.component.scss']
})
export class BargraphComponent {

  multi: any[];
  single: any[];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'CO2 Measurement (ppm)';

  colorScheme = {
    domain: ['#AAAAAA']
  };

  constructor() {
    Object.assign(this, {single});
  }

  onSelect(event) {
    console.log(event);
  }
}

