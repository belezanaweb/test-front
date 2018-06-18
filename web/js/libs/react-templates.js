var reactTemplates = (function (exports,_,esprima,normalizeHtmlWhitespace,cheerio,escodegen) {
    'use strict';

    var global = window;

    _ = _ && _.hasOwnProperty('default') ? _['default'] : _;
    esprima = esprima && esprima.hasOwnProperty('default') ? esprima['default'] : esprima;
    normalizeHtmlWhitespace = normalizeHtmlWhitespace && normalizeHtmlWhitespace.hasOwnProperty('default') ? normalizeHtmlWhitespace['default'] : normalizeHtmlWhitespace;
    cheerio = cheerio && cheerio.hasOwnProperty('default') ? cheerio['default'] : cheerio;
    escodegen = escodegen && escodegen.hasOwnProperty('default') ? escodegen['default'] : escodegen;

    var ver0_12_0 = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'circle', 'defs', 'ellipse', 'g', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
    var ver0_11_2 = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'circle', 'defs', 'ellipse', 'g', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan', 'injection'];
    var ver0_11_0 = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'circle', 'defs', 'ellipse', 'g', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan', 'injection'];
    var ver0_10_0 = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'circle', 'defs', 'g', 'line', 'linearGradient', 'path', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'injection'];
    var svg = ['a', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile', 'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tref', 'tspan', 'use'];
    var v12_svg = ver0_12_0.concat(svg);

    var versions = {
        '15.0.1': v12_svg,
        '15.0.0': v12_svg,
        '0.14.0': v12_svg,
        '0.13.1': v12_svg,
        '0.12.2': v12_svg,
        '0.12.1': v12_svg,
        '0.12.0': v12_svg,
        '0.11.2': ver0_11_2,
        '0.11.1': ver0_11_0,
        '0.11.0': ver0_11_0,
        '0.10.0': ver0_10_0,
        default: '0.14.0'
    };
    var reactDOMSupport = versions;

    var ver0_9_0 = ['ActivityIndicatorIOS', 'DatePickerIOS', 'Image', 'ListView', 'MapView', 'Navigator', 'NavigatorIOS', 'PickerIOS', 'ScrollView', 'SliderIOS', 'SwitchIOS', 'TabBarIOS', 'Text', 'TextInput', 'TouchableHighlight', 'TouchableOpacity', 'TouchableWithoutFeedback', 'View', 'WebView'];

    var versions$1 = {
        '0.9.0': {
            react: { name: 'React', module: 'react-native' },
            reactNative: { name: 'React', module: 'react-native' },
            components: ver0_9_0
        },
        '0.29.0': {
            react: { name: 'React', module: 'react' },
            reactNative: { name: 'ReactNative', module: 'react-native' },
            components: ver0_9_0
        },
        default: '0.9.0'
    };

    var reactNativeSupport = versions$1;

    var native = {
        '0.9.0': {
            ListView: {
                Row: { prop: 'renderRow', arguments: ['rowData', 'sectionID', 'rowID', 'highlightRow'] },
                Footer: { prop: 'renderFooter', arguments: [] },
                Header: { prop: 'renderHeader', arguments: [] },
                ScrollComponent: { prop: 'renderScrollComponent', arguments: ['props'] },
                SectionHeader: { prop: 'renderSectionHeader', arguments: ['sectionData', 'sectionID'] },
                Separator: { prop: 'renderSeparator', arguments: ['sectionID', 'rowID', 'adjacentRowHighlighted'] }
            }
        },
        '0.29.0': {
            ListView: {
                Row: { prop: 'renderRow', arguments: ['rowData', 'sectionID', 'rowID', 'highlightRow'] },
                Footer: { prop: 'renderFooter', arguments: [] },
                Header: { prop: 'renderHeader', arguments: [] },
                ScrollComponent: { prop: 'renderScrollComponent', arguments: ['props'] },
                SectionHeader: { prop: 'renderSectionHeader', arguments: ['sectionData', 'sectionID'] },
                Separator: { prop: 'renderSeparator', arguments: ['sectionID', 'rowID', 'adjacentRowHighlighted'] }
            }
        }
    };

    var reactPropTemplates = {
        native: native,
        dom: {}
    };

    var global$1 = (typeof global !== "undefined" ? global :
                typeof self !== "undefined" ? self :
                typeof window !== "undefined" ? window : {});

    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
    var inited = false;
    function init () {
      inited = true;
      var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }

      revLookup['-'.charCodeAt(0)] = 62;
      revLookup['_'.charCodeAt(0)] = 63;
    }

    function toByteArray (b64) {
      if (!inited) {
        init();
      }
      var i, j, l, tmp, placeHolders, arr;
      var len = b64.length;

      if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4')
      }

      // the number of equal signs (place holders)
      // if there are two placeholders, than the two characters before it
      // represent one byte
      // if there is only one, then the three characters before it represent 2 bytes
      // this is just a cheap hack to not do indexOf twice
      placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

      // base64 is 4/3 + up to two characters of the original data
      arr = new Arr(len * 3 / 4 - placeHolders);

      // if there are placeholders, only get up to the last complete 4 chars
      l = placeHolders > 0 ? len - 4 : len;

      var L = 0;

      for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
        arr[L++] = (tmp >> 16) & 0xFF;
        arr[L++] = (tmp >> 8) & 0xFF;
        arr[L++] = tmp & 0xFF;
      }

      if (placeHolders === 2) {
        tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
        arr[L++] = tmp & 0xFF;
      } else if (placeHolders === 1) {
        tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
        arr[L++] = (tmp >> 8) & 0xFF;
        arr[L++] = tmp & 0xFF;
      }

      return arr
    }

    function tripletToBase64 (num) {
      return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
    }

    function encodeChunk (uint8, start, end) {
      var tmp;
      var output = [];
      for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
        output.push(tripletToBase64(tmp));
      }
      return output.join('')
    }

    function fromByteArray (uint8) {
      if (!inited) {
        init();
      }
      var tmp;
      var len = uint8.length;
      var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
      var output = '';
      var parts = [];
      var maxChunkLength = 16383; // must be multiple of 3

      // go through the array every three bytes, we'll deal with trailing stuff later
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
      }

      // pad the end with zeros, but make sure to not forget the extra bytes
      if (extraBytes === 1) {
        tmp = uint8[len - 1];
        output += lookup[tmp >> 2];
        output += lookup[(tmp << 4) & 0x3F];
        output += '==';
      } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
        output += lookup[tmp >> 10];
        output += lookup[(tmp >> 4) & 0x3F];
        output += lookup[(tmp << 2) & 0x3F];
        output += '=';
      }

      parts.push(output);

      return parts.join('')
    }

    function read (buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? (nBytes - 1) : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];

      i += d;

      e = s & ((1 << (-nBits)) - 1);
      s >>= (-nBits);
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      m = e & ((1 << (-nBits)) - 1);
      e >>= (-nBits);
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : ((s ? -1 : 1) * Infinity)
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
    }

    function write (buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
      var i = isLE ? 0 : (nBytes - 1);
      var d = isLE ? 1 : -1;
      var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

      value = Math.abs(value);

      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }

        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }

      for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

      e = (e << mLen) | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

      buffer[offset + i - d] |= s * 128;
    }

    var toString = {}.toString;

    var isArray = Array.isArray || function (arr) {
      return toString.call(arr) == '[object Array]';
    };

    var INSPECT_MAX_BYTES = 50;

    /**
     * If `Buffer.TYPED_ARRAY_SUPPORT`:
     *   === true    Use Uint8Array implementation (fastest)
     *   === false   Use Object implementation (most compatible, even IE6)
     *
     * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
     * Opera 11.6+, iOS 4.2+.
     *
     * Due to various browser bugs, sometimes the Object implementation will be used even
     * when the browser supports typed arrays.
     *
     * Note:
     *
     *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
     *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
     *
     *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
     *
     *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
     *     incorrect length in some situations.

     * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
     * get the Object implementation, which is slower but behaves correctly.
     */
    Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
      ? global$1.TYPED_ARRAY_SUPPORT
      : true;

    function kMaxLength () {
      return Buffer.TYPED_ARRAY_SUPPORT
        ? 0x7fffffff
        : 0x3fffffff
    }

    function createBuffer (that, length) {
      if (kMaxLength() < length) {
        throw new RangeError('Invalid typed array length')
      }
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = new Uint8Array(length);
        that.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        if (that === null) {
          that = new Buffer(length);
        }
        that.length = length;
      }

      return that
    }

    /**
     * The Buffer constructor returns instances of `Uint8Array` that have their
     * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
     * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
     * and the `Uint8Array` methods. Square bracket notation works as expected -- it
     * returns a single octet.
     *
     * The `Uint8Array` prototype remains unmodified.
     */

    function Buffer (arg, encodingOrOffset, length) {
      if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
        return new Buffer(arg, encodingOrOffset, length)
      }

      // Common case.
      if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
          throw new Error(
            'If encoding is specified then the first argument must be a string'
          )
        }
        return allocUnsafe(this, arg)
      }
      return from(this, arg, encodingOrOffset, length)
    }

    Buffer.poolSize = 8192; // not used by this implementation

    // TODO: Legacy, not needed anymore. Remove in next major version.
    Buffer._augment = function (arr) {
      arr.__proto__ = Buffer.prototype;
      return arr
    };

    function from (that, value, encodingOrOffset, length) {
      if (typeof value === 'number') {
        throw new TypeError('"value" argument must not be a number')
      }

      if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, encodingOrOffset, length)
      }

      if (typeof value === 'string') {
        return fromString(that, value, encodingOrOffset)
      }

      return fromObject(that, value)
    }

    /**
     * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
     * if value is a number.
     * Buffer.from(str[, encoding])
     * Buffer.from(array)
     * Buffer.from(buffer)
     * Buffer.from(arrayBuffer[, byteOffset[, length]])
     **/
    Buffer.from = function (value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length)
    };

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      Buffer.prototype.__proto__ = Uint8Array.prototype;
      Buffer.__proto__ = Uint8Array;
    }

    function assertSize (size) {
      if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be a number')
      } else if (size < 0) {
        throw new RangeError('"size" argument must not be negative')
      }
    }

    function alloc (that, size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(that, size)
      }
      if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpretted as a start offset.
        return typeof encoding === 'string'
          ? createBuffer(that, size).fill(fill, encoding)
          : createBuffer(that, size).fill(fill)
      }
      return createBuffer(that, size)
    }

    /**
     * Creates a new filled Buffer instance.
     * alloc(size[, fill[, encoding]])
     **/
    Buffer.alloc = function (size, fill, encoding) {
      return alloc(null, size, fill, encoding)
    };

    function allocUnsafe (that, size) {
      assertSize(size);
      that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
      if (!Buffer.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
          that[i] = 0;
        }
      }
      return that
    }

    /**
     * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
     * */
    Buffer.allocUnsafe = function (size) {
      return allocUnsafe(null, size)
    };
    /**
     * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
     */
    Buffer.allocUnsafeSlow = function (size) {
      return allocUnsafe(null, size)
    };

    function fromString (that, string, encoding) {
      if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8';
      }

      if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding')
      }

      var length = byteLength(string, encoding) | 0;
      that = createBuffer(that, length);

      var actual = that.write(string, encoding);

      if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        that = that.slice(0, actual);
      }

      return that
    }

    function fromArrayLike (that, array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      that = createBuffer(that, length);
      for (var i = 0; i < length; i += 1) {
        that[i] = array[i] & 255;
      }
      return that
    }

    function fromArrayBuffer (that, array, byteOffset, length) {
      array.byteLength; // this throws if `array` is not a valid ArrayBuffer

      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('\'offset\' is out of bounds')
      }

      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('\'length\' is out of bounds')
      }

      if (byteOffset === undefined && length === undefined) {
        array = new Uint8Array(array);
      } else if (length === undefined) {
        array = new Uint8Array(array, byteOffset);
      } else {
        array = new Uint8Array(array, byteOffset, length);
      }

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = array;
        that.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        that = fromArrayLike(that, array);
      }
      return that
    }

    function fromObject (that, obj) {
      if (internalIsBuffer(obj)) {
        var len = checked(obj.length) | 0;
        that = createBuffer(that, len);

        if (that.length === 0) {
          return that
        }

        obj.copy(that, 0, 0, len);
        return that
      }

      if (obj) {
        if ((typeof ArrayBuffer !== 'undefined' &&
            obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
          if (typeof obj.length !== 'number' || isnan(obj.length)) {
            return createBuffer(that, 0)
          }
          return fromArrayLike(that, obj)
        }

        if (obj.type === 'Buffer' && isArray(obj.data)) {
          return fromArrayLike(that, obj.data)
        }
      }

      throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
    }

    function checked (length) {
      // Note: cannot use `length < kMaxLength()` here because that fails when
      // length is NaN (which is otherwise coerced to zero.)
      if (length >= kMaxLength()) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                             'size: 0x' + kMaxLength().toString(16) + ' bytes')
      }
      return length | 0
    }
    Buffer.isBuffer = isBuffer;
    function internalIsBuffer (b) {
      return !!(b != null && b._isBuffer)
    }

    Buffer.compare = function compare (a, b) {
      if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
        throw new TypeError('Arguments must be Buffers')
      }

      if (a === b) return 0

      var x = a.length;
      var y = b.length;

      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    };

    Buffer.isEncoding = function isEncoding (encoding) {
      switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return true
        default:
          return false
      }
    };

    Buffer.concat = function concat (list, length) {
      if (!isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }

      if (list.length === 0) {
        return Buffer.alloc(0)
      }

      var i;
      if (length === undefined) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }

      var buffer = Buffer.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!internalIsBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers')
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer
    };

    function byteLength (string, encoding) {
      if (internalIsBuffer(string)) {
        return string.length
      }
      if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
          (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength
      }
      if (typeof string !== 'string') {
        string = '' + string;
      }

      var len = string.length;
      if (len === 0) return 0

      // Use a for loop to avoid recursion
      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'ascii':
          case 'latin1':
          case 'binary':
            return len
          case 'utf8':
          case 'utf-8':
          case undefined:
            return utf8ToBytes(string).length
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return len * 2
          case 'hex':
            return len >>> 1
          case 'base64':
            return base64ToBytes(string).length
          default:
            if (loweredCase) return utf8ToBytes(string).length // assume utf8
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer.byteLength = byteLength;

    function slowToString (encoding, start, end) {
      var loweredCase = false;

      // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
      // property of a typed array.

      // This behaves neither like String nor Uint8Array in that we set start/end
      // to their upper/lower bounds if the value passed is out of range.
      // undefined is handled specially as per ECMA-262 6th Edition,
      // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
      if (start === undefined || start < 0) {
        start = 0;
      }
      // Return early if start > this.length. Done here to prevent potential uint32
      // coercion fail below.
      if (start > this.length) {
        return ''
      }

      if (end === undefined || end > this.length) {
        end = this.length;
      }

      if (end <= 0) {
        return ''
      }

      // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
      end >>>= 0;
      start >>>= 0;

      if (end <= start) {
        return ''
      }

      if (!encoding) encoding = 'utf8';

      while (true) {
        switch (encoding) {
          case 'hex':
            return hexSlice(this, start, end)

          case 'utf8':
          case 'utf-8':
            return utf8Slice(this, start, end)

          case 'ascii':
            return asciiSlice(this, start, end)

          case 'latin1':
          case 'binary':
            return latin1Slice(this, start, end)

          case 'base64':
            return base64Slice(this, start, end)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return utf16leSlice(this, start, end)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
        }
      }
    }

    // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
    // Buffer instances.
    Buffer.prototype._isBuffer = true;

    function swap (b, n, m) {
      var i = b[n];
      b[n] = b[m];
      b[m] = i;
    }

    Buffer.prototype.swap16 = function swap16 () {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits')
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this
    };

    Buffer.prototype.swap32 = function swap32 () {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits')
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this
    };

    Buffer.prototype.swap64 = function swap64 () {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits')
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this
    };

    Buffer.prototype.toString = function toString () {
      var length = this.length | 0;
      if (length === 0) return ''
      if (arguments.length === 0) return utf8Slice(this, 0, length)
      return slowToString.apply(this, arguments)
    };

    Buffer.prototype.equals = function equals (b) {
      if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
      if (this === b) return true
      return Buffer.compare(this, b) === 0
    };

    Buffer.prototype.inspect = function inspect () {
      var str = '';
      var max = INSPECT_MAX_BYTES;
      if (this.length > 0) {
        str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
        if (this.length > max) str += ' ... ';
      }
      return '<Buffer ' + str + '>'
    };

    Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
      if (!internalIsBuffer(target)) {
        throw new TypeError('Argument must be a Buffer')
      }

      if (start === undefined) {
        start = 0;
      }
      if (end === undefined) {
        end = target ? target.length : 0;
      }
      if (thisStart === undefined) {
        thisStart = 0;
      }
      if (thisEnd === undefined) {
        thisEnd = this.length;
      }

      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index')
      }

      if (thisStart >= thisEnd && start >= end) {
        return 0
      }
      if (thisStart >= thisEnd) {
        return -1
      }
      if (start >= end) {
        return 1
      }

      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;

      if (this === target) return 0

      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);

      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);

      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    };

    // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
    // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
    //
    // Arguments:
    // - buffer - a Buffer to search
    // - val - a string, Buffer, or number
    // - byteOffset - an index into `buffer`; will be clamped to an int32
    // - encoding - an optional encoding, relevant is val is a string
    // - dir - true for indexOf, false for lastIndexOf
    function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
      // Empty buffer means no match
      if (buffer.length === 0) return -1

      // Normalize byteOffset
      if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff;
      } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000;
      }
      byteOffset = +byteOffset;  // Coerce to Number.
      if (isNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : (buffer.length - 1);
      }

      // Normalize byteOffset: negative offsets start from the end of the buffer
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1
      }

      // Normalize val
      if (typeof val === 'string') {
        val = Buffer.from(val, encoding);
      }

      // Finally, search either indexOf (if dir is true) or lastIndexOf
      if (internalIsBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
          return -1
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
      } else if (typeof val === 'number') {
        val = val & 0xFF; // Search for a byte value [0-255]
        if (Buffer.TYPED_ARRAY_SUPPORT &&
            typeof Uint8Array.prototype.indexOf === 'function') {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
          }
        }
        return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
      }

      throw new TypeError('val must be string, number or Buffer')
    }

    function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;

      if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' ||
            encoding === 'utf16le' || encoding === 'utf-16le') {
          if (arr.length < 2 || val.length < 2) {
            return -1
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }

      function read$$1 (buf, i) {
        if (indexSize === 1) {
          return buf[i]
        } else {
          return buf.readUInt16BE(i * indexSize)
        }
      }

      var i;
      if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read$$1(arr, i) === read$$1(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read$$1(arr, i + j) !== read$$1(val, j)) {
              found = false;
              break
            }
          }
          if (found) return i
        }
      }

      return -1
    }

    Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1
    };

    Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
    };

    Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
    };

    function hexWrite (buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }

      // must be an even number of digits
      var strLen = string.length;
      if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (isNaN(parsed)) return i
        buf[offset + i] = parsed;
      }
      return i
    }

    function utf8Write (buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
    }

    function asciiWrite (buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length)
    }

    function latin1Write (buf, string, offset, length) {
      return asciiWrite(buf, string, offset, length)
    }

    function base64Write (buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length)
    }

    function ucs2Write (buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
    }

    Buffer.prototype.write = function write$$1 (string, offset, length, encoding) {
      // Buffer#write(string)
      if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
      // Buffer#write(string, encoding)
      } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
      // Buffer#write(string, offset[, length][, encoding])
      } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
          length = length | 0;
          if (encoding === undefined) encoding = 'utf8';
        } else {
          encoding = length;
          length = undefined;
        }
      // legacy write(string, encoding, offset, length) - remove in v0.13
      } else {
        throw new Error(
          'Buffer.write(string, encoding, offset[, length]) is no longer supported'
        )
      }

      var remaining = this.length - offset;
      if (length === undefined || length > remaining) length = remaining;

      if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds')
      }

      if (!encoding) encoding = 'utf8';

      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'hex':
            return hexWrite(this, string, offset, length)

          case 'utf8':
          case 'utf-8':
            return utf8Write(this, string, offset, length)

          case 'ascii':
            return asciiWrite(this, string, offset, length)

          case 'latin1':
          case 'binary':
            return latin1Write(this, string, offset, length)

          case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return ucs2Write(this, string, offset, length)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };

    Buffer.prototype.toJSON = function toJSON () {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    };

    function base64Slice (buf, start, end) {
      if (start === 0 && end === buf.length) {
        return fromByteArray(buf)
      } else {
        return fromByteArray(buf.slice(start, end))
      }
    }

    function utf8Slice (buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];

      var i = start;
      while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = (firstByte > 0xEF) ? 4
          : (firstByte > 0xDF) ? 3
          : (firstByte > 0xBF) ? 2
          : 1;

        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;

          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 0x80) {
                codePoint = firstByte;
              }
              break
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
                if (tempCodePoint > 0x7F) {
                  codePoint = tempCodePoint;
                }
              }
              break
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                  codePoint = tempCodePoint;
                }
              }
              break
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }

        if (codePoint === null) {
          // we did not generate a valid codePoint so insert a
          // replacement char (U+FFFD) and advance only 1 byte
          codePoint = 0xFFFD;
          bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
          // encode to utf16 (surrogate pair dance)
          codePoint -= 0x10000;
          res.push(codePoint >>> 10 & 0x3FF | 0xD800);
          codePoint = 0xDC00 | codePoint & 0x3FF;
        }

        res.push(codePoint);
        i += bytesPerSequence;
      }

      return decodeCodePointsArray(res)
    }

    // Based on http://stackoverflow.com/a/22747272/680742, the browser with
    // the lowest limit is Chrome, with 0x10000 args.
    // We go 1 magnitude less, for safety
    var MAX_ARGUMENTS_LENGTH = 0x1000;

    function decodeCodePointsArray (codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
      }

      // Decode in chunks to avoid "call stack size exceeded".
      var res = '';
      var i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res
    }

    function asciiSlice (buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7F);
      }
      return ret
    }

    function latin1Slice (buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret
    }

    function hexSlice (buf, start, end) {
      var len = buf.length;

      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;

      var out = '';
      for (var i = start; i < end; ++i) {
        out += toHex(buf[i]);
      }
      return out
    }

    function utf16leSlice (buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = '';
      for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res
    }

    Buffer.prototype.slice = function slice (start, end) {
      var len = this.length;
      start = ~~start;
      end = end === undefined ? len : ~~end;

      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }

      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }

      if (end < start) end = start;

      var newBuf;
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer(sliceLen, undefined);
        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start];
        }
      }

      return newBuf
    };

    /*
     * Need to make sure that buffer isn't trying to write out of bounds.
     */
    function checkOffset (offset, ext, length) {
      if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
      if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
    }

    Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }

      return val
    };

    Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        checkOffset(offset, byteLength, this.length);
      }

      var val = this[offset + --byteLength];
      var mul = 1;
      while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul;
      }

      return val
    };

    Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset]
    };

    Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | (this[offset + 1] << 8)
    };

    Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      return (this[offset] << 8) | this[offset + 1]
    };

    Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return ((this[offset]) |
          (this[offset + 1] << 8) |
          (this[offset + 2] << 16)) +
          (this[offset + 3] * 0x1000000)
    };

    Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return (this[offset] * 0x1000000) +
        ((this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        this[offset + 3])
    };

    Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) val -= Math.pow(2, 8 * byteLength);

      return val
    };

    Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      var i = byteLength;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) val -= Math.pow(2, 8 * byteLength);

      return val
    };

    Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 0x80)) return (this[offset])
      return ((0xff - this[offset] + 1) * -1)
    };

    Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset] | (this[offset + 1] << 8);
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    };

    Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | (this[offset] << 8);
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    };

    Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return (this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16) |
        (this[offset + 3] << 24)
    };

    Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return (this[offset] << 24) |
        (this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        (this[offset + 3])
    };

    Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return read(this, offset, true, 23, 4)
    };

    Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return read(this, offset, false, 23, 4)
    };

    Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 8, this.length);
      return read(this, offset, true, 52, 8)
    };

    Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 8, this.length);
      return read(this, offset, false, 52, 8)
    };

    function checkInt (buf, value, offset, ext, max, min) {
      if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
    }

    Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }

      var mul = 1;
      var i = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }

      var i = byteLength - 1;
      var mul = 1;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
      if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      this[offset] = (value & 0xff);
      return offset + 1
    };

    function objectWriteUInt16 (buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffff + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
        buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
          (littleEndian ? i : 1 - i) * 8;
      }
    }

    Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2
    };

    Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 8);
        this[offset + 1] = (value & 0xff);
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2
    };

    function objectWriteUInt32 (buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffffffff + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
        buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
      }
    }

    Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = (value >>> 24);
        this[offset + 2] = (value >>> 16);
        this[offset + 1] = (value >>> 8);
        this[offset] = (value & 0xff);
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4
    };

    Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 24);
        this[offset + 1] = (value >>> 16);
        this[offset + 2] = (value >>> 8);
        this[offset + 3] = (value & 0xff);
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4
    };

    Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = byteLength - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
      if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      if (value < 0) value = 0xff + value + 1;
      this[offset] = (value & 0xff);
      return offset + 1
    };

    Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2
    };

    Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 8);
        this[offset + 1] = (value & 0xff);
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2
    };

    Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
        this[offset + 2] = (value >>> 16);
        this[offset + 3] = (value >>> 24);
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4
    };

    Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (value < 0) value = 0xffffffff + value + 1;
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 24);
        this[offset + 1] = (value >>> 16);
        this[offset + 2] = (value >>> 8);
        this[offset + 3] = (value & 0xff);
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4
    };

    function checkIEEE754 (buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
      if (offset < 0) throw new RangeError('Index out of range')
    }

    function writeFloat (buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
      }
      write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4
    }

    Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert)
    };

    Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert)
    };

    function writeDouble (buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
      }
      write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8
    }

    Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert)
    };

    Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert)
    };

    // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
    Buffer.prototype.copy = function copy (target, targetStart, start, end) {
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;

      // Copy 0 bytes; we're done
      if (end === start) return 0
      if (target.length === 0 || this.length === 0) return 0

      // Fatal error conditions
      if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds')
      }
      if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
      if (end < 0) throw new RangeError('sourceEnd out of bounds')

      // Are we oob?
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }

      var len = end - start;
      var i;

      if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
        // ascending copy from start
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, start + len),
          targetStart
        );
      }

      return len
    };

    // Usage:
    //    buffer.fill(number[, offset[, end]])
    //    buffer.fill(buffer[, offset[, end]])
    //    buffer.fill(string[, offset[, end]][, encoding])
    Buffer.prototype.fill = function fill (val, start, end, encoding) {
      // Handle string cases:
      if (typeof val === 'string') {
        if (typeof start === 'string') {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === 'string') {
          encoding = end;
          end = this.length;
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (code < 256) {
            val = code;
          }
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
          throw new TypeError('encoding must be a string')
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding)
        }
      } else if (typeof val === 'number') {
        val = val & 255;
      }

      // Invalid ranges are not set to a default, so can range check early.
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index')
      }

      if (end <= start) {
        return this
      }

      start = start >>> 0;
      end = end === undefined ? this.length : end >>> 0;

      if (!val) val = 0;

      var i;
      if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = internalIsBuffer(val)
          ? val
          : utf8ToBytes(new Buffer(val, encoding).toString());
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }

      return this
    };

    // HELPER FUNCTIONS
    // ================

    var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

    function base64clean (str) {
      // Node strips out invalid characters like \n and \t from the string, base64-js does not
      str = stringtrim(str).replace(INVALID_BASE64_RE, '');
      // Node converts strings with length < 2 to ''
      if (str.length < 2) return ''
      // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
      while (str.length % 4 !== 0) {
        str = str + '=';
      }
      return str
    }

    function stringtrim (str) {
      if (str.trim) return str.trim()
      return str.replace(/^\s+|\s+$/g, '')
    }

    function toHex (n) {
      if (n < 16) return '0' + n.toString(16)
      return n.toString(16)
    }

    function utf8ToBytes (string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];

      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);

        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
          // last char was a lead
          if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xDBFF) {
              // unexpected trail
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue
            } else if (i + 1 === length) {
              // unpaired lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue
            }

            // valid lead
            leadSurrogate = codePoint;

            continue
          }

          // 2 leads in a row
          if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            leadSurrogate = codePoint;
            continue
          }

          // valid surrogate pair
          codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) {
          // valid bmp char, but last char was a lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }

        leadSurrogate = null;

        // encode utf8
        if (codePoint < 0x80) {
          if ((units -= 1) < 0) break
          bytes.push(codePoint);
        } else if (codePoint < 0x800) {
          if ((units -= 2) < 0) break
          bytes.push(
            codePoint >> 0x6 | 0xC0,
            codePoint & 0x3F | 0x80
          );
        } else if (codePoint < 0x10000) {
          if ((units -= 3) < 0) break
          bytes.push(
            codePoint >> 0xC | 0xE0,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          );
        } else if (codePoint < 0x110000) {
          if ((units -= 4) < 0) break
          bytes.push(
            codePoint >> 0x12 | 0xF0,
            codePoint >> 0xC & 0x3F | 0x80,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          );
        } else {
          throw new Error('Invalid code point')
        }
      }

      return bytes
    }

    function asciiToBytes (str) {
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF);
      }
      return byteArray
    }

    function utf16leToBytes (str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break

        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }

      return byteArray
    }


    function base64ToBytes (str) {
      return toByteArray(base64clean(str))
    }

    function blitBuffer (src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if ((i + offset >= dst.length) || (i >= src.length)) break
        dst[i + offset] = src[i];
      }
      return i
    }

    function isnan (val) {
      return val !== val // eslint-disable-line no-self-compare
    }


    // the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
    // The _isBuffer check is for Safari 5-7 support, because it's missing
    // Object.prototype.constructor. Remove this eventually
    function isBuffer(obj) {
      return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
    }

    function isFastBuffer (obj) {
      return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
    }

    // For Node v0.10 support. Remove this eventually.
    function isSlowBuffer (obj) {
      return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
    }

    // shim for using process in browser
    // based off https://github.com/defunctzombie/node-process/blob/master/browser.js

    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout () {
        throw new Error('clearTimeout has not been defined');
    }
    var cachedSetTimeout = defaultSetTimout;
    var cachedClearTimeout = defaultClearTimeout;
    if (typeof global$1.setTimeout === 'function') {
        cachedSetTimeout = setTimeout;
    }
    if (typeof global$1.clearTimeout === 'function') {
        cachedClearTimeout = clearTimeout;
    }

    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch(e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch(e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }


    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }



    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while(len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }
    function nextTick(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    }
    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    var title = 'browser';
    var platform = 'browser';
    var browser = true;
    var env = {};
    var argv = [];
    var version = ''; // empty string to avoid regexp issues
    var versions$2 = {};
    var release = {};
    var config = {};

    function noop() {}

    var on = noop;
    var addListener = noop;
    var once = noop;
    var off = noop;
    var removeListener = noop;
    var removeAllListeners = noop;
    var emit = noop;

    function binding(name) {
        throw new Error('process.binding is not supported');
    }

    function cwd () { return '/' }
    function chdir (dir) {
        throw new Error('process.chdir is not supported');
    }function umask() { return 0; }

    // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
    var performance = global$1.performance || {};
    var performanceNow =
      performance.now        ||
      performance.mozNow     ||
      performance.msNow      ||
      performance.oNow       ||
      performance.webkitNow  ||
      function(){ return (new Date()).getTime() };

    // generate timestamp or delta
    // see http://nodejs.org/api/process.html#process_process_hrtime
    function hrtime(previousTimestamp){
      var clocktime = performanceNow.call(performance)*1e-3;
      var seconds = Math.floor(clocktime);
      var nanoseconds = Math.floor((clocktime%1)*1e9);
      if (previousTimestamp) {
        seconds = seconds - previousTimestamp[0];
        nanoseconds = nanoseconds - previousTimestamp[1];
        if (nanoseconds<0) {
          seconds--;
          nanoseconds += 1e9;
        }
      }
      return [seconds,nanoseconds]
    }

    var startTime = new Date();
    function uptime() {
      var currentTime = new Date();
      var dif = currentTime - startTime;
      return dif / 1000;
    }

    var process = {
      nextTick: nextTick,
      title: title,
      browser: browser,
      env: env,
      argv: argv,
      version: version,
      versions: versions$2,
      on: on,
      addListener: addListener,
      once: once,
      off: off,
      removeListener: removeListener,
      removeAllListeners: removeAllListeners,
      emit: emit,
      binding: binding,
      cwd: cwd,
      chdir: chdir,
      umask: umask,
      hrtime: hrtime,
      platform: platform,
      release: release,
      config: config,
      uptime: uptime
    };

    var inherits;
    if (typeof Object.create === 'function'){
      inherits = function inherits(ctor, superCtor) {
        // implementation from standard node.js 'util' module
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      };
    } else {
      inherits = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function () {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      };
    }
    var inherits$1 = inherits;

    var formatRegExp = /%[sdj%]/g;
    function format(f) {
      if (!isString(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
          objects.push(inspect(arguments[i]));
        }
        return objects.join(' ');
      }

      var i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f).replace(formatRegExp, function(x) {
        if (x === '%%') return '%';
        if (i >= len) return x;
        switch (x) {
          case '%s': return String(args[i++]);
          case '%d': return Number(args[i++]);
          case '%j':
            try {
              return JSON.stringify(args[i++]);
            } catch (_$$1) {
              return '[Circular]';
            }
          default:
            return x;
        }
      });
      for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
          str += ' ' + x;
        } else {
          str += ' ' + inspect(x);
        }
      }
      return str;
    }

    // Mark that a method should not be used.
    // Returns a modified function which warns once by default.
    // If --no-deprecation is set, then it is a no-op.
    function deprecate(fn, msg) {
      // Allow for deprecating things in the process of starting up.
      if (isUndefined(global$1.process)) {
        return function() {
          return deprecate(fn, msg).apply(this, arguments);
        };
      }

      if (process.noDeprecation === true) {
        return fn;
      }

      var warned = false;
      function deprecated() {
        if (!warned) {
          if (process.throwDeprecation) {
            throw new Error(msg);
          } else if (process.traceDeprecation) {
            console.trace(msg);
          } else {
            console.error(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }

      return deprecated;
    }

    var debugs = {};
    var debugEnviron;
    function debuglog(set) {
      if (isUndefined(debugEnviron))
        debugEnviron = process.env.NODE_DEBUG || '';
      set = set.toUpperCase();
      if (!debugs[set]) {
        if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
          var pid = 0;
          debugs[set] = function() {
            var msg = format.apply(null, arguments);
            console.error('%s %d: %s', set, pid, msg);
          };
        } else {
          debugs[set] = function() {};
        }
      }
      return debugs[set];
    }

    /**
     * Echos the value of a value. Trys to print the value out
     * in the best way possible given the different types.
     *
     * @param {Object} obj The object to print out.
     * @param {Object} opts Optional options object that alters the output.
     */
    /* legacy: obj, showHidden, depth, colors*/
    function inspect(obj, opts) {
      // default options
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      // legacy...
      if (arguments.length >= 3) ctx.depth = arguments[2];
      if (arguments.length >= 4) ctx.colors = arguments[3];
      if (isBoolean(opts)) {
        // legacy...
        ctx.showHidden = opts;
      } else if (opts) {
        // got an "options" object
        _extend(ctx, opts);
      }
      // set default options
      if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
      if (isUndefined(ctx.depth)) ctx.depth = 2;
      if (isUndefined(ctx.colors)) ctx.colors = false;
      if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
      if (ctx.colors) ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj, ctx.depth);
    }

    // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
    inspect.colors = {
      'bold' : [1, 22],
      'italic' : [3, 23],
      'underline' : [4, 24],
      'inverse' : [7, 27],
      'white' : [37, 39],
      'grey' : [90, 39],
      'black' : [30, 39],
      'blue' : [34, 39],
      'cyan' : [36, 39],
      'green' : [32, 39],
      'magenta' : [35, 39],
      'red' : [31, 39],
      'yellow' : [33, 39]
    };

    // Don't use 'blue' not visible on cmd.exe
    inspect.styles = {
      'special': 'cyan',
      'number': 'yellow',
      'boolean': 'yellow',
      'undefined': 'grey',
      'null': 'bold',
      'string': 'green',
      'date': 'magenta',
      // "name": intentionally not styling
      'regexp': 'red'
    };


    function stylizeWithColor(str, styleType) {
      var style = inspect.styles[styleType];

      if (style) {
        return '\u001b[' + inspect.colors[style][0] + 'm' + str +
               '\u001b[' + inspect.colors[style][1] + 'm';
      } else {
        return str;
      }
    }


    function stylizeNoColor(str, styleType) {
      return str;
    }


    function arrayToHash(array) {
      var hash = {};

      array.forEach(function(val, idx) {
        hash[val] = true;
      });

      return hash;
    }


    function formatValue(ctx, value, recurseTimes) {
      // Provide a hook for user-specified inspect functions.
      // Check that value is an object with an inspect function on it
      if (ctx.customInspect &&
          value &&
          isFunction(value.inspect) &&
          // Filter out the util module, it's inspect function is special
          value.inspect !== inspect &&
          // Also filter out any prototype objects using the circular check.
          !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
      }

      // Primitive types cannot have properties
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }

      // Look up the keys of the object.
      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);

      if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
      }

      // IE doesn't make error fields non-enumerable
      // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
      if (isError(value)
          && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
        return formatError(value);
      }

      // Some type of object without properties can be shortcutted.
      if (keys.length === 0) {
        if (isFunction(value)) {
          var name = value.name ? ': ' + value.name : '';
          return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        }
        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), 'date');
        }
        if (isError(value)) {
          return formatError(value);
        }
      }

      var base = '', array = false, braces = ['{', '}'];

      // Make Array say that they are Array
      if (isArray$1(value)) {
        array = true;
        braces = ['[', ']'];
      }

      // Make functions say that they are functions
      if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
      }

      // Make RegExps say that they are RegExps
      if (isRegExp(value)) {
        base = ' ' + RegExp.prototype.toString.call(value);
      }

      // Make dates with properties first say the date
      if (isDate(value)) {
        base = ' ' + Date.prototype.toUTCString.call(value);
      }

      // Make error with message first say the error
      if (isError(value)) {
        base = ' ' + formatError(value);
      }

      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }

      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        } else {
          return ctx.stylize('[Object]', 'special');
        }
      }

      ctx.seen.push(value);

      var output;
      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function(key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }

      ctx.seen.pop();

      return reduceToSingleString(output, base, braces);
    }


    function formatPrimitive(ctx, value) {
      if (isUndefined(value))
        return ctx.stylize('undefined', 'undefined');
      if (isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                                 .replace(/'/g, "\\'")
                                                 .replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
      }
      if (isNumber(value))
        return ctx.stylize('' + value, 'number');
      if (isBoolean(value))
        return ctx.stylize('' + value, 'boolean');
      // For some reason typeof null is "object", so special case here.
      if (isNull(value))
        return ctx.stylize('null', 'null');
    }


    function formatError(value) {
      return '[' + Error.prototype.toString.call(value) + ']';
    }


    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
              String(i), true));
        } else {
          output.push('');
        }
      }
      keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
              key, true));
        }
      });
      return output;
    }


    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name, str, desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize('[Getter/Setter]', 'special');
        } else {
          str = ctx.stylize('[Getter]', 'special');
        }
      } else {
        if (desc.set) {
          str = ctx.stylize('[Setter]', 'special');
        }
      }
      if (!hasOwnProperty(visibleKeys, key)) {
        name = '[' + key + ']';
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf('\n') > -1) {
            if (array) {
              str = str.split('\n').map(function(line) {
                return '  ' + line;
              }).join('\n').substr(2);
            } else {
              str = '\n' + str.split('\n').map(function(line) {
                return '   ' + line;
              }).join('\n');
            }
          }
        } else {
          str = ctx.stylize('[Circular]', 'special');
        }
      }
      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = ctx.stylize(name, 'name');
        } else {
          name = name.replace(/'/g, "\\'")
                     .replace(/\\"/g, '"')
                     .replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, 'string');
        }
      }

      return name + ': ' + str;
    }


    function reduceToSingleString(output, base, braces) {
      var length = output.reduce(function(prev, cur) {
        if (cur.indexOf('\n') >= 0) ;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
      }, 0);

      if (length > 60) {
        return braces[0] +
               (base === '' ? '' : base + '\n ') +
               ' ' +
               output.join(',\n  ') +
               ' ' +
               braces[1];
      }

      return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
    }


    // NOTE: These type checking functions intentionally don't use `instanceof`
    // because it is fragile and can be easily faked with `Object.create()`.
    function isArray$1(ar) {
      return Array.isArray(ar);
    }

    function isBoolean(arg) {
      return typeof arg === 'boolean';
    }

    function isNull(arg) {
      return arg === null;
    }

    function isNullOrUndefined(arg) {
      return arg == null;
    }

    function isNumber(arg) {
      return typeof arg === 'number';
    }

    function isString(arg) {
      return typeof arg === 'string';
    }

    function isSymbol(arg) {
      return typeof arg === 'symbol';
    }

    function isUndefined(arg) {
      return arg === void 0;
    }

    function isRegExp(re) {
      return isObject(re) && objectToString(re) === '[object RegExp]';
    }

    function isObject(arg) {
      return typeof arg === 'object' && arg !== null;
    }

    function isDate(d) {
      return isObject(d) && objectToString(d) === '[object Date]';
    }

    function isError(e) {
      return isObject(e) &&
          (objectToString(e) === '[object Error]' || e instanceof Error);
    }

    function isFunction(arg) {
      return typeof arg === 'function';
    }

    function isPrimitive(arg) {
      return arg === null ||
             typeof arg === 'boolean' ||
             typeof arg === 'number' ||
             typeof arg === 'string' ||
             typeof arg === 'symbol' ||  // ES6 symbol
             typeof arg === 'undefined';
    }

    function isBuffer$1(maybeBuf) {
      return isBuffer(maybeBuf);
    }

    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }


    function pad(n) {
      return n < 10 ? '0' + n.toString(10) : n.toString(10);
    }


    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
                  'Oct', 'Nov', 'Dec'];

    // 26 Feb 16:19:34
    function timestamp() {
      var d = new Date();
      var time = [pad(d.getHours()),
                  pad(d.getMinutes()),
                  pad(d.getSeconds())].join(':');
      return [d.getDate(), months[d.getMonth()], time].join(' ');
    }


    // log is just a thin wrapper to console.log that prepends a timestamp
    function log() {
      console.log('%s - %s', timestamp(), format.apply(null, arguments));
    }

    function _extend(origin, add) {
      // Don't do anything if add isn't an object
      if (!add || !isObject(add)) return origin;

      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }
      return origin;
    }
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    var util = {
      inherits: inherits$1,
      _extend: _extend,
      log: log,
      isBuffer: isBuffer$1,
      isPrimitive: isPrimitive,
      isFunction: isFunction,
      isError: isError,
      isDate: isDate,
      isObject: isObject,
      isRegExp: isRegExp,
      isUndefined: isUndefined,
      isSymbol: isSymbol,
      isString: isString,
      isNumber: isNumber,
      isNullOrUndefined: isNullOrUndefined,
      isNull: isNull,
      isBoolean: isBoolean,
      isArray: isArray$1,
      inspect: inspect,
      deprecate: deprecate,
      format: format,
      debuglog: debuglog
    }

    var util$1 = /*#__PURE__*/Object.freeze({
        format: format,
        deprecate: deprecate,
        debuglog: debuglog,
        inspect: inspect,
        isArray: isArray$1,
        isBoolean: isBoolean,
        isNull: isNull,
        isNullOrUndefined: isNullOrUndefined,
        isNumber: isNumber,
        isString: isString,
        isSymbol: isSymbol,
        isUndefined: isUndefined,
        isRegExp: isRegExp,
        isObject: isObject,
        isDate: isDate,
        isError: isError,
        isFunction: isFunction,
        isPrimitive: isPrimitive,
        isBuffer: isBuffer$1,
        log: log,
        inherits: inherits$1,
        _extend: _extend,
        default: util
    });

    var util$2 = ( util$1 && util ) || util$1;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




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

    /**
     * @param {number} n
     * @return {number}
     */
    function norm(n) {
        return n === undefined ? -1 : n;
    }

    /**
     *
     */

    var RTCodeError = function (_Error) {
        _inherits(RTCodeError, _Error);

        /**
         * @param {string} message
         * @param {number=} startOffset
         * @param {number=} endOffset
         * @param {number=} line
         * @param {number=} column
         */
        function RTCodeError(message, startOffset, endOffset, line, column) {
            _classCallCheck(this, RTCodeError);

            var _this = _possibleConstructorReturn(this, (RTCodeError.__proto__ || Object.getPrototypeOf(RTCodeError)).call(this));

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
        return buildError(context, node, util$2.format.apply(this, [msg].concat(args)));
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

    var RTCodeError_1 = {
        RTCodeError: RTCodeError,
        getNodeLoc: getNodeLoc
    };

    /**
     * @param {Context} context
     * @return {boolean}
     */
    function shouldUseCreateElement(context) {
        switch (context.options.targetVersion) {
            case '0.11.2':
            case '0.11.1':
            case '0.11.0':
            case '0.10.0':
                return false;
            default:
                return true;
        }
    }

    var reactSupportedAttributes = ['accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoPlay', 'cellPadding', 'cellSpacing', 'charSet', 'checked', 'classID', 'className', 'cols', 'colSpan', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formNoValidate', 'frameBorder', 'height', 'hidden', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'label', 'lang', 'list', 'loop', 'manifest', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'multiple', 'muted', 'name', 'noValidate', 'open', 'pattern', 'placeholder', 'poster', 'preload', 'radioGroup', 'readOnly', 'rel', 'required', 'role', 'rows', 'rowSpan', 'sandbox', 'scope', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcSet', 'start', 'step', 'style', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode'];
    var classNameProp = 'className';
    var attributesMapping = { 'class': classNameProp, 'rt-class': classNameProp, 'for': 'htmlFor' //eslint-disable-line quote-props

    };_.forEach(reactSupportedAttributes, function (attributeReactName) {
        if (attributeReactName !== attributeReactName.toLowerCase()) {
            attributesMapping[attributeReactName.toLowerCase()] = attributeReactName;
        }
    });

    var htmlSelfClosingTags = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

    var templateAMDTemplate = _.template("define(<%= name ? '\"'+name + '\", ' : '' %>[<%= requirePaths %>], function (<%= AMDArguments %>) {\n'use strict';\n<%= AMDSubstitutions %>return <%= renderFunction %>;\n});");
    var templateCommonJSTemplate = _.template("'use strict';\n<%= vars %>\nmodule.exports = <%= renderFunction %>;\n");
    var templateES6Template = _.template('<%= vars %>\nexport default <%= renderFunction %>\n');
    var templatePJSTemplate = _.template('var <%= name %> = <%= renderFunction %>');
    var templateTypescriptTemplate = _.template('<%= vars %>\nexport = <%= renderFunction %>;\n');
    var templateJSRTTemplate = _.template('<%= renderFunction %>');

    var templates = {
        amd: templateAMDTemplate,
        commonjs: templateCommonJSTemplate,
        typescript: templateTypescriptTemplate,
        es6: templateES6Template,
        none: templatePJSTemplate,
        jsrt: templateJSRTTemplate
    };

    var isImportAsterisk = _.matches({ member: '*' });
    var defaultCase = _.constant(true);

    var buildImportTypeScript = _.cond([[isImportAsterisk, function (d) {
        return 'import ' + d.alias + ' = require(\'' + d.moduleName + '\');';
    }], [_.matches({ member: 'default' }), function (d) {
        return 'import ' + d.alias + ' from \'' + d.moduleName + '\';';
    }], [defaultCase, function (d) {
        return 'import { ' + d.member + ' as ' + d.alias + ' } from \'' + d.moduleName + '\';';
    }]]);

    var buildImportES6 = _.cond([[isImportAsterisk, function (d) {
        return 'import * as ' + d.alias + ' from \'' + d.moduleName + '\';';
    }], [_.matches({ member: 'default' }), function (d) {
        return 'import ' + d.alias + ' from \'' + d.moduleName + '\';';
    }], [defaultCase, function (d) {
        return 'import { ' + d.member + ' as ' + d.alias + ' } from \'' + d.moduleName + '\';';
    }]]);

    var buildImportCommonJS = _.cond([[isImportAsterisk, function (d) {
        return 'var ' + d.alias + ' = require(\'' + d.moduleName + '\');';
    }], [defaultCase, function (d) {
        return 'var ' + d.alias + ' = require(\'' + d.moduleName + '\').' + d.member + ';';
    }]]);

    var buildImport = {
        typescript: buildImportTypeScript,
        es6: buildImportES6,
        commonjs: buildImportCommonJS,
        amd: buildImportCommonJS,
        none: buildImportCommonJS,
        jsrt: buildImportCommonJS
    };

    var reactSupport = {
        htmlSelfClosingTags: htmlSelfClosingTags,
        attributesMapping: attributesMapping,
        classNameProp: classNameProp,
        shouldUseCreateElement: shouldUseCreateElement,
        templates: templates,
        buildImport: buildImport
    };

    var RTCodeError$1 = RTCodeError_1.RTCodeError;

    /**
     * @param {string} code
     * @param node
     * @param {Context} context
     */
    function validateJS(code, node, context) {
        try {
            esprima.parse(code);
        } catch (e) {
            throw RTCodeError$1.build(context, node, e.description);
        }
    }

    /**
     * @param {string} name
     * @return {string}
     */
    function normalizeName(name) {
        return name.replace(/-/g, '_');
    }

    /**
     * @param {string} txt
     * @return {boolean}
     */
    function isStringOnlyCode(txt) {
        return (/^\s*\{.*}\s*$/g.test(txt)
        );
        //txt = txt.trim();
        //return txt.length && txt.charAt(0) === '{' && txt.charAt(txt.length - 1) === '}';
    }

    /**
     * @param {Array.<*>} array
     * @param {*} obj
     */
    function addIfMissing(array, obj) {
        if (!_.includes(array, obj)) {
            array.push(obj);
        }
    }

    /**
     * @param {Array.<string>} children
     * @return {string}
     */
    function concatChildren(children) {
        var res = '';
        _.forEach(children, function (child) {
            if (child && !_.startsWith(child, ' /*')) {
                res += ',';
            }
            res += child;
        });
        return res;
    }

    /**
     * validate rt
     * @param options
     * @param {*} context
     * @param {CONTEXT} reportContext
     * @param node
     */
    function validate(options, context, reportContext, node) {
        if (node.type === 'tag' && node.attribs['rt-if'] && !node.attribs.key) {
            var loc = RTCodeError_1.getNodeLoc(context, node);
            reportContext.warn('rt-if without a key', options.fileName, loc.pos.line, loc.pos.col, loc.start, loc.end);
        }
        if (node.type === 'tag' && node.attribs['rt-require'] && (node.attribs.dependency || node.attribs.as)) {
            var _loc = RTCodeError_1.getNodeLoc(context, node);
            reportContext.warn("'rt-require' is obsolete, use 'rt-import' instead", options.fileName, _loc.pos.line, _loc.pos.col, _loc.start, _loc.end);
        }
        // TODO check for duplicate import/require
        if (node.children) {
            node.children.forEach(validate.bind(this, options, context, reportContext));
        }
    }

    /**
     * return true if any node in the given tree uses a scope name from the given set, false - otherwise.
     * @param scopeNames a set of scope names to find
     * @param node root of a syntax tree generated from an ExpressionStatement or one of its children.
     */
    function usesScopeName(scopeNames, node) {
        function usesScope(root) {
            return usesScopeName(scopeNames, root);
        }
        if (_.isEmpty(scopeNames)) {
            return false;
        }
        // rt-if="x"
        if (node.type === 'Identifier') {
            return _.includes(scopeNames, node.name);
        }
        // rt-if="e({key1: value1})"
        if (node.type === 'Property') {
            return usesScope(node.value);
        }
        // rt-if="e.x" or rt-if="e1[e2]"
        if (node.type === 'MemberExpression') {
            return node.computed ? usesScope(node.object) || usesScope(node.property) : usesScope(node.object);
        }
        // rt-if="!e"
        if (node.type === 'UnaryExpression') {
            return usesScope(node.argument);
        }
        // rt-if="e1 || e2" or rt-if="e1 | e2"
        if (node.type === 'LogicalExpression' || node.type === 'BinaryExpression') {
            return usesScope(node.left) || usesScope(node.right);
        }
        // rt-if="e1(e2, ... eN)"
        if (node.type === 'CallExpression') {
            return usesScope(node.callee) || _.some(node.arguments, usesScope);
        }
        // rt-if="f({e1: e2})"
        if (node.type === 'ObjectExpression') {
            return _.some(node.properties, usesScope);
        }
        // rt-if="e1[e2]"
        if (node.type === 'ArrayExpression') {
            return _.some(node.elements, usesScope);
        }
        return false;
    }

    /**
     * @const
     */
    var curlyMap = { '{': 1, '}': -1

        /**
         * @typedef {{boundParams: Array.<string>, injectedFunctions: Array.<string>, html: string, options: *}} Context
         */

        /**
         * @typedef {{fileName:string,force:boolean,modules:string,defines:*,reactImportPath:string=,lodashImportPath:string=,flow:boolean,name:string,native:boolean,propTemplates:*,format:string,_:*,version:boolean,help:boolean,listTargetVersion:boolean,modules:string, dryRun:boolean}} Options
         */

        /**
         * @param node
         * @param {Context} context
         * @param {string} txt
         * @param {boolean} [normalizeWhitespaces]
         * @return {string}
         */
    };function convertText(node, context, txt, normalizeWhitespaces) {
        function jsonText(text) {
            return JSON.stringify(normalizeWhitespaces ? normalizeHtmlWhitespace(text) : text);
        }
        var res = '';
        var first = true;
        var concatChar = node.type === 'text' ? ',' : '+';
        while (_.includes(txt, '{')) {
            var start = txt.indexOf('{');
            var pre = txt.substr(0, start);
            if (pre) {
                res += (first ? '' : concatChar) + jsonText(pre);
                first = false;
            }
            var curlyCounter = 1;
            var end = start;
            while (++end < txt.length && curlyCounter > 0) {
                curlyCounter += curlyMap[txt.charAt(end)] || 0;
            }
            if (curlyCounter === 0) {
                var needsParens = start !== 0 || end !== txt.length - 1;
                res += (first ? '' : concatChar) + (needsParens ? '(' : '') + txt.substr(start + 1, end - start - 2) + (needsParens ? ')' : '');
                first = false;
                txt = txt.substr(end);
            } else {
                throw RTCodeError$1.build(context, node, 'Failed to parse text \'' + txt + '\'');
            }
        }
        if (txt) {
            res += (first ? '' : concatChar) + jsonText(txt);
        }
        if (res === '') {
            res = 'true';
        }
        return res;
    }

    var utils = {
        usesScopeName: usesScopeName,
        normalizeName: normalizeName,
        validateJS: validateJS,
        isStringOnlyCode: isStringOnlyCode,
        concatChildren: concatChildren,
        validate: validate,
        addIfMissing: addIfMissing,
        convertText: convertText
    };

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



    var norm$1 = RTCodeError_1.RTCodeError.norm;

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
            context.messages.push({ level: level, msg: msg, file: file || null, line: norm$1(line), column: norm$1(column), index: norm$1(startOffset), startOffset: norm$1(startOffset), endOffset: norm$1(endOffset) });
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

    var context_1 = context;

    var templates$1 = reactSupport.templates;

    var validateJS$1 = utils.validateJS;
    var RTCodeError$2 = RTCodeError_1.RTCodeError;

    var repeatTemplate = _.template('_.map(<%= collection %>,<%= repeatFunction %>.bind(<%= repeatBinds %>))');
    var ifTemplate = _.template('((<%= condition %>)?(<%= body %>):null)');
    var propsTemplateSimple = _.template('_.assign({}, <%= generatedProps %>, <%= rtProps %>)');
    var propsTemplate = _.template('mergeProps( <%= generatedProps %>, <%= rtProps %>)');

    var propsMergeFunction = 'function mergeProps(inline,external) {\n    var res = _.assign({},inline,external)\n    if (inline.hasOwnProperty(\'style\')) {\n        res.style = _.defaults(res.style, inline.style);\n    }\n    if (inline.hasOwnProperty(\'className\') && external.hasOwnProperty(\'className\')) {\n        res.className = external.className + \' \' + inline.className;\n    }\n    return res;\n}\n';

    var classSetTemplate = _.template('_.transform(<%= classSet %>, function(res, value, key){ if(value){ res.push(key); } }, []).join(" ")');

    function getTagTemplateString(simpleTagTemplate, shouldCreateElement) {
        if (simpleTagTemplate) {
            return shouldCreateElement ? 'React.createElement(<%= name %>,<%= props %><%= children %>)' : '<%= name %>(<%= props %><%= children %>)';
        }
        return shouldCreateElement ? 'React.createElement.apply(this, [<%= name %>,<%= props %><%= children %>])' : '<%= name %>.apply(this, [<%= props %><%= children %>])';
    }

    var commentTemplate = _.template(' /* <%= data %> */ ');

    var repeatAttr = 'rt-repeat';
    var ifAttr = 'rt-if';
    var classSetAttr = 'rt-class';
    var classAttr = 'class';
    var scopeAttr = 'rt-scope';
    var propsAttr = 'rt-props';
    var templateNode = 'rt-template';
    var virtualNode = 'rt-virtual';
    var includeNode = 'rt-include';
    var includeSrcAttr = 'src';
    var requireAttr = 'rt-require';
    var importAttr = 'rt-import';
    var statelessAttr = 'rt-stateless';
    var preAttr = 'rt-pre';

    var reactTemplatesSelfClosingTags = [includeNode];

    /**
     * @param {Options} options
     * @return {Options}
     */
    function getOptions(options) {
        options = options || {};
        var defaultOptions = {
            version: false,
            force: false,
            format: 'stylish',
            targetVersion: reactDOMSupport.default,
            lodashImportPath: 'lodash',
            native: false,
            nativeTargetVersion: reactNativeSupport.default
        };

        var finalOptions = _.defaults({}, options, defaultOptions);
        finalOptions.reactImportPath = reactImport(finalOptions);
        finalOptions.modules = finalOptions.modules || (finalOptions.native ? 'commonjs' : 'none');

        var defaultPropTemplates = finalOptions.native ? reactPropTemplates.native[finalOptions.nativeTargetVersion] : reactPropTemplates.dom[finalOptions.targetVersion];

        finalOptions.propTemplates = _.defaults({}, options.propTemplates, defaultPropTemplates);
        return finalOptions;
    }

    function reactImport(options) {
        if (options.native) {
            return reactNativeSupport[options.nativeTargetVersion].react.module;
        }
        if (!options.reactImportPath) {
            var isNewReact = _.includes(['0.14.0', '0.15.0', '15.0.0', '15.0.1'], options.targetVersion);
            return isNewReact ? 'react' : 'react/addons';
        }
        return options.reactImportPath;
    }

    /**
     * @param {Context} context
     * @param {string} namePrefix
     * @param {string} body
     * @param {*?} params
     * @return {string}
     */
    function generateInjectedFunc(context, namePrefix, body, params) {
        params = params || context.boundParams;
        var funcName = namePrefix.replace(',', '') + (context.injectedFunctions.length + 1);
        var funcText = 'function ' + funcName + '(' + params.join(',') + ') {\n        ' + body + '\n        }\n        ';
        context.injectedFunctions.push(funcText);
        return funcName;
    }

    function generateTemplateProps(node, context) {
        var templatePropCount = 0;
        var propTemplateDefinition = context.options.propTemplates[node.name];
        var propertiesTemplates = _(node.children).map(function (child, index) {
            var templateProp = null;
            if (child.name === templateNode) {
                // Generic explicit template tag
                if (!_.has(child.attribs, 'prop')) {
                    throw RTCodeError$2.build(context, child, 'rt-template must have a prop attribute');
                }
                if (_.filter(child.children, { type: 'tag' }).length !== 1) {
                    throw RTCodeError$2.build(context, child, "'rt-template' should have a single non-text element as direct child");
                }

                var childTemplate = _.find(context.options.propTemplates, { prop: child.attribs.prop }) || { arguments: [] };
                templateProp = {
                    prop: child.attribs.prop,
                    arguments: (child.attribs.arguments ? child.attribs.arguments.split(',') : childTemplate.arguments) || []
                };
            } else if (propTemplateDefinition && propTemplateDefinition[child.name]) {
                // Implicit child template from configuration
                templateProp = {
                    prop: propTemplateDefinition[child.name].prop,
                    arguments: child.attribs.arguments ? child.attribs.arguments.split(',') : propTemplateDefinition[child.name].arguments
                };
            }

            if (templateProp) {
                _.assign(templateProp, { childIndex: index - templatePropCount++, content: _.find(child.children, { type: 'tag' }) });
            }

            return templateProp;
        }).compact().value();

        return _.transform(propertiesTemplates, function (props, templateProp) {
            var functionParams = _.values(context.boundParams).concat(templateProp.arguments);

            var oldBoundParams = context.boundParams;
            context.boundParams = context.boundParams.concat(templateProp.arguments);

            var functionBody = 'return ' + convertHtmlToReact(templateProp.content, context);
            context.boundParams = oldBoundParams;

            var generatedFuncName = generateInjectedFunc(context, templateProp.prop, functionBody, functionParams);
            props[templateProp.prop] = genBind(generatedFuncName, _.values(context.boundParams));

            // Remove the template child from the children definition.
            node.children.splice(templateProp.childIndex, 1);
        }, {});
    }

    /**
     * @param node
     * @param {Context} context
     * @return {string}
     */
    function generateProps(node, context) {
        var props = {};
        _.forOwn(node.attribs, function (val, key) {
            var propKey = reactSupport.attributesMapping[key.toLowerCase()] || key;
            if (props.hasOwnProperty(propKey) && propKey !== reactSupport.classNameProp) {
                throw RTCodeError$2.build(context, node, 'duplicate definition of ' + propKey + ' ' + JSON.stringify(node.attribs));
            }
            if (_.startsWith(key, 'on') && !utils.isStringOnlyCode(val)) {
                props[propKey] = handleEventHandler(val, context, node, key);
            } else if (key === 'style' && !utils.isStringOnlyCode(val)) {
                props[propKey] = handleStyleProp(val, node, context);
            } else if (propKey === reactSupport.classNameProp) {
                // Processing for both class and rt-class conveniently return strings that
                // represent JS expressions, each evaluating to a space-separated set of class names.
                // We can just join them with another space here.
                var existing = props[propKey] ? props[propKey] + ' + " " + ' : '';
                if (key === classSetAttr) {
                    props[propKey] = existing + classSetTemplate({ classSet: val });
                } else if (key === classAttr || key === reactSupport.classNameProp) {
                    props[propKey] = existing + utils.convertText(node, context, val.trim());
                }
            } else if (!_.startsWith(key, 'rt-')) {
                props[propKey] = utils.convertText(node, context, val.trim());
            }
        });
        _.assign(props, generateTemplateProps(node, context));

        // map 'className' back into 'class' for custom elements
        if (props[reactSupport.classNameProp] && isCustomElement(node.name)) {
            props[classAttr] = props[reactSupport.classNameProp];
            delete props[reactSupport.classNameProp];
        }

        var propStr = _.map(props, function (v, k) {
            return JSON.stringify(k) + ' : ' + v;
        }).join(',');
        return '{' + propStr + '}';
    }

    function handleEventHandler(val, context, node, key) {
        var handlerString = void 0;
        if (_.startsWith(val, 'this.')) {
            if (context.options.autobind) {
                handlerString = val + '.bind(this)';
            } else {
                throw RTCodeError$2.build(context, node, "'this.handler' syntax allowed only when the --autobind is on, use {} to return a callback function.");
            }
        } else {
            var funcParts = val.split('=>');
            if (funcParts.length !== 2) {
                throw RTCodeError$2.build(context, node, 'when using \'on\' events, use lambda \'(p1,p2)=>body\' notation or \'this.handler\'; otherwise use {} to return a callback function. error: [' + key + '=\'' + val + '\']');
            }
            var evtParams = funcParts[0].replace('(', '').replace(')', '').trim();
            var funcBody = funcParts[1].trim();
            var params = context.boundParams;
            if (evtParams.trim() !== '') {
                params = params.concat([evtParams.trim()]);
            }
            var generatedFuncName = generateInjectedFunc(context, key, funcBody, params);
            handlerString = genBind(generatedFuncName, context.boundParams);
        }
        return handlerString;
    }

    function genBind(func, args) {
        var bindArgs = ['this'].concat(args);
        return func + '.bind(' + bindArgs.join(',') + ')';
    }

    function handleStyleProp(val, node, context) {
        var styleStr = _(val).split(';').map(_.trim).filter(function (i) {
            return _.includes(i, ':');
        }).map(function (i) {
            var pair = i.split(':');
            var key = pair[0].trim();
            if (/\{|}/g.test(key)) {
                throw RTCodeError$2.build(context, node, 'style attribute keys cannot contain { } expressions');
            }
            var value = pair.slice(1).join(':').trim();
            var parsedKey = /(^-moz-)|(^-o-)|(^-webkit-)/ig.test(key) ? _.upperFirst(_.camelCase(key)) : _.camelCase(key);
            return parsedKey + ' : ' + utils.convertText(node, context, value.trim());
        }).join(',');
        return '{' + styleStr + '}';
    }

    /**
     * @param {string} tagName
     * @param context
     * @return {string}
     */
    function convertTagNameToConstructor(tagName, context) {
        if (context.options.native) {
            var targetSupport = reactNativeSupport[context.options.nativeTargetVersion];
            return _.includes(targetSupport.components, tagName) ? targetSupport.reactNative.name + '.' + tagName : tagName;
        }
        var isHtmlTag = _.includes(reactDOMSupport[context.options.targetVersion], tagName) || isCustomElement(tagName);
        if (reactSupport.shouldUseCreateElement(context)) {
            isHtmlTag = isHtmlTag || tagName.match(/^\w+(-\w+)+$/);
            return isHtmlTag ? '\'' + tagName + '\'' : tagName;
        }
        return isHtmlTag ? 'React.DOM.' + tagName : tagName;
    }

    function isCustomElement(tagName) {
        return tagName.match(/^\w+(-\w+)+$/);
    }

    /**
     * @param {string} html
     * @param options
     * @param reportContext
     * @return {Context}
     */
    function defaultContext(html, options, reportContext) {
        var defaultDefines = [{ moduleName: options.reactImportPath, alias: 'React', member: '*' }, { moduleName: options.lodashImportPath, alias: '_', member: '*' }];
        if (options.native) {
            var targetSupport = reactNativeSupport[options.nativeTargetVersion];
            if (targetSupport.reactNative.module !== targetSupport.react.module) {
                defaultDefines.splice(0, 0, { moduleName: targetSupport.reactNative.module, alias: targetSupport.reactNative.name, member: '*' });
            }
        }
        return {
            boundParams: [],
            injectedFunctions: [],
            html: html,
            options: options,
            defines: options.defines ? _.clone(options.defines) : defaultDefines,
            reportContext: reportContext
        };
    }

    /**
     * @param node
     * @return {boolean}
     */
    function hasNonSimpleChildren(node) {
        return _.some(node.children, function (child) {
            return child.type === 'tag' && child.attribs[repeatAttr];
        });
    }

    /**
     * Trims a string the same way as String.prototype.trim(), but preserving all non breaking spaces ('\xA0')
     * @param {string} text
     * @return {string}
     */
    function trimHtmlText(text) {
        return text.replace(/^[ \f\n\r\t\v\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+|[ \f\n\r\t\v\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/g, '');
    }

    /**
     * @param node
     * @param {Context} context
     * @return {string}
     */
    function convertHtmlToReact(node, context) {
        if (node.type === 'tag' || node.type === 'style') {
            context = _.defaults({
                boundParams: _.clone(context.boundParams)
            }, context);

            if (node.type === 'tag' && node.name === importAttr) {
                throw RTCodeError$2.build(context, node, "'rt-import' must be a toplevel node");
            }

            if (node.type === 'tag' && node.name === includeNode) {
                var srcFile = node.attribs[includeSrcAttr];
                if (!srcFile) {
                    throw RTCodeError$2.build(context, node, 'rt-include must supply a source attribute');
                }
                if (!context.options.readFileSync) {
                    throw RTCodeError$2.build(context, node, 'rt-include needs a readFileSync polyfill on options');
                }
                try {
                    context.html = context.options.readFileSync(srcFile);
                } catch (e) {
                    console.error(e);
                    throw RTCodeError$2.build(context, node, 'rt-include failed to read file \'' + srcFile + '\'');
                }
                return parseAndConvertHtmlToReact(context.html, context);
            }

            var data = { name: convertTagNameToConstructor(node.name, context)

                // Order matters. We need to add the item and itemIndex to context.boundParams before
                // the rt-scope directive is processed, lest they are not passed to the child scopes
            };if (node.attribs[repeatAttr]) {
                var arr = node.attribs[repeatAttr].split(' in ');
                if (arr.length !== 2) {
                    throw RTCodeError$2.build(context, node, 'rt-repeat invalid \'in\' expression \'' + node.attribs[repeatAttr] + '\'');
                }
                var repeaterParams = arr[0].split(',').map(function (s) {
                    return s.trim();
                });
                data.item = repeaterParams[0];
                data.index = repeaterParams[1] || data.item + 'Index';
                data.collection = arr[1].trim();
                var bindParams = [data.item, data.index];
                _.forEach(bindParams, function (param) {
                    validateJS$1(param, node, context);
                });
                validateJS$1('(' + data.collection + ')', node, context);
                _.forEach(bindParams, function (param) {
                    if (!_.includes(context.boundParams, param)) {
                        context.boundParams.push(param);
                    }
                });
            }

            if (node.attribs[scopeAttr]) {
                handleScopeAttribute(node, context, data);
            }

            if (node.attribs[ifAttr]) {
                validateIfAttribute(node, context, data);
                data.condition = node.attribs[ifAttr].trim();
                if (!node.attribs.key && node.name !== virtualNode) {
                    _.set(node, ['attribs', 'key'], '' + node.startIndex);
                }
            }

            data.props = generateProps(node, context);
            if (node.attribs[propsAttr]) {
                if (data.props === '{}') {
                    data.props = node.attribs[propsAttr];
                } else if (!node.attribs.style && !node.attribs.class) {
                    data.props = propsTemplateSimple({ generatedProps: data.props, rtProps: node.attribs[propsAttr] });
                } else {
                    data.props = propsTemplate({ generatedProps: data.props, rtProps: node.attribs[propsAttr] });
                    if (!_.includes(context.injectedFunctions, propsMergeFunction)) {
                        context.injectedFunctions.push(propsMergeFunction);
                    }
                }
            }

            if (node.name === virtualNode) {
                var invalidAttributes = _.without(_.keys(node.attribs), scopeAttr, ifAttr, repeatAttr);
                if (invalidAttributes.length > 0) {
                    throw RTCodeError$2.build(context, node, "<rt-virtual> may not contain attributes other than 'rt-scope', 'rt-if' and 'rt-repeat'");
                }

                // provide a key to virtual node children if missing
                if (node.children.length > 1) {
                    _(node.children).reject('attribs.key').forEach(function (child, i) {
                        if (child.type === 'tag' && child.name !== virtualNode) {
                            _.set(child, ['attribs', 'key'], '' + node.startIndex + i);
                        }
                    });
                }
            }

            var children = _.map(node.children, function (child) {
                var code = convertHtmlToReact(child, context);
                validateJS$1(code, child, context);
                return code;
            });

            data.children = utils.concatChildren(children);

            if (node.name === virtualNode) {
                //eslint-disable-line wix-editor/prefer-ternary
                data.body = '[' + _.compact(children).join(',') + ']';
            } else {
                data.body = _.template(getTagTemplateString(!hasNonSimpleChildren(node), reactSupport.shouldUseCreateElement(context)))(data);
            }

            if (node.attribs[scopeAttr]) {
                var functionBody = _.values(data.innerScope.innerMapping).join('\n') + ('return ' + data.body);
                var generatedFuncName = generateInjectedFunc(context, 'scope' + data.innerScope.scopeName, functionBody, _.keys(data.innerScope.outerMapping));
                data.body = generatedFuncName + '.apply(this, [' + _.values(data.innerScope.outerMapping).join(',') + '])';
            }

            // Order matters here. Each rt-repeat iteration wraps over the rt-scope, so
            // the scope variables are evaluated in context of the current iteration.
            if (node.attribs[repeatAttr]) {
                data.repeatFunction = generateInjectedFunc(context, 'repeat' + _.upperFirst(data.item), 'return ' + data.body);
                data.repeatBinds = ['this'].concat(_.reject(context.boundParams, function (p) {
                    return p === data.item || p === data.index || data.innerScope && p in data.innerScope.innerMapping;
                }));
                data.body = repeatTemplate(data);
            }
            if (node.attribs[ifAttr]) {
                data.body = ifTemplate(data);
            }
            return data.body;
        } else if (node.type === 'comment') {
            var sanitizedComment = node.data.split('*/').join('* /');
            return commentTemplate({ data: sanitizedComment });
        } else if (node.type === 'text') {
            var parentNode = node.parent;
            var overrideNormalize = parentNode !== undefined && (parentNode.name === 'pre' || parentNode.name === 'textarea' || _.has(parentNode.attribs, preAttr));
            var normalizeWhitespaces = context.options.normalizeHtmlWhitespace && !overrideNormalize;
            var text = node.data;
            return trimHtmlText(text) ? utils.convertText(node, context, text, normalizeWhitespaces) : '';
        }
    }

    /**
     * Parses the rt-scope attribute returning an array of parsed sections
     *
     * @param {String} scope The scope attribute to parse
     * @returns {Array} an array of {expression,identifier}
     * @throws {String} the part of the string that failed to parse
     */
    function parseScopeSyntax(text) {
        // the regex below was built using the following pseudo-code:
        // double_quoted_string = `"[^"\\\\]*(?:\\\\.[^"\\\\]*)*"`
        // single_quoted_string = `'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'`
        // text_out_of_quotes = `[^"']*?`
        // expr_parts = double_quoted_string + "|" + single_quoted_string + "|" + text_out_of_quotes
        // expression = zeroOrMore(nonCapture(expr_parts)) + "?"
        // id = "[$_a-zA-Z]+[$_a-zA-Z0-9]*"
        // as = " as" + OneOrMore(" ")
        // optional_spaces = zeroOrMore(" ")
        // semicolon = nonCapture(or(text(";"), "$"))
        //
        // regex = capture(expression) + as + capture(id) + optional_spaces + semicolon + optional_spaces

        var regex = RegExp("((?:(?:\"[^\"\\\\]*(?:\\\\.[^\"\\\\]*)*\"|'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'|[^\"']*?))*?) as(?: )+([$_a-zA-Z]+[$_a-zA-Z0-9]*)(?: )*(?:;|$)(?: )*", 'g');
        var res = [];
        do {
            var idx = regex.lastIndex;
            var match = regex.exec(text);
            if (regex.lastIndex === idx || match === null) {
                throw text.substr(idx);
            }
            if (match.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            res.push({ expression: match[1].trim(), identifier: match[2] });
        } while (regex.lastIndex < text.length);

        return res;
    }

    function handleScopeAttribute(node, context, data) {
        data.innerScope = {
            scopeName: '',
            innerMapping: {},
            outerMapping: {}
        };

        data.innerScope.outerMapping = _.zipObject(context.boundParams, context.boundParams);

        var scopes = void 0;
        try {
            scopes = parseScopeSyntax(node.attribs[scopeAttr]);
        } catch (scopePart) {
            throw RTCodeError$2.build(context, node, 'invalid scope part \'' + scopePart + '\'');
        }

        scopes.forEach(function (_ref) {
            var expression = _ref.expression,
                identifier = _ref.identifier;

            validateJS$1(identifier, node, context);

            // this adds both parameters to the list of parameters passed further down
            // the scope chain, as well as variables that are locally bound before any
            // function call, as with the ones we generate for rt-scope.
            if (!_.includes(context.boundParams, identifier)) {
                context.boundParams.push(identifier);
            }

            data.innerScope.scopeName += _.upperFirst(identifier);
            data.innerScope.innerMapping[identifier] = 'var ' + identifier + ' = ' + expression + ';';
            validateJS$1(data.innerScope.innerMapping[identifier], node, context);
        });
    }

    function validateIfAttribute(node, context, data) {
        var innerMappingKeys = _.keys(data.innerScope && data.innerScope.innerMapping || {});
        var ifAttributeTree = null;
        try {
            ifAttributeTree = esprima.parse(node.attribs[ifAttr]);
        } catch (e) {
            throw new RTCodeError$2(e.message, e.index, -1);
        }
        if (ifAttributeTree && ifAttributeTree.body && ifAttributeTree.body.length === 1 && ifAttributeTree.body[0].type === 'ExpressionStatement') {
            // make sure that rt-if does not use an inner mapping
            if (ifAttributeTree.body[0].expression && utils.usesScopeName(innerMappingKeys, ifAttributeTree.body[0].expression)) {
                throw RTCodeError$2.buildFormat(context, node, "invalid scope mapping used in if part '%s'", node.attribs[ifAttr]);
            }
        } else {
            throw RTCodeError$2.buildFormat(context, node, "invalid if part '%s'", node.attribs[ifAttr]);
        }
    }

    function handleSelfClosingHtmlTags(nodes) {
        return _.flatMap(nodes, function (node) {
            var externalNodes = [];
            node.children = handleSelfClosingHtmlTags(node.children);
            if (node.type === 'tag' && (_.includes(reactSupport.htmlSelfClosingTags, node.name) || _.includes(reactTemplatesSelfClosingTags, node.name))) {
                externalNodes = _.filter(node.children, { type: 'tag' });
                _.forEach(externalNodes, function (i) {
                    i.parent = node;
                });
                node.children = _.reject(node.children, { type: 'tag' });
            }
            return [node].concat(externalNodes);
        });
    }

    function handleRequire(tag, context) {
        var moduleName = void 0;
        var alias = void 0;
        var member = void 0;
        if (tag.children.length) {
            throw RTCodeError$2.build(context, tag, '\'' + requireAttr + '\' may have no children');
        } else if (tag.attribs.dependency && tag.attribs.as) {
            moduleName = tag.attribs.dependency;
            member = '*';
            alias = tag.attribs.as;
        }
        if (!moduleName) {
            throw RTCodeError$2.build(context, tag, '\'' + requireAttr + '\' needs \'dependency\' and \'as\' attributes');
        }
        context.defines.push({ moduleName: moduleName, member: member, alias: alias });
    }

    function handleImport(tag, context) {
        var moduleName = void 0;
        var alias = void 0;
        var member = void 0;
        if (tag.children.length) {
            throw RTCodeError$2.build(context, tag, '\'' + importAttr + '\' may have no children');
        } else if (tag.attribs.name && tag.attribs.from) {
            moduleName = tag.attribs.from;
            member = tag.attribs.name;
            alias = tag.attribs.as;
            if (!alias) {
                if (member === '*') {
                    throw RTCodeError$2.build(context, tag, "'*' imports must have an 'as' attribute");
                } else if (member === 'default') {
                    throw RTCodeError$2.build(context, tag, "default imports must have an 'as' attribute");
                }
                alias = member;
            }
        }
        if (!moduleName) {
            throw RTCodeError$2.build(context, tag, '\'' + importAttr + '\' needs \'name\' and \'from\' attributes');
        }
        context.defines.push({ moduleName: moduleName, member: member, alias: alias });
    }

    function convertTemplateToReact(html, options) {
        var context = context_1;
        return convertRT(html, context, options);
    }

    function parseAndConvertHtmlToReact(html, context) {
        var rootNode = cheerio.load(html, {
            lowerCaseTags: false,
            lowerCaseAttributeNames: false,
            xmlMode: true,
            withStartIndices: true
        });
        utils.validate(context.options, context, context.reportContext, rootNode.root()[0]);
        var rootTags = _.filter(rootNode.root()[0].children, { type: 'tag' });
        rootTags = handleSelfClosingHtmlTags(rootTags);
        if (!rootTags || rootTags.length === 0) {
            throw new RTCodeError$2('Document should have a root element');
        }
        var firstTag = null;
        _.forEach(rootTags, function (tag) {
            if (tag.name === requireAttr) {
                handleRequire(tag, context);
            } else if (tag.name === importAttr) {
                handleImport(tag, context);
            } else if (firstTag === null) {
                firstTag = tag;
                if (_.hasIn(tag, ['attribs', statelessAttr])) {
                    context.stateless = true;
                }
            } else {
                throw RTCodeError$2.build(context, tag, 'Document should have no more than a single root element');
            }
        });
        if (firstTag === null) {
            throw RTCodeError$2.build(context, rootNode.root()[0], 'Document should have a single root element');
        } else if (firstTag.name === virtualNode) {
            throw RTCodeError$2.build(context, firstTag, 'Document should not have <' + virtualNode + '> as root element');
        } else if (_.includes(_.keys(firstTag.attribs), repeatAttr)) {
            throw RTCodeError$2.build(context, firstTag, "root element may not have a 'rt-repeat' attribute");
        }
        return convertHtmlToReact(firstTag, context);
    }

    /**
     * @param {string} html
     * @param {CONTEXT} reportContext
     * @param {Options?} options
     * @return {string}
     */
    function convertRT(html, reportContext, options) {
        options = getOptions(options);

        var context = defaultContext(html, options, reportContext);
        var body = parseAndConvertHtmlToReact(html, context);
        var injectedFunctions = context.injectedFunctions.join('\n');
        var statelessParams = context.stateless ? 'props, context' : '';
        var renderFunction = 'function(' + statelessParams + ') { ' + injectedFunctions + 'return ' + body + ' }';

        var requirePaths = _.map(context.defines, function (d) {
            return '"' + d.moduleName + '"';
        }).join(',');
        var requireNames = _.map(context.defines, function (d) {
            return '' + d.alias;
        }).join(',');
        var AMDArguments = _.map(context.defines, function (d, i) {
            return d.member === '*' ? '' + d.alias : '$' + i;
        }).join(','); //eslint-disable-line no-confusing-arrow
        var AMDSubstitutions = _.map(context.defines, function (d, i) {
            return d.member === '*' ? null : 'var ' + d.alias + ' = $' + i + '.' + d.member + ';';
        }).join('\n'); //eslint-disable-line no-confusing-arrow
        var buildImport = reactSupport.buildImport[options.modules] || reactSupport.buildImport.commonjs;
        var requires = _.map(context.defines, buildImport).join('\n');
        var header = options.flow ? '/* @flow */\n' : '';
        var vars = header + requires;
        var data = {
            renderFunction: renderFunction,
            requireNames: requireNames,
            requirePaths: requirePaths,
            AMDArguments: AMDArguments,
            AMDSubstitutions: AMDSubstitutions,
            vars: vars,
            name: options.name
        };
        var code = templates$1[options.modules](data);
        if (options.modules !== 'typescript' && options.modules !== 'jsrt') {
            code = parseJS(code, options);
        }
        return code;
    }

    function parseJS(code, options) {
        try {
            var tree = esprima.parse(code, { range: true, tokens: true, comment: true, sourceType: 'module' });
            // fix for https://github.com/wix/react-templates/issues/157
            // do not include comments for es6 modules due to bug in dependency "escodegen"
            // to be removed when https://github.com/estools/escodegen/issues/263 will be fixed
            // remove also its test case "test/data/comment.rt.es6.js"
            if (options.modules !== 'es6') {
                tree = escodegen.attachComments(tree, tree.comments, tree.tokens);
            }
            return escodegen.generate(tree, { comment: true });
        } catch (e) {
            throw new RTCodeError$2(e.message, e.index, -1);
        }
    }

    function convertJSRTToJS(text, reportContext, options) {
        options = getOptions(options);
        options.modules = 'jsrt';
        var templateMatcherJSRT = /<template>([^]*?)<\/template>/gm;
        var code = text.replace(templateMatcherJSRT, function (template, html) {
            return convertRT(html, reportContext, options).replace(/;$/, '');
        });

        return parseJS(code, options);
    }

    var reactTemplates = {
        convertTemplateToReact: convertTemplateToReact,
        convertRT: convertRT,
        convertJSRTToJS: convertJSRTToJS,
        RTCodeError: RTCodeError$2,
        normalizeName: utils.normalizeName
    };
    var reactTemplates_1 = reactTemplates.convertTemplateToReact;
    var reactTemplates_2 = reactTemplates.convertRT;
    var reactTemplates_3 = reactTemplates.convertJSRTToJS;
    var reactTemplates_4 = reactTemplates.RTCodeError;
    var reactTemplates_5 = reactTemplates.normalizeName;

    exports.default = reactTemplates;
    exports.convertTemplateToReact = reactTemplates_1;
    exports.convertRT = reactTemplates_2;
    exports.convertJSRTToJS = reactTemplates_3;
    exports.RTCodeError = reactTemplates_4;
    exports.normalizeName = reactTemplates_5;

    return exports;

}({},_,esprima,normalizeHtmlWhitespace,cheerio,escodegen));
