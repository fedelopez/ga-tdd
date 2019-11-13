const faker = require('faker');
const Bank = require('./bank.js');

describe('Bank', function () {
    let bank;

    beforeEach(function () {
        bank = new Bank();
    });

    it('creates a new bank with no accounts', function () {
        expect(bank.accounts().length).toBe(0)
    });

    it('adds a new account', function () {
        const accountName = faker.finance.accountName();
        bank.addAccount(accountName);

        const accounts = bank.accounts();
        expect(accounts.length).toBe(1);
        expect(accounts[0].accountName).toBe(accountName);
    });

    it('deposits funds in an existing account', function () {
        const accountName = faker.finance.accountName();
        const amount = faker.finance.amount();
        bank.addAccount(accountName);
        bank.deposit(accountName, amount);

        const accounts = bank.accounts();
        expect(accounts[0].amount).toBe(Number(amount));
    });

    it('withdraws funds from an existing account', function () {
        const accountName = faker.finance.accountName();
        const amount = 100;
        bank.addAccount(accountName);
        bank.deposit(accountName, amount);
        bank.withdraw(accountName, 73);

        const accounts = bank.accounts();
        expect(accounts[0].amount).toBe(27);
    });
});