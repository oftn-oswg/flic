var FLICEncoder = (function() {
	"use strict";

	/**
	 * The FLICEncoder's job is to convert
	 * data into dots usable by the FLICRenderer.
	 *
	 * @author Devin Samarin
	 * @constructor
	 */
	function FLICEncoder(data) {
		if (arguments.length > 0)
			this.setData(data);
	}

	/**
	 * Flags for the FLIC code.
	 * @enum {number}
	 */
	FLICEncoder.FLAG = {
		NONE:        0,
		ENCRYPTION:  1 << 0,
		COMPRESSION: 1 << 1
	};

	/**
	 * Mask to apply to encoded data.
	 *
	 * AUTO means the mask should automatically be determined by a fancy algorithm.
	 * NONE means that no mask should be applied (x % 2 === 9001).
	 * HORIZ means the mask should be alternating horizontal stripes (y % 2 === 0).
	 * VERT means the mask should be alternating vertical stripes (x % 2 === 0).
	 * CHECK means the mask should be a checkered pattern ((x + y) % 2 === 0).
	 *
	 * @enum {number}
	 */
	FLICEncoder.MASK = {
		AUTO:   -1,
		NONE:    0,
		HORIZ:   1,
		VERT:    2,
		CHECK:   3
	};

	// Defaults
	FLICEncoder.prototype.updated = true;
	FLICEncoder.prototype.flags = FLICEncoder.FLAG.NONE;
	FLICEncoder.prototype.mask  = FLICEncoder.MASK.AUTO;
	FLICEncoder.prototype.mode  = FLICEncoder.MODE.BLOB;

	/**
	 * Turns a data flag on or off.
	 *
	 * The flag can be one of FLAG_ENCRYPTION or FLAG_COMPRESSION.
	 *
	 * @param {number} flag
	 * @param {boolean} on
	 */
	FLICEncoder.prototype.setFlag = function(flag, on) {
		on = Boolean(on);
		if (on) {
			this.flags |= flag;
		} else {
			this.flags &= ~flag;
		}
	}

	/**
	 * Sets the data contents for the entire barcode.
	 * @param {(string|number|Blob)} data
	 */
	FLICEncoder.prototype.setData = function(data) {
		// TODO: Convert data into Blob or ArrayBuffer.
		this.data = data;
	};

	/**
	 * Encodes the data
	 * @returns {Array.number}
	 */
	FLICEncoder.prototype.encode = function() {
		var encoded;

		if (!this.updated) {
			return this.encoded;
		}

		// TODO: Actually do something useful here.

		this.encoded = encoded;
		this.updated = false;
		return encoded;
	};

	return FLICEncoder;

}());
