

class Person {
	constructor ( name ) {
		this.id = makeid(10);
		this.name = name;
		this.balance = 0;
		this.banks = {};
	}

	earn (amount) {
		this.balance += amount;
	}

	spend (amount) {
		this.balance -= amount;
	}

	signUpForBank ({ id, info }) {
		this.banks[id] = {
			balance: 0, 
			info, 
		};
	}

	leaveBank ( id ) {
		delete this.banks[id];
	}

	deposit (id, amount) {
		this.balance -= amount;
		this.banks[id].balance += amount;
	}

	withdraw (id, amount) {
		this.balance += amount;
		this.banks[id].balance -= amount;
	}
}

module.exports = { Person };