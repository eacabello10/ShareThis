import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";
import {check} from "meteor/check";
import igdb from 'igdb-api-node';

global["3scaleKey"] = "3f33fc8eff221f5bf3df8d6e26704ca3";
const gameClient = igdb();

Meteor.methods({
	"games.getGameByName" ({name}) {
	return gameClient.games({
    search: name
	}, [
    'name',
    'release_dates.date',
    'rating',
    'hypes',
    'cover'
    ]).then(response => {return response}).catch(error => {throw error;});
    },
    "games.getGamesByPlatform" ({platform}) {
        return gameClient.platforms({
            search: platform
        }, [
        'name',
        'slug',
        'created_at',
        'generation',
        'games'
    ]).then(response => {return response}).catch(error => {throw error;});
    }
});