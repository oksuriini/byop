import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css',
})
export class WrapperComponent implements OnInit {
  wrapperForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.wrapperForm = this.formBuilder.group({
      base: new FormControl(''),
      sauce: new FormControl(''),
      toppings: new FormControl([]),
    });
  }
}
