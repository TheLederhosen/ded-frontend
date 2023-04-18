import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Measurement} from '../dtos/measurement';
import {Globals} from '../global/globals';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  private arduinoBaseUri: string = this.globals.backendUri;
  private headers = new HttpHeaders();
  private options = {
    headers: this.headers,
  };

  constructor(
    private http: HttpClient,
    private globals: Globals) {
  }

  getMeasurement(): Observable<Measurement> {
    return this.http.get<Measurement>(this.arduinoBaseUri, this.options);
  }
}
