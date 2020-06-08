import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from './components/auth/login.component';
import { TaskListComponent } from "./components/tasks/task.list.component";
import { TaskNewComponent } from "./components/tasks/task.new.component";
import { UserListComponent } from "./components/users/user.list.component";
import { UserDetailComponent } from "./components/users/user.detail.component";
import { UserNewComponent } from "./components/users/user.new.component";

const routes: Routes = [
    { path: "", redirectTo: "/tasks", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "tasks", component: TaskListComponent },
    { path: "tasks/new", component: TaskNewComponent },
    { path: "users", component: UserListComponent },
    { path: "users/detail/:userid", component: UserDetailComponent },
    { path: "users/new", component: UserNewComponent }
]

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
