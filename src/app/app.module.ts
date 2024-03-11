import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./authorisation/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import {NavigationComponent} from "./shared/components/navigation/nav.component";
import {LayoutComponent} from "./layout/layout.component";

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        LoginComponent,
        DashboardComponent,
        NavigationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
