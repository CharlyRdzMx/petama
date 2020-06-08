import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import * as app from 'tns-core-modules/application';
import { SessionService } from '../../services/system/session.service';
import { UsersService } from '../../services/users.service';

import { User } from "~/app/models/user.model";


@Component({
    selector: "user-list",
    templateUrl: "./user.list.view.html",
    providers: [UsersService]
})
export class UserListComponent implements OnInit {

    userSelected: User = new User();
    userList: Array<User> = new Array<User>();

    currentDate = new Date();

    constructor(
        private servSession: SessionService,
        private servUsers: UsersService
    ) {
        this.servSession.validateSession();
     }

    ngOnInit(): void {
        this.userList = new Array<User>();
        try {
            this.servUsers.getList().subscribe(
                res => {
                    // this.msg = JSON.stringify(res);
                    for(const item of res._data) {
                        this.userList.push(new User(item));
                    }
                },
                err => {}
            );
        } catch (error) {}
    }

    onDrawerButtonTap(): void {
        const sideDraw = <RadSideDrawer>app.getRootView();
        sideDraw.showDrawer();
    }

    onSelectUser(event: any): void {
        this.userSelected.id = event;
    }
}
