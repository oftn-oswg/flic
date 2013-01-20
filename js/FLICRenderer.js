var FLICRenderer = (function() {
	"use strict";

	/**
	 * Generates a FLIC code as an image.
	 *
	 * @author Devin Samarin
	 * @constructor
	 * @param {FLICEncoder} encoder
	 */
	function FLICRenderer(encoder) {
		this.encoder = encoder;
	}

	/**
	 * Renders a FLIC to a canvas.
	 *
	 * @param {HTMLCanvasElement} canvas The canvas element to render to.
	 * @param {number} x The x-coordinate of the top-left corner of the FLIC.
	 * @param {number} y The y-coordinate of the top-left corner of the FLIC.
	 * @param {number} size The width/height of the FLIC.
	 */
	FLICRenderer.prototype.renderToCanvas = function(canvas, x, y, size) {
		// TODO: Actually do some canvas renderin'.
	};

	/**
	 * Renders a FLIC and returns the URL of its image.
	 *
	 * @param {number} size The width/height of the FLIC.
	 * @returns {string} The URL of the FLIC.
	 */
	FLICRenderer.prototype.renderToURL = function(size) {
		var canvas;
		
		canvas = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
		canvas.width = size;
		canvas.height = size;

		this.renderToCanvas(canvas, 0, 0, size);

		return canvas.toDataURL();
	};
