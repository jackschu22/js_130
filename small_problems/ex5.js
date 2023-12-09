// JS130 Small Problems: Closures, Private Data, and IIFEs Problem 5:

// Using OLOO create an Account prototype object that anonymizes user objects on init. 
// The created object should not have access to the function that anonymizes a user 
// other than through the init and reanonymize methods. The function that anonymizes 
// creates a 16 character sequence composed of letters and numbers.

// Then, modify the solution so that it can accommodate creating multiple objects with 
// their own private data.

let Account = (function() {
	let users = {};

	function setUser(id, email, password, firstName, lastName) {
		users[id] = { email, password, firstName, lastName };
	}

	function isValidPassword(testPassword) {
		return users[this.displayName].password === testPassword;
	}

	function generateRandomChar() {
		let randomIndex = Math.floor(Math.random() * 62);
		return 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789'[randomIndex];
	}

	function anonymize() {
		let result = '';

		for (let i = 1; i <= 16; i++) {
			result = result.concat(generateRandomChar());
		}

		return result;
	}

	return {
		init(email, password, firstName, lastName) {
			this.displayName = anonymize();
			setUser(this.displayName, email, password, firstName, lastName);
			return this;
		},

		firstName(password) {
			if (isValidPassword.call(this, password)) {
				return users[this.displayName].firstName;
			} else return 'Invalid Password'
		},

		lastName(password) {
			if (isValidPassword.call(this, password)) {
				return users[this.displayName].lastName;
			} else return 'Invalid Password'
		},

		email(password) {
			if (isValidPassword.call(this, password)) {
				return users[this.displayName].email;
			} else return 'Invalid Password'
		},

		displayName() {
			return this.displayName;
		},

		reanonymize(password) {
			if (isValidPassword.call(this, password)) {
				let oldDisplayName = this.displayName;
				this.displayName = anonymize();

				setUser(this.displayName, users[oldDisplayName].email, 
					users[oldDisplayName].password, 
					users[oldDisplayName].firstName, 
					users[oldDisplayName].lastName);

				delete oldDisplayName in users;
				return true;
			} else return 'Invalid Password'
		},

		resetPassword(currentPassword, newPassword) {
			if (isValidPassword.call(this, currentPassword)) {
				users[this.displayName].password = newPassword;
				return true;
			} else return 'Invalid Password'
		}

	}
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));            // logs true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');

console.log(fooBar.firstName('abc'));           // logs 'foo'
console.log(fooBar.email('abc'));               // logs 'foo@bar.com'
console.log(bazQux.firstName('123456'));        // logs 'baz'
console.log(bazQux.email('123456'));            // logs 'baz@qux.com'
