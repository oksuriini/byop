import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { BaseChoice } from '../base/BaseChoice';
import { SauceChoice } from '../sauce/SauceChoice';
import {
  ToppingChoice,
  getToppingPicturesById,
} from '../toppings/ToppingChoice';

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
  base!: BaseChoice;
  sauce!: SauceChoice;
  toppings!: number[];
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
    this.toppingsSrc = getToppingPictures(this.toppings, this.imgRootPath);
    console.log(this.toppingsSrc);
  }
}

function getBasePicture(base: BaseChoice, imgRootPath: string): string {
  return imgRootPath + 'Bases/' + base.image;
}

function getSaucePicture(sauce: SauceChoice, imgRootPath: string): string {
  return imgRootPath + 'Sauces/' + sauce.image;
}

function getToppingPictures(toppings: number[], imgRootPath: string): string[] {
  let toppingPics: string[] = [];
  getToppingPicturesById(toppings).forEach((element) => {
    toppingPics.push(imgRootPath + 'Topping/' + element);
  });
  return toppingPics;
}
