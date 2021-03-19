import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import Restaurant from '../models/restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  restaUrl = `${environment.apiUrl}/restaurants`;

  constructor(private http: HttpClient) {}

  public getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.restaUrl);
  }

  public getRestaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.restaUrl}/${id}`);
  }

  public updateRestaurant(id: string, data: any): Observable<any> {
    return this.http.post(`${this.restaUrl}/${id}/post`, data);
  }
}
