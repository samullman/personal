class Population {
	constructor () {
		this.persons = {};
	}

	addPerson (person) {
		this.persons[person.id] = person;
	}
}

class FinancialSystem {
	constructor () {
		this.banks = {};
	}

	addBank (bank) {
		this.banks[banks.id] = bank;
	}

	removeBank (bank) {
		delete this.banks[bank.id];
	}
}

module.exports = {
	Population,
	FinancialSystem,
};