const $ = (id) => document.getElementById(id)

const bankAccount = function (ownerName) {
    let balance = 0
    let owner = ownerName

    // PUBLIC METHODS THAT HAVE ACCESS TO PRIVATE VARIABLES AND FUNCTIONS
    return {
        deposit: function (depositAmount) {
            balance = balance + depositAmount
        },
        withdrawal: function (withdrawalAmount) {
            balance = balance - withdrawalAmount
        },
        getBalance: function () {
            return balance
        },
        getOwnerName: function () {
            return owner
        },
        setOwnerName: function (ownerName) {
            owner = ownerName
        },
        updateOwnerName: function () {
            let me = this
            // CLOSURE TO BE USED AS THE CLICK EVENT HANDLER
            return function () {
                // 'THIS' IS THE CLICKED BUTTON
                // 'ME' IS THE OBJECT LITERAL
                let ownerName = prompt("Please enter owner name")
                me.setOwnerName(ownerName)
                $('balance').innerHTML = me.getOwnerName() + ': ' + me.getBalance()
            }
        },
        getDeposit: function () {
            let me = this
            // CLOSURE TO BE USED AS THE CLICK EVENT HANDLER
            return function () {
                // 'THIS' IS THE CLICKED BUTTON
                // 'ME' IS THE OBJECT LITERAL
                let depositAmount = parseFloat(prompt("Please enter an amount to deposit"))
                if (!isNaN(depositAmount) && depositAmount > 0) {
                    me.deposit(depositAmount)
                    $('balance').innerHTML = me.getOwnerName() + ': ' + me.getBalance()
                } else {
                    alert('Deposit must be a number greater than zero.');
                }
                
            }
        },
        getWithdrawal: function () {
            let me = this
            // CLOSURE TO BE USED AS THE CLICK EVENT HANDLER
            return function () {
                // 'THIS' IS THE CLICKED BUTTON
                // 'ME' IS THE OBJECT LITERAL
                let withdrawalAmount = parseFloat(prompt("Please enter an amount to withdrawal"))
                if (!isNaN(withdrawalAmount) && withdrawalAmount > 0 && withdrawalAmount <= me.getBalance()) {
                    me.withdrawal(withdrawalAmount)
                    $('balance').innerHTML = me.getOwnerName() + ': ' + me.getBalance()
                } else {
                    alert('Withdrawal must be a number less than the account balance.');
                }
            }
        }
    }
}

// CREATE THE BANK ACCOUNT OBJECT
const myAccount = bankAccount('')

window.addEventListener('load', () => {
    $('owner_name').onclick = myAccount.updateOwnerName()
    $('deposit').onclick = myAccount.getDeposit()
    $('withdrawal').onclick = myAccount.getWithdrawal()
})
    