import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutTabletComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutTabletComponent,
            children: [
                 { path: '', redirectTo: 'dump118' },
                 { path: 'dump118', loadChildren: './dump118/dump118.module#Dump118Module' },
                 { path: 'map', loadChildren: './mappa/map.module#MapModule' }
            ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
