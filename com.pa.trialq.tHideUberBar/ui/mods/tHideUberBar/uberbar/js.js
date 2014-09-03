//redefine uberbar visibility handler to always act on false
handlers.visible = function (payload) {	model.showUberBar(!!false); }
//call visibility handler asap, just in case
handlers.visible(false);
