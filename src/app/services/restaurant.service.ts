import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import Restaurant from '../models/restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  restaUrl = `${environment.apiUrl}/restaurants`;

  constructor(private http: HttpClient) {}

  public getRestaurants(): Observable<Restaurant[]> {
    return this.http
      .get(this.restaUrl)
      .pipe(map((response) => response as Restaurant[]));
  }

  public getRestaurantById(id: string): Observable<Restaurant> {
    //console.log(id);
    return this.http
      .get(`${this.restaUrl}/${id}`)
      .pipe(map((response) => response as Restaurant));
  }
}
