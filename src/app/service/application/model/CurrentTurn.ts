export class CurrentTurn {
    private _resource: string;

    private _startTurnDate: Date;


    public get resource(): string {
        return this._resource;
    }

    public set resource(value: string) {
        this._resource = value;
    }

    public get startTurnDate(): Date {
        return this._startTurnDate;
    }

    public set startTurnDate(value: Date) {
        this._startTurnDate = value;
    }
}