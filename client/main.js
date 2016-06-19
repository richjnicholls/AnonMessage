import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Messages = new Mongo.Collection('messages');

if(Meteor.isClient) {
	Template.listing.helpers({
		entries: function() {
			return Messages.find();
		}
	});

	Template.newEntry.events ({
		'submit #entryForm': function(event){
			//prevent form submission
			event.defaultPrevented();

			var c = event.target.querySelector('#content').value;

			//insert into the collection
			Messages.insert({content: c, date: new Date() });

			event.target.reset();
		}
	});
}

if (Meteor.isServer) {
	Meteor.startup(function(){

	});
}