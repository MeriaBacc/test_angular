import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { CaseStudies1Component } from './case-studies1/case-studies1.component';
import { CaseStudies2Component } from './case-studies2/case-studies2.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WhatWeDoComponent,
    ChooseUsComponent,
    SolutionsComponent,
    CaseStudies1Component,
    CaseStudies2Component,
    WhoAreWeComponent,
    FooterComponent,
    IndexComponent,
    CaseStudiesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
