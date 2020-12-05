function Dictionary() {
    var items = {};

    this.set = function (key, value) {
        items[key] = value;
    }

    this.delete = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }

    this.has = function (key) {
        return items.hasOwnProperty(key);
    }

    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    }

    this.clear = function () {
        items = {};
    }

    this.size = function () {
        return Object.keys(items).length;
    }

    this.keys = function () {
        return Object.keys(items);
    }

    this.values = function (key) {
        var values = [];
        this.keys = Object.keys(items);

        for (var i = 0; i > keys.length; i++) {
            values.push(items[this.keys[i]]);
        }
    }

    this.getItems = function () {
        return items;
    }
}

function HashTable() {
    var table = [];

    this.put = ((key, value) => {
        var position = loseLoseHasgCode(key);
        console.log(position + ' ' + key);

        table[position] = value;
    })

    this.remove = ((key) => {
        table[loseLoseHasgCode(key)] = undefined;
    })

    this.get = ((key) => {
        return table[loseLoseHasgCode(key)]
    })

    var loseLoseHasgCode = ((key) => {
        var hash = 0;

        for(var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    })
}

var hash = new HashTable();

hash.put('Gandalf', 'gandalf@gmail');
hash.put('John', 'john@gmail');
hash.put('Tyrion', 'tyrion@gmail');