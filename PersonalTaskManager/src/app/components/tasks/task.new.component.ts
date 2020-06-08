import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import * as dialogs from 'tns-core-modules/ui/dialogs';

import { SessionService } from '../../services/system/session.service';
import { TasksService } from '../../services/tasks.service';

import { Task } from "../../models/task.model";
import { User } from "~/app/models/user.model";

@Component({
    selector: "task-new",
    templateUrl: "./task.new.view.html",
    providers: [TasksService]
})
export class TaskNewComponent implements OnInit {

    user: User = new User();
    task: Task = new Task();

    currentDate = new Date();

    constructor(
        private servRouter: Router,
        private servSession: SessionService,
        private servTasks: TasksService
    ) {
        this.servSession.validateSession();
     }

    ngOnInit(): void {
        this.task.deadline = new Date();
    }

    onSaveChanges(event: any): void {
        const userSess = this.servSession.getSessionUser();
        this.task.owner = userSess.id;

        this.servTasks.save(this.task).subscribe(
            res => {
                if (res._code === 200) {
                    this.servRouter.navigate(['/tasks']);
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
