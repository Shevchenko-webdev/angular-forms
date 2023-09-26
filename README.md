# Angular Popups

The project contains an example of using ReactiveFormsModule in Angular

## How to start

1. `npm install` to install all necessary dependencies
2. `ng serve` to run project on localhost

## Description

Project contains:

### `NavigationComponent`
Contains simple navigation menu

### `SimpleFormComponent`
The component contains template and functionality of simple Angular form. 
Component contains:
- common child `FormControls` with simple default validations
- child `FormGroup` with 3 `FormControls` inside
- dynamic `FormControl` that can be added/removed by button click
- `FormArray`, that can be filled with child `FormControls` by button click. Remember, that `FormArray` can store not only `FormControl`, but even `FormGroups` - it can be used to create complex custom forms with dynamic fields
Form in this component contains a lot of AngularMaterial component as an example
.ts file of this component contains following methods:
- `initForm()` - uses to initialize `FormGroup` and it's controls
- `addCountryField()` - add dynamic `FormControl`
- `removeCountryField()` - remove dynamic `FormControl`
- `addSkill()` - uses to create new `FormControl` with value from input and push it to `FormArray`
- `removeSkill()` - uses to remove`FormControl` from `FormArray` by it's index
- `submit()` - form submit callback
- `reset()` - used to reset form values to null or default value (depends on `nonNullable` `FormControl` option)
- `log()` - method contains some Angular form and `FormControl`s features with description

### `AdvancedFormComponent`
The component contains template and functionality of form, that `ControlValueAccessor` form components
Component contains:
- 3 `ControlValueAccessor` form components
- custom validator

.ts file of this component contains following methods:
- `initForm()` - uses to initialize `FormGroup` and it's controls
- `submit()` - form submit callback

### `AdvancedInputComponent`
The component contains example of `ControlValueAccessor` `FormControl`
Template of its component contains:
- legacy html input that uses to change `FormControl` value
- error block, that displays different errors based on current `FormControl` errors

.ts file of this component contains default `ControlValueAccessor` interface with all required methods
Also added feature, how to use NgComponent properties inside `ControlValueAccessor` component

