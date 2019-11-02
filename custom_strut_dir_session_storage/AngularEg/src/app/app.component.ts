import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEg';
  formGroup: FormGroup;
  UserDetails = {
    Name: 'Swaroop',
    UserRole: 'ETAV-LEAD',
    IsActiveUser: false
  };
  constructor(private formBuilder: FormBuilder) {
    // Generally in the blogs it is said that the local Storage and Session Storage stores the values
    // in the form of string but when i checked in the session storage after showing the boolean value is
    // stored as boolen value only
    sessionStorage.setItem('UserDetails', JSON.stringify(this.UserDetails));
    // And While using the reactive forms make sure you are importing the Reactive forms module
    // in the app module.ts or else it will thrown an error like the directive is not a property of Form
    this.formGroup = this.formBuilder.group({
      name: ['default name']
    });
  }
}
