import { Injectable } from "@angular/core";
import { TransactionService, MethodType } from './system/transaction.service';
import { User } from "../models/user.model";

@Injectable()
export class UsersService {

    constructor(
        private servTrans: TransactionService
    ) {}

    getList() {
        return this.servTrans.execute(MethodType.GET, 'users/list', null);
    }

    saveUser(userParam: User) {
        return this.servTrans.execute(MethodType.POST, 'users/save', userParam);
    }

}
