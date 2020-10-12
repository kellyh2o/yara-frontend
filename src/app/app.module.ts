import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgrxModule } from './ngrx.module';
import { LoginModule } from './login/login.module';
import { LogoutModule } from './logout/logout.module';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module'; 
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgrxModule,
    LoginModule,
    LogoutModule,
    HeaderModule,
    HomeModule,
    PageNotFoundModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
