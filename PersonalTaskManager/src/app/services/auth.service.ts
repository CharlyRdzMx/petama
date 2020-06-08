import { Injectable } from "@angular/core";
import { TransactionService, MethodType } from './system/transaction.service';

import { User } from "../models/user.model";

@Injectable()
export class AuthService {

    constructor(
        private servTrans: TransactionService
    ) {}

    userAuth(userParam: User) {
        return this.servTrans.execute(MethodType.POST, 'auth', userParam);
    }

}
