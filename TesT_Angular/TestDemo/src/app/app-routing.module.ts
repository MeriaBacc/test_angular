import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { CaseStudies1Component } from './case-studies1/case-studies1.component';
import { CaseStudies2Component } from './case-studies2/case-studies2.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'who-are-we', component: WhoAreWeComponent },
  { path: 'case-studies', component: CaseStudiesComponent },
  { path: 'case-studies1', component: CaseStudies1Component },
  { path: 'case-studies2', component: CaseStudies2Component },
  { path: 'what-we-do', component: WhatWeDoComponent },
  { path: 'choose-us', component: ChooseUsComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'index', component: IndexComponent },
  { path: 'navbar', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
