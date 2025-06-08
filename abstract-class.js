var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Maturity;
(function (Maturity) {
    Maturity["SUPER"] = "Super";
    Maturity["MEDIUM"] = "Medium";
    Maturity["LOW"] = "Low";
    Maturity["VERY_LOW"] = "Very Low";
})(Maturity || (Maturity = {}));
var Human = /** @class */ (function () {
    function Human(name, age, height, maturity, sex) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.sex = sex;
        // set maturity
        this.marurity = maturity;
        this.info = "".concat(this.name, " is an human and he is ").concat(this.age, " years old");
    }
    Human.prototype.canSing = function () {
        if (this.age >= 10) {
            return true;
        }
        return false;
    };
    Human.prototype.getMaturity = function () {
        return this._maturity;
    };
    Object.defineProperty(Human.prototype, "marurity", {
        set: function (maturity) {
            if (Maturity.SUPER === maturity) {
                this._maturity = Maturity.SUPER;
                //
            }
            else if (Maturity.LOW === maturity) {
                this._maturity = Maturity.LOW;
                //
            }
            else if (Maturity.MEDIUM === maturity) {
                this._maturity = Maturity.MEDIUM;
                //
            }
            else {
                this._maturity = Maturity.VERY_LOW;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Human;
}());
var Family = /** @class */ (function (_super) {
    __extends(Family, _super);
    function Family(name, age, height, sex, maturity, familyName) {
        var _this = _super.call(this, name, age, height, maturity, sex) || this;
        _this.name = name;
        _this.age = age;
        _this.height = height;
        _this.sex = sex;
        _this.maturity = maturity;
        _this.familyName = familyName;
        // no need of this. ... for name, age, height, maturity, sex
        _this.familyName = familyName;
        return _this;
    }
    Family.prototype.speak = function () {
        console.log(this.name, "is speaking");
    };
    Family.prototype.walk = function () {
        console.log(this.name, "is walking");
    };
    Family.prototype.work = function () {
        console.log(this.name, "is working");
    };
    Object.defineProperty(Family.prototype, "getFamilyName", {
        get: function () {
            return this.familyName;
        },
        enumerable: false,
        configurable: true
    });
    return Family;
}(Human));
var newFamily = new Family("Daneil", 21, 56, "male", "Low", "fatokun");
console.log(newFamily.getMaturity());
console.log(newFamily.info);
newFamily.age = 999;
console.log(newFamily.getMaturity());
console.log(newFamily.info);
