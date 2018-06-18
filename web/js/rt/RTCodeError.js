'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('util');
var _ = require('lodash');

/**
 * @typedef {{line: number, col: number}} Pos
 */

/**
 * @param {string} html
 * @param node
 * @return {Pos}
 */
function getLine(html, node) {
    if (!node) {
        return { line: 1, col: 1 };
    }
    var linesUntil = html.substring(0, node.startIndex).split('\n');
    return { line: linesUntil.length, col: linesUntil[linesUntil.length - 1].length + 1 };
}

function norm(n) {
    return n === undefined ? -1 : n;
}

/**
 * @param {string} message
 * @param {number=} startOffset
 * @param {number=} endOffset
 * @param {number=} line
 * @param {number=} column
 * @constructor
 */

var RTCodeError = function (_Error) {
    _inherits(RTCodeError, _Error);

    function RTCodeError(message, startOffset, endOffset, line, column) {
        _classCallCheck(this, RTCodeError);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RTCodeError).call(this));

        Error.captureStackTrace(_this, RTCodeError);
        _this.name = 'RTCodeError';
        _this.message = message || '';
        _this.index = norm(startOffset);
        _this.startOffset = norm(startOffset);
        _this.endOffset = norm(endOffset);
        _this.line = norm(line);
        _this.column = norm(column);
        return _this;
    }

    return RTCodeError;
}(Error);

/**
 * @type {buildError}
 */


RTCodeError.build = buildError;
RTCodeError.norm = norm;

/**
 * @param {*} context
 * @param {*} node
 * @param {string} msg
 * @param args
 * @return {RTCodeError}
 */
function buildFormat(context, node, msg, args) {
    return buildError(context, node, util.format.apply(this, [msg].concat(args)));
}

/**
 * @param {*} context
 * @param {*} node
 * @param {string} msg
 * @param {Array.<string>} args
 * @return {RTCodeError}
 */
RTCodeError.buildFormat = _.rest(buildFormat, 3);

/**
 * @param {*} context
 * @param {*} node
 * @param {string} msg
 * @return {RTCodeError}
 */
function buildError(context, node, msg) {
    var loc = getNodeLoc(context, node);
    return new RTCodeError(msg, loc.start, loc.end, loc.pos.line, loc.pos.col);
}

/**
 * @param context
 * @param node
 * @return {{pos:Pos, start:number, end:number}}
 */
function getNodeLoc(context, node) {
    var start = node.startIndex;
    var pos = getLine(context.html, node);
    var end = void 0;
    if (node.data) {
        end = start + node.data.length;
    } else if (node.next) {
        // eslint-disable-line
        end = node.next.startIndex;
    } else {
        end = context.html.length;
    }
    return {
        pos: pos,
        start: start,
        end: end
    };
}

module.exports = {
    RTCodeError: RTCodeError,
    getNodeLoc: getNodeLoc
};