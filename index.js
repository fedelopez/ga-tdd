import Bank from './bank'
import $ from 'jquery'

const bank = new Bank();

$('#add-account').click(function () {
    bank.addAccount($('#account-name').val());
    displayAccounts();
});

function displayAccounts() {
    const accountList = $('#account-list');
    accountList.empty();
    for (const account of bank.accounts()) {
        const li = `<li>${account.accountName}</li>`;
        accountList.append(li);
    }
}