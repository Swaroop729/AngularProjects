import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  OnInit,
  Input
} from '@angular/core';

@Directive({
  // If not Required you can change the selector name as required and no need to update it anywhere
  selector: '[checkAuthorizationOfForm]'
})
// If you change the class name update in the appmodule.ts as well
export class CheckAuthorizationOfFormDirective implements OnInit {
  // When the variable name is same then there is no need to use the Input Parameter name like shown below
  // Input('ParameterName') variablename:variabletype
  // Take care if many parameters are used then use Camel Casing while naming the variables and Parameter

  @Input()
  checkAuthorizationOfForm: any;

  constructor(
    // Template Ref takes the input of the Div on which it is being called
    private templateRef: TemplateRef<any>,
    //Container Ref renders the above Template Ref which is taken as input when our condition meets
    private containerRef: ViewContainerRef
  ) {}
  ngOnInit() {
    // Instead Of Using the Session Storage in the Directive we can use service to add and remove
    // data to the session storage so if at all we want to change we can change it one place
    let UserDetails = JSON.parse(sessionStorage.getItem('UserDetails'));
    console.log(UserDetails.IsActiveUser);
    if (UserDetails.IsActiveUser) {
      this.containerRef.createEmbeddedView(this.templateRef);
    } else {
      this.checkAuthorizationOfForm.disable();
    }
  }
}
