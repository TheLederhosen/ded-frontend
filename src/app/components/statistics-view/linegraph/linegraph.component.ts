import {Component, OnDestroy, OnInit} from '@angular/core';
import {multi} from '../../../../assets/data';
import {MeasurementService} from "../../../services/measurement.service";

@Component({
  selector: 'app-linegraph',
  templateUrl: './linegraph.component.html',
  styleUrls: ['./linegraph.component.scss']
})
export class LinegraphComponent implements OnInit, OnDestroy {

  multi: any[];

  // options
  legend: boolean = false;
  showLabels: boolean = false;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'CO2 Measurement (ppm)';
  timeline: boolean = true;
  active = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private measurementService: MeasurementService) {
  }

  ngOnInit(): void {
    Object.assign(this, {multi});
    this.getData();
  }

  ngOnDestroy() {
    this.active = false;
  }

  private async getData() {
    while (this.active) {
      this.measurementService.getMeasurement().subscribe(
        (measurement) => {
          console.log(measurement.value);
          let time = new Date();
          if (measurement.value !== 0) {
            this.multi[0].series = [...this.multi[0].series, ...[{
              "name": time.getHours().toString() + ":" + time.getMinutes().toString() + ":" + time.getSeconds().toString(),
              "value": measurement.value
            }]];
            this.multi = [...this.multi];
          }
        }
      );
      await this.delay(5000);
    }
  }

  private delay(milliseconds) {
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }
}
