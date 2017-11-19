import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Subscriber, Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
interface StringSubscriberMap {
    [topic: string]: Subscriber<Event>[];
}

export interface Event {
    type?: string;
    payload?: any;
}

@Injectable()
export class LocalBusService {
    private globalObservable: Observable<Event>;
   // private observers: Subscriber<string>[] = [];

    private map: StringSubscriberMap = {};

    public notifyAll(topic: string, event: Event) {
         const subs: Subscriber<Event>[] = this.map[topic];
         if (!subs) {
             return;
        }
        subs.forEach((o) => o.next(event));
    }

    public addObserver(topic: string): Observable<Event> {
            this.globalObservable = new Observable<Event>((observer: Subscriber<Event>) => {
                let subs: Subscriber<Event>[] = this.map[topic];
                if (!subs) {
                    subs = [];
                }
                subs.push(observer);
                this.map[topic] = subs;
            });
            return this.globalObservable;
    }

    public removeObservers(topic: string) {
        let subs: Subscriber<Event>[] = this.map[topic];
        if (!subs) {
            return;
       }
       subs = undefined;
       this.map[topic] = [];
    }
}
