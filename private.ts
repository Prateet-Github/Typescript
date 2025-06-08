class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  getBalance(): number {
    return this.balance; // ✅ allowed
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // ✅
// console.log(account.balance);      // ❌ Error: Property 'balance' is private

export {};