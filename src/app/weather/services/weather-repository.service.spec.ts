import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WeatherRepositoryService } from './weather-repository.service';
import { cityOne, cityTwo} from '../mock/sample.data';

describe('Weather Service', () => {
  let httpTestingController: HttpTestingController;
  let service: WeatherRepositoryService;

  const weatherArr = [
    cityOne,
    cityTwo
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        WeatherRepositoryService
      ]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(WeatherRepositoryService);
  });

  describe('getWeather', () => {
    it('should call get method to retrieve Weather data with the correct URL', () => {
      service.getWeathers().subscribe(weatherArr => {
        expect(weatherArr[1].name).toEqual('amsterdam');
      });
      const req = httpTestingController.expectOne('api/weather');
      req.flush(weatherArr);
      httpTestingController.verify();
    });
  });

});
