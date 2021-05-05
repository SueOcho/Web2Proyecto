import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { NavAboutUsComponent } from './components/nav-about-us/nav-about-us.component';
import { NavBlogComponent } from './components/nav-blog/nav-blog.component';
import { NavContactComponent } from './components/nav-contact/nav-contact.component';
import { NavPagesComponent } from './components/nav-pages/nav-pages.component';
import { NavProyectComponent } from './components/nav-proyect/nav-proyect.component';
import { NavServicesComponent } from './components/nav-services/nav-services.component';
import { NavShopComponent } from './components/nav-shop/nav-shop.component';
import { BannerComponent } from './inicio/banner/banner.component';
import { BrandComponent } from './inicio/brand/brand.component';
import { CounterComponent } from './inicio/counter/counter.component';
import { ExploreComponent } from './inicio/explore/explore.component';
import { HomeComponent } from './inicio/home/home.component';
import { NosotrosComponent } from './inicio/nosotros/nosotros.component';
import { ServicesComponent } from './inicio/services/services.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    MainHeaderComponent,
    NavAboutUsComponent,
    NavBlogComponent,
    NavContactComponent,
    NavPagesComponent,
    NavProyectComponent,
    NavServicesComponent,
    NavShopComponent,
    BannerComponent,
    BrandComponent,
    CounterComponent,
    ExploreComponent,
    HomeComponent,
    NosotrosComponent,
    ServicesComponent,
    MainNavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
