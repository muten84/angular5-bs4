import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BlockUIModule } from 'ng-block-ui';
import { MaterialModule } from '@blox/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Routes, RouterModule } from '@angular/router';




@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        BlockUIModule,
        TranslateModule,
        MatDialogModule,
        MatButtonModule,
        RouterModule,
        NgbDropdownModule.forRoot(),
    ],
    exports: [SidebarComponent, HeaderComponent],
    declarations: [SidebarComponent, HeaderComponent]
})
export class ComponentsModule { }
export * from  './sidebar/sidebar.component';
export * from  './header/header.component';

