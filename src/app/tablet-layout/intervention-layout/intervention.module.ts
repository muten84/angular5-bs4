import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { InterventionRoutingModule } from './intervention-routing.module';
import { InterventionComponent } from './intervention.component';
import { MessageCardComponent } from './message-card.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HeaderComponent } from '../components/header/header.component';
import { BlockUIModule } from 'ng-block-ui';
import { MaterialModule } from '@blox/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ComponentsModule} from '../components/components.module';
import {MatCardModule} from '@angular/material/card';


@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        MaterialModule,
        MatCardModule,
        BlockUIModule,
        InterventionRoutingModule,
        TranslateModule,
        MatDialogModule,
        MatButtonModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [InterventionComponent, MessageCardComponent]
})
export class InterventionModule { }
