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
  isLoading: boolean = false;
  public error: string | null = null;
  restaurant!: Restaurant;
  displayedColumns: string[] = ['dish', 'price'];

  constructor(
    private route: ActivatedRoute,
    public restaSvc: RestaurantService
  ) {}

  ngOnInit(): void {
    this.error = localStorage.getItem('error'); //edit denied
    let restaurantId = this.route.snapshot.params['id'];

    //get restaurant by id
    this.isLoading = true;
    this.restaSvc
      .getRestaurantById(restaurantId)
      .subscribe((restaurant: Restaurant) => {
        this.restaurant = restaurant;
        this.isLoading = false;
      });
  }
}
