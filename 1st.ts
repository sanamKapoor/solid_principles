class Order {
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

        this.sendEmail();
    }


    // Breaking Single Responsibility Principle
    sendEmail(){
        console.log(`Send Email to ${this.email}`);
    }
}

// Order Class should be responsible for order only not for sending email 
const order = new Order(2000, 20, 10, 30, 'sanam@gmail.com');
order.calculateOrder();

// Solution 01

class NewOrder {
    readonly totalAmount: number;
    readonly tax: number;
    readonly tip: number;
    readonly shipping: number;

    constructor(amount: number, tax: number, tip: number, shipping: number) {
        this.totalAmount = amount;
        this.tax = tax;
        this.tip = tip;
        this.shipping = shipping;
    }

    calculateOrder(){
        const orderVal = this.totalAmount + this.tax + this.tip + this.shipping;
        console.log(orderVal);
    }
}

const newOrder = new NewOrder(3000, 10, 5, 35);
newOrder.calculateOrder();

class SendEmail {
    private email: string;

    constructor(email: string){
        this.email = email;
    }

    sendEmail(){
        console.log(`Send Email to ${this.email}`);
    }
}

const emailObj = new SendEmail('will@gmail.com');
emailObj.sendEmail();

// Solution 02

class Email {
    static sendEmail(email: string){
        console.log(`Send Email to ${email}`);
    }
}

Email.sendEmail('willson@gmail.com');