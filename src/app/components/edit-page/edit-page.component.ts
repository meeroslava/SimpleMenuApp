import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import Restaurant from '../../models/restaurant.model';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
})
export class EditPageComponent implements OnInit {
  restaurant!: Restaurant;
  constructor(
    private route: ActivatedRoute,
    public restaSvc: RestaurantService
  ) {}

  ngOnInit(): void {
    let restaurantId = this.route.snapshot.params['id'];

    //get restaurant by id
    this.restaSvc
      .getRestaurantById(restaurantId)
      .subscribe((restaurant: Restaurant) => {
        this.restaurant = restaurant;
      });
  }
}
