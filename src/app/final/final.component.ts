import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-final',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './final.component.html',
  styleUrl: './final.component.css',
})
export class FinalComponent implements OnInit {
  wrapperForm!: FormGroup;
  disableButton!: boolean;
  constructor(private parentForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.wrapperForm = this.parentForm.control;
  }
}
