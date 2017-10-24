import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

// Manual imports
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from "@angular/router";
import { ROUTES } from './app.routing';
import { OverviewComponent } from './overview/overview.component';
import { AboutComponent } from './about/about.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from "@angular/common/http";
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GistsComponent } from './gists/gists.component';
// import {NgxFancyPreloaderModule } from 'ngx-fancy-preloader';
@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    AboutComponent,
    ErrorHandleComponent,
    ProjectsComponent,
    PortfolioComponent,
    GistsComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
