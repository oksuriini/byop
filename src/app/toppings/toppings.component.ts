import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToppingChoice, getToppings } from './ToppingChoice';

@Component({
  selector: 'app-toppings',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './toppings.component.html',
  styleUrl: './toppings.component.css',
})
export class ToppingsComponent implements OnInit {
  wrapperForm!: FormGroup;
  arraySelections: number[] = [];
  baseSrc: string = '../../assets/Pizza/Topping/';
  choiceList: ToppingChoice[] = getToppings();

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

  removeUnchecked(arrayToRemoveFrom: number[], unchecked: number): number[] {
    let newArray: number[] = [];
    arrayToRemoveFrom.forEach((element: any) => {
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
