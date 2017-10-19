
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  retrieveCityWeather(city: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}}&APPID=24716bd3a53b3aa30e27f2bf8634d41f`)
    .map( data => data.json() )
    .toPromise();
  }

}
