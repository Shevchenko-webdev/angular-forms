import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
  formGroup: FormGroup;

  @ViewChild('skillsInput') skillsInput: ElementRef;

  get skillsArray() {
    return this.formGroup.get('skills') as FormArray;
  }

  ngOnInit() {
    this.initForm();
  }

  // init form
  initForm() {
    this.formGroup = new FormGroup<any>({
      // default value = 'Name'. Prevent set value to null. Required
      firstName: new FormControl('Name', {nonNullable: true, validators: [Validators.required]}),
      // default value = null. Can be set to null. Required
      lastName: new FormControl(null, Validators.required),
      // default value = 'test@gmail.com'. Can be set to null. Required. Email
      email: new FormControl('test@gmail.com', [Validators.email, Validators.required]),
      // another formGroup inside formGroup
      additionalFields: new FormGroup({
        field1: new FormControl(),
        field2: new FormControl(),
        field3: new FormControl(),
      }),
      skills: new FormArray([])
    });
  }

  // dynamically add control to form
  addCountryField() {
    this.formGroup.addControl('country', new FormControl(''));
  }

  // dynamically remove control from form
  removeCountryField() {
    this.formGroup.removeControl('country');
  }

  addSkill() {
    const control = new FormControl(this.skillsInput.nativeElement.value);
    this.skillsInput.nativeElement.value = null;

    (this.formGroup.get('skills') as FormArray).push(control);
  }

  removeSkill(index: number) {
    (this.formGroup.get('skills') as FormArray).removeAt(index);
  }

  // on submit callback
  submit() {
    if (this.formGroup.invalid) return;

    alert('form submitted');
  }

  // reset form values. Reset controls value to 0 if control can be set to null. Reset to default value if control can't be set to null
  reset() {
    this.formGroup.reset();
  }

  log() {
    // Form control get be received using .get('control-name') method
    console.log(this.formGroup.get('lastName'));
    // Form valid/invalid value can be received using 'invalid'/'valid' properties
    // the same way you can reach other form properties like "dirty", "touched"
    console.log(this.formGroup.valid)
    console.log(this.formGroup.invalid)
    console.log(this.formGroup.get('email')?.valid);
    console.log(this.formGroup.get('email')?.invalid);

    // you can watch form or form control value changes using .valueChanges
    this.formGroup.valueChanges.subscribe(value => console.log(value));

    this.formGroup.get('email')?.valueChanges.subscribe(value => console.log(value));
  }
}
