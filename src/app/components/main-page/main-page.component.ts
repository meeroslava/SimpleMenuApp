import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import Restaurant from '../../models/restaurant.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  public error: string | null = null;
  restaurantsList!: Restaurant[];
  constructor(public restaSvc: RestaurantService) {}

  ngOnInit() {
    this.error = localStorage.getItem('error');

    localStorage.removeItem('error');

    this.restaSvc.getRestaurants().subscribe((restaurants) => {
      this.restaurantsList = restaurants;
    });
  }
}
