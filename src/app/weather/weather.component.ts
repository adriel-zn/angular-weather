import { Component, OnInit } from '@angular/core';

import { WeatherRepositoryService } from './services/weather-repository.service';
import { Weather } from './models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  currentCity: Weather = null;
  weathers: Weather[] = null;

  constructor(private weathersRepositoryService: WeatherRepositoryService,) { }

  ngOnInit() {
    this.weathersRepositoryService.getWeathers().subscribe(
      data => {
        this.weathers = data;
        this.currentCity = data[2];
      },
      error => console.error(error)
    );
  }

  trackByFn(index: number, item: Weather) {
    return index; // or item.id
  }

}
