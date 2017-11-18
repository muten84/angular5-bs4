import { Component, OnInit } from '@angular/core';
import { slideToRight } from '../../router.animations';


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
    animations: [slideToRight()]
})
export class MapComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
