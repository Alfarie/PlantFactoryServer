"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb = require("mongodb");
var Database = (function () {
    function Database() {
        this.dbUrl = "mongodb://localhost:27017/grobotdb";
        this.mongoClient = mongodb.MongoClient;
        // code...
    }
    Database.prototype.getCm01Setting = function (callback) {
        this.mongoClient.connect(this.dbUrl, function (err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error:', err);
            }
            else {
                var settingCollection = db.collection('Setting');
                settingCollection.find().toArray(callback);
            }
            db.close();
        });
    };
    Database.prototype.saveCm01Setting = function (data) {
        this.mongoClient.connect(this.dbUrl, function (err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error:', err);
            }
            else {
                var settingCollection = db.collection('Setting');
                data.settingid = 0;
                settingCollection.remove({ 'settingid': 0 });
                settingCollection.insert(data, { w: 1 }, function (err, db) {
                    if (err)
                        console.log("$error");
                    else {
                        console.log("[DATABASE] SAVE SETTING SUCCESSFUL");
                    }
                });
            }
            db.close();
        });
    };
    return Database;
}());
exports.Database = Database;
