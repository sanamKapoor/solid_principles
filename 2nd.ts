class Order01 {
    readonly totalAmount: number;
    readonly tax: number;
    readonly tip: number;
    readonly shipping: number;
    readonly email: string;

    constructor(amount: number, tax: number, tip: number, shipping: number, email: string) {
        this.totalAmount = amount;
        this.tax = tax;
        this.tip = tip;
        this.shipping = shipping;
        this.email = email;
    }

    calculateOrder(){
        const orderVal = this.totalAmount + this.tax + this.tip + this.shipping;
        console.log(orderVal);
        return orderVal;
    }
}

class CustomerInfo extends Order01 {
    private bal: number = 0;

    set balance(bal: number){
        this.bal = bal;
    }

    get balance(){
        return this.calculateOrder() - this.bal;
    }
}

const customer = new CustomerInfo(3000, 500, 100, 200, 'devil@gmail.com');
customer.balance = 500;
console.log(customer.balance);

