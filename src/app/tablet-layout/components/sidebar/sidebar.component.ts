import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import {LocalBusService} from '../../../service/service.module';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
    isActive: boolean = false;
    showMenu: string = '';

    @Input()
    intervention = false;

    constructor(public bus: LocalBusService) {
    }

    ngOnInit() {
        this.bus.addObserver('newIntervention').subscribe((event) => {
            this.intervention = true;
        });
    }

    ngOnDestroy(){

    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
