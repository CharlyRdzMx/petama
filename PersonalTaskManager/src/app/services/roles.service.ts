import { Injectable } from "@angular/core";
import { TransactionService, MethodType } from './system/transaction.service';

@Injectable()
export class RolesService {

    constructor(
        private servTrans: TransactionService
    ) {}

    getList() {
        return this.servTrans.execute(MethodType.GET, 'roles/list', null);
    }

}
