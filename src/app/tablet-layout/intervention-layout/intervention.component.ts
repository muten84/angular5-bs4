import { OnInit, OnDestroy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {LocalBusService} from '../../service/service.module';
import { slideToRight } from '../../router.animations';


@Component({
    selector: 'app-intervention',
    templateUrl: './intervention.component.html',
    styleUrls: ['./intervention.component.scss'],
    animations: [slideToRight()]
})
export class InterventionComponent implements OnInit, OnDestroy {
    constructor(public bus: LocalBusService) { }

    ngOnInit() {
    }

    ngOnDestroy() {
    }


}



