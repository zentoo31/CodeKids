import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { DashboardInfoComponent } from './dashboard-info/dashboard-info.component';
import { SubjectsComponent } from './subjects/subjects.component';

export const routes: Routes = [
    {path: 'dashboard', 
    component: DashboardComponent,
    children:[
        {path:'', redirectTo: 'dashboard-info', pathMatch: 'full'},
        {path: 'dashboard-info', component: DashboardInfoComponent},
        {path: 'subjects', component: SubjectsComponent}
    ]},
    {path: 'main', component: MainComponent},
    {path:'', redirectTo: '/main',pathMatch:'full'}
];
