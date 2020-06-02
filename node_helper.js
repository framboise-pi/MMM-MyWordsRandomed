//===========================
//	Magic Mirror
//	Module: MMM-MyWordsRandomed
//	https://github.com/framboise-pi/MMM-MyWordsRandomed
//	Copyright(C) 2020 Cedric Camille Lafontaine http://www.framboise-pi.fr,
//	version 0.0.1
//===========================
var NodeHelper = require("node_helper");
var Random = require('java-random');
var fs = require('fs');
//

module.exports = NodeHelper.create({

	start: function() {

	},
//
	socketNotificationReceived: function(notification, payload) {
		var self = this;
		if (notification === "MMM_MyWordsRandomed_do") {
		let rawdata = fs.readFileSync(self.path + '/words.json');
		let student = JSON.parse(rawdata);
			name = student.name;
			verb = student.verb;
			adv = student.adv;
			adj = student.adj;
			var self = this;
			name_r = this.ArrayLengthAndRandom(name);
			verb_r = this.ArrayLengthAndRandom(verb);
			adv_r = this.ArrayLengthAndRandom(adv);
			adj_r = this.ArrayLengthAndRandom(adj);
			sentence = name[name_r] + ' ' + verb[verb_r] + ' ' + adv[adv_r] + ' ' + adj[adj_r];
			this.sendSentenceDone(sentence);
		}
	},
	//
	ArrayLengthAndRandom: function(payload){
		r = new Random();
		randomed = r.nextInt(payload.length);
		return randomed;
	},
	sendSentenceDone: function(payload) {
		this.sendSocketNotification("MMM_MyWordsRandomed_done", payload);
	},
	
});
