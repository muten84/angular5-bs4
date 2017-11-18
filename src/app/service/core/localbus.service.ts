import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Subscriber, Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class LocalBusService {
    private globalObservable: Observable<string>;
    private observers: Subscriber<string>[] = [];


    public notifyAll(event: string) {

         this.observers.forEach((o) => o.next(event));
    }

    public addObserver(): Observable<string> {
            this.globalObservable = new Observable<string>((observer: Subscriber<string>) => {
                this.observers.push(observer);
            });
            return this.globalObservable;
    }
}
