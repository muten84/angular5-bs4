import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Dump118RoutingModule } from './dump118-routing.module';
import { Dump118Component } from './dump118.component';
import { MaterialModule } from '@blox/material';



@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        Dump118RoutingModule,
        MaterialModule
    ],
    declarations: [
        Dump118Component
    ]
})
export class Dump118Module {}
