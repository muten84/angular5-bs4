export class GpsStatus {

    private _level: number;

    public get level(): number {
        return this._level;
    }

    public set level(value: number) {
        this._level = value;
    }
}