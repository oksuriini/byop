import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toppings',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './toppings.component.html',
  styleUrl: './toppings.component.css',
})
export class ToppingsComponent {
  @Input()
  wrapperForm!: FormGroup;
}
