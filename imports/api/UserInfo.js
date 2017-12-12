import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";
import {check} from "meteor/check";

export const UserInfo = new Mongo.Collection("userInfo");

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish("userInfo", function userInfoPublication() {
        return UserInfo.find();
    });
}

Meteor.methods({
    "user.create" (userID) {
        //TODO
    },
    "user.find" (userId) {
        //TODO
    },
    "user.addChat"(chatId){
        //TODO
    }
});
