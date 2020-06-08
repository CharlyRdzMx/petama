import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { Page } from 'tns-core-modules/ui/page';

import { SessionService } from './services/system/session.service';

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public sessionActive: boolean = false;

    constructor(
        private servRouter: Router,
        private servSession: SessionService
    ) {
        if (servRouter.url !== '/login') {
            this.sessionActive = this.servSession.validateSession();
        }
    }

    onDrawerButtonTap(): void {
        const sideDraw = <RadSideDrawer>app.getRootView();
        sideDraw.closeDrawer();
    }

    onLogout(): void {
        const sideDraw = <RadSideDrawer>app.getRootView();
        sideDraw.closeDrawer();
        
        this.servSession.closeSession();
    }
 }
