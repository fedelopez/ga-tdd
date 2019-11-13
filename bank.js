const Bank = function () {
    const accounts = [];

    this.accounts = function () {
        return accounts;
    };

    this.addAccount = function (accountName) {
        accounts.push({accountName: accountName, amount: 0})
    };

    this.deposit = function (accountName, amount) {
        const account = findAccount(accountName);
        account.amount = account.amount + Number(amount);
    };

    this.withdraw = function (accountName, amount) {
        const account = findAccount(accountName);
        account.amount = account.amount - Number(amount);
    };

    function findAccount(accountName) {
        return accounts.find(function (account) {
            return account.accountName === accountName;
        });
    }
};

module.exports = Bank;