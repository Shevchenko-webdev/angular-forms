import {Component, Input, Optional, Self} from '@angular/core';
import {ControlValueAccessor, NgControl} from "@angular/forms";

@Component({
  selector: 'app-advanced-input',
  templateUrl: './advanced-input.component.html',
  styleUrls: ['./advanced-input.component.scss'],
})
export class AdvancedInputComponent implements ControlValueAccessor {
  @Input() label: string;

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
