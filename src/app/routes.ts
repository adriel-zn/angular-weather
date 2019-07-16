import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';

export const appRoutes: Routes = [
  { path: '', component: WeatherComponent, },
  { path: 'weather', loadChildren: './weather/weather.module#WeatherModule'}
];
