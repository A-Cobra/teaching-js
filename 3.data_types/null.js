const passengersService = {
	getPassengerById : function (id){
		// Searches in the database and does not find it
		return null;
	}
};


const searchedPassenger = passengersService.getPassengerById('20031209'); // returns null because it was not found

// Does some more things

// Makes comparisons to handle the abscence of data.

console.log(searchedPassenger);