import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';


const pageRoutes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'menu', component: MenuComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' }  
]

export const PAGES_ROUTES = RouterModule.forRoot( pageRoutes, { useHash: true } );