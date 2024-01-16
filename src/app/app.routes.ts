import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BaseComponent } from './base/base.component';
import { SauceComponent } from './sauce/sauce.component';
import { ToppingsComponent } from './toppings/toppings.component';
import { FinalComponent } from './final/final.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'base', component: BaseComponent },
  { path: 'sauce', component: SauceComponent },
  { path: 'toppings', component: ToppingsComponent },
  { path: 'final', component: FinalComponent },
];
