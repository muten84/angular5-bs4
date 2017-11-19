import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterventionComponent } from './intervention.component';
import { MessageCardComponent } from './message-card.component';


const routes: Routes = [
    {
        path: '',
        component: MessageCardComponent,
           /*  children: [
                 { path: 'newIntervention', component: InterventionComponent }
             ] */
    },
    {
        path: 'newIntervention',
        component: InterventionComponent,
           /*  children: [
                 { path: 'newIntervention', component: InterventionComponent }
             ] */
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InterventionRoutingModule { }
