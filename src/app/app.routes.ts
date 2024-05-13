import { Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

export const routes: Routes = [
    {path: 'heroes', component: HeroesComponent}, 
    {path: 'dashboard', component: DashboardComponent}, 
    {path: 'hero/:id', component: HeroDetailComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];
