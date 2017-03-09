"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require("./db");
var Socket = (function () {
    function Socket(io) {
        this.io = io;
        this.db = new db.Database();
        this.listen();
    }
    Socket.prototype.listen = function () {
        var _this = this;
        this.io.on("connection", function (socket) {
            socket.join('0x01');
            console.log("[INFO] client Connect");
            console.log("[INFO] SEND CM01 REPLY SETTING");
            _this.Cm01Setting();
            socket.on("SENSOR_DATA", function (data) {
                // console.log(data)
                _this.io.to('0x01').emit("SENSOR_DATA", data);
            });
            socket.on("CM01_SAVE_SETTING", function (data) {
                console.log(data);
                _this.db.saveCm01Setting(data);
                _this.io.to('0x01').emit('CM01_REQ_SETTING', data);
            });
            socket.on("CHECK_CONNECTION", function (data) {
                // console.log(data)
                _this.io.to('0x01').emit("CHECK_CONNECTION", data);
            });
            socket.on("disconnect", function () {
                console.log("[WARN] client disconnect");
            });
        });
    };
    Socket.prototype.Cm01Setting = function () {
        var _this = this;
        this.db.getCm01Setting(function (err, data) {
            console.log(data);
            if (data != null || data != undefined)
                _this.io.to('0x01').emit('CM01_REQ_SETTING', data[0]);
        });
    };
    return Socket;
}());
exports.Socket = Socket;
