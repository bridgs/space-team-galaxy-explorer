if (typeof define !== 'function') { var define = require('amdefine')(module); }
define([
	'server/space/ship/Console'
], function(
	SUPERCLASS
) {
	function CompassConsole(ship) {
		SUPERCLASS.call(this, ship);
	}
	CompassConsole.prototype = Object.create(SUPERCLASS.prototype);
	CompassConsole.prototype.generateReport = function() {
		var heading = this._ship.physics.facing;
		if(heading > Math.PI) { heading -= 2 * Math.PI; }
		else if(heading <= -Math.PI) { heading += 2 * Math.PI; }
		return {
			id: this._consoleId,
			type: 'CompassConsole',
			heading: { value: heading }
		};
	};
	return CompassConsole;
});