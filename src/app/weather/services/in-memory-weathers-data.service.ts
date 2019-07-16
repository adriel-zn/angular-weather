import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryWeathersDataService implements InMemoryDbService {
  createDb() {
    const weather = [
      {
        coord: {
          lon: 4.89,
          lat: 52.37
        },
        sys: {
          country: "NL",
          timezone: 7200,
          sunrise: 1563161752,
          sunset: 1563220586
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n"
          }
        ],
        main: {
          temp: 15.22,
          pressure: 1020,
          humidity: 77,
          temp_min: 14,
          temp_max: 16.11
        },
        visibility: 10000,
        wind: {
          speed: 3.1,
          deg: 330
        },
        clouds: {
          all: 75
        },
        dt: 1563221359,
        id: 2759794,
        name: "Amsterdam"
      },
      {
        coord: {
          lon: 13.41,
          lat: 52.52
        },
        sys: {
          country: "DE",
          timezone: 7200,
          sunrise: 1563159659,
          sunset: 1563218589
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n"
          }
        ],
        main: {
          temp: 16.32,
          pressure: 1015,
          humidity: 63,
          temp_min: 15,
          temp_max: 17.78
        },
        visibility: 10000,
        wind: {
          speed: 4.1,
          deg: 300
        },
        clouds: {
          all: 75
        },
        dt: 1563221361,
        id: 2950159,
        name: "Berlin"
      },
      {
        coord: {
          lon: 2.35,
          lat: 48.85
        },
        sys: {
          country: "FR",
          timezone: 7200,
          sunrise: 1563163356,
          sunset: 1563220201
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n"
          }
        ],
        main: {
          temp: 19.48,
          pressure: 1019,
          humidity: 52,
          temp_min: 17,
          temp_max: 21
        },
        visibility: 10000,
        wind: {
          speed: 3.1,
          deg: 10
        },
        clouds: {
          all: 0
        },
        dt: 1563221361,
        id: 2988507,
        name: "Paris"
      },
      {
        coord: {
          lon: -0.13,
          lat: 51.51
        },
        sys: {
          country: "GB",
          timezone: 3600,
          sunrise: 1563163219,
          sunset: 1563221528
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d"
          }
        ],
        main: {
          temp: 17.36,
          pressure: 1021,
          humidity: 60,
          temp_min: 14.44,
          temp_max: 20
        },
        visibility: 10000,
        wind: {
          speed: 4.6,
          deg: 90
        },
        clouds: {
          all: 75
        },
        dt: 1563221358,
        id: 2643743,
        name: "London"
      },
      {
        coord: {
          lon: 12.48,
          lat: 41.89
        },
        sys: {
          country: "IT",
          timezone: 7200,
          sunrise: 1563162453,
          sunset: 1563216242
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02n"
          }
        ],
        main: {
          temp: 22.05,
          pressure: 1006,
          humidity: 50,
          temp_min: 17.78,
          temp_max: 26
        },
        visibility: 10000,
        wind: {
          speed: 1.5,
          deg: 110
        },
        clouds: {
          all: 20
        },
        dt: 1563221362,
        id: 3169070,
        name: "Roma"
      }
    ];
    return { weather };
  }
}
