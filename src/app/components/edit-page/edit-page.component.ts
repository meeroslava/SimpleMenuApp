import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormArray } from '@angular/forms';
import { RestaurantService } from '../../services/restaurant.service';
import Restaurant from '../../models/restaurant.model';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
})
export class EditPageComponent implements OnInit {
  restaurant!: Restaurant;

  editForm = this.formBuild.group({
    name: new FormControl(''),
    details: this.formBuild.array([]),
  });

  constructor(
    private route: ActivatedRoute,
    public restaSvc: RestaurantService,
    public formBuild: FormBuilder
  ) {}

  ngOnInit(): void {
    let restaurantId = this.route.snapshot.params['id'];

    //get restaurant by id
    this.restaSvc
      .getRestaurantById(restaurantId)
      .subscribe((restaurant: Restaurant) => {
        this.restaurant = restaurant;
        this.editForm.patchValue({ name: this.restaurant.menu.name }); //populate form
        var detailsArr = this.setDetails(this.restaurant);
        this.editForm.setControl('details', detailsArr); //append details array to form
      });
  }
  setDetails(restaurant: Restaurant): FormArray {
    const formArray = new FormArray([]);
    restaurant.menu.details.forEach((detail) => {
      formArray.push(
        this.formBuild.group({
          dish: detail.dish,
          price: detail.price,
        })
      );
    });
    console.log(formArray);
    return formArray;
  }

  get details(): FormArray {
    return this.editForm.get('details') as FormArray;
  }
}
