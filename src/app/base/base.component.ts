import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BaseChoice, getBases } from './BaseChoice';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css',
})
export class BaseComponent implements OnInit {
  baseSrc = '../../assets/Pizza/Bases/';
  baseList!: BaseChoice[];
  wrapperForm!: FormGroup;
  disableButton: boolean = true;
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.wrapperForm = this.rootFormGroup.control;
    this.allowContinue();
    this.baseList = getBases();
  }

  allowContinue() {
    if (this.wrapperForm.controls['base'].value != '') {
      this.disableButton = false;
    } else {
      this.disableButton = true;
    }
  }
}
