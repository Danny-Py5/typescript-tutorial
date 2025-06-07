"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(data) {
    return {
        name: data.name,
        email: data.email,
        id: data.id,
        isLoggedIn: data.isLoggedIn,
        kill: function () { return "Account killed"; },
        role: "Admin",
    };
}
var user1 = createUser({
    name: "Daniel Olatunde",
    email: "OlatundeDaniel@gmail.com",
    id: "adsfa234.id",
    isLoggedIn: false,
    kill: function () { return ""; },
    role: "Admin",
});
// using with class
var MyApp = /** @class */ (function () {
    function MyApp(name, email, id, isLoggedIn, role, kill) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.isLoggedIn = isLoggedIn;
        this.role = role;
        this.kill = kill;
        // protected used to share private value across classes (parent and child)
        this._usedTime = 3;
    }
    return MyApp;
}());
var FamilyUsedMyApp = /** @class */ (function (_super) {
    __extends(FamilyUsedMyApp, _super);
    function FamilyUsedMyApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FamilyUsedMyApp.prototype.getUsedTime = function () {
        return this._usedTime;
    };
    return FamilyUsedMyApp;
}(MyApp));
var family = new FamilyUsedMyApp("Daniel", "da@da.com", "ads323.id", false, "Admin", function () { return ""; });
console.log(family.getUsedTime());
