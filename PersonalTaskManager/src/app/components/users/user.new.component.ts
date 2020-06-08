import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';
// Services
import { UsersService } from '../../services/users.service';
import { RolesService } from '../../services/roles.service';
// Models
import { User } from "~/app/models/user.model";

@Component({
    selector: "user-detail",
    templateUrl: "./user.new.view.html",
    providers: [
        UsersService,
        RolesService
    ]
})
export class UserNewComponent implements OnInit {

    user: User = new User();
    currentDate = new Date();
    public roleList: Array<string> = new Array<string>();

    constructor(
        private servRouter: Router,
        private servUsers: UsersService,
        private servRoles: RolesService
    ) { }

    ngOnInit(): void {
        this.servRoles.getList().subscribe(
            res => {
                this.roleList = new Array<string>();
                for(const item of res._data) {
                    this.roleList.push(item._name);
                }
            },
            err => {}
        );
    }

    onDrawerButtonTap(): void {
        const sideDraw = <RadSideDrawer>app.getRootView();
        sideDraw.showDrawer();
    }

    onSelectedIndexChange(event: any) {
        try {
            const picker = <ListPicker>event.object;
            this.user.role = this.roleList[picker.selectedIndex];
        } catch(err){
            this.user.role = '';
        }
    }

    onSaveChanges(event: any) {
        this.servUsers.saveUser(this.user).subscribe(
            res => {
                if (res._code === 200) {
                    this.servRouter.navigate(['/users']);
                } else {
                    dialogs.alert(res._message);
                }
            },
            err => {
                dialogs.alert(JSON.stringify(err));
            }
        );
    }
}
