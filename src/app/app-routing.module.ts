import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { WebboardComponent } from './components/webboard/webboard.component';

const routes: Routes = [
  { path: '', redirectTo: "product" , pathMatch:"full"},
  { path: 'home', component:  HomeComponent},
  { path: 'product', component: ProductComponent},
  { path: 'about', component:  AboutComponent},
  { path: 'webboard', component: WebboardComponent },
  { path: 'contact', component:  ContactComponent},

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
