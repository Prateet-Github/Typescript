"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankAccount = /** @class */ (function () {
    function BankAccount(balance) {
        this.balance = balance;
    }
    BankAccount.prototype.getBalance = function () {
        return this.balance; // ✅ allowed
    };
    return BankAccount;
}());
var account = new BankAccount(1000);
console.log(account.getBalance()); // ✅
