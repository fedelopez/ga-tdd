const Bank = function () {
    const accounts = [];

    this.accounts = function () {
      return accounts;
    };

    this.addAccount = function(accountName) {
        accounts.push({accountName: accountName, amount: 0})
    };

    this.deposit = function (accountName, amount) {
        const account = accounts.find(function (account) {
            return account.accountName === accountName;
        });
        account.amount = account.amount + Number(amount);
    };

    this.withdraw = function (accountName, amount) {
        const account = accounts.find(function (account) {
            return account.accountName === accountName;
        });
        account.amount = account.amount - Number(amount);
    }
};

module.exports = Bank;