import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutTabletComponent, DialogOverviewExampleDialogComponent } from './layout.component';
/* import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component'; */
import { BlockUIModule } from 'ng-block-ui';
import { MaterialModule } from '@blox/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ComponentsModule, SidebarComponent, HeaderComponent} from './components/components.module';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        BlockUIModule,
        LayoutRoutingModule,
        TranslateModule,
        MatDialogModule,
        MatButtonModule,
        ComponentsModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [LayoutTabletComponent, DialogOverviewExampleDialogComponent],
    entryComponents: [DialogOverviewExampleDialogComponent]
})
export class LayoutModule { }
