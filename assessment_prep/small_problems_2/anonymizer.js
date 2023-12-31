let Account = (function() {
  let users = {};

  function anonymize() {
    const CHARS = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789';
    let result = '';

    for (let i = 1; i <= 16; i++) {
      let randomIndex = Math.floor(CHARS.length * Math.random());
      result += CHARS[randomIndex];
    }

    return result;
  }

  return {
    init(email, password, firstName, lastName) {
      this.displayName = anonymize();
      users[this.displayName] = { email, password, firstName, lastName };
      return this;
    },

    isValidPassword(testPassword) {
      return testPassword === users[this.displayName].password;
    },

    reanonymize(password) {
      if (this.isValidPassword(password)) {
        let oldDisplayName = this.displayName;
        this.displayName = anonymize();

        users[this.displayName] = { ...users[oldDisplayName] };
        delete users[oldDisplayName];

        return true;
      } else {
        return 'Invalid Password';
      }
    },
  
    resetPassword(password, newPassword) {
      if (this.isValidPassword(password)) {
        users[this.displayName].password = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },
    
    firstName(password) {
      if (this.isValidPassword(password)) {
        return users[this.displayName].firstName;
      } else {
        return 'Invalid Password';
      }
    },
  
    lastName(password) {
      if (this.isValidPassword(password)) {
        return users[this.displayName].lastName
      } else {
        return 'Invalid Password';
      }
    },
  
    email(password) {
      if (this.isValidPassword(password)) {
        return users[this.displayName].email;
      } else {
        return 'Invalid Password';
      }
    },
  
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
fooBar.reanonymize('abc');                         
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));           // logs 'foo'
console.log(fooBar.email('abc'));               // logs 'foo@bar.com'
console.log(bazQux.firstName('abc'));           // logs 'Invalid Password'
console.log(bazQux.email('123456'));            // logs 'baz@qux.com'