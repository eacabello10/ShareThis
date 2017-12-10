import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";
import {check} from "meteor/check";
import igdb from 'igdb-api-node';

global["3scaleKey"] = "3f33fc8eff221f5bf3df8d6e26704ca3";
const gameClient = igdb();

Meteor.methods({
	"games.getGameByName" ({name}) {
	gameClient.games({
	filters: {
        'release_dates.date-gt': '2010-12-31',
        'release_dates.date-lt': '2012-01-01'
    },
    limit: 5,
    offset: 0,
    order: 'release_dates.date:desc',
    search: name
	}, [
    'name',
    'release_dates.date',
    'rating',
    'hypes',
    'cover'
]).then(response => {console.log(response.body)}).catch(error => {throw error;});
}
});