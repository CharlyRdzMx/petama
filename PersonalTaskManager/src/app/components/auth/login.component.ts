import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/system/session.service';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { User } from "~/app/models/user.model";

@Component({
    selector: "login",
    templateUrl: "./login.view.html",
    providers: [
        SessionService,
        AuthService
    ]
})
export class LoginComponent implements OnInit {

    user: User = new User();

    constructor(
        private servRouter: Router,
        private servSession: SessionService,
        private servAuth: AuthService
    ) {}

    ngOnInit(): void {}

    onLogin(): void {
        try {
            this.servAuth.userAuth(this.user).subscribe(
                res => {
                    if (res._code === 200) {
                        this.servSession.setSessionUser(new User(res._data));
                        this.servRouter.navigate(['/tasks']);
                    } else {
                        dialogs.alert(res._message);
                    }
                }, err => {
                    dialogs.alert(JSON.stringify(err));
                }
            );
        } catch(error) {
            dialogs.alert(JSON.stringify(error));
        }
        
    }
}
