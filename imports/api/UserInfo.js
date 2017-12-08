import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";
import {check} from "meteor/check";

import {Anons} from "./Anons.js";

export const UserInfo = new Mongo.Collection("userInfo");

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish("userInfo", function userInfoPublication() {
        return UserInfo.find();
    });
}

Meteor.methods({
    "user.create" (userID) {
        // Make sure the user is logged in before inserting a task
        let user = {
            userId : userID,
            chatrooms : []
        };
        let randonName = Math.floor((Math.random()*15)+1);
        let anonName = Anons.find({ id: randonName}).fetch()[0];
        user.anon = anonName.name+anonName.use;
        user._id = UserInfo.insert(user);
        Anons.update({ id: randonName}, {
            $inc: {
                use: 1
            }
        });
        return user;
    },
    "user.find" (userId) {
        check(userId, String);
        let user = UserInfo.find({userId : userId}).fetch()[0];
        return user;

    },
    "user.addChat"(chatId){
        if (!Meteor.user()) {
            throw new Meteor.Error("not-authorized");
        }
    }
});