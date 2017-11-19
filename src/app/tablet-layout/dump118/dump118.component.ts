import { Component, OnInit } from '@angular/core';
import { slideToRight } from '../../router.animations';
import {LocalBusService} from '../../service/service.module';


@Component({
    selector: 'app-dump118',
    templateUrl: './dump118.component.html',
    styleUrls: ['./dump118.component.scss'],
    animations: [slideToRight ()]
})
export class Dump118Component implements OnInit {
    constructor(private bus: LocalBusService) { }

    ngOnInit() {
        setTimeout(() => {
            this.bus.notifyAll('newIntervention', {});
        }, 5000);
    }

    public action1() {
        this.bus.addObserver('action1Dialog').subscribe((event) => {
            if (event.type === 'action1DialogResponse') {
                console.log('response dialog is: ' + JSON.stringify(event.payload));
                this.bus.removeObservers('action1Dialog');
            }
    });
        this.bus.notifyAll('dialogs', {type: 'action1Dialog', payload: {}});
    }
}
