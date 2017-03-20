"use strict";
var RegisteredUser = (function () {
    function RegisteredUser(name, email) {
        this.name = name;
        this.email = email;
        this.name = name;
        this.email = email;
    }
    RegisteredUser.prototype.print = function () {
        console.log(this.name, this.email);
    };
    return RegisteredUser;
}());
var ImageUser = (function () {
    function ImageUser(name, email, avatar) {
        this.name = name;
        this.email = email;
        this.avatar = avatar;
        this.name = name;
        this.email = email;
    }
    ImageUser.prototype.print = function () {
        console.log(this.name, this.email);
    };
    return ImageUser;
}());
//# sourceMappingURL=interface.js.map