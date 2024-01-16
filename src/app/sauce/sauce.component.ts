import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sauce',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sauce.component.html',
  styleUrl: './sauce.component.css',
})
export class SauceComponent {
  wrapperForm!: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}
  disableButton: boolean = true;

  ngOnInit(): void {
    this.wrapperForm = this.rootFormGroup.control;
  }

  allowContinue() {
    if (this.wrapperForm.controls['sauce'].value != '') {
      this.disableButton = false;
    } else {
      this.disableButton = true;
    }
  }
}
