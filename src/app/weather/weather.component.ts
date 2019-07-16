import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { WeatherRepositoryService } from './services/weather-repository.service';
import { Weather } from './models/weather.model';
import { FadeIn } from '../shared/animations';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  animations: [
    FadeIn
  ]
})
export class WeatherComponent implements OnInit {
  currentCity: Weather = null;
  weathers: Weather[] = null;
  selectedCityName: string;

  constructor(
    private weathersRepositoryService: WeatherRepositoryService,
    private router: Router) { 
      this.router.events.subscribe((val: any) => {
        this.selectedCityName = this.getParameterByName("city", val.url) || "paris";
        if (val instanceof NavigationEnd && this.weathers) {
          this.selectCityByName(this.selectedCityName);
        }
      });
    }

  ngOnInit() {
    this.weathersRepositoryService.getWeathers().subscribe(
      data => {
        this.weathers = data;
        this.selectCityByName(this.selectedCityName);
      },
      error => console.error(error)
    );
  }

  trackByFn(index: number, item: Weather) {
    return index; // or item.id
  }

  private selectCityByName(city: string) {
    this.currentCity = this.weathers.find(x => x.name.toLowerCase() == city);
  }

  private getParameterByName(name: string, url: string) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return "";
    }
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

}
