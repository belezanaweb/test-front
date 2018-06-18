(function (process){
'use strict';
/**
 * @typedef {{color: boolean, cwd: string, report: function(string), issue: function(string, string,string,number,number,number=,number=), warn: function(string), verbose: function(string), getMessages: function():Array.<MESSAGE>, options:Options, messages: Array.<MESSAGE>}} CONTEXT
 */
/**
 * @typedef {{msg: string, level: MESSAGE_LEVEL, file: string,line:number,column:number,startOffset:number,endOffset:number}} MESSAGE
 */

/**
 * Enum for tri-state values.
 * @enum {string}
 */

var MESSAGE_LEVEL = {
    ERROR: 'ERROR',
    WARN: 'WARN',
    INFO: 'INFO'
};

var _ = require('lodash');
var err = require('./RTCodeError');
var norm = err.RTCodeError.norm;

/**
 * @type {CONTEXT}
 */
var context = {
    /** @type {Array.<MESSAGE>} */
    messages: [],
    /** @type {boolean} */
    color: true,
    /** @type {string} */
    cwd: process.cwd(),
    report: function report(msg) {
        console.log(msg);
    },
    verbose: function verbose(msg) {
        if (context.options.verbose) {
            console.log(msg);
        }
    },
    info: function info(msg, file, line, column) {
        context.issue(MESSAGE_LEVEL.INFO, msg, file, line, column);
    },
    warn: function warn(msg, file, line, column, startOffset, endOffset) {
        context.issue(MESSAGE_LEVEL.WARN, msg, file, line, column, startOffset, endOffset);
    },
    error: function error(msg, file, line, column, startOffset, endOffset) {
        context.issue(MESSAGE_LEVEL.ERROR, msg, file, line, column, startOffset, endOffset);
    },

    /**
     * @param {MESSAGE_LEVEL} level
     * @param {string} msg
     * @param {string} file
     * @param {number} line
     * @param {number} column
     * @param {number=} startOffset
     * @param {number=} endOffset
     */
    issue: function issue(level, msg, file, line, column, startOffset, endOffset) {
        context.messages.push({ level: level, msg: msg, file: file || null, line: norm(line), column: norm(column), index: norm(startOffset), startOffset: norm(startOffset), endOffset: norm(endOffset) });
    },
    getMessages: function getMessages() {
        return context.messages;
    },
    clear: function clear() {
        context.messages = [];
    },
    hasErrors: function hasErrors() {
        return _.some(context.messages, { level: MESSAGE_LEVEL.ERROR });
    },

    options: {
        verbose: false,
        outFile: null,
        format: 'stylish'
    },
    MESSAGE_LEVEL: MESSAGE_LEVEL
};

module.exports = context;
}).call(this,require('_process'))
