import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToppingChoice } from './ToppingChoice';

@Component({
  selector: 'app-toppings',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './toppings.component.html',
  styleUrl: './toppings.component.css',
})
export class ToppingsComponent implements OnInit {
  wrapperForm!: FormGroup;
  arraySelections: string[] = [];
  choiceList: ToppingChoice[] = [
    { name: 'Pepperoni', value: 'Topping/pepperoniready.png' },
    { name: 'Lettuce', value: 'Topping/lettuceready.png' },
    { name: 'Chicken', value: 'Topping/chickenready.png' },
    { name: 'Pineapple', value: 'Topping/pineappleready.png' },
    { name: 'Strawberry', value: 'Topping/strawberryready.png' },
  ];
  constructor(private rootFormGroup: FormGroupDirective) {}
  disableButton: boolean = true;

  ngOnInit(): void {
    this.wrapperForm = this.rootFormGroup.control;
    this.allowContinue();
  }

  checkChange(event: any) {
    if (event.target.checked) {
      this.arraySelections.push(event.target.value);
      this.wrapperForm.controls['toppings'].setValue(this.arraySelections);
    } else {
      this.arraySelections = this.removeUnchecked(
        this.arraySelections,
        event.target.value,
      );
      this.wrapperForm.controls['toppings'].setValue(this.arraySelections);
    }
  }

  removeUnchecked(arrayToRemoveFrom: string[], unchecked: string): string[] {
    let newArray: string[] = [];
    arrayToRemoveFrom.forEach((element) => {
      if (element != unchecked) newArray.push(element);
    });
    return newArray;
  }

  allowContinue() {
    if (this.wrapperForm.controls['toppings'].value.length <= 3) {
      this.disableButton = false;
    } else {
      this.disableButton = true;
    }
  }
}
