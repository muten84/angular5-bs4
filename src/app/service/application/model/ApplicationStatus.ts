import { CurrentTurn } from './CurrentTurn';
import { GpsStatus } from './GpsStatus';
import { ConnectionStatus } from './ConnectionStatus';
import { BatteryStatus } from './BatteryStatus';


export class ApplicationStatus {

    private _currentTurn: CurrentTurn;

    private _gpsStatus: GpsStatus;

    private _connectionStatus: ConnectionStatus;

    private _batteryStatus: BatteryStatus;


    cnostructor() {

    }

    public get currentTurn(): CurrentTurn {
        return this._currentTurn;
    }
    public set currentTurn(value: CurrentTurn) {
        this._currentTurn = value;
    }

    public get gpsStatus(): GpsStatus {
        return this._gpsStatus;
    }
    public set gpsStatus(value: GpsStatus) {
        this._gpsStatus = value;
    }

    public get connectionStatus(): ConnectionStatus {
        return this._connectionStatus;
    }
    public set connectionStatus(value: ConnectionStatus) {
        this._connectionStatus = value;
    }

    public get batteryStatus(): BatteryStatus {
        return this._batteryStatus;
    }
    public set batteryStatus(value: BatteryStatus) {
        this._batteryStatus = value;
    }

}