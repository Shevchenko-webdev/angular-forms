import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-advanced-form',
  templateUrl: './advanced-form.component.html',
  styleUrls: ['./advanced-form.component.scss']
})
export class AdvancedFormComponent implements OnInit{
  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup<any>({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submit() {
    if (this.formGroup.invalid) return;

    alert('form submitted');
  }
}
