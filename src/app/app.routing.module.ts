import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginViewComponent } from './views/login/login.component';
import { HomeViewComponent } from './views/home/home.component';
import { CatalogViewComponent } from './views/catalog/catalog.component';
import { ErrorComponent } from './views/error/error.component';

@NgModule({
  declarations: [ 
    LoginViewComponent, HomeViewComponent, CatalogViewComponent, ErrorComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginViewComponent },
      { path: 'home', component: HomeViewComponent },
      { path: 'catalog', component: CatalogViewComponent },
      { path: '**', component: ErrorComponent }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


