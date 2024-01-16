import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-final',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './final.component.html',
  styleUrl: './final.component.css',
})
export class FinalComponent {
  @Input()
  wrapperForm!: FormGroup;
}
