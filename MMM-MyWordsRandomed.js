/* global Module */

/*	Magic Mirror
 *	Module: MMM-MyWordsRandomed
 *	https://github.com/framboise-pi/MMM-MyWordsRandomed
 *	Copyright(C) 2020 Cedric Camille Lafontaine http://www.framboise-pi.fr,
 *	version 0.0.1
 */

Module.register("MMM-MyWordsRandomed",{
	// CONFIG
	defaults: {
		//display_interval: 5000,//ms
		fade: 3000,//ms
	},
	sentence: "loading...",
	// CSS
	getStyles: function () {
		return ["MMM-MyWordsRandomed.css", "font-awesome.css"];
	},
	//
	start: function() {
		var self = this;
		setInterval(function() {
			self.RandomWords();
			self.updateDom();
			}, this.config.display_interval);
	},
	//
	socketNotificationReceived: function (notification, payload) {
		var self = this;
		if (notification = "MMM_MyWordsRandomed_done"){
		self.sentence = payload;
		self.updateDom(this.config.fade);
		}
	},
	RandomWords: function() {
		var self = this;
		this.sendSocketNotification("MMM_MyWordsRandomed_do");
	},
	//#end socketNotif - random done
	getDom: function() {
		var self = this;
		var wrapper = document.createElement("div");
		//compliments look-like
		wrapper.className = this.config.classes ? this.config.classes : "thin xlarge bright pre-line";
		ihtml =  "<div class='container'>"
		ihtml += "<div><p class='bottom'>" + self.sentence + "</p></div>"
		ihtml += "</div>"
		wrapper.innerHTML = ihtml
		return wrapper
	},
});


