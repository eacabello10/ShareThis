import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";
import {check} from "meteor/check";

Meteor.methods({
    "envs.getId" () {
        console.log(process.env.REACT_APP_APPID)
        return process.env.REACT_APP_APPID
    },
    "envs.getSecret" () {
        return process.env.REACT_APP_SECRET
    }
});