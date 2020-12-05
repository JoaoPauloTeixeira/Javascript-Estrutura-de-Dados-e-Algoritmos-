function Stack() {
    var items = [];

    this.push = function (element) {
        if (Array.isArray(element)) {
            items.push(...element);
        } else {
            items.push(element);
        }
            
    }

    this.pop = function () {
        return items.pop();
    }

    this.peek = function () {
        return items[items.length - 1];
    }

    this.isEmpty = function () {
        return items.length === 0;
    }

    this.clear = function () {
        items = [];
    }

    this.size = function () {
        return items.length;
    }

    this.print = function () {
        console.log(items.toString());
    }
}

var pilha = new Stack();

pilha.push(5);
pilha.push(10);
pilha.push(25);

pilha.print();

/* function decimalTobin(numeroDecimal){
    var restStack = [];
    var rest;
    var binaryString = '';

    while(numeroDecimal > 0){
        rest = Math.floor(numeroDecimal % 2);
        restStack.push(rest);

        numeroDecimal = Math.floor(numeroDecimal / 2);
    }

    while(restStack.length > 0) {
        binaryString += restStack.pop().toString();
    }

    return binaryString;
}

console.log(decimalTobin(40)); */

/* function baseConverter(decNumber, base) {
    var restStack = [];
    var rest;
    var baseString = '';
    var digits = '0123456789ABCDEF';

    while (decNumber > 0) {
        rest = Math.floor(decNumber % base);
        restStack.push(rest);

        decNumber = Math.floor(decNumber / base);
    }

    while (restStack.length > 0) {
        baseString += digits[restStack.pop()];
    }

    return baseString;
}

console.log(baseConverter(123, 16)); */