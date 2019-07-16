import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { WeatherRepositoryService } from './services/weather-repository.service';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule
   ],
  declarations: [ ],
  exports: [ ],
  providers: [ 
    HttpClientModule,
    WeatherRepositoryService
  ]
})
export class WeatherModule { }
