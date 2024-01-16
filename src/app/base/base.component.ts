import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css',
})
export class BaseComponent implements OnInit {
  wrapperForm!: FormGroup;
  disableButton: boolean = true;
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.wrapperForm = this.rootFormGroup.control;
  }
  allowContinue() {
    if (this.wrapperForm.controls['base'].value != '') {
      this.disableButton = false;
    } else {
      this.disableButton = true;
    }
  }
}
