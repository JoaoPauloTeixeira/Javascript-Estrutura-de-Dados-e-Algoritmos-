function Set() {
    var items = {};

    this.add = function(value) {
        // if(!this.has(value)){
        //     items[value] = value;
        //     return true;
        // }
        // return false;

        items[value] = value;
        return true;
    }

    this.delete = function(value) {
        if(this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    }

    this.has = function(value) {
        //Devolve se o valor existe ou não
        return items.hasOwnProperty(value);
    }

    this.clear = function() {
        items = {};
    }

    this.size = function() {
        return Object.keys(items).length;
    }

    this.values = function() {
        var values = [];
        var keys = Object.keys(items);
        for(var i = 0; i < keys.length; i++) {
            values.push(items[keys[i]]);
        }
        return values;
    }

    this.union = function(otherSet) {
        var unionSet = new Set();
        values = this.values();

        for(var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        values = otherSet.values();

        for(var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    }

    this.intersection = function(otherSet) {
        var intersectionSet = new Set();
        var values = this.values();

        for(var i = 0; i < values.length; i++) {
            if(otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet;
    }


    this.difference = function(otherSet) {
        var differnceSet = new Set();
        var values = this.values();

        for(var i = 0; i < values.length; i++) {
            if(!otherSet.has(values[i])) {
                differnceSet.add(values[i])
            }
        }
        return differnceSet;
    }

    this.subset = ((otherSet) => {
        if(this.size > otherSet.size()) {
            return false;
        } else {
            var values = this.values();

            for(var i = 0; i < values.length; i++) {
                if(!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    })
}

var setA = new Set();

setA.add(1);
setA.add(2);

var setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

var setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

// var objAssing = Object.assign([], setA, setB);
// console.log(objAssing.values());

// var unionAB = setA.union(setB);
// console.log(unionAB.values());

// var intersectionAB = setA.intersection(setB);
// console.log(intersectionAB.values());

// var differenceAB = setA.difference(setB);
// console.log(differenceAB.values());

console.log(setA.subset(setB));
console.log(setA.subset(setC));