import {forwardRef, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SimpleFormComponent} from './simple-form/simple-form.component';
import {AdvancedFormComponent} from './advanced-form/advanced-form.component';
import {FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {NavigationComponent} from './navigation/navigation.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {AdvancedInputComponent} from './advanced-form/advanced-input/advanced-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    AdvancedFormComponent,
    NavigationComponent,
    AdvancedInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdvancedInputComponent),
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
