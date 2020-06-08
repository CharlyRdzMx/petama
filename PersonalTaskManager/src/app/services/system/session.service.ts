import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

import * as appSettings from 'tns-core-modules/application-settings';
import * as dialogs from 'tns-core-modules/ui/dialogs';

import { User } from "~/app/models/user.model";


@Injectable()
export class SessionService {
    
    
    constructor(
        private servRouter: Router
    ) {}

    getSessionUser(): User {
        const sessionUserData = appSettings.getString('s_session_user');
        if (sessionUserData) {
            const sessUser: User = new User(JSON.parse(sessionUserData));
            return sessUser;
        } else {
            return undefined;
        }
    } 

    validateSession(): boolean {
        if (this.getSessionUser() === undefined) {
            this.servRouter.navigate(['/login']);
            return false;
        } else {
            return true;
        }
        
    }
    
    setSessionUser(userParam: User): void {
        const sessionUserData = JSON.stringify(userParam);
        appSettings.setString('s_session_user', sessionUserData);
    }

    closeSession() {
        appSettings.clear();
        // this.servRouter.navigate(['/login']);
        // this.servNsRouter.target = '/login';
    }
}
