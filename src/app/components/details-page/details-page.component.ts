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
  public showEdit: boolean = false;
  restaurant!: Restaurant;
  displayedColumns: string[] = ['dish', 'price'];

  constructor(
    private route: ActivatedRoute,
    public restaSvc: RestaurantService
  ) {}

  ngOnInit(): void {
    //indication of admin param
    if (location.search.indexOf('isAdmin=true') > -1) {
      this.showEdit = true;
    }

    let restaurantName = this.route.snapshot.params['name'];
    this.isLoading = true;

    //get restaurant by id
    this.restaSvc
      .getRestaurantByName(restaurantName)
      .subscribe((restaurant: Restaurant) => {
        this.restaurant = restaurant;
        this.isLoading = false;
      });
  }
}
