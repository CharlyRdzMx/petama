export class User {

    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    private _email: string;
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    private _password: string;
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }

    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    private _lastname: string;
    public get lastname(): string {
        return this._lastname;
    }
    public set lastname(value: string) {
        this._lastname = value;
    }

    private _role: string;
    public get role(): string {
        return this._role;
    }
    public set role(value: string) {
        this._role = value;
    }

    private _token: string;
    public get token(): string {
        return this._token;
    }
    public set token(value: string) {
        this._token = value;
    }

    constructor(data?: any) {
        this.fillModel(data);
    }

    fillModel(data: any) {
        if (data) {
            if (data._id) { this._id = data._id; }
            if (data._email) { this._email = data._email; }
            if (data._password) { this._password = data._password; }
            if (data._name) { this._name = data._name; }
            if (data._lastname) { this._lastname = data._lastname; }
            if (data._role) { this._role = data._role; }
            if (data._token) { this._token = data._token; }
        }
    }
}