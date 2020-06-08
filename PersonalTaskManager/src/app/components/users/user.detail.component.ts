import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { ListPicker } from "tns-core-modules/ui/list-picker";

import * as app from 'tns-core-modules/application';

import { User } from "~/app/models/user.model";


@Component({
    selector: "user-detail",
    templateUrl: "./user.detail.view.html"
})
export class UserDetailComponent implements OnInit {

    user: User = new User();
    currentDate = new Date();
    roleList: Array<string> = new Array<string>();

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.user.id = this.route.snapshot.params.userid;
        this.user.name = 'Carlos';
        this.user.lastname = 'Rodriguez'
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
        
    }
}
