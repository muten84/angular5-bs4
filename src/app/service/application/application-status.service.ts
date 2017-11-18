import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import * as m from './model/index';
import { Subscriber, Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class ApplicationStatusService {
    private applicationStatusObservable: Observable<m.ApplicationStatus>;
    private observers: Subscriber<m.ApplicationStatus>[] = [];


    constructor() {
        this.createApplicationStatusObservable();
    }

    public getApplicationStatusObservable() {
        return this.applicationStatusObservable;
    }

    public refreshApplicationStatus() {
        /* let p = new Promise<m.ApplicationStatus>((resolve, reject) => {
             
         });
         return p;*/
        this.getDummyApplicationStatus().then(
            (status) => {
                this.notify(status);
            },
            (error) => {

            }
        )
    }

    private notify(status: m.ApplicationStatus) {

        this.observers.forEach((o) => o.next(status));
    }

    private createApplicationStatusObservable() {
        this.applicationStatusObservable = new Observable<m.ApplicationStatus>((observer: Subscriber<m.ApplicationStatus>) => {
            this.observers.push(observer);
        });

    }

    /*  public subscribeToApplicationStatus(f: Function){
          this.applicationStatusObservable.subscribe(f);
      }*/

    private getDummyApplicationStatus(): Promise<m.ApplicationStatus> {
        let p = new Promise<m.ApplicationStatus>((resolve, reject) => {
            let app: m.ApplicationStatus = new m.ApplicationStatus();
            app.batteryStatus = new m.BatteryStatus();
            app.batteryStatus.level = 60;
            app.currentTurn = new m.CurrentTurn();
            app.currentTurn.resource = "DUMMY";
            app.currentTurn.startTurnDate = new Date();
            app.connectionStatus = new m.ConnectionStatus();
            app.connectionStatus.connected = true;

            setInterval(() => resolve(app), 2000);

        })
        return p;
    }
}