import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-printout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './printout.component.html',
  styleUrl: './printout.component.css',
})
export class PrintoutComponent implements OnInit {
  imgRootPath: string = '../../assets/Pizza/';

  wrapperForm!: FormGroup;
  base!: string;
  sauce!: string;
  toppings!: string[];
  sauceSrc!: string;
  baseSrc!: string;
  toppingsSrc!: string[];

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.wrapperForm = this.rootFormGroup.control;
    this.base = this.wrapperForm.controls['base'].value;
    this.sauce = this.wrapperForm.controls['sauce'].value;
    this.toppings = this.wrapperForm.controls['toppings'].value;

    this.baseSrc = getBasePicture(this.base, this.imgRootPath);
    this.sauceSrc = getSaucePicture(this.sauce, this.imgRootPath);
  }
}

function getBasePicture(base: string, imgRootPath: string): string {
  if (base == 'Pan Pizza') {
    return imgRootPath + 'Bases/pizza_base1ready.png';
  } else if (base == 'Thincrust Pizza') {
    return imgRootPath + 'Bases/pizza_base2ready.png';
  } else if (base == 'Neapolitan Pizza') {
    return imgRootPath + 'Bases/pizza_base4ready.png';
  } else if (base == 'Sheetpan Pizza') {
    return imgRootPath + 'Bases/pizza_base3ready.png';
  } else {
    return 'imageNotFound';
  }
}

function getSaucePicture(sauce: string, imgRootPath: string): string {
  if (sauce == 'BBQ Sauce') {
    return imgRootPath + 'Sauces/sauce1redy.png';
  } else if (sauce == 'Marinara Sauce') {
    return imgRootPath + 'Sauces/sauce2redy.png';
  } else if (sauce == 'Alfredo Sauce') {
    return imgRootPath + 'Sauces/sauce3redy.png';
  } else if (sauce == 'Buffalo Sauce') {
    return imgRootPath + 'Sauces/sauce4redy.png';
  } else {
    return 'imageNotFound';
  }
}
