

class Bank {
  constructor() {
    this.balance = 0;
		this.customers = {};
		this.deposits = {};
		this.loans = {};
		this.id = makeid(10);
		this.established = new Date();
  }

	addCustomer (customer) {
		this.customers[customer.id] = {
			name: customer.name,
			id: customer.id,
			balance: 0,
		};
	}

	removeCustomer (customer) {
		delete this.customers[customer.id];
		customer.removeBank( this.id );
	}

	receiveDeposit (customer, amount) {
		this.balance += amount;
		this.customers[customer.id].balance += amount;
		
	}

	withdraw (amount) {
		this.balance -= amount;
		this.customers[customer.id].balance -= amount;
		customer.earn(amount);
	}

	publicInfo () {
		return {
			id: this.id,
			established: this.established,
		};
	}
}

module.exports = { Bank };
