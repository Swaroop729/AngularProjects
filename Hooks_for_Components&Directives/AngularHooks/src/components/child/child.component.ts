import {
  Component,
  OnInit,
  Input,
  SimpleChange,
  SimpleChanges,
  OnChanges
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  // Using the Set Accessor for the input variable observe how it is used and how it is called
  // in the Parent Comp html
  @Input() set numberinChild(value: number) {
    this.childnum = value;
  }

  get numberinChild() {
    return this.childnum;
  }

  constructor() {}
  // Private variable so it can be accessible by the class
  private childnum: number;

  // Here when two inputs are passed when the child comp is rendering for first then we can
  // see two objects in the simplechanges object
  @Input() name: string;

  @Input() Obj: any;
  isVisible = true;

  ngOnChanges(changes: SimpleChanges): void {
    // The Simple Changes varibles is like json having the
    // currentValue , firstChange(boolean), previousValue in it
    // if this the first time change then firstChange is true and

    // const changevariable: SimpleChange = changes.numberinChild;
    console.log('Coming into Child OnChanges function');

    console.log('Simple Changes variable', changes);

    // simple change variable printing in Console
    // console.log('Simple Change Object',changevariable)

    // this.numberinChild = changevariable.currentValue;
  }

  ngOnInit() {
    console.log('Coming into Child OnInit');
  }
  ngDoCheck(changes: SimpleChanges) {
    console.log(
      'Coming into Docheck some variable has been changed by reference'
    );
  }

  ngOnDestroy() {
    console.log('coming into ngOnDestroy method');
  }
}
