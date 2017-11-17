export class Message {
    private _id: string;
    private _from: string;
    private _to: string;
    private _timestamp: Date;
    private _payload: any;

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get from(): string {
        return this._from;
    }

    public set from(value: string) {
        this._from = value;
    }

    public get to(): string {
        return this._to;
    }

    public set to(value: string) {
        this._to = value;
    }

    public get timestamp(): Date {
        return this._timestamp;
    }

    public set timestamp(value: Date) {
        this._timestamp = value;
    }

    public get payload(): any {
        return this._payload;
    }

    public set payload(value: any) {
        this._payload = value;
    }
}