import {Component, OnDestroy, OnInit} from '@angular/core';
import {MeasurementService} from '../../services/measurement.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {

  value = 0;
  index = 0;
  hints = [['Open Window', 'In case of slightly bad air quality do this basic instructions'],
    ['Some Hint', 'In case of slightly bad air quality do this basic instructions'],
    ['Some Hint', 'In case of slightly bad air quality do this basic instructions']];
  active = true;

  constructor(private measurementService: MeasurementService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy() {
    this.active = false;
  }

  nextHint(dir: number) {
    this.index = this.index + dir;
  }

  private async getData() {
    while (this.active) {
      this.measurementService.getMeasurement().subscribe(
        (measurement) => {
          console.log(measurement.value);
          if (measurement.value !== 0) {
            this.value = measurement.value;
          }
        }
      );
      await this.delay(2000);
    }
  }

  private delay(milliseconds) {
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }
}
