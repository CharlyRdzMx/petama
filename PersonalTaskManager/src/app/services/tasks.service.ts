import { Injectable } from "@angular/core";
import { TransactionService, MethodType } from './system/transaction.service';
import { Task } from "../models/task.model";

@Injectable()
export class TasksService {

    constructor(
        private servTrans: TransactionService
    ) {}

    list(ownerId: string) {
        return this.servTrans.execute(MethodType.GET, 'tasks/list/', ownerId);
    }

    save(taskParam: Task) {
        return this.servTrans.execute(MethodType.POST, 'tasks/save', taskParam);
    }

    delete(taskId: string) {
        return this.servTrans.execute(MethodType.DELETE, 'tasks/item/', taskId);
    }

}
