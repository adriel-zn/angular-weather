import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets } from "chart.js";
import { Color, Label } from "ng2-charts";

import { Weather } from '../weather/models/weather.model';
import { RandomNumberService } from './services/random-numbers.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {
  @Input() weatherData: Weather[] = null;
  
  weatherChartData: Array<number> = [];
  today: object = null;

  public lineChartData: ChartDataSets[] = [{ data: [] }];
  public lineChartLabels: Label[] = [
    "00:00",
    "03:00",
    "06:00",
    "09:00",
    "12:00",
    "15:00",
    "18:00",
    "21:00",
    "23:59"
  ];
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Color[] = [
    {
      borderColor: "#fd0087",
      backgroundColor: "#0C162A"
    }
  ];
  public lineChartLegend = false;
  public lineChartType = "line";

  constructor(private randomNumberService: RandomNumberService) {}

  ngOnInit() {
    this.generateRandomChartData();
    this.generateCurrentDateTime();
  }

  generateRandomChartData() {
    this.weatherChartData = [];
    const { temp_min, temp_max } = this.weatherData["main"];

    for (let index = 1; index <= 6; index++) {
      this.weatherChartData.push(this.randomNumberService.generate(temp_min, temp_max));
    }
    this.weatherChartData.unshift(temp_min);
    this.weatherChartData.push(temp_max);
    this.weatherChartData.push(temp_min);

    this.lineChartData[0].data = this.weatherChartData;
  }

  generateCurrentDateTime() {
    const local = "en-US";
    const now = new Date();
    this.today = {
      time: this.getTime(now, local),
      date: this.getDate(now, local),
      day: this.getDayName(now, local)
    };
  }

  getTime(date: Date, local: string) {
    return date.toLocaleTimeString(local, {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  getDate(date: Date, local: string) {
    return date.toLocaleDateString(local, { day: "numeric", month: "long" });
  }
  getDayName(date: Date, local: string) {
    return date.toLocaleDateString(local, { weekday: "long" });
  }

}
