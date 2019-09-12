import { Injectable } from "@angular/core";
import {
  Resolve,
  Router,
  ActivatedRoute,
  ActivatedRouteSnapshot
} from "@angular/router";
import { EnterTransactionDataService } from "../../enter-transaction.data.service";
import { NotifierService } from "angular-notifier";
@Injectable({
  providedIn: "root"
})
export class TransactionGeneralResolver implements Resolve<any> {
  constructor(
    private etDataService: EnterTransactionDataService,

    private route: Router,
    private notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  private readonly notifier: NotifierService;

  /* Router 
       Getting Transaction Number into this component,
       With Transaction Number, we will get back all infomation for this transaction..
       @param {string} id  | transaction number
       @param {string} new | is this a new account, is true then only call static apis. is false call all apis..
    */

  resolve(activedRoute: ActivatedRouteSnapshot) {
    const transactionNumber = activedRoute.paramMap.get("id");
    const isNewAccount = activedRoute.paramMap.get("new");

    if (
      transactionNumber &&
      (isNewAccount === "false" || isNewAccount === "true")
    ) {
      const transcationInfo = this.etDataService.getTransactionBasicInfo(
        transactionNumber
      );
      if (transcationInfo) {
        return { info: transcationInfo, new: isNewAccount };
      } else {
        this.notifier.notify(
          "error",
          "We unable to find this transaction, you will be redirect to dashboard."
        );
        this.route.navigate(["app"]);
      }
    } else {
      this.notifier.notify(
        "error",
        "We unable to find this transaction, you will be redirect to dashboard."
      );
      this.route.navigate(["app"]);
    }
  }
}
