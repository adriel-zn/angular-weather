import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { WeatherComponent } from './weather/weather.component';
import { appRoutes } from './routes';
import { InMemoryWeathersDataService } from './weather/services/in-memory-weathers-data.service';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    CoreModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryWeathersDataService)
  ],
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
