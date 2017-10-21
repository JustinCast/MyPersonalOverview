import { Routes } from "@angular/router";
import { OverviewComponent } from "./overview/overview.component";
import { AboutComponent } from "./about/about.component";
import { ErrorHandleComponent } from "./error-handle/error-handle.component";
import { ProjectsComponent } from "./projects/projects.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";


export const ROUTES: Routes = [
    {
        path: 'overview',
        component: OverviewComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'error',
        component: ErrorHandleComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: '',
        redirectTo: '/overview',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/error',
        pathMatch: 'full'
    }
];