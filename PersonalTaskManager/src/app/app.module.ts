import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { SessionService } from './services/system/session.service';
import { TransactionService } from './services/system/transaction.service';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LoginComponent } from './components/auth/login.component';

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { TaskListComponent } from "./components/tasks/task.list.component";
import { TaskNewComponent } from "./components/tasks/task.new.component";
import { UserListComponent } from "./components/users/user.list.component";
import { UserDetailComponent } from "./components/users/user.detail.component";
import { UserNewComponent } from "./components/users/user.new.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        ItemsComponent,
        ItemDetailComponent,
        TaskListComponent,
        TaskNewComponent,
        UserListComponent,
        UserDetailComponent,
        UserNewComponent
    ],
    providers: [
        SessionService,
        TransactionService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
