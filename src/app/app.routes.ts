import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { DashboardInfoComponent } from './dashboard-components/dashboard-info/dashboard-info.component';
import { SubjectsComponent } from './dashboard-components/subjects/subjects.component';
import { ProfileComponent } from './dashboard-components/profile/profile.component';

export const routes: Routes = [
    {path: 'dashboard', 
    component: DashboardComponent,
    children:[
        {path:'', redirectTo: 'profile', pathMatch: 'full'},
        {path: 'profile', component: ProfileComponent},
        {path: 'dashboard-info', component: DashboardInfoComponent},
        {path: 'subjects', component: SubjectsComponent}
    ]},
    {path: 'main', component: MainComponent},
    {path:'', redirectTo: '/main', pathMatch:'full'}
];
