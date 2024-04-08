abstract class Mammal {
    eat() {};
    see() {};
}

abstract class FlyInterface {
    fly() {};
}

class Bird implements Mammal, FlyInterface {
    eat(): void {
        console.log('I can eat');
    }

    fly(): void {
        console.log('I can fly');
    }

    see(): void {
        console.log('I can see');
    }
}

class Dog implements Mammal {
    eat(): void {
        console.log('I can eat');
    }

    see(): void {
        console.log('I can see');
    }
}