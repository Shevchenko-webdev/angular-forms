import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LettersOnlyValidator} from "../validators/letters-only.validator";

@Component({
  selector: 'app-advanced-form',
  templateUrl: './advanced-form.component.html',
  styleUrls: ['./advanced-form.component.scss']
})
export class AdvancedFormComponent implements OnInit {
  formGroup: FormGroup;
  logErrors: boolean = false;

  ngOnInit() {
    this.initForm();
  }

  // init form
  initForm() {
    this.formGroup = new FormGroup<any>({
      // added validators:
      // - field is required
      // - field required min length
      // - letters only - custom validator (angular-forms/src/app/validators/letters-only.validator.ts)
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), LettersOnlyValidator.createValidator()]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(5), LettersOnlyValidator.createValidator()]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submit() {
    if (this.formGroup.invalid) return;

    alert('form submitted');
  }
}
