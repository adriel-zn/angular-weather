import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// RxJs
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs/internal/observable/of";
import { catchError, tap } from "rxjs/operators";

// Models
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: "root"
})
export class WeatherRepositoryService {
  private endpoint = "api/weather";

  constructor(private http: HttpClient) {}

  getWeathers(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.endpoint).pipe(
      tap(_ => console.log(`fetched weather list`)),
      catchError(this.handleError("getWeather", []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
