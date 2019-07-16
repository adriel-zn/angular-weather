import { Component, OnInit, Input } from '@angular/core';

import { Weather } from '../weather/models/weather.model';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {
  @Input() weatherData: Weather[] = null;
  
  constructor() { }

  ngOnInit() {
    console.log("weatherData: ", this.weatherData);
  }

}
