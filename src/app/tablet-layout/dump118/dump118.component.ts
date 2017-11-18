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

    ngOnInit() { }

    public action1() {
        this.bus.notifyAll('dialog');
    }
}
