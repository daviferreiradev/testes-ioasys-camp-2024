class Account {
    constructor(username, total) {
        this.username = username;
        this.total = total;
    }

    get() {
        // return {
        //     username: this.username,
        //     total: this.total
        // };
    }

    deposit(value) {
        this.total += value;
        return this.total;
    }
}

module.exports = Account;