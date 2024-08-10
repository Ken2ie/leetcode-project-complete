import { Routes } from '@angular/router';
import { InputPageComponent } from './pages/input-page/input-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const routes: Routes = [
    {
        path: '',
        component: InputPageComponent
    }, 
    {
        path: 'pascal',
        component: MainPageComponent
    }
];
