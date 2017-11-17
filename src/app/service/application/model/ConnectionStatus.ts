export class ConnectionStatus {

    private _connected: boolean;

    public get connected(): boolean {
        return this._connected;
    }

    public set connected(value: boolean) {
        this._connected = value;
    }
}