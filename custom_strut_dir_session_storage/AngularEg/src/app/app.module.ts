import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckAuthorizationOfFormDirective } from 'src/CustomStructuralDirective/check-authorization-of-form.directive';

@NgModule({
  declarations: [AppComponent, CheckAuthorizationOfFormDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
