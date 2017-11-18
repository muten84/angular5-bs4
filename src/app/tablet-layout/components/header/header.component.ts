import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApplicationStatus, TimeService, ApplicationStatusService } from '../../../service/service.module';

import { Subscriber, Observable, BehaviorSubject, Subject } from 'rxjs/Rx';
import 'rxjs/Rx';

import { BlockUI, NgBlockUI } from 'ng-block-ui';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @BlockUI('header-section') blockUI: NgBlockUI;

    pushRightClass: string = 'push-right';
    connected: boolean;

    currentTime: Promise<Date>;
    observableCurrentTime: Observable<Date>;
    observableApplicationStatus: Observable<ApplicationStatus>;

    constructor(private appStatusService: ApplicationStatusService, private timeService: TimeService, private translate: TranslateService, public router: Router) {
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        console.log("creating observable...");
        this.currentTime = this.timeService.getAsyncCurrentTime();
        //observable dello stato dell'applicazione per ricevere le informazioni sulla header bar del turno corrente
        this.observableApplicationStatus = this.appStatusService.getApplicationStatusObservable();
        this.blockUI.start();
        this.observableApplicationStatus.subscribe((val: ApplicationStatus) => {
            console.log("manually subscribed to application status received: " + JSON.stringify(val));
            this.connected = val.connectionStatus.connected;

            this.blockUI.stop();
        });
        // observable dell'orario
        this.observableCurrentTime = new Observable<Date>((observer: Subscriber<Date>) => {

            /**/
            setInterval(() => {
                console.log('setInterval  from  ' + (observer));
                this.timeService.getAsyncCurrentTime().then(
                    (d) => {
                        observer.next(d);
                    },
                    (err) => {
                        observer.next(err);
                    }
                );
            }, 1000);

        });
        this.appStatusService.refreshApplicationStatus();

    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    location() {
        console.log("map marker clicked!");
    }

}
