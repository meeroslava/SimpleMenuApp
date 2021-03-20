import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private router: Router,
    public restaSvc: RestaurantService,
    public formBuild: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    let restaurantName = this.route.snapshot.params['name'];

    //get restaurant by id
    this.restaSvc
      .getRestaurantByName(restaurantName)
      .subscribe((restaurant: Restaurant) => {
        this.restaurant = restaurant;
        this.editForm.patchValue({ name: this.restaurant.menu.name }); //populate form
        var detailsArr = this.setDetails(this.restaurant);
        this.editForm.setControl('details', detailsArr); //append details array to form
      });
  }

  //fill array of menu details
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
    return formArray;
  }

  //menu details to show in form
  get details(): FormArray {
    return this.editForm.get('details') as FormArray;
  }

  onFormSubmit(): void {
    if (this.editForm.valid) {
      {
      }
      this.restaSvc
        .updateRestaurant(
          this.route.snapshot.params['name'],
          this.editForm.getRawValue()
        )
        .subscribe((result) => console.log(result.status));

      this.snackBar.open('Form submitted', 'Yay', {
        verticalPosition: 'top',
        politeness: 'assertive',
      });
      this.router.navigate(['/']);
    }
  }
}
