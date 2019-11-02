import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';
import { LazyChildComponent } from './lazy-child/lazy-child.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // We are defining the individual components route
  // we can have a multiple components we we want to load several components associated to one module
  { path: 'ComponentRoute', component: LazyParentComponent }
  // Here the child component is invoked by the selector of the child comp which is used in the parent
  // comp html and thus it is invoked it is not invoked through the lazy loading

  // Only lazy loading is invoked by the button click when it is re routed to Parent Component
  // as child selector is called in parent comp html the child comp is invoked from there
];

@NgModule({
  declarations: [LazyParentComponent, LazyChildComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class LazyflatModule {}

// Using the --flat flag while creating a module doesn't create a directory for the module
// As shown there is directory for LazyModule and no directory for LazyflatModule
