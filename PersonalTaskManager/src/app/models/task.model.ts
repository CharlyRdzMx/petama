export class Task {

    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    private _title: string;
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

    private _description: string;
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    private _owner: any;
    public get owner(): any {
        return this._owner;
    }
    public set owner(value: any) {
        this._owner = value;
    }

    private _creationDate: Date;
    public get creationDate(): Date {
        return this._creationDate;
    }
    public set creationDate(value: Date) {
        this._creationDate = value;
    }

    private _deadline: Date;
    public get deadline(): Date {
        return this._deadline;
    }
    public set deadline(value: Date) {
        this._deadline = value;
    }

    private _status: string;
    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }

    constructor(data?: any) {
        this.fillModel(data);
    }

    fillModel(data: any) {
        if (data) {
            if (data._id) { this._id = data._id; }
            if (data._title) { this._title = data._title; }
            if (data._description) { this._description = data._description; }
            if (data._owner) { this._owner = data._owner; }
            if (data._creationDate) { this._creationDate = data._creationDate; }
            if (data._deadline) { this._deadline = data._deadline; }
            if (data._status) { this._status = data._status; }
        }
    }
}
