import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as dialogs from 'tns-core-modules/ui/dialogs';
import * as app from 'tns-core-modules/application';

import { SessionService } from '../../services/system/session.service';
import { TasksService } from '../../services/tasks.service';

import { Task } from "../../models/task.model";
import { User } from "~/app/models/user.model";

@Component({
    selector: "task-list",
    templateUrl: "./task.list.view.html",
    providers: [TasksService]
})
export class TaskListComponent implements OnInit {

    user: User = new User();
    taskList: Array<Task> = new Array<Task>();

    currentDate = new Date();

    constructor(
        private route: ActivatedRoute,
        private servSession: SessionService,
        private servTasks: TasksService
    ) {
        this.servSession.validateSession();
     }

    ngOnInit(): void {
        this.listLoad();
    }

    listLoad() {
        this.user = this.servSession.getSessionUser();
        this.servTasks.list(this.user.id).subscribe(
            res => {
                this.taskList = new Array<Task>();
                for(const item of res._data) {
                    this.taskList.push(new Task(item));
                }
            },
            err => {}
        );
    }

    onDrawerButtonTap(): void {
        const sideDraw = <RadSideDrawer>app.getRootView();
        sideDraw.showDrawer();
    }

    onDeleteTask(taskParam: Task): void {
        this.servTasks.delete(taskParam.id).subscribe(
            res => {
                if (res._code === 200) {
                    dialogs.alert(res._message);
                    this.listLoad();
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
