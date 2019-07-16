import { Component, OnInit } from '@angular/core';

import { WeatherRepositoryService } from './services/weather-repository.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private weathersRepositoryService: WeatherRepositoryService,) { }

  ngOnInit() {
    this.weathersRepositoryService.getWeathers().subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }

}
