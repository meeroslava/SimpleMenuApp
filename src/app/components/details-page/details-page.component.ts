import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import Restaurant from '../../models/restaurant.model';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
})
export class DetailsPageComponent implements OnInit {
  isAdmin: boolean;
  restaurant!: Restaurant;
  displayedColumns: string[] = ['dish', 'price'];

  constructor(
    private route: ActivatedRoute,
    public restaSvc: RestaurantService
  ) {
    this.isAdmin = false;
  }

  ngOnInit(): void {
    let restaurantId = this.route.snapshot.params['id'];

    this.route.paramMap.subscribe((params) => {
      this.isAdmin = params.get('isAdmin') === 'true';
    });

    //get restaurant by id
    this.restaSvc
      .getRestaurantById(restaurantId)
      .subscribe((restaurant: Restaurant) => {
        this.restaurant = restaurant;
      });
  }
}
