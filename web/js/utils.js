
var BNW = BNW || {};

(function (global){

var Utils = {};
global.Utils = Utils;

function AjaxError(message, xhr, error) {
	this.name = 'AjaxError';
	this.message = message;
	this.xhr = xhr;
	this.error = error;
	this.stack = (new Error()).stack;
}
AjaxError.prototype = new Error;

Utils.AjaxError = AjaxError;

var hop = Object.prototype.hasOwnProperty;

function extend(target, source) {
	for (var k in source) {
		if (hop.call(source, k)) {
			target[k] = source[k];
		}
	}
	return target;
}

Utils.extend = extend;

function love(mom, dad) {
	var child = (mom || dad) ? {} : void 0;
	mom && extend(child, mom);
	dad && extend(child, dad);
	return child;
}

Utils.love = love;

Utils.forEach = function forEach(list, cb, result) {
	var _break = 1 << 0;
	var _remove = 1 << 1;
	var count = list.length;
	var i;
	if (result instanceof Function && !(cb instanceof Function)) {
		result = [result, cb];
		cb = result[0];
		result = result[1];
	}
	var ctx = {
		_break: _break,
		_remove: _remove,
		result: result,
		count: list.length,
		i: 0
	};
	var ret;
	for ( ; ctx.i < ctx.count; ctx.i++ ) {
		ret = cb.call(ctx, list[ctx.i], ctx.i, list);
		if (_remove & ret) {
			list.splice(ctx.i, 1);
			ctx.i--;
			ctx.count--;
		}
		if (_break & ret) {
			break;
		}
	}
	return ctx.result;
};

Utils.forEachProperty = function forEachProperty(obj, cb) {
	var _break = 1 << 0;
	var i = 0;
	var ctx = {
		_break: _break
	};
	var ret;
	for ( var k in obj ) {
		if ( !hop.call(obj, k) ) continue;
		ret = cb.call(ctx, obj[k], k, i);
		if (_break & ret) {
			break;
		}
		i++;
	}
};

Utils.filter = function(list, cb) {
	return Utils.forEach(list, [], function(val, i) {
		if (cb(val, i, list)) this.result.push(val);
	});
};

Utils.padStart = function padStart(str, len, chars) {
	var strLen = str.length;
	if (strLen >= len) return str;
	var chLen = chars.length;
	var pad = '';
	var padLen = 0;
	var remain = len - strLen;
	while (padLen < remain) {
		pad += chars;
		padLen += chLen;
	}
	return pad.substr(0, remain) + str;
};

Utils.repeat = function repeat(times, item) {
	var list = [];
	while (times) {
		list.push(item);
		times--;
	}
	return list;
};

Utils.parseQuery = function parseQuery(param) {
	param = String(param).replace(/^\?/, '').split('&');
	var obj = {};
	for (var i = 0; i < param.length; i++) {
		var pi = param[i];
		if (!pi) continue;
		var eqpos = pi.indexOf('=');
		//var pair = param[i].split('=');
		var name = window.decodeURIComponent(eqpos==-1?pi:pi.substr(0,eqpos));
		var value = window.decodeURIComponent(eqpos==-1?true:pi.substr(eqpos+1));
		obj[name] = value;
	}
	return obj;
};

Utils.debounce = function debounce(fn, wait) {
	function cancel() {
		_iv && clearTimeout(_iv);
		_iv = null;
	}
	function trigger() {
		cancel();
		_iv = setTimeout(fn, wait);
	}
	function customWait(wait) {
		cancel();
		_iv = setTimeout(fn, wait);
	}
	var _iv;
	trigger.cancel = cancel;
	trigger.customWait = customWait;
	return trigger;
};

Utils.isChildOf = function isChildOf(el, compare) {
	while(el) {
		if (el === compare) {
			return true;
		}
		el = el.parentNode;
	}
	return false;
};

Utils.getEstados = function getEstados() {
	return [
		{ uf: 'AC', nome: 'Acre' },
		{ uf: 'AL', nome: 'Alagoas' },
		{ uf: 'AM', nome: 'Amazonas' },
		{ uf: 'AP', nome: 'Amapá' },
		{ uf: 'BA', nome: 'Bahia' },
		{ uf: 'CE', nome: 'Ceará' },
		{ uf: 'DF', nome: 'Distrito Federal' },
		{ uf: 'ES', nome: 'Espírito Santo' },
		{ uf: 'GO', nome: 'Goiás' },
		{ uf: 'MA', nome: 'Maranhão' },
		{ uf: 'MG', nome: 'Minas Gerais' },
		{ uf: 'MS', nome: 'Mato Grosso do Sul' },
		{ uf: 'MT', nome: 'Mato Grosso' },
		{ uf: 'PA', nome: 'Pará' },
		{ uf: 'PB', nome: 'Paraíba' },
		{ uf: 'PE', nome: 'Pernambuco' },
		{ uf: 'PI', nome: 'Piauí' },
		{ uf: 'PR', nome: 'Paraná' },
		{ uf: 'RJ', nome: 'Rio de Janeiro' },
		{ uf: 'RN', nome: 'Rio Grande do Norte' },
		{ uf: 'RO', nome: 'Rondônia' },
		{ uf: 'RR', nome: 'Roraima' },
		{ uf: 'RS', nome: 'Rio Grande do Sul' },
		{ uf: 'SE', nome: 'Sergipe' },
		{ uf: 'SC', nome: 'Santa Catarina' },
		{ uf: 'SP', nome: 'São Paulo' },
		{ uf: 'TO', nome: 'Tocantins' }
	];
};

Utils.getMonthNamesEN = function getMonthNamesEN() {
	return [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
};

Utils.getWeekDayNamesEN = function getWeekDayNamesEN() {
	return [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];
};

Utils.iso8601Date = function iso8601Date(date) {
	if ('string' === typeof date) {
		date = new Date(date);
	}
	if (!(date && date instanceof Date && date.getTime())) {
		return;
	}
	return [
		Utils.padStart(String(date.getFullYear()), 4, '0'),
		Utils.padStart(String(date.getMonth()+1), 2, '0'),
		Utils.padStart(String(date.getDate()), 2, '0'),
	].join('-');
};

Utils.loadScript = function loadScript(url, cb) {
	var script = document.createElement('script');
	var head = document.getElementsByTagName('head')[0];
	var done = false;
	script.addEventListener('load', function() {
		if (done) {
			console.log('load script too late: ' + url);
			return;
		}
		done = true;
		cb();
	});
	script.addEventListener('error', function(err) {
		if (done) {
			console.log('error script too late: ' + url);
			return;
		}
		done = true;
		cb(err);
	})
	setTimeout(function() {
		if (done) return;
		cb(new Error('load script timeout: '+url));
	}, 30000);
	script.src = url;
	head.appendChild(script);
};

Utils.loadStylesheet = function loadStylesheet(url, cb) {
	var link = document.createElement('link');
	var head = document.getElementsByTagName('head')[0];
	var done = false;
	link.setAttribute('rel', 'stylesheet');
	link.addEventListener('load', function() {
		if (done) {
			console.log('load stylesheet too late: ' + url);
			return;
		}
		done = true;
		cb();
	});
	link.addEventListener('error', function(err) {
		if (done) {
			console.log('error stylesheet too late: ' + url);
			return;
		}
		done = true;
		cb(err);
	})
	setTimeout(function() {
		if (done) return;
		cb(new Error('load stylesheet timeout: '+url));
	}, 30000);
	link.href = url;
	head.appendChild(link);
};

Utils.loadAjax = function loadAjax(opt) {
	var req = new XMLHttpRequest;
	var head = opt.headers;
	req.addEventListener('load', function() {
		var err = null;
		if (req.status < 200 || req.status >= 300) {
			err = new AjaxError('HTTP '+req.status+' '+req.statusText, req);
		}
		opt.cb(err, req.responseText, req);
	});
	req.addEventListener('error', function(err) {
		opt.cb(new AjaxError('Erro de rede', req, err), null, req);
	});
	req.open(opt.method || 'GET', opt.url);
	if (head) {
		Utils.forEach(head, function(h) {
			req.setRequestHeader(h.name, h.value);
		});
	}
	req.send(opt.body);
};

Utils.loadService = function(opt) {
	var req = opt.req;
	var callback = opt.callback;
	var reqError = opt.reqValidate(req);
	if ( reqError ) {
		return callback(false, reqError);
	}
	Utils.loadAjax(opt.envPrepare(req, function(err, data) {
		var serviceError = null;
		var dataError = null;
		var isJson = false;
		if (err) {
			serviceError = {
				message: 'Erro ao carregar o serviço',
				error: err
			};
		}
		try {
			data = JSON.parse(data);
			isJson = true;
		} catch (e) {
			if (!serviceError) {
				serviceError = {
					message: 'Resposta inválida do serviço',
					error: e
				};
			}
		}
		if (isJson) {
			dataError = opt.dataValidate(data);
		}
		return callback(false, dataError || serviceError, data);
	}));
	return callback(true);
};

Utils.htmlEntitiesEncode = function(str) {
	var text = document.createTextNode(str);
	var div = document.createElement('div');
	div.appendChild(text);
	return div.innerHTML;
};

Utils.htmlEntitiesDecode = function(str) {
	var div = document.createElement('div');
	div.innerHTML = str.replace(/</g,'&lt;').replace(/>/g,'&gt;');
	return div.firstChild.nodeValue;
};

Utils.easing = (function() {
	/**
	 * @param t
	 * Current time, starting at zero.
	 * @param b
	 * Starting value to ease.
	 * @param c
	 * Ending value.
	 * @param d
	 * Duration in time.
	 */
	function inter(t,b,c,d,fn) {
		return fn(t/d)*(c-b)+b;
	}
	function interMod(t,b,c,d,ease,mod) {
		return mod(t/d, ease)*(c-b)+b;
	}
	var ease = {
		linear: function(x) {
			return x;
		},
		sin: function(x) {
			return 1-Math.sin((1-x)*0.5*Math.PI);
		},
		quad: function(x) {
			return x*x;
		},
		cubic: function(x) {
			return x*x*x;
		},
		quart: function(x) {
			return x*x*x*x;
		}
	};
	var mod = {
		in: function(t, fn) {
			return fn(t);
		},
		out: function(t, fn) {
			return 1-fn(1-t);
		},
		twice: function(t, fn) {
			return fn(t*2)*0.5;
		},
		inOut: function(t, fn) {
			return ( t < 0.5
				? mod.twice(t, fn)
				: mod.out(t, fnMod(fn, mod.twice))
				);
		},
		outIn: function(t, fn) {
			return ( t < 0.5
				? mod.twice(t, fnMod(fn, mod.out))
				: mod.twice(t-0.5, fn)+0.5
				);
		}
	};
	function fnMod(fn, mod) {
		return function(t) {
			return mod(t, fn);
		}
	}
	function fnInter(fn) {
		return function(t,b,c,d) {
			return inter(t,b,c,d,fn);
		};
	}
	return {
		inter: inter,
		interMod: interMod,
		ease: ease,
		mod: mod,
		fnMod: fnMod,
		fnInter: fnInter
	};
})();

Utils.deaccentize = (function() {

function setChars(chars, objList) {
	var ollen = objList && objList.length;
	if ( !ollen ) return;
	for ( var k in chars ) {
		if ( chars.hasOwnProperty(k) ) {
			var list = chars[k];
			for ( var i = 0, ii = list.length; i < ii; i++ ) {
				for ( var j = 0; j < ollen; j++ ) {
					objList[j][list[i]] = k;
				}
			}
		}
	}
}

function convert(s, obj) {
	var t = '';
	for ( var i = 0, ii = s.length; i < ii; i++ ) {
		var sc = s[i]
			, tc = obj[sc];
		t += tc || sc;
	}
	return t;
}

function fnConvert(obj) {
	return function(s) {
		return convert(s, obj);
	};
}

var charBasic =
	{ A: 'ÀÁÂÃÄÅ'
	, C: 'Ç'
	, E: 'ÈÉÊË'
	, I: 'ÌÍÎÏ'
	, N: 'Ñ'
	, O: 'ÒÓÔÕÖØ'
	, U: 'ÙÚÛÜ'
	, Y: 'ÝŸ'
	, a: 'àáâãäå'
	, c: 'ç'
	, e: 'èéêë'
	, i: 'ìíîï'
	, n: 'ñ'
	, o: 'òóôõöø'
	, u: 'ùúûü'
	, y: 'ýÿ'
	};
var charAdvanced =
	{ A: 'ĀĂĄ'
	, C: 'ĆĈĊČ'
	, D: 'ĎĐ'
	, E: 'ĒĔĖĘĚ'
	, G: 'ĜĞĠĢ'
	, H: 'ĤĦ'
	, I: 'ĨĪĬĮİ'
	, J: 'Ĵ'
	, K: 'Ķ'
	, L: 'ĹĻĽĿŁ'
	, N: 'ŃŅŇ'
	, O: 'ŌŎŐ'
	, R: 'ŔŖŘ'
	, S: 'ŚŜŞŠ'
	, T: 'ŢŤŦ'
	, U: 'ŨŪŬŮŰŲ'
	, W: 'Ŵ'
	, Y: 'Ŷ'
	, Z: 'ŹŻŽ'
	, a: 'āăą'
	, c: 'ćĉċč'
	, d: 'ďđ'
	, e: 'ēĕėęě'
	, g: 'ĝğġģ'
	, h: 'ĥħ'
	, i: 'ĩīĭįı'
	, j: 'ĵ'
	, k: 'ķ'
	, l: 'ĺļľŀł'
	, n: 'ńņň'
	, o: 'ōŏő'
	, r: 'ŕŗř'
	, s: 'śŝşš'
	, t: 'ţťŧ'
	, u: 'ũūŭůűų'
	, w: 'ŵ'
	, y: 'ŷ'
	, z: 'źżž'
	};
var basic    = {};
var advanced = {};
var all      = {};
var deaccentize;

setChars(charBasic, [basic, all]);
setChars(charAdvanced, [advanced, all]);

deaccentize          = fnConvert(all);
deaccentize.basic    = fnConvert(basic);
deaccentize.advanced = fnConvert(advanced);
deaccentize.map = {
	basic: basic,
	advanced: advanced,
	all: all
};

return deaccentize;

})();

Utils.levenshtein = function levenshtein(a, b) {
	var cost;
	var m = a.length;
	var n = b.length;

	// make sure a.length >= b.length to use O(min(n,m)) space, whatever that is
	if (m < n) {
		var c = a; a = b; b = c;
		var o = m; m = n; n = o;
	}

	var r = []; r[0] = [];
	for (var c = 0; c < n + 1; ++c) {
		r[0][c] = c;
	}

	for (var i = 1; i < m + 1; ++i) {
		r[i] = []; r[i][0] = i;
		for ( var j = 1; j < n + 1; ++j ) {
			cost = a.charAt( i - 1 ) === b.charAt( j - 1 ) ? 0 : 1;
			r[i][j] = Math.min( r[i-1][j] + 1, r[i][j-1] + 1, r[i-1][j-1] + cost );
		}
	}

	return r.pop().pop();
};

Utils.searchClosestString = function(search) {
	function getViews(raw) {
		var trim = raw.replace(reSpaces, '');
		var lower = trim.toLowerCase();
		var noacc = Utils.deaccentize(lower);
		return {
			raw: raw,
			trim: trim,
			lower: lower,
			noacc: noacc
		};
	}
	function getDistance(str) {
		str = getViews(str);
		return {
			raw: Utils.levenshtein(search.raw, str.raw),
			trim: Utils.levenshtein(search.trim, str.trim),
			lower: Utils.levenshtein(search.lower, str.lower),
			noacc: Utils.levenshtein(search.noacc, str.noacc)
		};
	}
	function getClosest(aVal, bVal) {
		var a = aVal.dist;
		var b = bVal.dist;
		return ( a.noacc === b.noacc
			? ( a.lower === b.lower
				? ( a.trim === b.trim
					? ( a.raw <= b.raw
						? aVal
						: bVal )
					: ( a.trim < b.trim
						? aVal
						: bVal ) )
				: ( a.lower < b.lower
					? aVal
					: bVal ) )
			: ( a.noacc < b.noacc
				? aVal
				: bVal ) );
	}
	var closest;
	var reSpaces = /^\s*|\s+(?=\s)|\s*$/g;
	search = getViews(search);
	return {
		compare: function(str, data) {
			var item = {
				data: data,
				dist: getDistance(str)
			};
			var next = closest
				? getClosest(closest, item)
				: item;
			if (closest !== next) {
				console.log(closest, next);
			}
			closest = next;
		},
		getClosest: function() {
			return closest;
		}
	};
};

Utils.cookie = (function() {

function cookieSet(name, value, days, path, secure) {
	var date = new Date();
	var expires = '';
	var type = typeof (value);
	var valueToUse = '';
	var secureFlag = '';
	path = path || '/';
	if (days) {
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = '; expires=' + date.toUTCString();
	}
	if (type === 'object') {
		valueToUse = encodeURIComponent(JSON.stringify({'': value}));
	} else {
		valueToUse = encodeURIComponent(value);
	}
	if (secure) {
		secureFlag = '; secure';
	}
	document.cookie = name + '=' + valueToUse + expires + '; path=' + path + secureFlag;
}
var objectKey = '{\\:;/}';
var objectPrefix = '{'+JSON.stringify(objectKey)+':';
function cookieGet(name) {
	var nameEQ = name && (name + '=');
	var ca = document.cookie.split(';');
	var value = '';
	var parsed;
	var firstChars;
	var map = (name == null) ? {} : null;
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (map) {
			name = c.substring(0, c.indexOf('='));
			nameEQ = name + '=';
		}
		if (map || c.substring(0, nameEQ.length).indexOf(nameEQ) === 0) {
			value = decodeURIComponent(c.substring(nameEQ.length, c.length));
			if (value == 'undefined') {
				parsed = undefined;
			} else if (value.substring(0, objectPrefix.length) === objectPrefix) {
				try {
					parsed = JSON.parse(value);
					if (objectKey in parsed) parsed = parsed[objectKey];
				} catch (e) {
					parsed = value;
				}
			} else {
				parsed = value;
			}
			if (map) {
				map[name] = parsed;
			} else {
				return parsed;
			}
		}
	}
	return map;
}
function cookieRemove(name) {
	cookieSet(name, '', -1);
}
return {
	get: cookieGet,
	set: cookieSet,
	remove: cookieRemove
};

})();

Utils.mask = (function() {

var r19 = /[1-9]/;
var rd = /\d/;
var maskFone8 = ['(', r19, r19, ')', ' ', r19, rd, rd, rd, '-', rd, rd, rd, rd];
var maskFone9 = ['(', r19, r19, ')', ' ', r19, rd, rd, rd, rd, '-', rd, rd, rd, rd];
var rnd = /[^\d]/g;
var pipeClearNoNumbers = function(conformedValue) {
	var clear = conformedValue.replace(rnd, '');
	return (clear.length) ? conformedValue : '';
};

return {
	fone: {
		mask: function(rawValue) {
			var clear = rawValue.replace(rnd, '');
			//console.log(rawValue.length+' '+rawValue+' -> '+clear.length+' '+clear);
			return (clear.length > 10) ? maskFone9 : maskFone8;
		},
		pipe: pipeClearNoNumbers
	},
	fone8: {
		mask: maskFone8.slice(),
		pipe: pipeClearNoNumbers
	},
	fone9: {
		mask: maskFone9.slice(),
		pipe: pipeClearNoNumbers
	},
	cnpj: {
		mask: [rd, rd, '.', rd, rd, rd, '.', rd, rd, rd, '/', rd, rd, rd, rd, '-', rd, rd],
		pipe: pipeClearNoNumbers
	},
	cpf: {
		mask: [rd, rd, rd, '.', rd, rd, rd, '.', rd, rd, rd, '-', rd, rd],
		pipe: pipeClearNoNumbers
	},
	cep: {
		mask: [rd, rd, rd, rd, rd, '-', rd, rd, rd],
		pipe: pipeClearNoNumbers
	},
	data_dd_mm_yyyy: {
		mask: [rd, rd, '/', rd, rd, '/', rd, rd, rd, rd],
		pipe: pipeClearNoNumbers
	}
};

})();

Utils.digitoVerificador = (function() {

function verifica_cpf_cnpj(valor) {
	valor = String(valor).replace(/[^0-9]/g, '');
	if (valor.length === 11) {
		return 'CPF';
	} else if (valor.length === 14) {
		return 'CNPJ';
	} else {
		return false;
	}
}

function calc_digitos_posicoes(digitos, posicoes, soma_digitos) {
	soma_digitos || (soma_digitos = 0);
	digitos = String(digitos);
	for (var i = 0; i < digitos.length; i++) {
		soma_digitos = soma_digitos + (digitos[i] * posicoes);
		posicoes--;
		if (posicoes < 2) {
			posicoes = 9;
		}
	}
	soma_digitos = soma_digitos % 11;
	if (soma_digitos < 2) {
		soma_digitos = 0;
	} else {
		soma_digitos = 11 - soma_digitos;
	}
	return soma_digitos;
}

function calc_digitos_cpf(valor) {
	valor = String(valor).replace(/[^0-9]/g, '');
	var digitos = valor.substr(0, 9);
	var dv1 = calc_digitos_posicoes(digitos, 10);
	var dv2 = calc_digitos_posicoes(digitos + dv1, 11);
	return String(dv1) + String(dv2);
}

function valida_cpf(valor) {
	valor = String(valor).replace(/[^0-9]/g, '');
	var digitos = valor.substr(0, 9);
	var dv = calc_digitos_cpf(digitos);
	if ((digitos + dv) === valor) {
		return true;
	}
	return false;
}

function calc_digitos_cnpj(valor) {
	valor = String(valor).replace(/[^0-9]/g, '');
	var digitos = valor.substr(0, 12);
	var dv1 = calc_digitos_posicoes(digitos, 5);
	var dv2 = calc_digitos_posicoes(digitos + dv1, 6);
	return String(dv1) + String(dv2);
}

function valida_cnpj(valor) {
	valor = String(valor).replace(/[^0-9]/g, '');
	var digitos = valor.substr(0, 12);
	var dv = calc_digitos_cnpj(digitos);
	if ((digitos + dv) === valor) {
		return true;
	}
	return false;
}

function valida_cpf_cnpj(valor) {
	var valida = verifica_cpf_cnpj(valor);
	valor = String(valor).replace(/[^0-9]/g, '');
	if (valida === 'CPF') {
		return valida_cpf(valor);
	} else if (valida === 'CNPJ') {
		return valida_cnpj(valor);
	} else {
		return false;
	}
}

return {
	cpf: calc_digitos_cpf,
	cnpj: calc_digitos_cnpj,
	posicoes: calc_digitos_posicoes,
	valida: {
		cpf: valida_cpf,
		cnpj: valida_cnpj,
		cpf_cnpj: valida_cpf_cnpj
	}
};

})();

Utils.valida = (function() {

var rnd = /[^\d]/g;
var reFone = /^[1-9]{3}[0-9]{7,8}$/;
var reFone8 = /^[1-9]{3}[0-9]{7}$/;
var reFone9 = /^[1-9]{3}[0-9]{8}$/;
var reTrim = /^\s+|\s+$/g;
var reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var reCep = /^[0-9]{8}$/;
var reDateDdMmYyyy = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

function naoVazio(campo) {
	var valor = campo.valor.replace(reTrim, '');
	if (!valor) {
		return {falta: true};
	}
}
function isTrue(campo) {
	if (!campo.valor) {
		return {falta: true};
	}
}
function selecionado(campo) {
	if (!campo.selecionado) {
		return {falta: true};
	}
}
function fone(campo) {
	var valor = campo.valor.replace(rnd, '');;
	if (!reFone.test(valor)) {
		return {erro:'Telefone inválido'};
	}
}
function fone8(campo) {
	var valor = campo.valor.replace(rnd, '');;
	if (!reFone8.test(valor)) {
		return {erro:'Telefone inválido'};
	}
}
function fone9(campo) {
	var valor = campo.valor.replace(rnd, '');;
	if (!reFone9.test(valor)) {
		return {erro:'Telefone inválido'};
	}
}
function email(campo) {
	var valor = campo.valor;
	if (!reEmail.test(valor)) {
		return {erro:'Email inválido'};
	}
}
function cnpj(campo) {
	var valor = campo.valor.replace(rnd, '');
	if ( !Utils.digitoVerificador.valida.cnpj(valor) ) {
		return {erro:'CNPJ inválido'};
	}
}
function cpf(campo) {
	var valor = campo.valor.replace(rnd, '');
	if ( !Utils.digitoVerificador.valida.cpf(valor) ) {
		return {erro:'CPF inválido'};
	}
}
function cep(campo) {
	var valor = campo.valor.replace(rnd, '');
	if (!reCep.test(valor)) {
		return {erro:'CEP inválido'};
	}
}
function data_dd_mm_yyyy(campo) {
	var valor = campo.valor;
	var match = String(valor).match(reDateDdMmYyyy);
	if (!match) {
		return {erro:'Data inválida'};
	}
	var d = +match[1];
	var m = +match[2];
	var y = +match[3];
	var date = new Date(y, m-1, d);
	if (
		y !== +date.getFullYear() ||
		m !== +date.getMonth()+1 ||
		d !== +date.getDate()
	) {
		return {erro:'Data inválida'};
	}
}
function currentStatus(campo) {
	if (campo.erro || campo.falta) {
		return {
			falta: campo.falta,
			erro: campo.erro
		};
	}
}

return {
	naoVazio: naoVazio,
	isTrue: isTrue,
	selecionado: selecionado,
	fone: fone,
	fone8: fone8,
	fone9: fone9,
	email: email,
	cnpj: cnpj,
	cpf: cpf,
	cep: cep,
	data_dd_mm_yyyy: data_dd_mm_yyyy,
	currentStatus: currentStatus
};

})();

Utils.recaptcha = (function() {
	var api;
	var url = 'https://www.google.com/recaptcha/api.js?onload=recaptchaOnLoad&render=explicit';
	var cbs = [];
	return loadApi;
	function _apiLoadCallback() {
		window.recaptchaOnLoad = null;
		api = grecaptcha;
		for (var i = 0, ii = cbs.length; i < ii; i++) {
			var c = cbs[i];
			(c instanceof Function) && c(options());
		}
		cbs = [];
	}
	function loadApi(cb) {
		if (api) {
			return cb(options());
		}
		cbs.push(cb);
		if (!window.recaptchaOnLoad) {
			window.recaptchaOnLoad = _apiLoadCallback;
			Utils.loadScript(url, function(err) {
				if (err) throw err;
			});
		}
	}
	function getApi() { return api; };
	function options(mom) {
		return {
			options: function(dad) {
				return options(love(mom, dad));
			},
			render: function(el, dad) {
				return render(el, love(mom, dad));
			},
			getApi: getApi
		};
	}
	function render(el, opt) {
		var id = api.render(el, opt);
		return {
			reset: function() {
				return api.reset(id);
			},
			execute: function() {
				return api.execute(id);
			},
			getResponse: function() {
				return api.getResponse(id);
			},
			getId: function() {
				return id;
			}
		};
	}
})();

Utils.all = function(state, finish, reduce, add) {
	return item;
	function item(ref) {
		add && (ref = add(state, ref));
		return done;
		function done() {
			if (reduce(ref, state, arguments)) {
				finish(state);
			}
		}
	}
};

Utils.componentDynamic = function componentDynamic(opt) {
	//console.log('Component Dynamic: '+id);
	var pathHtml = opt.pathHtml;
	var pathJs   = opt.pathJs  ;
	var pathCss  = opt.pathCss ;
	return function(resolve, reject) {
		var html, js;
		var done = function done() {
			if ((html || !pathHtml) && (js || !pathJs)) {
				resolve();
			}
		};
		pathJs && Utils.loadScript(pathJs, function(err) {
			if (err) {
				return reject({
					message: 'Error loading component '+path+' script',
					error: err
				});
			}
			opt.setJs(null, function(err) {
				if (err) return reject(err);
				js = true;
				done();
			});
		});
		pathHtml && Utils.loadAjax({
			url: pathHtml,
			cb: function(err, response) {
				if (err) {
					return reject({
						message: 'Error loading component '+opt.name+' template',
						error: err
					});
				}
				opt.setHtml(response, function(err) {
					if (err) return reject(err);
					html = true;
					done();
				});
			}
		});
		pathCss && Utils.loadStylesheet(pathCss, function(err) {
			if (err && opt.logCssNotFound) {
				console.log('Error loading stylesheet for component '+opt.name);
			}
		});
	};
};

Utils.compPrefixPath = function(prefix, id) {
	//console.log('Component Dynamic: '+id);
	var plen = prefix.length;
	if (id.substr(0, plen).toLowerCase() === prefix) {
		var path = id.substr(plen).replace(/--/g,'/');
		var last = path.lastIndexOf('/');
		var name = path.substr(last+1);
		var href = path+'/'+name;
		return {
			id: id,
			path: path,
			name: name,
			href: href
		};
	}
};

Utils.fnPrefixLoader = function() {
	var prefix;
	var getUrl;
	var pathHtml;
	var pathJs;
	var pathCss;
	var setJs;
	var setHtml;
	var loadedMap;
	var loader;
	var createElement;
	var prepareElement;
	var listenersMap = {};
	return {
		match: match,
		prepareSubComponent: prepareSubComponent,
		setOpt: setOpt
	};
	function setOpt(opt) {
		prefix = opt.prefix.toLowerCase();
		getUrl = opt.getUrl;
		pathHtml = opt.pathHtml;
		pathJs = opt.pathJs;
		pathCss = opt.pathCss;
		setJs = opt.setJs;
		setHtml = opt.setHtml;
		loadedMap = opt.loadedMap || {};
		loader = opt.loader;
		createElement = opt.createElement;
		prepareElement = opt.prepareElement;
	}
	function prepareSubComponent(element) {
		var match = Utils.compPrefixPath(prefix, element.type);
		if (match) {
			prepareElement(element, match);
		}
		return match;
	}
	function match(id) {
		var match = Utils.compPrefixPath(prefix, id);
		if (match) {
			match.url      = getUrl   ? getUrl  (match) : match.href;
			match.pathHtml = pathHtml ? pathHtml(match) : match.url+'.html';
			match.pathJs   = pathJs   ? pathJs  (match) : match.url+'.js'  ;
			match.pathCss  = pathCss  ? pathCss (match) : match.url+'.css' ;
			match.setHtml = function(html, callback) {
				match.html = html;
				setHtml ? setHtml(match, callback) : callback();
			};
			match.setJs = function(js, callback) {
				match.js = js;
				setJs ? setJs(match, callback) : callback();
			};
			match.load = function(callback) {
				return prefixLoader(match, callback);
			};
		}
		return match;
	}
	function prefixLoader(match, callback) {
		var path = match.path;
		var comp = loadedMap[path];
		if (comp) return callback(null, comp);
		var matchListeners = listenersMap[path];
		if (matchListeners) {
			matchListeners.push(callback);
			return;
		}
		listenersMap[path] = matchListeners = [callback];
		var fnLoad = loader(match);
		fnLoad(function resolve() {
			var comp = match.js;
			if (match.html) {
				var html = buble.transform(match.html, {jsx:'h'}).code;
				html = new Function('h', 'props', 'state', 'local', 'Utils', 'return ('+html+');');
				comp.prototype.render = function() {
					return html.call(this, createElement, this.props, this.state, this.local, Utils);
				};
			}
			loadedMap[path] = comp;
			// return callback(null, comp);
			for (var i = 0, ii = matchListeners.length; i < ii; i++) {
				matchListeners[i](null, comp);
			}
			listenersMap[path] = void 0;
		}, function reject(err) {
			for (var i = 0, ii = matchListeners.length; i < ii; i++) {
				matchListeners[i](err);
			}
			listenersMap[path] = void 0;
		});
	}
};

Utils.fnCreateElement = function(mods, createElement) {
	return function() {
		var obj = {
			type: arguments[0],
			props: arguments[1],
			args: arguments
		};
		for (var i = 0, ii = mods.length; i < ii; i++) {
			mods[i](obj);
		}
		arguments = obj.args;
		arguments[0] = obj.type;
		arguments[1] = obj.props;
		return createElement.apply(null, arguments);
	};
};

Utils.fnCreateElement.fixClassName = function() {
	return function fixClassName(obj) {
		var props = obj.props;
		if (props && 'class' in props) {
			props.className = props['class'];
			delete props['class'];
		}
	};
};

Utils.fnCreateElement.prepareSubComponents = function(opt) {
	var loaders = opt.loaders;
	return function(element) {
		for (var i = 0, ii = loaders.length; i < ii; i++) {
			if (loaders[i].prepareSubComponent(element)) break;
		}
	};
};

Utils.fnLoadManager = function(opt) {
	var prefixLoaders = opt.prefixLoaders;
	var createElement = Utils.fnCreateElement(
		opt.createElementMods.concat([
			Utils.fnCreateElement.prepareSubComponents({
				loaders: prefixLoaders
			})
		]),
		opt.createElement
	);
	loadManager.createElement = createElement;
	loadManager.loadMany = loadMany;
	return loadManager;
	function loadManager(id, callback) {
		for (var i = 0, ii = prefixLoaders.length; i < ii; i++) {
			var match = prefixLoaders[i].match(id);
			if (match) {
				match.load(callback);
				return;
			}
		}
		return match;
	}
	function loadMany(idMap, callback) {
		var objList = [];
		var compMap = {};
		var state = {
			list: objList,
			compMap: compMap,
			errors: [],
			remain: 0
		};
		var addItem = Utils.all(state, function manyFinish(state) {
			if (state.errors.length) {
				callback(state.errors, compMap, state);
			} else {
				callback(null, compMap, state);
			}
		}, function manyReduce(index, state, args) {
			var item = objList[index];
			var err = args[0];
			var comp = args[1];
			item.err = err;
			item.comp = comp;
			compMap[item.key] = comp;
			err && state.errors.push(item);
			state.remain -= 1;
			return !state.remain;
		});
		Utils.forEachProperty(idMap, function(id, key) {
			var index = objList.length;
			var done = addItem(index);
			objList[index] = {
				id: id,
				key: key,
				index: index,
				err: null,
				comp: null
			};
			state.remain += 1;
			loadManager(id, done);
		});
	}
};

})(BNW);
