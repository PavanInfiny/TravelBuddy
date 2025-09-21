import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './component/about/about';
import { Travelcitycard } from './component/travelcitycard/travelcitycard';
import { Contactus } from './component/contactus/contactus';
import { Booking } from './component/booking/booking';
import { Admin } from './component/admin/admin';

export const routes: Routes = [
    {
        path:'',
        pathMatch:"full",
        component:Home
    }
    ,{
        path:"about",
        component:About
    },
    {
        path:"city/:cityId",
        component:Travelcitycard
    },
    {
        path:"contactus",
        component:Contactus
    },
    {
        path:"package",
        component:Booking
    },
    {
        path:"admin",
        component:Admin
    }

];
