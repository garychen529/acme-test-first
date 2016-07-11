function AcmeDb() {
	this.employeesArray = [];
}

AcmeDb.prototype.getEmployees = function() {
	return this.employeesArray.sort(function(a,b) {
		if (a.name < b.name) {
			return -1;
		}
		else if (a.name > b.name) {
			return 1;
		}
		return 0;
	});
};

AcmeDb.prototype.addEmployee = function(name, idNumber) {
	var newEmployee = {};
	newEmployee.name = name;
	newEmployee.id = idNumber;
	newEmployee.constructor = Employee;
	this.employeesArray.push(newEmployee);
};

AcmeDb.prototype.getEmployee = function(idNumber) {
	var theEmployee = {};
	for (var i = 0; i < this.employeesArray.length; i++) {
		if (idNumber === this.employeesArray[i].id) {
			theEmployee.name = this.employeesArray[i].name;
			theEmployee.id = this.employeesArray[i].id;
			theEmployee.constructor = Employee;
		}
	}
	return theEmployee;
};

AcmeDb.prototype.deleteEmployee = function(deleteObj) {
	this.employeesArray = this.employeesArray.filter(function(everyEmployee) {
		return deleteObj.name !== everyEmployee.name;
	});
};

AcmeDb.prototype.groupedEmployees = function() {
	var groups = {};
	for (var i = 0; i < this.employeesArray.length; i++) {
		var nameFirstLetter = this.employeesArray[i].name.split('')[0];
		if (groups[nameFirstLetter] === undefined) {
			groups[nameFirstLetter] = [];
			groups[nameFirstLetter].push(this.employeesArray[i]);
		}
		else {
			groups[nameFirstLetter].push(this.employeesArray[i]);
		}
	}
	return groups;
};