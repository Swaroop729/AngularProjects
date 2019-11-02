import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'LazyModuleRoute',
    // we need to give the route for the module which contains the route information for components
    // And after the # we need  to give the class name of the Module like
    // loadChildren : pathnameofLazyLoadModule#ClassNameOfLazyLoadModule
    loadChildren: './LazyLoadingModules/lazyflat.module#LazyflatModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
