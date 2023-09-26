import {Component, Input, Optional, Self} from '@angular/core';
import {ControlValueAccessor, NgControl} from "@angular/forms";

// this component presents example of ControlValueAccessor Angular component
// ControlValueAccessor can be used to create custom form component with complex template and functionality
// Using ControlValueAccessor you can reuse any form control component and use formControlName attribute to detect/save changes of form initialized in parent component
// ControlValueAccessor component should contain some required properties:
// 1. onChange → the callback function to register on UI change
// 2. onTouch → the callback function to register on element touch
// 3. set value(val: any) → sets the value used by the ngModel of the element
// 4. writeValue(value: any) → This will write the value to the view if the value changes occur on the model programmatically
// 5. registerOnChange(fn: any) → When the value in the UI is changed, this method will invoke a callback function
// 6. registerOnTouch(fn: any) → When the element is touched, this method will get called

@Component({
  selector: 'app-advanced-input',
  templateUrl: './advanced-input.component.html',
  styleUrls: ['./advanced-input.component.scss'],
})

export class AdvancedInputComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() logErrors: boolean = false;

  onChange: any = () => {
  };
  onTouch: any = () => {
  };

  _value: string = "";

  set value(val) {
    this.onChange(val)
    this.onTouch(val)
  }

  get value() {
    return this._value
  }

  constructor(@Optional() @Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

// this method sets the value programmatically
  writeValue(value: any) {
    this.value = value
  }

// upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn
  }

// upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn
  }
}
