import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";

import { SessionService } from './session.service';

import { User } from "~/app/models/user.model";

export enum MethodType {
    POST = 'POST',
    GET = 'GET',
    DELETE = 'DELETE',
    PATCH = 'PATCH'
}

@Injectable()
export class TransactionService {

    private _apiURL = 'http://132.148.167.63:3000/';

    constructor(
        private http: HttpClient,
        private servSess: SessionService
    ) {}

    private getHeaders(): HttpHeaders {
        let userSession: User = this.servSess.getSessionUser(); 

        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        if (userSession !== undefined) {
            headers = headers.append("auth-token", userSession.token);
        }
        
        return headers;
    }

    public execute(methodType: MethodType, routeParam: string, paramsParam: any): Observable<any> {

        if (methodType === 'POST') {
            return this.http.post(this._apiURL + routeParam, paramsParam, {headers: this.getHeaders()});
        }
        if (methodType === 'GET') {
            const stringParams = paramsParam !== null? paramsParam : '';
            return this.http.get(this._apiURL + routeParam + stringParams, {headers: this.getHeaders()});
        }
        if (methodType === 'DELETE') {
            const stringParams = paramsParam !== null? paramsParam : '';
            return this.http.delete(this._apiURL + routeParam + stringParams, {headers: this.getHeaders()});
        }
        if (methodType === 'PATCH') {
            return this.http.patch(this._apiURL + routeParam, paramsParam, {headers: this.getHeaders()});
        }
        
    }

}
