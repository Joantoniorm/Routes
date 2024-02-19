import { Routes } from '@angular/router';
import { Ex01Component } from './ex01/ex01.component';
import { Ex02Component } from './ex02/ex02.component';
import { Ex03Component } from './ex03/ex03.component';
import { Ex04Component } from './ex04/ex04.component';
import { Ex05Component } from './ex05/ex05.component';
import { Ex06Component } from './ex06/ex06.component';
import { Ex07Component } from './ex07/ex07.component';
import { Ex08Component } from './ex08/ex08.component';
import { Ex10Component } from './ex10/ex10.component';

export const routes: Routes = [
    {
        path:"Ex01",
        component:Ex01Component,
        title:"Ejercicio01"
    },
    {
        path:"Ex02",
        component:Ex02Component,
        title:"Ejercicio02"
    },
    {
        path:"Ex03",
        component:Ex03Component,
        title:"Ejercicio03"
    },
    {
        path:"Ex04",
        component:Ex04Component,
        title:"Ejercicio04"
    },
    {
        path:"Ex05",
        component:Ex05Component,
        title:"Ejercicio05"
    },
    {
        path:"Ex06",
        component:Ex06Component,
        title:"Ejercicio06"
    },
    {
        path:"Ex07",
        component:Ex07Component,
        title:"Ejercicio07"
    },
    {
        path:"Ex08",
        component:Ex08Component,
        title:"Ejercicio08"
    },
   
    {
        path:"Ex10",
        component:Ex10Component,
        title:"Ejercicio10"
    },

];
