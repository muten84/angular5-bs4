import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import * as m from './model/index';
import * as common from '../common/model/index';

@Injectable()
export class AgentService {

    public getDeviceId(): string {
        //return  device id
        return "";
    }

    public getCurrentLocation(): common.GpsLocation {
        //return current gps location 
        return null;
    }

    public sendSynchMessage(message: m.Message): Promise<boolean> {
        //block component that calls the send message until it receives a result
        return null;
    }

    public sendAsynchMessage(message: m.Message): Promise<boolean> {
        //enqueue a new message to be processed from agent and immediate returns
        return null;
    }

}