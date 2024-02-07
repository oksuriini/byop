import { Component } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SauceChoice, getSauces } from './SauceChoice';

@Component({
  selector: 'app-sauce',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sauce.component.html',
  styleUrl: './sauce.component.css',
})
export class SauceComponent {
  baseSrc: string = '../../assets/Pizza/Sauces/';
  wrapperForm!: FormGroup;
  sauceList!: SauceChoice[];
  constructor(private rootFormGroup: FormGroupDirective) {}
  disableButton: boolean = true;

  ngOnInit(): void {
    this.wrapperForm = this.rootFormGroup.control;
    this.allowContinue();
    this.sauceList = getSauces();
  }

  allowContinue() {
    if (this.wrapperForm.controls['sauce'].value != '') {
      this.disableButton = false;
    } else {
      this.disableButton = true;
    }
  }
}
