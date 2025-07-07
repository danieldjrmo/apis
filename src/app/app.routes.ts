import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';

export const routes: Routes = [

    {
        path: "home",
        component: Home,
        title: "Home"
    },
    {
        path: "contact",
        component: Contact,
        title: "Contact"
    },
    
];
