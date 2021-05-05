import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavAboutUsComponent } from './components/nav-about-us/nav-about-us.component';
import { NavBlogComponent } from './components/nav-blog/nav-blog.component';
import { HomeComponent } from './inicio/home/home.component';
import { NavContactComponent } from './components/nav-contact/nav-contact.component';
import { NavPagesComponent } from './components/nav-pages/nav-pages.component';
import { NavProyectComponent } from './components/nav-proyect/nav-proyect.component';
import { NavServicesComponent } from './components/nav-services/nav-services.component';
import { NavShopComponent } from './components/nav-shop/nav-shop.component';
import { CardsComponent } from './inicio/cards/cards.component';
import { ProjectsComponent } from './inicio/projects/projects.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'',component:CardsComponent},
  {path:'',component:ProjectsComponent},
  {path:'nav-about-us',component:NavAboutUsComponent},
  {path:'nav-blog',component:NavBlogComponent},
  {path:'nav-contact',component:NavContactComponent},
  {path:'nav-pages',component:NavPagesComponent},
  {path:'nav-proyect',component:NavProyectComponent},
  {path:'nav-services',component:NavServicesComponent},
  {path:'nav-shop',component:NavShopComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
