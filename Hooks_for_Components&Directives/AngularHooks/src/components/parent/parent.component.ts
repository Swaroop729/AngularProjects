// Visit the notes.txt as well to understand

import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges {
  // The Fiels are better to be private so it can be  only accessed in the given class
  // we need to use the methods like set and get accessors for using that variable
  private numberInParent = 2234;

  // variable to change as pass by value which trigger ngOnChanges
  name = 'Santhi';

  // Variable to change as pass by reference which trigger ngDoCheck
  userDetailsObj = {
    Username: 'ParentName'
  };

  // As we have changed only the value in some object properties the memory is not changed so it is
  // going for the pass by reference but while changing the entire object like below
  // userDetailsObj = { Username : 'Alexander'} in the update fuction
  // it creates a new memory as you are assigning a new object and it triggers the
  // ngOnChanges instead of the ngDoCheck
  // you can go with any methods as you like

  constructor() {}

  set number(value) {
    this.numberInParent = value;
  }

  // In Html if we need to get the value of the numberInParent value then
  // we need to call using the {{number}}
  get number() {
    return this.numberInParent;
  }

  Increment() {
    // Watch Out how the number set accessor is used like a field only
    this.number++;
  }
  Decrement() {
    this.number--;
  }

  // ngOnChanges is called first before the ngOnInit functions is called in Child but the Parents
  // ngOnChanges in Parent comp is not called only ngOnInit is called for first time but where as in the
  // Child Comp's ngOnChanges is called before ngOnInit whenever the changes are done.
  ngOnChanges() {
    console.log('Coming into Parent Onchanges function');
  }

  // We can Observe while Incresaing and Decreasing the counter the ngOnInit is not calling and is calling
  // only on Initiliazation of a particular component
  ngOnInit() {
    console.log('Coming into Parent OnInit');
  }

  // updating value
  updateName() {
    this.name = 'Swaroop';
  }

  // updating a reference or a value in object not the object exactly
  updateObj() {
    this.userDetailsObj.Username = 'changing to Child name';
  }
  isVisibility = true;
  Visibility() {
    this.isVisibility = !this.isVisibility;
  }
}
