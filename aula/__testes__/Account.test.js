// it("Jest", ( () => {
//     expect(1 + 1).toBe(2)
// }))

const Account = require("../classes/Account");

describe("Account", () => {
    it("Buscar informações da conta", () => {	
        // const currentAccount = new Account("Davi", 1000);
        
        // expect(currentAccount.get()).toEqual({username: "Davi", total: 1000});
    }); 

    it("Depositar na conta", () => {
        const currentAccount = new Account("Davi", 1000);

        const response = currentAccount.deposit(500);
        expect(response).toBe(1500);

    });

});
