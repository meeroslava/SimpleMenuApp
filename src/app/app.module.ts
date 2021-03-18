import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { RestaurantService } from './services/restaurant.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: ':id',
    component: DetailsPageComponent,
  },
  {
    path: ':id/edit',
    component: EditPageComponent,
    canActivate: [AuthGuardGuard],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    DetailsPageComponent,
    EditPageComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent],
})
export class AppModule {}
