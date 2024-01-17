/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sct-js-bindings/render/capybara-renderer.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./sct-js-bindings/render/capybara-renderer.ts":
/*!*****************************************************!*\
  !*** ./sct-js-bindings/render/capybara-renderer.ts ***!
  \*****************************************************/
/*! exports provided: CapyRenderer, cr_setup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapyRenderer", function() { return CapyRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cr_setup", function() { return cr_setup; });
/* harmony import */ var _sct_js_sources_viewer_view_sct_gsn_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sct-js/sources/viewer/view/sct-gsn-viewer */ "./sct-js/sources/viewer/view/sct-gsn-viewer.ts");
/* harmony import */ var _sct_js_sources_viewer_renderer_sct_metrics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sct-js/sources/viewer/renderer/sct-metrics */ "./sct-js/sources/viewer/renderer/sct-metrics.ts");
/* harmony import */ var _viewer_embedded_arguments_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../viewer/embedded-arguments.ts */ "./sct-js-bindings/viewer/embedded-arguments.ts");
/* harmony import */ var _viewer_unwrapper_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../viewer/unwrapper.ts */ "./sct-js-bindings/viewer/unwrapper.ts");
/* harmony import */ var _viewer_viewer_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../viewer/viewer.ts */ "./sct-js-bindings/viewer/viewer.ts");
/* harmony import */ var _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sct-js/sources/viewer/nodes/sct-gsn-node */ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts");
/* harmony import */ var _sct_js_sources_viewer_gsn_sct_xml_gsn_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sct-js/sources/viewer/gsn/sct-xml-gsn-factory */ "./sct-js/sources/viewer/gsn/sct-xml-gsn-factory.ts");
/* harmony import */ var _sct_js_sources_viewer_gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sct-js/sources/viewer/gsn/sct-gsn */ "./sct-js/sources/viewer/gsn/sct-gsn.ts");
/* harmony import */ var _sct_js_sources_viewer_renderer_sct_svg_renderer_factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../sct-js/sources/viewer/renderer/sct-svg-renderer-factory */ "./sct-js/sources/viewer/renderer/sct-svg-renderer-factory.ts");
/* harmony import */ var _sct_js_sources_viewer_renderer_sct_svg_renderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../sct-js/sources/viewer/renderer/sct-svg-renderer */ "./sct-js/sources/viewer/renderer/sct-svg-renderer.ts");










const jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
const $ = jQuery;
const JQuery = jQuery;
// -------------------------------------------------------------------------- //
// capybara-renderer.js         Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //
//
class CapyRenderer {
    /**
     * Create a Renderer instance, but don't initialize it yet.
     *
     * @constructor
     * @return {Renderer} the new Renderer instance
     */
    constructor() { }
    /**
     * Initialize the basic renderer by specifying the parents of the relevant
     * components and the required factories.
     *
     * @param viewContainer the name of the container for the view
     * @param rendererFactory the factory that will be used to
     *                                          create renderer instances
     * @param metrics the metrics that should be used to lay out and
     *                          render GSN
     * @param showAddresses true if we should show addresses on GSN
     *                                elements
     */
    init(gsn, viewContainer, rendererFactory, metrics, showAddresses) {
        /** @type {GSN} */
        this.gsn = gsn;
        this.viewer = new _sct_js_sources_viewer_view_sct_gsn_viewer__WEBPACK_IMPORTED_MODULE_0__["GsnViewer"]();
        this.viewer.init(viewContainer, rendererFactory, metrics);
        this.viewer.viewContext.showAddresses = showAddresses;
        this.viewer.setGSN(gsn);
        this.viewer.refresh();
    }
    focusOn(selector, element) {
        this.viewer.focusOn(selector, element);
        this.viewer.deselect();
    }
    /**
     * @return the SVG for this rendered argument, prepared as a stand-alone SVG XML
     *         string, or null if the renderer does not support SVG generation.
     */
    getSvg() {
        // the viewer is agnostic as to its Renderer implementation. SVG functionality is available
        // on the SvgRenderer implementation, which is the default implementation. If the renderer
        // is something other than an SvgRenderer, then getSvg is not supported
        if (this.viewer.renderer instanceof _sct_js_sources_viewer_renderer_sct_svg_renderer__WEBPACK_IMPORTED_MODULE_9__["SvgRenderer"]) {
            return this.viewer.renderer.getSvg(this.viewer.tree);
        }
        else {
            return null;
        }
    } // getSvg
    /**
     * Get a map element that contains the regions of the laid-out GSN that are
     * hyperlinked elsewhere. Coupled with a suitably rendered bitmap, this can make
     * IE tolerable.
     *
     * @return the map element, as an HTML fragment.
     */
    getLinkmap() {
        var map = '<map class="degraded" name="map" id="map">\n';
        // We sort the link areas, because those that appear first "render" on top
        // of those that appear later. This is counterintuitive, but is borne out in
        // practice.
        var confs = '';
        var directs = '';
        $('#viewport_for_viewer a').each(function (index, anchor, element) {
            var href = anchor.attributes['xlink:href'].value;
            // Transform the href to be relative; what's in the DOM is absolute.
            var href_parts = href.split('/');
            var filename = href_parts[href_parts.length - 1];
            var directory = href_parts[href_parts.length - 2];
            href = '';
            if (directory) {
                href = '../' + directory + '/';
            }
            href += filename.replace(/gsn$/, 'html');
            var top;
            var left;
            var bottom;
            var right;
            var xform;
            var shape;
            var xoffset = 0;
            var yoffset = 0;
            // Determine if we're dealing with a confidence point
            if (anchor.childNodes[0].id && anchor.childNodes[0].id.match(/_conf_link$/)) {
                xform = anchor.parentNode.attributes['transform'].value;
                shape = anchor.childNodes[0];
                xoffset = Number(shape.attributes['x'].value);
                yoffset = Number(shape.attributes['y'].value);
            }
            // Dealing with an element
            else if (anchor.childNodes[0].attributes) {
                xform = anchor.childNodes[0].attributes['transform'].value;
                // Find the shape - we need its height and width. The jQuery here is
                // compound because of the need to reject the _conf_shape. This took about
                // an hour to derive. >.< I kept trying to do it in a single query (sans
                // filter)
                shape = $('[id$=_shape]', anchor).filter(':not([id$=_conf_shape])')[0];
            }
            else {
                return true;
            }
            var xform_parts = xform.match(/\((.*?)\)/)[1].split(' ');
            left = Number(xform_parts[4]) + xoffset;
            top = Number(xform_parts[5]) + yoffset;
            bottom = Number(shape.attributes['height'].value) + top;
            right = Number(shape.attributes['width'].value) + left;
            var area = '      <area id="map_' + index + '"\n';
            area += '            shape="rect"\n';
            area += '            coords="' + left + ', ' + top + ', ' +
                right + ', ' + bottom + '"\n';
            area += '            href="' + href + '" />\n';
            if (anchor.childNodes[0].id.match(/_conf_link$/)) {
                confs += area;
            }
            else {
                directs += area;
            }
            return true;
        });
        map += confs + directs + '    </map>';
        return map;
    } // getLinkmap
}
; // end CapyRenderer
// -------------------------------------------------------------------------- //
// Global setup
function cr_optionDefault(option, defaultValue) {
    if (typeof option === 'undefined') {
        return defaultValue;
    }
    else {
        return option;
    }
}
/**
 * setup - build the Renderer application object
 */
function cr_setup(options) {
    // Make sure we have an object to access...
    options = options || {};
    // Configure the display options for GsnNodes from the options object passed.
    // Can't use simple null coalescing, because then the user can't force false
    // over a default of true. (x = a || true ends up with x always being true).
    // Configure the display options for GsnNodes from the options object passed.
    // Can't use simple null coalescing, because then the user can't force false
    // over a default of true. (x = a || true ends up with x always being true).
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_5__["GsnNode"].showNotSet = cr_optionDefault(options['showNotSet'], false);
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_5__["GsnNode"].showComments = cr_optionDefault(options['showComments'], false);
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_5__["GsnNode"].showMetadata = cr_optionDefault(options['showMetadata'], false);
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_5__["GsnNode"].showLinkIcon = cr_optionDefault(options['showLinkIcon'], false);
    var showAddresses = cr_optionDefault(options['showAddresses'], true);
    // Hyperlinks don't make sense for SVG rendering
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_5__["GsnNode"].generateHyperlinks = false;
    // Oddly, the GSN XML parser is configured to completely ignore comments, if
    // commanded to. There must be a good reason for this (though I don't know
    // what it is), so we respect it here.
    _sct_js_sources_viewer_gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_7__["GSN"].ignoreComments = !_sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_5__["GsnNode"].showComments;
    // Set up all of the global state for the Renderer
    var gsnFactory = new _sct_js_sources_viewer_gsn_sct_xml_gsn_factory__WEBPACK_IMPORTED_MODULE_6__["XmlGsnFactory"]();
    var arg_text = $('#argument')[0].textContent;
    var arg_xml = $.parseXML(arg_text);
    var gsn = gsnFactory.newGSN(arg_xml);
    window['renderer'] = new CapyRenderer();
    window['renderer'].init(gsn, 'viewer', new _sct_js_sources_viewer_renderer_sct_svg_renderer_factory__WEBPACK_IMPORTED_MODULE_8__["SvgRendererFactory"](), new _sct_js_sources_viewer_renderer_sct_metrics__WEBPACK_IMPORTED_MODULE_1__["Metrics"](), showAddresses);
} // setup
window['cr_setup'] = cr_setup;


/***/ }),

/***/ "./sct-js-bindings/viewer/embedded-arguments.ts":
/*!******************************************************!*\
  !*** ./sct-js-bindings/viewer/embedded-arguments.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sct_js_sources_viewer_view_sct_gsn_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sct-js/sources/viewer/view/sct-gsn-viewer */ "./sct-js/sources/viewer/view/sct-gsn-viewer.ts");
/* harmony import */ var _sct_js_sources_viewer_events_sct_viewer_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sct-js/sources/viewer/events/sct-viewer-events */ "./sct-js/sources/viewer/events/sct-viewer-events.ts");
/* harmony import */ var _sct_js_sources_viewer_renderer_sct_metrics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sct-js/sources/viewer/renderer/sct-metrics */ "./sct-js/sources/viewer/renderer/sct-metrics.ts");
/* harmony import */ var _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sct-js/sources/viewer/nodes/sct-gsn-node */ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts");
/* harmony import */ var _sct_js_sources_viewer_gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sct-js/sources/viewer/gsn/sct-gsn */ "./sct-js/sources/viewer/gsn/sct-gsn.ts");
/* harmony import */ var _sct_js_sources_viewer_gsn_sct_xml_gsn_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sct-js/sources/viewer/gsn/sct-xml-gsn-factory */ "./sct-js/sources/viewer/gsn/sct-xml-gsn-factory.ts");
/* harmony import */ var _sct_js_sources_viewer_renderer_sct_svg_renderer_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sct-js/sources/viewer/renderer/sct-svg-renderer-factory */ "./sct-js/sources/viewer/renderer/sct-svg-renderer-factory.ts");
// -------------------------------------------------------------------------- //
// embedded-arguments.js        Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //







// Entry point for setting up arguments embedded in text documents.
window['setUpEmbeddedArguments'] = setUpEmbeddedArguments;
/**
 * Create an EmbeddedViewer instance, but don't initialize it yet.
 *
 * @constructor
 * @return {EmbeddedViewer} the new EmbeddedViewer instance
 */
function EmbeddedViewer() { }
/**
 * Initialize the basic Viewer by specifying the parents of the relevant
 * components and the required factories.
 *
 * @param {GSN} gsn the GSN to display
 * @param {String} viewContainer the name of the container for the view
 * @param {String} navContainer the name of the container for the navigator
 * @param {RendererFactory} rendererFactory the factory that will be used to
 *                                          create Renderer instances
 * @param {Metrics} metrics the metrics that should be used to lay out and
 *                          render GSN
 * @param {boolean} showAddresses true if we should show addresses on GSN
 *                                elements
 */
EmbeddedViewer.prototype.init = function (gsn, viewContainer, rendererFactory, metrics, showAddresses) {
    /**
     * The view that will be used to display our GSN.
     *
     * @type GsnViewer
     */
    this.viewer = new _sct_js_sources_viewer_view_sct_gsn_viewer__WEBPACK_IMPORTED_MODULE_0__["GsnViewer"]();
    this.viewer.init(viewContainer, rendererFactory, metrics);
    /**
     * The events that will be used to drive the viewer
     *
     * @type ViewerEvents
     */
    this.viewerEvents = new _sct_js_sources_viewer_events_sct_viewer_events__WEBPACK_IMPORTED_MODULE_1__["ViewerEvents"]();
    this.viewerEvents.init(this.viewer);
    // The resize listener is a bad idea for us:
    window.removeEventListener('resize', this.viewerEvents.resizeListener);
    // Set and display the GSN.
    this.viewer.viewContext.showAddresses = showAddresses;
    this.viewer.setGSN(gsn);
    this.viewer.refresh();
};
// -------------------------------------------------------------------------- //
// Global setup
function optionDefault(option, defaultValue) {
    if (typeof option === 'undefined') {
        return defaultValue;
    }
    else {
        return option;
    }
}
/**
 * setup - build the EmbeddedViewer application object
 */
function setUpEmbeddedArguments(options) {
    // Make sure we have an object to access...
    options = options || {};
    // Configure the display options for GsnNodes from the options object passed.
    // Can't use simple null coalescing, because then the user can't force false
    // over a default of true. (x = a || true ends up with x always being true).
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_3__["GsnNode"].showNotSet = optionDefault(options['showNotSet'], false);
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_3__["GsnNode"].showComments = optionDefault(options['showComments'], false);
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_3__["GsnNode"].showMetadata = optionDefault(options['showMetadata'], false);
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_3__["GsnNode"].generateHyperlinks = optionDefault(options['generateHyperlinks'], true);
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_3__["GsnNode"].showLinkIcon = optionDefault(options['showLinkIcon'], true);
    var showAddresses = optionDefault(options['showAddresses'], true);
    // Oddly, the GSN XML parser is configured to completely ignore comments, if
    // commanded to. There must be a good reason for this (though I don't know
    // what it is), so we respect it here.
    _sct_js_sources_viewer_gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_4__["GSN"].ignoreComments = !_sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_3__["GsnNode"].showComments;
    // Set up all of the global state for the Renderer
    var gsnFactory = new _sct_js_sources_viewer_gsn_sct_xml_gsn_factory__WEBPACK_IMPORTED_MODULE_5__["XmlGsnFactory"]();
    // Override the instance of GsnNode.buildHref, since it's not applicable to
    // this use. The "correct" way to do this would be to encapsulate link
    // generation in a strategy and then pass that to GsnNode instances (likely
    // through its factory).
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_3__["GsnNode"].prototype.buildHref = function (link) {
        if (!link) {
            return null;
        }
        var href;
        if (link.match(/^http/)) {
            href = link;
        }
        else 
        // "Old" link transformation
        if (link.match(/.gsn$/) ||
            link.match(/.svg$/)) {
            href = '../arguments/' + link.replace(/\.svg$/, '.html')
                .replace(/\.gsn$/, '.html');
        }
        else 
        // "New" link transformation - support a query in the link.
        if (link.match(/.gsn\#/)) {
            href = '../arguments/' + link.replace(/.gsn\#/, '.html#');
        }
        else {
            href = '../references/' + link;
        }
        return href;
    };
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_3__["GsnNode"].prototype.buildConfHref = function (link) {
        var href = '';
        // Shouldn't hard-code a URL for the confidence, but just in case, support
        // it.
        if (this.attrs['confidence'].match(/^http/)) {
            href = link;
        }
        else {
            // Assume that no http means a relative path. Base the full href on our
            // current location and ensure that the user didn't enter a 
            // .svg-terminated path (which was the old way to do things)
            href = '../arguments/' + link.replace(/\.svg$/, '.html')
                .replace(/\.gsn$/, '.html');
        }
        return href;
    };
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_3__["GsnNode"].gsnidHrefTarget = '../documents/argument-index.html';
    // --------------------- Build Viewers for Arguments ---------------------- //
    $('figure.argument-container').each(function () {
        // Get rid of the img.
        $('img', this).detach();
        // Grab the argument (script):
        var arg = $('script.argument', this);
        var arg_text = arg[0].textContent;
        var arg_xml = $.parseXML(arg_text);
        var gsn = gsnFactory.newGSN(arg_xml);
        // Get rid of the script.
        arg.detach();
        // Create a container for the SVG that will scale so as to ensure that the
        // correct aspect ratio is maintained, as the window is resized.
        $('br', this).replaceWith('<div id="' + this.id + '-div"></div>');
        var div = $('div#' + this.id + '-div', this);
        // Create the viewer for the argument
        var viewer = new EmbeddedViewer();
        viewer.init(gsn, this.id + '-div', new _sct_js_sources_viewer_renderer_sct_svg_renderer_factory__WEBPACK_IMPORTED_MODULE_6__["SvgRendererFactory"](), new _sct_js_sources_viewer_renderer_sct_metrics__WEBPACK_IMPORTED_MODULE_2__["Metrics"](), showAddresses);
        // Determine the correct aspect ratio for the argument
        var width = viewer.viewer.tree.width + 40;
        var height = viewer.viewer.tree.height + 40;
        // Now, compute, in essence, the aspect ratio of the viewer.
        var ratio = height / width;
        var svg = $('svg', this);
        svg.css('position', 'absolute');
        svg.css('top', 0);
        svg.css('bottom', 0);
        svg.css('left', 0);
        svg.css('right', 0);
        // Set the style for the figure:
        div.css('width', '100%');
        div.css('position', "relative");
        var resizeHandler = function (evt) {
            var height;
            if (div.width() * ratio > 800) {
                div.css('padding-bottom', '800px');
                height = 800;
            }
            else {
                div.css('padding-bottom', ratio * 100 + '%');
                height = div.width() * ratio;
            }
            viewer.viewer.setCanvasSize(div.width() - 2, height - 2);
        };
        window.addEventListener('resize', resizeHandler);
        resizeHandler(undefined);
        viewer.viewer.refresh();
        //    viewer.viewer.setCanvasSize(width, height)
        //    viewer.viewer.refresh();
        //    this.style['width'] = width + 'px';
        window['resize-handlers'] = window['resize-handlers'] || [];
        window['resize-handlers'].push(resizeHandler);
        window['embedded-viewers'] = window['embedded-viewers'] || [];
        window['embedded-viewers'].push(viewer);
    }); // div.argument-container each
} // setup
window['printSetup'] = function () {
    $.each(window['resize-handlers'], function (index, handler) {
        handler();
    });
    $.each(window['embedded-viewers'], function (index, viewer) {
        viewer.viewer.refresh();
    });
};


/***/ }),

/***/ "./sct-js-bindings/viewer/unwrapper.ts":
/*!*********************************************!*\
  !*** ./sct-js-bindings/viewer/unwrapper.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewer */ "./sct-js-bindings/viewer/viewer.ts");
// -------------------------------------------------------------------------- //
// unwrapper.js                 Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //

// Given an argument that has been wrapped in an HTML file as XML in a pre with
// a .png placeholder, unwrap it and render from the XML.
window['unwrapArgument'] = unwrapArgument;
/**
 * Given an argument that has been wrapped in an HTML file as XML in a pre with
 * a .png placeholder, unwrap it and render from the XML.
 */
function unwrapArgument(options) {
    $('body').prepend('<header></header>' +
        '<section id="viewer"></section>' +
        '<section id="navigator"></section>' +
        '<section id="overview"></section>');
    $('body')[0].setAttribute('style', '');
    // Call over to the setup routine defined in `viewer.js`
    Object(_viewer__WEBPACK_IMPORTED_MODULE_0__["setup"])(options);
}


/***/ }),

/***/ "./sct-js-bindings/viewer/viewer.ts":
/*!******************************************!*\
  !*** ./sct-js-bindings/viewer/viewer.ts ***!
  \******************************************/
/*! exports provided: setup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return setup; });
/* harmony import */ var _sct_js_sources_viewer_events_sct_viewer_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sct-js/sources/viewer/events/sct-viewer-events */ "./sct-js/sources/viewer/events/sct-viewer-events.ts");
/* harmony import */ var _sct_js_sources_viewer_events_sct_hash_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sct-js/sources/viewer/events/sct-hash-events */ "./sct-js/sources/viewer/events/sct-hash-events.ts");
/* harmony import */ var _sct_js_sources_viewer_events_sct_navigator_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sct-js/sources/viewer/events/sct-navigator-events */ "./sct-js/sources/viewer/events/sct-navigator-events.ts");
/* harmony import */ var _sct_js_sources_viewer_renderer_sct_metrics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sct-js/sources/viewer/renderer/sct-metrics */ "./sct-js/sources/viewer/renderer/sct-metrics.ts");
/* harmony import */ var _sct_js_sources_viewer_view_sct_gsn_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sct-js/sources/viewer/view/sct-gsn-viewer */ "./sct-js/sources/viewer/view/sct-gsn-viewer.ts");
/* harmony import */ var _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sct-js/sources/viewer/nodes/sct-gsn-node */ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts");
/* harmony import */ var _sct_js_sources_viewer_view_sct_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sct-js/sources/viewer/view/sct-navigator */ "./sct-js/sources/viewer/view/sct-navigator.ts");
/* harmony import */ var _sct_js_sources_viewer_view_sct_overview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sct-js/sources/viewer/view/sct-overview */ "./sct-js/sources/viewer/view/sct-overview.ts");
/* harmony import */ var _sct_js_sources_viewer_gsn_sct_xml_gsn_factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../sct-js/sources/viewer/gsn/sct-xml-gsn-factory */ "./sct-js/sources/viewer/gsn/sct-xml-gsn-factory.ts");
/* harmony import */ var _sct_js_sources_viewer_renderer_sct_svg_renderer_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../sct-js/sources/viewer/renderer/sct-svg-renderer-factory */ "./sct-js/sources/viewer/renderer/sct-svg-renderer-factory.ts");
/* harmony import */ var _sct_js_sources_viewer_gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../sct-js/sources/viewer/gsn/sct-gsn */ "./sct-js/sources/viewer/gsn/sct-gsn.ts");
/* harmony import */ var _sct_js_sources_viewer_view_sct_viewer_menus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../sct-js/sources/viewer/view/sct-viewer-menus */ "./sct-js/sources/viewer/view/sct-viewer-menus.ts");












// -------------------------------------------------------------------------- //
// viewer.js                    Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //
window['setup'] = setup;
class ArgViewer {
    /**
     * Create a Viewer instance, but don't initialize it yet.
     *
     * @constructor
     * @return {Viewer} the new Viewer instance
     */
    Argview() { }
    ;
    /**
     * Initialize the basic ArgViewer by specifying the parents of the relevant
     * components and the required factories.
     *
     * @param {String} viewContainer the name of the container for the view
     * @param {String} navContainer the name of the container for the navigator
     * @param {RendererFactory} rendererFactory the factory that will be used to
     *                                          create Renderer instances
     * @param {Metrics} metrics the metrics that should be used to lay out and
     *                          render GSN
     * @param {String} overviewContainer the name of the container for the overview
     * @param {String} overviewHTML the HTML for the overview
     * @param {boolean} showAddresses true if we should show addresses on GSN
     *                                elements
     */
    init(gsn, viewContainer, navContainer, rendererFactory, metrics, overviewContainer, overviewHTML, showAddresses) {
        /**
         * The view that will be used to display our GSN.
         *
         * @type GsnViewer
         */
        this.viewer = new _sct_js_sources_viewer_view_sct_gsn_viewer__WEBPACK_IMPORTED_MODULE_4__["GsnViewer"]();
        this.viewer.init(viewContainer, rendererFactory, metrics);
        /**
         * The events that will be used to drive the viewer
         *
         * @type ViewerEvents
         */
        this.viewerEvents = new _sct_js_sources_viewer_events_sct_viewer_events__WEBPACK_IMPORTED_MODULE_0__["ViewerEvents"]();
        this.viewerEvents.init(this.viewer);
        /**
         * The events used for location.hash integration
         *
         * @type HashEvents
         */
        this.hashEvents = new _sct_js_sources_viewer_events_sct_hash_events__WEBPACK_IMPORTED_MODULE_1__["HashEvents"]();
        this.hashEvents.init(this.viewer);
        /**
         * The navigator
         *
         * @type SctNavigator
         */
        this.navigator = new _sct_js_sources_viewer_view_sct_navigator__WEBPACK_IMPORTED_MODULE_6__["SctNavigator"]();
        this.navigator.init(navContainer, rendererFactory, metrics);
        this.navigator.attachToViewer(this.viewer);
        /**
         * The events that will be used to drive the navigator
         *
         * @type NavigatorEvents
         */
        this.navigatorEvents = new _sct_js_sources_viewer_events_sct_navigator_events__WEBPACK_IMPORTED_MODULE_2__["NavigatorEvents"]();
        this.navigatorEvents.init(this.navigator);
        /**
         * The overview that will show information about the argument
         *
         * @type Overview
         */
        this.overview = new _sct_js_sources_viewer_view_sct_overview__WEBPACK_IMPORTED_MODULE_7__["Overview"]();
        this.overview.init(overviewContainer, overviewHTML);
        // This makes using the ViewerMenus optional: if they're not loaded, they
        // won't be used.
        if (typeof (_sct_js_sources_viewer_view_sct_viewer_menus__WEBPACK_IMPORTED_MODULE_11__["ViewerMenus"]) === 'function') {
            /**
             * The menus that will be connected to this viewer, for the view, the
             * navigator, and the overview.
             *
             * @type ViewerMenus
             */
            this.viewerMenus = new _sct_js_sources_viewer_view_sct_viewer_menus__WEBPACK_IMPORTED_MODULE_11__["ViewerMenus"]();
            this.viewerMenus.init(this.viewer, this.navigator, this.overview);
        }
        // Set and display the GSN.
        this.viewer.viewContext.showAddresses = showAddresses;
        this.viewer.setGSN(gsn);
        this.viewer.refresh();
        if (overviewHTML != '') {
            this.overview.show();
        }
        this.hashEvents.handleHashChange(null);
    }
}
;
// -------------------------------------------------------------------------- //
// Global setup
function optionDefault(option, defaultValue) {
    if (typeof option === 'undefined') {
        return defaultValue;
    }
    else {
        return option;
    }
}
/**
 * setup - build the Viewer application object
 */
function setup(options) {
    // Make sure we have an object to access...
    options = options || {};
    // Configure the display options for GsnNodes from the options object passed.
    // Can't use simple null coalescing, because then the user can't force false
    // over a default of true. (x = a || true ends up with x always being true).
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_5__["GsnNode"].showNotSet = optionDefault(options['showNotSet'], false);
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_5__["GsnNode"].showComments = optionDefault(options['showComments'], false);
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_5__["GsnNode"].showMetadata = optionDefault(options['showMetadata'], false);
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_5__["GsnNode"].generateHyperlinks = optionDefault(options['generateHyperlinks'], true);
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_5__["GsnNode"].showLinkIcon = optionDefault(options['showLinkIcon'], true);
    var showAddresses = optionDefault(options['showAddresses'], true);
    // Oddly, the GSN XML parser is configured to completely ignore comments, if
    // commanded to. There must be a good reason for this (though I don't know
    // what it is), so we respect it here.
    _sct_js_sources_viewer_gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_10__["GSN"].ignoreComments = !_sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_5__["GsnNode"].showComments;
    // Set up all of the global state for the Renderer
    var gsnFactory = new _sct_js_sources_viewer_gsn_sct_xml_gsn_factory__WEBPACK_IMPORTED_MODULE_8__["XmlGsnFactory"]();
    // Override the instance of GsnNode.buildHref, since it's not applicable to
    // this use. The "correct" way to do this would be to encapsulate link
    // generation in a strategy and then pass that to GsnNode instances (likely
    // through its factory).
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_5__["GsnNode"].prototype.buildHref = function (link) {
        if (!link) {
            return null;
        }
        var href;
        if (link.match(/^http/)) {
            href = link;
        }
        else 
        // "Old" link transformation
        if (link.match(/.gsn$/) ||
            link.match(/.svg$/)) {
            href = link.replace(/\.svg$/, '.html').replace(/\.gsn$/, '.html');
        }
        else 
        // "New" link transformation - support a query in the link.
        if (link.match(/.gsn\#/)) {
            href = link.replace(/.gsn\#/, '.html#');
        }
        else {
            href = '../references/' + link;
        }
        return href;
    };
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_5__["GsnNode"].prototype.buildConfHref = function (link) {
        var href = '';
        // Shouldn't hard-code a URL for the confidence, but just in case, support
        // it.
        if (this.attrs['confidence'].match(/^http/)) {
            href = link;
        }
        else {
            // Assume that no http means a relative path. Base the full href on our
            // current location and ensure that the user didn't enter a 
            // .svg-terminated path (which was the old way to do things)
            href = link.replace(/\.svg$/, '.html').replace(/\.gsn$/, '.html');
        }
        return href;
    };
    _sct_js_sources_viewer_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_5__["GsnNode"].gsnidHrefTarget = '../documents/argument-index.html';
    var arg_text = $('#argument')[0].textContent;
    var arg_xml = $.parseXML(arg_text);
    var gsn = gsnFactory.newGSN(arg_xml);
    var overview_html = $('#overview_text')[0].textContent;
    window['viewer'] = new ArgViewer();
    window['viewer'].init(gsn, 'viewer', 'navigator', new _sct_js_sources_viewer_renderer_sct_svg_renderer_factory__WEBPACK_IMPORTED_MODULE_9__["SvgRendererFactory"](), new _sct_js_sources_viewer_renderer_sct_metrics__WEBPACK_IMPORTED_MODULE_3__["Metrics"](), 'overview', overview_html, showAddresses);
    // Let a callback run, if registered.
    if (window['post-viewer-init']) {
        window['post-viewer-init']();
    }
} // setup


/***/ }),

/***/ "./sct-js/sources/viewer/events/sct-hash-events.ts":
/*!*********************************************************!*\
  !*** ./sct-js/sources/viewer/events/sct-hash-events.ts ***!
  \*********************************************************/
/*! exports provided: HashEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashEvents", function() { return HashEvents; });
// -------------------------------------------------------------------------- //
// sct-hash-events.js           Dependable Computing                     2013 //
// -------------------------------------------------------------------------- //
/**
 * @classdesc
 *
 * This class separates out and encapsulates the details of event handling for
 * the location.hash from applications and from the {@link GsnViewer}.
 *
 * @constructor
 * @return {HashEvents} a new, empty instance
 */
class HashEvents {
    /**
     * Initialize the instance by providing the viewer to which the events should
     * be wired up.
     *
     * @param {GsnViewer} viewer the viewer we will manipulate through our events
     */
    init(viewer) {
        /**
         * The viewer we should call in response to events.
         *
         * @type GsnViewer
         */
        this.viewer = viewer;
        this.viewer.addFocusListener(this.handleFocus.bind(this));
        window.addEventListener('hashchange', this.handleHashChange.bind(this), false);
    }
    /**
     * Process a focus event from the GsnViewer by encoding the current focus into
     * the URL for the document. This has provides history integration for focus.
     *
     * @param focusSelector the current focus selector
     */
    handleFocus(focusSelector) {
        let newHash = '#';
        const currHash = document.location.hash || '#';
        if (focusSelector !== ':all' && this.viewer.selection) {
            newHash =
                '?select=' + this.viewer.selection.id + '&focus=' + focusSelector;
        }
        // From http://stackoverflow.com/questions/280634/endswith-in-javascript,
        // this provides an implementation of endsWith that doesn't use RexExp
        // (which is a mess here, since we have '?' in our string).
        if (!(currHash.indexOf(newHash, currHash.length - newHash.length) !== -1)) {
            document.location.hash = newHash;
        }
    } // handleFocus
    /**
     * Respond to a hash-change event.
     *
     * @params evt Unused.
     */
    handleHashChange(evt) {
        const hash = document.location.hash || '#';
        const parts = hash.split('?');
        const search = parts[1];
        if (search) {
            // We are searching for a fixed set of commands, which we buffer and then
            // apply all at once.
            let select = null;
            let focus = null;
            let cssId = null;
            let gsnId = null;
            jQuery.each(search.split('&'), function (index, arg) {
                const verb = arg.split('=')[0];
                const obj = arg.split('=')[1];
                switch (verb) {
                    case 'select':
                        select = obj;
                        break;
                    case 'focus':
                        focus = obj;
                        break;
                    case 'present':
                        cssId = obj;
                        break;
                    case 'gsn-id':
                        gsnId = obj;
                        break;
                } // switch verb
            }); // each argument
            // Now, do the things requested.
            if (select && focus) {
                this.viewer.focusOn(focus, select);
            }
            else if (select) {
                this.viewer.select(select);
            }
            else if (cssId) {
                // Make sure that there isn't an element currently being presented.
                //
                // This is fairly expensive, so an optimization could be to track if this
                // is needed. Otherwise, we may double-render when an argument loads and
                // presents for the first time.
                this.viewer.refresh();
                this.viewer.present(cssId);
            }
            else if (gsnId) {
                // Make sure that there isn't an element currently being presented.
                //
                // This is fairly expensive, so an optimization could be to track if this
                // is needed. Otherwise, we may double-render when an argument loads and
                // presents for the first time.
                this.viewer.refresh();
                // Present the node that matches the given GSN ID.
                this.viewer.present(function (node) {
                    return node.gsn.gsnId === gsnId;
                });
            }
            // if select
        }
        else {
            this.viewer.select(null);
            this.viewer.focusOnCurrentSelection(':all');
        } // if search
    } // handleHashChange
}


/***/ }),

/***/ "./sct-js/sources/viewer/events/sct-navigator-events.ts":
/*!**************************************************************!*\
  !*** ./sct-js/sources/viewer/events/sct-navigator-events.ts ***!
  \**************************************************************/
/*! exports provided: NavigatorEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorEvents", function() { return NavigatorEvents; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./sct-js/sources/viewer/utils.ts");
// -------------------------------------------------------------------------- //
// sct-navigator-events.js      Dependable Computing                     2012 //
// -------------------------------------------------------------------------- //
/* tslint:disable deprecation */

/**
 * @classdesc
 * This class separates out and encapsulates the details of event handling from
 * the {@link Navigator}. It allows us easy flexibility in changing how we bind
 * to and map various JavaScript events.
 *
 * @constructor
 * @return {NavigatorEvents} a new, empty instance
 */
class NavigatorEvents {
    /**
     * Initialize the instance by providing the viewer to which the events should
     * be wired up.
     *
     * @param {GsnViewer} viewer the viewer we will manipulate through our events
     */
    init(nav) {
        /**
         * The parent of the viewer, which we use to hook events.
         *
         * @type HTMLElement
         */
        this.parent = jQuery('#' + nav.parent)[0];
        /**
         * The navigator we should call in response to events.
         *
         * @type SctNavigator
         */
        this.navigator = nav;
        /**
         * Listener for mouse down; cached so we can remove if needed.
         *
         * @type Function
         */
        this.mouseDownListener = this.handleMouseDown.bind(this);
        this.parent.addEventListener('mousedown', this.mouseDownListener);
        /**
         * Listener for mouse up; cached so we can remove if needed.
         *
         * @type Function
         */
        this.mouseUpListener = this.handleMouseUp.bind(this);
        window.addEventListener('mouseup', this.mouseUpListener);
        /**
         * Listener for mouse move; cached so we can remove if needed.
         *
         * @type Function
         */
        this.mouseMoveListener = this.handleMouseMove.bind(this);
        // Note: we do not hook mousemove until there is a mousedown; this is cheaper
        // on processing, because otherwise the handler would always be called in
        // response to mouse movement.
        /**
         * Listener for mouse wheel; cached so we can remove if needed.
         *
         * @type Function
         */
        this.mouseWheelListener = this.handleMouseWheel.bind(this);
        this.parent.addEventListener('mousewheel', this.mouseWheelListener);
        this.parent.addEventListener('DOMMouseScroll', this.mouseWheelListener);
        /**
         * True if the user actually moved the mouse between mousedown and mouseup.
         * Used to tell the different between a pan and a click, effectively.
         *
         * @type {Number}
         */
        this.moved = false;
    }
    /**
     * Alias of {@link NavigatorEvents#init} for subclasses
     *
     * @function
     */
    initNavigatorEvents(nav) {
        this.init(nav);
    }
    /**
     * Handler for mousedown
     */
    handleMouseDown(evt) {
        // Use require here because importing globally means importing an exported class
        // which will have trickle-down affects and cause us to run into TS errors on
        // code that is not yet converted.
        this.eventMaintenance(evt);
        // Transform from overall page coordinates to the coordinates in the navigator
        // Since the rubber-band box sits on top of the navigator, it gets in the way
        // of using offsetX or offsetY for this purpose.
        const clickX = evt.pageX - this.parent.offsetLeft;
        const clickY = evt.pageY - this.parent.offsetTop;
        this.navigator.centerOn(clickX, clickY);
        // Show the user that panning will work. Note that webkit does not show the
        // hand close until the next event is generated...
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].browser().webkit) {
            this.parent.style['cursor'] = '-webkit-grabbing';
        }
        else if (_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].browser().mozilla) {
            this.parent.style['cursor'] = '-moz-grabbing';
        }
        // Record where this event happened, so we can produce deltas in mousemove.
        this.panX = clickX;
        this.panY = clickY;
        jQuery(this.parent).mousemove(this.mouseMoveListener);
    }
    /**
     * Handler for mouseup
     */
    handleMouseUp(evt) {
        this.eventMaintenance(evt);
        // Clear the grabbing hand cursor, since we're not moving anymore.
        this.parent.style['cursor'] = '';
        this.panX = null;
        this.panY = null;
        this.moved = false;
        jQuery(this.parent).unbind('mousemove', this.mouseMoveListener);
    }
    /**
     * Handler for mousemove
     */
    handleMouseMove(evt) {
        this.eventMaintenance(evt);
        // Transform from overall page coordinates to the coordinates in the navigator
        // Since the rubber-band box sits on top of the navigator, it gets in the way
        // of using offsetX or offsetY for this purpose.
        const clickX = evt.clientX - this.parent.offsetLeft;
        const clickY = evt.clientY - this.parent.offsetTop;
        // Tell the viewer about the deltas.
        this.navigator.pan(clickX - this.panX, clickY - this.panY);
        // Record present location for next move.
        this.panX = clickX;
        this.panY = clickY;
        this.moved = true;
    }
    /**
     * Handler for mousewheel
     */
    handleMouseWheel(evt) {
        this.eventMaintenance(evt);
        let delta = 0;
        // Mouse Wheel events are non-standard across browsers, for some reason. So,
        // we have to look inside the event to figure out what do do.
        if (evt.wheelDelta) {
            delta = evt.wheelDelta / 3600; // Webkit, IE>=9
        }
        else {
            delta = evt.detail / -90; // Gecko
        }
        // Transform from overall page coordinates to the coordinates in the navigator
        // Since the rubber-band box sits on top of the navigator, it gets in the way
        // of using offsetX or offsetY for this purpose.
        const clickX = evt.clientX - this.parent.offsetLeft;
        const clickY = evt.clientY - this.parent.offsetTop;
        this.navigator.zoom(delta, clickX, clickY);
    }
    /**
     * Standard things we do for every event: prevent default and set return
     * value to true.
     */
    eventMaintenance(evt) {
        if (evt.preventDefault) {
            evt.preventDefault();
        }
        evt.returnValue = true;
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/events/sct-viewer-events.ts":
/*!***********************************************************!*\
  !*** ./sct-js/sources/viewer/events/sct-viewer-events.ts ***!
  \***********************************************************/
/*! exports provided: ViewerEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerEvents", function() { return ViewerEvents; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./sct-js/sources/viewer/utils.ts");
// -------------------------------------------------------------------------- //
// sct-viewer-events.js         Dependable Computing                     2012 //
// -------------------------------------------------------------------------- //

/**
 * @classdesc
 * This class separates out and encapsulates the details of event handling from
 * the {@link Viewer}. It allows us easy flexibility in changing how we bind to
 * and map various JavaScript events.
 *
 * @constructor
 * @return {ViewerEvents} a new, empty instance
 */
// This file uses many conventions that throw deprecation warnings, despite no true deprecation
/* tslint:disable */
class ViewerEvents {
    /**
     * Initialize the instance by providing the viewer to which the events should
     * be wired up.
     *
     * @param viewer the viewer we will manipulate through our events
     * @param independentMode an optional boolean overriding default independent behavior
     *    This is set to false when the viewer is part of a larger tool manager that regulates
     *    dynamic viewer size and layout. If true, the viewer reacts to events and manages its own
     *    dynamic layout (e.g. size).
     */
    init(viewer, independentMode = true) {
        this.parent = jQuery('#' + viewer.parent);
        /**
         * The viewer we should call in response to events.
         *
         * @type GsnViewer
         */
        this.viewer = viewer;
        /**
         * Listener for mouse down; cached so we can remove if needed.
         *
         * @type Function
         */
        const mouseDownListener = this.handleMouseDown.bind(this);
        this.parent[0].addEventListener('mousedown', mouseDownListener);
        /**
         * Listener for mouse up; cached so we can remove if needed.
         *
         * @type Function
         */
        const mouseUpListener = this.handleMouseUp.bind(this);
        window.addEventListener('mouseup', mouseUpListener);
        this.mouseMoveListener = this.handleMouseMove.bind(this);
        // Note: we do not hook mousemove until there is a mousedown; this is cheaper
        // on processing, because otherwise the handler would always be called in
        // response to mouse movement.
        /**
         * Listener for mouse wheel; cached so we can remove if needed.
         *
         * @type Function
         */
        const mouseWheelListener = this.handleMouseWheel.bind(this);
        this.parent[0].addEventListener('mousewheel', mouseWheelListener);
        this.parent[0].addEventListener('DOMMouseScroll', mouseWheelListener);
        /**
         * If the viewer is running in independent mode, then it listens
         * to window resize and adjusts itself. Otherwise, a higher-level
         * layout manager is expect to inform the viewer of any size changes
         * and this listener is not hooked up to events.
         */
        if (independentMode) {
            this.resizeListener = this.handleResize.bind(this);
            window.addEventListener('resize', this.resizeListener);
        }
        else {
            this.resizeListener = null;
        }
        /**
         * Listener for key down; cached so we can remove if needed
         *
         * @type Function
         */
        const keyDownListener = this.handleKeyDown.bind(this);
        window.addEventListener('keydown', keyDownListener);
        this.moved = false;
        this.receivedMouseDown = false;
    }
    /**
     * Alias of {@link ViewerEvents#init} for subclasses
     * initialize viewer event control
     * @param viewer the viewer we will manipulate through our events
     * @param independentMode an optional boolean overriding default independent behavior
     *    This is set to false when the viewer is part of a larger tool manager that regulates
     *    dynamic viewer size and layout. If true, the viewer reacts to events and manages its own
     *    dynamic layout (e.g. size).
     */
    initViewerEvents(viewer, independentMode = true) {
        this.init(viewer, independentMode);
    }
    /**
     * Handler for mousedown
     */
    handleMouseDown(evt) {
        // Oddly, calling evt.returnValue = false in a drag handler does not seem to
        // prevent this handler from firing off, which is really too bad. So we have
        // to explicitly determine if it makes sense to handle this event.
        if (evt.target !== this.viewer.renderer.canvas) {
            return true;
        }
        this.receivedMouseDown = true;
        this.eventMaintenance(evt);
        // Show the user that panning will work. Note that webkit does not show the
        // hand close until the next event is generated...
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].browser().webkit) {
            this.parent[0].style['cursor'] = '-webkit-grabbing';
        }
        else if (_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].browser().mozilla) {
            this.parent[0].style['cursor'] = '-moz-grabbing';
        }
        // Record where this event happened, so we can produce deltas in mousemove.
        [this.panX, this.panY] = this.viewer.fromWindowToCanvasCoords(evt.clientX, evt.clientY);
        //this.parent.mousemove(this.mouseMoveListener as any);
        this.parent.on('mousemove', this.mouseMoveListener);
        return true;
    }
    /**
     * Handler for mouseup
     */
    handleMouseUp(evt) {
        this.eventMaintenance(evt);
        if (!this.receivedMouseDown) {
            this.receivedMouseDown = false;
            return false;
        }
        // If the mouse didn't move, this was a deselect (the elements handle their
        // own events).
        if (!this.moved) {
            this.viewer.deselect();
        }
        // Clear the grabbing hand cursor, since we're not moving anymore.
        this.parent[0].style['cursor'] = '';
        [this.panX, this.panY] = this.viewer.fromWindowToCanvasCoords(0, 0);
        this.moved = false;
        this.parent.off('mousemove', this.mouseMoveListener);
        this.receivedMouseDown = false;
        return evt.target === this.viewer.renderer.canvas;
    }
    /**
     * Handler for mousemove
     */
    handleMouseMove(evt) {
        this.eventMaintenance(evt);
        //compute viewer coordinates
        const [viewX, viewY] = this.viewer.fromWindowToCanvasCoords(evt.clientX, evt.clientY);
        // Tell the viewer about the deltas.
        this.viewer.pan(viewX - this.panX, viewY - this.panY);
        // Record present location for next move.
        this.panX = viewX;
        this.panY = viewY;
        this.moved = true;
        return false;
    }
    /**
     * Handler for mousewheel
     */
    handleMouseWheel(evt) {
        this.eventMaintenance(evt);
        if (evt.stopPropagation) {
            evt.stopPropagation();
        }
        evt.returnValue = false;
        let delta = 0;
        // Mouse Wheel events are non-standard across browsers, for some reason. So,
        // we have to look inside the event to figure out what do do.
        if (evt.deltaY) {
            delta = -evt.deltaY / 3600; // Webkit, IE>=9
        }
        else {
            delta = evt.detail / 90; // Gecko
        }
        // Transform from overall page coordinates to the coordinates in the viewer
        const clickX = evt.offsetX; // || (evt as any).layerX;
        const clickY = evt.offsetY; // || (evt as any).layerY;
        this.viewer.zoom(delta, clickX, clickY);
        return false;
    }
    /**
     * Handler for window resize
     * Utilized when the viewer is standalone and is controlling its own size information
     * relative to a window of which it is the only sub-component (e.g. assurance case display scenarios)
     */
    handleResize(evt) {
        this.viewer.setCanvasSize(window.innerWidth - this.viewer.xOffset, window.innerHeight - this.viewer.yOffset);
    }
    /**
     * Standard things we do for every event: prevent default and set return
     * value to true.
     */
    eventMaintenance(evt) {
        if (evt.preventDefault) {
            evt.preventDefault();
        }
        evt.returnValue = true;
    }
    /**
     * Handler for keydown
     */
    handleKeyDown(evt) {
        // Anything meta key is not for us.
        if (evt.metaKey || evt.ctrlKey || evt.altKey || evt.shiftKey) {
            return;
        }
        // We only prevent default and terminate handling of this event if we actually
        // deal with it.
        let keyCodeHandled = true;
        // First, we process key codes:
        switch (evt.keyCode) {
            // Backspace: mark handled so that the user doesn't accidentally go back
            // if he/she hits backspace in the wrong context.
            // case 8: break; JCR: This breaks delete on macOS in GsnInspector text pane in electron
            // Escape: terminate focus
            case 27:
                this.viewer.selection && this.viewer.focusOnCurrentSelection(':all');
                break;
            // '-': subtree
            //
            // This situation is almost impossibly bad:
            case 189: // for WebKit number-pad or top-row
            case 109: // for Gecko number-pad minus
            case 173: // for Gecko minus (top-row)
                this.viewer.selection &&
                    this.viewer.focusOnCurrentSelection(':subtree');
                break;
            // Didn't handle, so mark not handled
            default:
                keyCodeHandled = false;
                break;
        } // handle key codes
        // Separately, record if we handle the event as a character. This is easier
        // to read, even if it does mean a little more bookkeeping.
        let keyCharHandled = true;
        // Next, process normal keys
        if (this.viewer.selection) {
            switch (String.fromCharCode(evt.keyCode)) {
                // Doesn't work. And the original code makes no sense to me. So I'm ignoring it,
                // 'cause we never use it.
                //     case '0':
                //       this.viewer.selection && this.viewer.focusOn(':ancestry');
                //       break;
                case '1':
                    this.viewer.focusOnCurrentSelection(':1st-generation');
                    break;
                case '2':
                    this.viewer.focusOnCurrentSelection(':2nd-generation');
                    break;
                case '3':
                    this.viewer.focusOnCurrentSelection(':3rd-generation');
                    break;
                case '4':
                    this.viewer.focusOnCurrentSelection(':4th-generation');
                    break;
                case '5':
                    this.viewer.focusOnCurrentSelection(':5th-generation');
                    break;
                case '6':
                    this.viewer.focusOnCurrentSelection(':6th-generation');
                    break;
                case '7':
                    this.viewer.focusOnCurrentSelection(':7th-generation');
                    break;
                case '8':
                    this.viewer.focusOnCurrentSelection(':8th-generation');
                    break;
                case '9':
                    this.viewer.focusOnCurrentSelection(':9th-generation');
                    break;
                // Didn't handle, so mark not handled.
                default:
                    keyCharHandled = false;
                    break;
            } // handle char codes
        }
        else {
            keyCharHandled = false;
        }
        // If we handled the event either as a code or a char, prevent default and
        // terminate the chain of event handlers.
        if (keyCodeHandled || keyCharHandled) {
            if (evt.preventDefault) {
                evt.preventDefault();
            }
            evt.returnValue = false;
        }
    } // handleKeyDown
}


/***/ }),

/***/ "./sct-js/sources/viewer/gsn/sct-gsn-factory.ts":
/*!******************************************************!*\
  !*** ./sct-js/sources/viewer/gsn/sct-gsn-factory.ts ***!
  \******************************************************/
/*! exports provided: GsnFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnFactory", function() { return GsnFactory; });
// -------------------------------------------------------------------------- //
// sct-gsn-factory.js           Dependable Computing                     2012 //
// -------------------------------------------------------------------------- //
/**
 * Factory class for constructing GSN instances. This is an abstract base class,
 * so attempting to use it will throw an error.
 *
 * @constructor
 *
 * @return {GsnFactory}
 */
class GsnFactory {
    /**
     * init - a function to initialize this factory
     *
     * @param language When creating new nodes, use this language for
     *                 any text in the nodes.
     */
    init(language) {
        this._language = language;
    }
    /**
     * Get the language for this factory.
     *
     * @returns the language for this factory, as a {string}.
     */
    get language() {
        return this._language;
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/gsn/sct-gsn.ts":
/*!**********************************************!*\
  !*** ./sct-js/sources/viewer/gsn/sct-gsn.ts ***!
  \**********************************************/
/*! exports provided: GsnVisibility, ValidGsnNodeTypes, GSN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnVisibility", function() { return GsnVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidGsnNodeTypes", function() { return ValidGsnNodeTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSN", function() { return GSN; });
/* harmony import */ var _tree_sct_partitioned_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tree/sct-partitioned-tree */ "./sct-js/sources/viewer/tree/sct-partitioned-tree.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./sct-js/sources/viewer/utils.ts");
// -------------------------------------------------------------------------- //
// sct-gsn.js                   Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //


var GsnVisibility;
(function (GsnVisibility) {
    GsnVisibility[GsnVisibility["Away"] = 0] = "Away";
    GsnVisibility[GsnVisibility["Private"] = 1] = "Private";
    GsnVisibility[GsnVisibility["Public"] = 2] = "Public";
})(GsnVisibility || (GsnVisibility = {}));
/**
 * An enum to represent all the valid GSN node types. Using this enum will limit
 * the possibility of being assigned bogus type values for the GSN node backed by
 * a SACM element. It is used in [gs]etType() and the Xml Sacm GSN node factory
 * (in sct-electron).
 */
var ValidGsnNodeTypes;
(function (ValidGsnNodeTypes) {
    ValidGsnNodeTypes["Context"] = "context";
    ValidGsnNodeTypes["Assumption"] = "assumption";
    ValidGsnNodeTypes["Justification"] = "justification";
    ValidGsnNodeTypes["Goal"] = "goal";
    ValidGsnNodeTypes["Strategy"] = "strategy";
    ValidGsnNodeTypes["Module"] = "module";
    ValidGsnNodeTypes["Evidence"] = "evidence";
    ValidGsnNodeTypes["Comment"] = "comment";
    ValidGsnNodeTypes["Metadata"] = "metadata";
    ValidGsnNodeTypes["Contract"] = "contract";
    ValidGsnNodeTypes["Default"] = "default";
})(ValidGsnNodeTypes || (ValidGsnNodeTypes = {}));
/**
 * <p>
 *  {@link GSN} is a recursive class based on {@link PartitionedTree} that holds
 *  a description of GSN. It is incomplete relative to the GSN "standard" that
 *  is being produced, but contains all of the necessary data for use in the
 *  SCT.
 * </p>
 * <p>
 *  This base {@link GSN} is abstract in the sense that it does not know how to
 *  serialize or deserialize itself or store itself in any sort of persistence
 *  layer. Those operations are left up to subclasses to define.
 * </p>
 *
 * @author M. Anthony Aiello
 *
 * @constructor
 * @extends PartitionedTree
 * @requires jQuery
 *
 * @return {GSN} a new, empty {@link GSN} object
 */
class GSN extends _tree_sct_partitioned_tree__WEBPACK_IMPORTED_MODULE_0__["PartitionedTree"] {
    constructor() {
        super(...arguments);
        /**
         * the "Visibility" of this GSN node, which can be public, private or away
         */
        this.visibility = GsnVisibility.Private;
        /**
         * The string that is the name for the "optional" attribute.
         */
        this.optionalAttributeName = 'optional';
        /**
         * The string that is the name for the "repeated" attribute.
         */
        this.repeatedAttributeName = 'repeat';
    }
    /**
     * Set the visibility for this node and error check
     * @param vis A new visibility attribute for this noe.
     * @throws if invalid vis/type combo.
     */
    setVisibility(vis) {
        if (vis === GsnVisibility.Away) {
            _utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].assert(this.type === ValidGsnNodeTypes.Context ||
                this.type === ValidGsnNodeTypes.Goal, 'Invalid type/vis combo');
        }
        if (vis === GsnVisibility.Public) {
            _utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].assert(this.type === ValidGsnNodeTypes.Goal ||
                this.type === ValidGsnNodeTypes.Context ||
                this.type === ValidGsnNodeTypes.Evidence, 'Invalid type/vis combo');
        }
        this.visibility = vis;
    }
    /**
     * Fetch the node's visibility
     * @returns the visibility
     */
    getVisibility() {
        return this.visibility;
    }
    // Inherit from Tree
    /**
     * <p>
     *   Initialize this {@link GSN} instance from fields; children of the
     *   {@link GSN} are specified as a flat list; they are distributed into
     *   horizontal and vertical children internally.
     * </p>
     * <p>
     *   The type parameter is specified as a string, and must be one of:
     * </p>
     * <ul>
     *   <li>context</li>
     *   <li>assumption</li>
     *   <li>justification</li>
     *   <li>goal</li>
     *   <li>strategy</li>
     *   <li>module</li>
     *   <li>evidence</li>
     *   <li>comment</li>
     *   <li>metadata</li>
     * </ul>
     * <p>
     *   The attrs parameter is a map (Object) that may be null or empty. Its
     *   allowed keys are:
     * </p>
     * <ul>
     *   <li>
     *     <em>optional</em>: a boolean flag to indicate the if the GSN is
     *     optional (for GSN patterns)
     *   </li>
     *   <li>
     *     <em>repeat</em>: boolean flat to indicate the if the GSN is repeated
     *     (for GSN patterns)
     *   </li>
     *   <li>
     *     <em>color</em>: a string interpreted as an HTML color code, for the
     *     background of the GSN element
     *   </li>
     *   <li>
     *     <em>link</em>: a string interpreted as an href, for hyperlinking from
     *     the GSN element
     *   </li>
     *   <li>
     *     <em>confidence</em>: a string interpreted as an href, for hyperlinking
     *     from the GSN element to a confidence argument
     *   </li>
     * </ul>
     * <p>
     *   If the {@link GSNFactory} is not specified, the global factory will be
     *   used.
     * </p>
     * <p>
     *   The ID for the newly initialized GSN element will be '__gsn__' to which the
     *   current date in milliseconds will be appended, as a hexadecimal number. For
     *   slowly created instances (e.g. in response to user actions), this is
     *   sufficient to guarantee uniqueness. For rapidly created instances, the
     *   ID should be explicitly set after init completes.
     * </p>
     *
     * @param name the name for the GSN element
     * @param text the text for the GSN element
     * @param type the type of the GSN element
     * @param attrs attributes of the GSN element in a hash
     * @param children the children of the GSN element
     * @param gsnFactory the factory to use to create new instances
     *                                (optional)
     * @param language the language for the GSN element
     */
    initGSN(name, text, type, attrs, children, gsnFactory, language) {
        this.name = name;
        this.text = text;
        this.address = null;
        this.depth = null;
        this.breadth = null;
        this.type = type;
        this.attrs = attrs !== null && attrs !== void 0 ? attrs : {};
        this.gsnFactory = gsnFactory; //  || _gsnFactory;
        this.language = language;
        this.metadataNames = [];
        // Separate out our children into horizontal and vertical.
        const vertical = [];
        const horizontal = [];
        children.forEach((child, index) => {
            if (child.selector() === 'horizontal') {
                horizontal.push(child);
            }
            else {
                vertical.push(child);
            }
        });
        this.initPartitionedTree('__gsn__' + new Date().valueOf().toString(16), horizontal, vertical);
    } // init
    /**
     * Alias of {@link #init}
     *
     * @function
     */
    init() {
        throw new Error('call initGSN instead');
    }
    /**
     * <p>
     *  Copies the .id and .gsnId from an existingNode to this. This functionality is
     *  designed for when this is functionally the same node as the existingNode.
     * </p>
     *
     * @private
     */
    copyIDs(existingNode) {
        this.id = existingNode.id;
        this.gsnId = existingNode.gsnId;
        this.metadataValues = jQuery.extend({}, existingNode.metadataValues);
        this.metadataNames = jQuery.extend({}, existingNode.metadataNames);
    }
    /**
     * <p>
     *  Return a new GSN element that is a recursive clone of this element. The
     *  returned GSN will have different ids and the root will have a null parent.
     *  The IDs of the GSN elements created through cloning will be unique.
     * </p>
     *
     * @return {GSN} new GSN that is a recursive clone of this element.
     */
    clone() {
        // Cloning is, of course, a recursive operation. We delegate to an explicitly-
        // named recursive method for the real work so that we can manually increment
        // the id while cloning: the operation is far to fast for the millisecond
        // timer to be of use in generating ids. This allows the clone operation to be
        // reentrant (which I like, even if JavaScript isn't multi-threaded).
        return this.cloneRecursive(new Date().valueOf())[0];
    }
    /**
     * <p>
     *   Return a clone of the current element and the new value of id after id'ing
     *   all of the clone's children.
     * </p>
     *
     * @private
     *
     * @param id the id to use for the clone of the current element
     *
     * @return a composite array value of the clone [0] and the updated id [1]
     */
    cloneRecursive(id) {
        const clone = this.gsnFactory.newGSN(this.name, this.text, this.type, jQuery.extend({}, this.attrs), [], this.gsnFactory);
        clone.metadataValues = jQuery.extend({}, this.metadataValues);
        clone.id = '__gsn__' + id.toString(16);
        clone.gsnId = '';
        clone.setVisibility(this.getVisibility());
        ++id;
        this.children.forEach((child, index) => {
            const result = child.cloneRecursive(id);
            id = result[1];
            clone.appendChild(result[0]);
        });
        return [clone, id];
    }
    /**
     * Reset all of the CSS IDs in this GSN
     */
    reCssId() {
        this.reCssIdRecursive(new Date().valueOf());
    }
    /**
     * Recursively reset all of the CSS IDs in this GSN
     *
     * @param {number} id the id to use
     *
     * @return {number} the last id used
     */
    reCssIdRecursive(id) {
        this.id = '__gsn__' + id.toString(16);
        ++id;
        this.children.forEach((child) => {
            id = child.reCssIdRecursive(id);
        });
        return id;
    }
    // -------------------------------------------------------------------------- //
    // ------------------------- Structure Manipulation ------------------------- //
    /**
     * <p>
     *  Append the given element as a child of this GSN element.
     * </p>
     *
     * @param element the element to append
     *
     * @return true unless there was an error
     */
    appendChild(element) {
        const success = super.appendChild(element);
        if (success) {
            element.setMetadataFieldNames(this.metadataNames);
        }
        return success;
    }
    /**
     * <p>
     *  respond to updates to the Tree structure by checking our elaboration status
     *  and asking our parent to check its penultimate status. This will get fired a
     *  lot when big changes to the structure are made (e.g. cloning), but it hasn't
     *  been a problem thus far.
     * </p>
     */
    structureUpdated(element) {
        this.updateElaboration();
        //   if (this.parent) {
        //     this.parent.updatePenultimate();
        //   }
        //
        super.structureUpdated(element);
    }
    /**
     * Set the elaboration status of this node
     */
    updateElaboration() {
        if (this.type === 'goal' || this.type === 'strategy') {
            this.attrs['elaborate'] = !this.hasVerticalChildren();
        }
        else {
            this.attrs['elaborate'] = false;
        }
    }
    /**
     * Set the penultimate status of this node
     */
    updatePenultimate() {
        let penultimate = this.hasChildren();
        this.children.map(function (child) {
            // Could do just vertical children, here, but that would mean messing with
            // layout on multiple contexts, which would be a pain.
            if (child.hasChildren()) {
                penultimate = false;
            }
        });
        this.attrs['penultimate'] = penultimate;
    }
    /**
     * Set metadata field names, and update the text of this element, if it is a
     * metadata element. Passing 'null' effectively clears metadata field names.
     *
     * @param names with id to field name or null
     */
    setMetadataFieldNames(names) {
        this.metadataNames = names;
        if (this.metadataNames) {
            if (this.type === 'metadata') {
                this.name = 'Metadata';
                this.text = '';
                jQuery.each(this.metadataValues, function (key, value) {
                    this.text +=
                        this.metadataNames[key] || 'Missing Field Name for ID ' + key;
                    this.text += ': ';
                    this.text += value;
                    this.text += '; \n\n';
                }.bind(this));
                this.text.trim();
            }
        }
        else {
            if (this.type === 'metadata') {
                this.name = 'Metadata';
                this.text = 'Pending Field Names';
            }
        }
        this.children.map(function (child) {
            child.setMetadataFieldNames(names);
        });
    }
    // -------------------------------------------------------------------------- //
    // ------------------------------- Searching -------------------------------- //
    /**
     * <p>
     *  Return a subset of the GSN, rooted at the current node, based on the
     *  specified selector. The result is not a clone, so changes made to the
     *  selected GSN will effect the full GSN.
     * </p>
     * <p>
     *  Valid selectors are:
     * </p>
     * <ul>
     *   <li>:1st-generation <em>or</em> :children</li>
     *   <li>:2nd-generation <em>or</em> :grandchildren</li>
     *   <li>:3rd-generation <em>or</em> :great-grandchildren</li>
     *   <li>:4th-generation</li>
     *   <li>:5th-generation</li>
     *   <li>:6th-generation</li>
     *   <li>:7th-generation</li>
     *   <li>:8th-generation</li>
     *   <li>:9th-generation</li>
     *   <li>:siblings</li>
     *   <li>:cousins</li>
     *   <li>:ancestry</li>
     * </ul>
     *
     * @param {string} selector the selector to use
     *
     * @return {GSN} new GSN that is a subset of the current
     */
    select(selector) {
        switch (selector) {
            case ':self': {
                const selected = this.gsnFactory.newGSN(this.name, this.text, this.type, jQuery.extend({}, this.attrs), [], this.gsnFactory);
                selected.setVisibility(this.getVisibility());
                selected.copyIDs(this);
                selected.address = this.address;
                return selected;
            }
            case ':1st-generation':
            case ':children': {
                const selected = this.select(':self');
                // Copy our children.
                this.children.forEach((child, index) => {
                    const newChild = this.gsnFactory.newGSN(child.name, child.text, child.type, jQuery.extend({}, child.attrs), [], this.gsnFactory);
                    newChild.setVisibility(child.getVisibility());
                    newChild.copyIDs(child);
                    newChild.address = child.address;
                    selected.appendChild(newChild);
                    newChild.attrs['elaborate'] = child.attrs['elaborate'];
                });
                return selected;
            }
            case ':2nd-generation':
            case ':grandchildren': {
                // Copy the current node
                const selected = this.select(':self');
                // Copy our children.
                jQuery.each(this.children, function (index, child) {
                    selected.appendChild(child.select(':1st-generation'));
                });
                return selected;
            }
            case ':3rd-generation':
            case ':greatgrandchildren': {
                // Copy the current node
                const selected = this.select(':self');
                // Copy our children.
                jQuery.each(this.children, function (index, child) {
                    selected.appendChild(child.select(':2nd-generation'));
                });
                return selected;
            }
            case ':4th-generation':
            case ':greatgreatgrandchildren': {
                // Copy the current node
                const selected = this.select(':self');
                // Copy our children.
                jQuery.each(this.children, function (index, child) {
                    selected.appendChild(child.select(':3rd-generation'));
                });
                return selected;
            }
            case ':5th-generation': {
                // Copy the current node
                const selected = this.select(':self');
                // Copy our children.
                jQuery.each(this.children, function (index, child) {
                    selected.appendChild(child.select(':4th-generation'));
                });
                return selected;
            }
            case ':6th-generation': {
                // Copy the current node
                const selected = this.select(':self');
                // Copy our children.
                this.children.forEach((child, index) => {
                    selected.appendChild(child.select(':5th-generation'));
                });
                return selected;
            }
            case ':7th-generation': {
                // Copy the current node
                const selected = this.select(':self');
                // Copy our children.
                jQuery.each(this.children, function (index, child) {
                    selected.appendChild(child.select(':6th-generation'));
                });
                return selected;
            }
            case ':8th-generation': {
                // Copy the current node
                const selected = this.select(':self');
                // Copy our children.
                this.children.forEach((child, index) => {
                    selected.appendChild(child.select(':7th-generation'));
                });
                return selected;
            }
            case ':9th-generation': {
                // Copy the current node
                const selected = this.select(':self');
                // Copy our children.
                this.children.forEach((child, index) => {
                    selected.appendChild(child.select(':8th-generation'));
                });
                return selected;
            }
            case ':siblings': {
                if (this.parent) {
                    return this.parent.select(':children');
                }
                else {
                    return this;
                }
            }
            case ':cousins': {
                if (this.parent && this.parent.parent) {
                    return this.parent.parent.select(':grandchildren');
                }
                else {
                    return this;
                }
            }
            case ':ancestry': {
                // Copy the current node
                const selected = this.select(':self');
                if (this.parent) {
                    selected.parent = this.parent.select(':ancestry');
                    selected.parent.children.push(selected);
                }
                return selected;
            }
            default: {
                return this;
            }
        }
    }
    /**
     * <p>
     *  Definition of {@link PartitionedTree#selector} for {@link GSN} instances.
     * </p>
     *
     * @return 'horizontal' if this {@link GSN} is a context, assumption or
     *         justification; 'vertical' if the {@link GSN} is a goal, strategy,
     *         module, or evidence.
     *
     * @throws {string} an error message if the type of this {@link GSN} is unknown
     */
    selector() {
        switch (this.type) {
            case ValidGsnNodeTypes.Context:
            case ValidGsnNodeTypes.Assumption:
            case ValidGsnNodeTypes.Justification:
            case ValidGsnNodeTypes.Comment:
            case ValidGsnNodeTypes.Metadata:
                return 'horizontal';
            case ValidGsnNodeTypes.Goal:
            case ValidGsnNodeTypes.Strategy:
            case ValidGsnNodeTypes.Module:
            case ValidGsnNodeTypes.Contract:
            case ValidGsnNodeTypes.Evidence:
                return 'vertical';
            default:
                throw new Error('Unknown GSN type: ' + this.type);
        }
    }
    generateAddresses() {
        GSN.numberRecursive(this, []);
    }
    static numberRecursive(gsn, cols) {
        // Compute the depth. This is how it is done, essentially, in the Ruby code
        // strictNullChecks note: algorithm provides null guarantee here.
        if (gsn.isRoot()) {
            gsn.depth = 1;
        }
        else {
            if (gsn.selector() === 'horizontal') {
                gsn.depth = gsn.parent.depth;
            }
            else {
                gsn.depth = gsn.parent.depth + 1;
            }
        }
        cols[gsn.depth] = cols[gsn.depth] || 0;
        if (gsn.type !== 'metadata' && gsn.type !== 'comment') {
            cols[gsn.depth] += 1;
            gsn.breadth = cols[gsn.depth];
            gsn.address = gsn.depth + '.' + gsn.breadth;
        }
        gsn.children.forEach(function (child, index) {
            GSN.numberRecursive(child, cols);
        });
    }
    /**
     * Determine if this node can be the parent of a node of the given type.
     * @param childType The child type
     */
    supportsChildOfType(childType) {
        // comment nodes allow no children.
        if (this.type === ValidGsnNodeTypes.Comment) {
            return false;
        }
        // away nodes only allow comment children
        if (this.getVisibility() === GsnVisibility.Away) {
            return childType === ValidGsnNodeTypes.Comment;
        }
        // evidence and module nodes can only have horizontal children.
        if (this.type === ValidGsnNodeTypes.Evidence ||
            this.type === ValidGsnNodeTypes.Module ||
            this.type === ValidGsnNodeTypes.Contract) {
            return (childType === ValidGsnNodeTypes.Context ||
                childType === ValidGsnNodeTypes.Assumption ||
                childType === ValidGsnNodeTypes.Justification ||
                childType === ValidGsnNodeTypes.Comment);
        }
        // other vertical nodes can support any type of children.
        if (this.isVertical()) {
            return true;
        }
        // other horizontal nodes can support only horizontal children
        if (this.isHorizontal()) {
            return (childType === ValidGsnNodeTypes.Context ||
                childType === ValidGsnNodeTypes.Assumption ||
                childType === ValidGsnNodeTypes.Justification ||
                childType === ValidGsnNodeTypes.Comment);
        }
        throw new Error('Selector() returned unknown type');
    }
    /**
     * Set the optional attribute for this node.
     * @param newOpt the new value of optional
     * @param condition the condition on which this object is optional.
     */
    setOptional(newOpt, condition = '') {
        this.attrs[this.optionalAttributeName] = newOpt;
    }
    /**
     * Get the optional attribute for this node.
     * @returns whether the node is optional.
     */
    getOptional() {
        var _a;
        return (_a = this.attrs[this.optionalAttributeName]) !== null && _a !== void 0 ? _a : false;
    }
    /**
     * Get the optional condition for this node.
     * (default impl. for children)
     * @returns the condition
     */
    getOptionalCondition() {
        return '';
    }
    /**
     * Set the repeated attribute for this node.
     * @param newValue the new value of repeated
     */
    setRepeated(newValue, requirements = '', indexVar = '') {
        this.attrs[this.repeatedAttributeName] = newValue;
    }
    /**
     * Get the repeated attribute for this node.
     * @returns whether the node is optional.
     */
    getRepeated() {
        var _a;
        return (_a = this.attrs[this.repeatedAttributeName]) !== null && _a !== void 0 ? _a : false;
    }
    /**
     * Get the repeated requirements for this node.
     * default impl. for children.
     * @returns the requirements
     */
    getRepeatedRequirements() {
        // provide a default implementation for derived classes
        return '';
    }
    /**
     * Get the repeated index var for this node.
     * default impl. for children.
     * @returns the index var
     */
    getRepeatedIndexVar() {
        // provide a default implementation for derived classes
        return '';
    }
    /**
     * A convenience function to test visibility for away-ness.
     *
     * @returns `true` or `false` depending on whether this is an away node or not.
     */
    isAway() {
        return this.getVisibility() === GsnVisibility.Away;
    }
    /**
     * A convenience function to test visibility for public-ness.
     *
     * @returns `true` or `false` depending on whether this is a public node or not.
     */
    isPublic() {
        return this.getVisibility() === GsnVisibility.Public;
    }
    /**
     * A convenience function to test visibility for private-ness.
     *
     * @returns `true` or `false` depending on whether this is a private node or not.
     */
    isPrivate() {
        return this.getVisibility() === GsnVisibility.Private;
    }
}
/**
 * Class flag for comment visibility control.
 *
 * @type Boolean
 */
GSN.ignoreComments = false;


/***/ }),

/***/ "./sct-js/sources/viewer/gsn/sct-xml-gsn-factory.ts":
/*!**********************************************************!*\
  !*** ./sct-js/sources/viewer/gsn/sct-xml-gsn-factory.ts ***!
  \**********************************************************/
/*! exports provided: XmlGsnFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmlGsnFactory", function() { return XmlGsnFactory; });
/* harmony import */ var _sct_xml_gsn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-xml-gsn */ "./sct-js/sources/viewer/gsn/sct-xml-gsn.ts");
/* harmony import */ var _sct_gsn_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sct-gsn-factory */ "./sct-js/sources/viewer/gsn/sct-gsn-factory.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./sct-js/sources/viewer/utils.ts");
// -------------------------------------------------------------------------- //
// sct-xml-gsn-factory.js       Dependable Computing                     2012 //
// -------------------------------------------------------------------------- //



/**
 * Factory class for constructing XmlGSN instances.
 *
 * @constructor
 *
 * @return {XmlGsnFactory}
 */
class XmlGsnFactory extends _sct_gsn_factory__WEBPACK_IMPORTED_MODULE_1__["GsnFactory"] {
    /**
     * newGSN - construct a new instance of an XmlGSN based on the arguments given
     *
     * @param varArg the name for the GSN element or
     *                                         the document or
     *                                         the element
     * @param text the text for the GSN element
     * @param type the type of the GSN element
     * @param attrs attributes of the GSN element in a hash
     * @param children the children of the GSN element
     */
    newGSN(varArg, text, type, attrs, children) {
        const gsn = new _sct_xml_gsn__WEBPACK_IMPORTED_MODULE_0__["XmlGSN"]();
        if (typeof varArg === 'string') {
            text = text !== null && text !== void 0 ? text : 'Default text';
            attrs = attrs !== null && attrs !== void 0 ? attrs : {};
            children = children !== null && children !== void 0 ? children : [];
            _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].assert(typeof type === 'string', 'Must pass a type string to create by string');
            gsn.initGSN(varArg, text, type, attrs, children, this, this._language);
        }
        else if (varArg instanceof Document) {
            gsn.initFromDocument(varArg, this, this._language);
        }
        else if (varArg instanceof Element) {
            gsn.initFromElement(varArg, this, this._language);
        }
        else {
            throw new Error('No idea how to build a GSN from the given arguments.');
        }
        return gsn;
    }
    gsnFromXML(xml) {
        const argXml = jQuery.parseXML(xml.trim());
        return this.newGSN(argXml);
    }
    /**
     * Update the gsn factory to use a new argument.
     */
    selectArgument(newArg) {
        // No argument is used for the classic factory.
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/gsn/sct-xml-gsn.ts":
/*!**************************************************!*\
  !*** ./sct-js/sources/viewer/gsn/sct-xml-gsn.ts ***!
  \**************************************************/
/*! exports provided: XmlGSN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmlGSN", function() { return XmlGSN; });
/* harmony import */ var _sct_gsn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-gsn */ "./sct-js/sources/viewer/gsn/sct-gsn.ts");
/* harmony import */ var _sct_with_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sct-with-context */ "./sct-js/sources/viewer/sct-with-context.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./sct-js/sources/viewer/utils.ts");
// -------------------------------------------------------------------------- //
// sct-xml-gsn.js               Dependable Computing                     2012 //
// -------------------------------------------------------------------------- //



/**
 * An implementation of GSN that initializes from and exports to XML
 *
 * @constructor
 *
 * @return {XmlGSN}
 */
class XmlGSN extends _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["GSN"] {
    /**
     * init - generic init function. Use the factory instead of calling this
     *
     * @param source the source from which to initialize
     * @param gsnFactory the factory to use when creating instances
     * @param language the language in which the document or element is written
     */
    initXmlGSN(source, gsnFactory, language) {
        if (source instanceof Document) {
            this.initFromDocument(source, gsnFactory, language);
        }
        else if (source instanceof Element) {
            this.initFromElement(source, gsnFactory, language);
        }
        else {
            throw new Error('Can\'t build an XmlGSN from the source given.');
        }
    }
    /**
     * [private] initFromDocument - build a new GSN element from a Document
     *
     * @param doc the document from which the GSN should be built
     * @param gsnFactory the factory to use when creating instances
     * @param language the language in which the document is written
     */
    initFromDocument(doc, gsnFactory, language) {
        const element = doc.querySelector('gsn');
        if (!element) {
            throw Error('Cannot find gsn element in document');
        }
        this.initFromElement(element, gsnFactory, language);
    }
    /**
     * [private] initFromElement - build a new GSN element from an Element
     *
     * @param element the element from which the GSN should be built
     * @param gsnFactory the factory to use to build GSN instances
     * @param language the language in which the element is written
     */
    initFromElement(element, gsnFactory, language) {
        this.initFromElementRecursive(element, 0, gsnFactory, language);
    }
    initFromElementRecursive(element, counter, gsnFactory, language) {
        var _a, _b, _c, _d, _e;
        // Note that we skip calling initGSN and initPartitionedTree because we
        // explicitly set all fields in this method. The outlier is:
        this.gsnFactory = gsnFactory;
        // If this is the root, <gsn> element, we want to start with the first child,
        // which may either be a goal <g> or a module <m>.
        if (element.nodeName === 'gsn') {
            const nonText = Array.from(element.childNodes).find(child => {
                return child.nodeName !== '#text';
            });
            _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].assert(!!nonText, 'No #text node?!');
            return this.initFromElementRecursive(nonText, counter, gsnFactory, language);
        }
        // getAttribute is a handy method, but is not necessarily defined on an
        // Element (it is on an HTMLElement). So we define it if it's not present.
        if (!element.getAttribute) {
            element.getAttribute = function (name) {
                if (!element.attributes) {
                    alert('Element is: ' + element + '; not what you thought!');
                }
                const attr = element.attributes[name];
                return attr !== null ? attr.nodeValue : null;
            };
        } // define getAttribute as needed
        this.name = (_a = element.getAttribute('name')) !== null && _a !== void 0 ? _a : '';
        this.id = (_b = element.getAttribute('id')) !== null && _b !== void 0 ? _b : '';
        this.gsnId = (_c = element.getAttribute('gsnid')) !== null && _c !== void 0 ? _c : '';
        this.language = language;
        if (!this.id || this.id === '') {
            this.id = '__gsn__' + (new Date().valueOf() + counter++).toString(16);
        }
        this.parent = null;
        this.root = this;
        this.text = '';
        if (element.childNodes.length > 0) {
            // Knock out line breaks
            this.text = (_e = (_d = element.childNodes[0].textContent) === null || _d === void 0 ? void 0 : _d.trim().replace(/[\n\r]/g, '')) !== null && _e !== void 0 ? _e : 'Default text';
            // Knock out runs of two or more spaces
            this.text = this.text.replace(/ [ ]+/g, ' ');
        }
        // Determine the type of the node
        switch (element.nodeName) {
            case 'g':
                this.type = _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Goal;
                this.orientation = 'vertical';
                break;
            case 'away-goal':
                this.type = _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Goal;
                this.setVisibility(_sct_gsn__WEBPACK_IMPORTED_MODULE_0__["GsnVisibility"].Away);
                this.orientation = 'vertical';
                break;
            case 'public-goal':
                this.type = _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Goal;
                this.setVisibility(_sct_gsn__WEBPACK_IMPORTED_MODULE_0__["GsnVisibility"].Public);
                this.orientation = 'vertical';
                break;
            case 's':
                this.type = _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Strategy;
                this.orientation = 'vertical';
                break;
            case 'e':
                this.type = _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Evidence;
                this.orientation = 'vertical';
                break;
            case 'public-evidence':
                this.type = _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Evidence;
                this.setVisibility(_sct_gsn__WEBPACK_IMPORTED_MODULE_0__["GsnVisibility"].Public);
                this.orientation = 'vertical';
                break;
            case 'm':
                this.type = _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Module;
                this.orientation = 'vertical';
                break;
            case 'contract':
                this.type = _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Contract;
                this.orientation = 'vertical';
                break;
            case 'c':
                this.type = _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Context;
                this.orientation = 'horizontal';
                break;
            case 'away-context':
                this.type = _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Context;
                this.setVisibility(_sct_gsn__WEBPACK_IMPORTED_MODULE_0__["GsnVisibility"].Away);
                this.orientation = 'horizontal';
                break;
            case 'public-context':
                this.type = _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Context;
                this.setVisibility(_sct_gsn__WEBPACK_IMPORTED_MODULE_0__["GsnVisibility"].Public);
                this.orientation = 'horizontal';
                break;
            case 'a':
                this.type = _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Assumption;
                this.orientation = 'horizontal';
                break;
            case 'j':
                this.type = _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Justification;
                this.orientation = 'horizontal';
                break;
            case 'comment':
                this.type = _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Comment;
                this.orientation = 'horizontal';
                break;
            default:
                throw new Error('Unidentified node type in DC GSN');
        }
        // Additional attributes
        this.attrs = {};
        this.attrs['optional'] = element.getAttribute('optional') === 'true';
        this.attrs['repeat'] = element.getAttribute('repeat') === 'true';
        this.attrs['link'] = element.getAttribute('link');
        this.attrs['confidence'] = element.getAttribute('confidence');
        // Meta attributes, that are candidates to move into another representation
        // at a later date
        this.attrs['color'] = element.getAttribute('color');
        this.children = [];
        this.horizontal = [];
        this.vertical = [];
        let metadataValues = undefined;
        if (this.type !== 'comment') {
            jQuery.each(element.childNodes, function (index, child) {
                var _a, _b, _c;
                if (child.nodeName === '#text') {
                    return true; // continue
                }
                // Special metadata value processing. Note the down-casing.
                // @TODO: Noted. It's not legal typescript!
                if (child.nodeName.toLowerCase() === 'metadatavalue' ||
                    child.nodeName === 'metadataValue') {
                    metadataValues = metadataValues !== null && metadataValues !== void 0 ? metadataValues : {};
                    _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].assert(child !== null, 'Null child?!');
                    const value = (_b = (_a = child.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : 'default value';
                    const key = (_c = child.getAttribute('metadata-field-id')) !== null && _c !== void 0 ? _c : 'default key';
                    metadataValues[key] = value;
                    return true; // continue
                }
                // Implication: ignoreComments -> child is not a comment
                if (!_sct_gsn__WEBPACK_IMPORTED_MODULE_0__["GSN"].ignoreComments || child.nodeName !== 'comment') {
                    const gsn = new XmlGSN();
                    counter = gsn.initFromElementRecursive(child, counter, gsnFactory, language);
                    this.appendChild(gsn);
                }
            }.bind(this));
        }
        // Create a child for the metadata, if we encountered any metadata values.
        if (metadataValues) {
            const gsn = new XmlGSN();
            gsn.initGSN('Metadata', 'Pending Field Names', _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Metadata, {}, [], gsnFactory, language);
            gsn.id = this.id + '_metadata';
            gsn.metadataValues = metadataValues;
            this.appendChild(gsn);
        }
        this.updateElaboration();
        this.updatePenultimate();
        return counter;
    }
    // -------------------------------------------------------------------------- //
    // Output
    /**
     * toXML - turn GSN into an XML string
     *
     * @return the GSN as an XML string
     */
    toXML() {
        let xml = '<?xml version="1.0" encoding="UTF-8"?>' + '\n\n' + '<gsn>' + '\n';
        xml += this.toXmlRecursive(1);
        return xml + '</gsn>';
    }
    /**
     * [private] toXmlRecursive - recursively turn GSN into XML
     *
     * @param depth the depth in the recursion
     *
     * @return the GSN as an XML string
     */
    toXmlRecursive(depth) {
        const pad = Object(_sct_with_context__WEBPACK_IMPORTED_MODULE_1__["buildPad"])(depth);
        let xml = '';
        // Special handling of metadata values.
        if (this.type === 'metadata') {
            jQuery.each(this.metadataValues, function (key, value) {
                xml +=
                    pad + '<metadataValue metadata-field-id="' + key.toString() + '">\n';
                xml += pad + '  <![CDATA[' + value + ']]>\n';
                xml += pad + '</metadataValue>\n';
            });
            return '\n' + xml;
        }
        xml += pad + '<';
        switch (this.type) {
            case _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Context:
                if (this.getVisibility() === _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["GsnVisibility"].Public) {
                    xml += 'public-context';
                }
                else if (this.getVisibility() === _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["GsnVisibility"].Away) {
                    xml += 'away-context';
                }
                else {
                    xml += 'c';
                }
                break;
            case _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Assumption:
                xml += 'a';
                break;
            case _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Justification:
                xml += 'j';
                break;
            case _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Comment:
                xml += 'comment';
                break;
            case _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Goal:
                if (this.getVisibility() === _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["GsnVisibility"].Away) {
                    xml += 'away-goal';
                }
                else if (this.getVisibility() === _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["GsnVisibility"].Public) {
                    xml += 'public-goal';
                }
                else {
                    xml += 'g';
                }
                break;
            case _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Strategy:
                xml += 's';
                break;
            case _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Evidence:
                if (this.getVisibility() === _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["GsnVisibility"].Public) {
                    xml += 'public-evidence';
                }
                else {
                    xml += 'e';
                }
                break;
            case _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Module:
                xml += 'm';
                break;
            case _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Contract:
                xml += 'contract';
                break;
            default:
                throw new Error('Unidentified node type in DC GSN');
        }
        xml += '\n';
        xml += pad + '    id="' + Object(_sct_with_context__WEBPACK_IMPORTED_MODULE_1__["escapeHTMLattr"])(this.id) + '"\n';
        if (this.gsnId && this.gsnId !== 'undefined') {
            xml += pad + '    gsnid="' + Object(_sct_with_context__WEBPACK_IMPORTED_MODULE_1__["escapeHTMLattr"])(this.gsnId) + '"\n';
        }
        jQuery.each(XmlGSN.attributeOrder, function (index, key) {
            const val = this.attrs[key];
            if (val) {
                xml += pad + '    ' + key + '="' + Object(_sct_with_context__WEBPACK_IMPORTED_MODULE_1__["escapeHTMLattr"])(val) + '"\n';
            }
        }.bind(this));
        xml += pad + '    name="' + Object(_sct_with_context__WEBPACK_IMPORTED_MODULE_1__["escapeHTMLattr"])(this.name) + '"';
        xml += '>' + '\n';
        if (this.text && this.text !== '') {
            xml += pad + '  ' + Object(_sct_with_context__WEBPACK_IMPORTED_MODULE_1__["escapeHTML"])(this.text) + '\n';
        }
        // Order the output: place the horizontal children before the vertical
        // children. This makes reading the XML a lot easier.
        //
        // First, non-comment elements:
        for (let i = this.children.length - 1; i >= 0; --i) {
            if (this.children[i].type === 'metadata') {
                xml += this.children[i].toXmlRecursive(depth + 1);
                break;
            }
        }
        // Next, non-comment elements:
        jQuery.each(this.horizontal, function (index, child) {
            if (child.type === 'comment' || child.type === 'metadata') {
                return 1;
            }
            xml += '\n' + child.toXmlRecursive(depth + 1);
        });
        // Now, vertical elements
        jQuery.each(this.vertical, function (index, child) {
            xml += '\n' + child.toXmlRecursive(depth + 1);
        });
        // Now, comment elements:
        jQuery.each(this.horizontal, function (index, child) {
            if (child.type !== 'comment') {
                return 1;
            }
            xml += '\n' + child.toXmlRecursive(depth + 1);
        });
        xml += pad + '</';
        switch (this.type) {
            case _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Context:
                if (this.getVisibility() === _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["GsnVisibility"].Public) {
                    xml += 'public-context';
                }
                else if (this.getVisibility() === _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["GsnVisibility"].Away) {
                    xml += 'away-context';
                }
                else {
                    xml += 'c';
                }
                break;
            case _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Assumption:
                xml += 'a';
                break;
            case _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Justification:
                xml += 'j';
                break;
            case _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Comment:
                xml += 'comment';
                break;
            case _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Goal:
                if (this.getVisibility() === _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["GsnVisibility"].Away) {
                    xml += 'away-goal';
                }
                else if (this.getVisibility() === _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["GsnVisibility"].Public) {
                    xml += 'public-goal';
                }
                else {
                    xml += 'g';
                }
                break;
            case _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Strategy:
                xml += 's';
                break;
            case _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Evidence:
                if (this.getVisibility() === _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["GsnVisibility"].Public) {
                    xml += 'public-evidence';
                }
                else {
                    xml += 'e';
                }
                break;
            case _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Module:
                xml += 'm';
                break;
            case _sct_gsn__WEBPACK_IMPORTED_MODULE_0__["ValidGsnNodeTypes"].Contract:
                xml += 'contract';
                break;
            default:
                throw new Error('Unidentified node type in GSN model');
        }
        xml += '>' + '\n';
        return xml;
    } // toXmlRecursive
}
XmlGSN.attributeOrder = ['link', 'confidence', 'color', 'optional', 'repeat'];


/***/ }),

/***/ "./sct-js/sources/viewer/layout/sct-gsn-tree-node.ts":
/*!***********************************************************!*\
  !*** ./sct-js/sources/viewer/layout/sct-gsn-tree-node.ts ***!
  \***********************************************************/
/*! exports provided: GsnTreeNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnTreeNode", function() { return GsnTreeNode; });
/* harmony import */ var _sct_horizontal_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-horizontal-tree */ "./sct-js/sources/viewer/layout/sct-horizontal-tree.ts");
/* harmony import */ var _nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nodes/sct-gsn-node */ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./sct-js/sources/viewer/utils.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-tree-node.js         Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //



/**
 * <p>
 *  This is the {@link LayoutTree} for the horizontal component of {@link GSN}
 *  instances. It is a {@link HorizontalTree}: it lays out its
 *  {@link LayoutNode}s horizontally. Its {@link LayoutNode}s are
 *  {@link GsnNode}s.
 * </p>
 * <p>
 *  As the name implies, the {@link GsnTreeNode} is meant to be used as the
 *  {@link LayoutNode} for a {@link GsnTree}; the latter lays out
 *  {@link GsnTreeNode}s vertically, providing complete layout for {@link GSN}.
 * </p>
 *
 * @author M. Anthony Aiello
 *
 * @constructor
 * @extends HorizontalTree
 */
class GsnTreeNode extends _sct_horizontal_tree__WEBPACK_IMPORTED_MODULE_0__["HorizontalTree"] {
    constructor() {
        super(...arguments);
        /** have widths been adjusted?
         */
        this.widthsAdjusted = false;
    }
    /**
     * <p>
     *  Initialize the instance from {@link GSN}. The {@link GsnNodeFactory} is
     *  optional; if unspecified, the global factory instance will be used. Depth
     *  is the depth at which this {@link GsnTreeNode} appears in its containing
     *  {@link GsnTree}.
     * </p>
     *
     * @param gsn the GSN to lay out
     * @param GsnNodeFactory the factory instance to use for
     *                                        {@link GsnNode} creation
     * @param metrics the metrics that should be used by this tree and
     *                          its nodes to size and lay out
     * @param showAddresses true if addresses should be shown for GSN
     *                                elements
     * @param depth the depth of this node in its containing layout.
     */
    initGsnTreeNode(gsn, gsnNodeFactory, metrics, showAddresses, depth) {
        this.metrics = metrics;
        this.showAddresses = showAddresses;
        this.depth = depth || 0;
        this.arcGraphics = {};
        this.xOffset = 0;
        this.yOffset = 0;
        // Create the local node
        const node = gsnNodeFactory.newNode(gsn, metrics, showAddresses);
        // Recursively set up our children.
        const children = [];
        gsn.horizontal.forEach((horizontalSubtree) => {
            // Skip comments if they are not to be shown
            if (horizontalSubtree.type === 'comment' && !_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_1__["GsnNode"].showComments) {
                return true;
            }
            // Skip metadata if they are not to be shown
            if (horizontalSubtree.type === 'metadata' && !_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_1__["GsnNode"].showMetadata) {
                return true;
            }
            const child = new GsnTreeNode();
            child.initGsnTreeNode(horizontalSubtree, gsnNodeFactory, metrics, showAddresses, depth);
            children.push(child);
        });
        // Initialize our base class
        this.initHorizontalTree(node, children);
        this.gsnNodeFactory = gsnNodeFactory;
        // Override the base class's padding using the metrics's.
        this.interTreePadding = metrics.horizontalTreePadding;
    }
    /**
     * Alias {@link #init} for subclasses
     *
     * @function
     */
    init() {
        throw new Error('Call initGsnTreeNode');
    }
    /**
     * Specialized find method that passes predicates to the node.
     *
     * @param predicate the predicate against which the node will
     *                                    be tested
     *
     * @return the tree node found.
     */
    find(predicate) {
        if (typeof predicate === 'string') {
            return this.find(function (tree) {
                return tree.id === predicate;
            });
        }
        if (predicate(this.node)) {
            return this;
        }
        for (const child of this.children) {
            const foundChild = child.find(predicate);
            if (foundChild) {
                return foundChild;
            }
        }
        return null;
    }
    /**
     * <p>
     *  If there is a node in this horizontal tree that is closer than the provided
     *  estimate to an x coordinate, return that new node and the updated distance.
     *  Distance here is actually distance squared from the cent
     * </p>
     *
     * @param x the x-coordinate: this is what we want the closest node to
     * @param node the initial node to start the search
     * @param distance the distance to the input node
     *
     * @return a record in an array of [GsnNode, number] that is the
     * node closest to x and its distance from x
     */
    findClosestToNode(x, node, distance) {
        const closest = node;
        let closestDistance = distance;
        const deltaX = this.node.x + this.node.horizontalCenter - x;
        // Note that the distance is actually the distance squared. The absolute
        // distance is not important; square roots are expensive to compute.
        const ourDistance = deltaX * deltaX;
        if (ourDistance < distance) {
            closest = this.node;
            closestDistance = ourDistance;
        }
        let result = [closest, closestDistance];
        this.children.forEach((subtree) => {
            result = subtree.findClosestToNode(x, result[0], result[1]);
        });
        return result;
    }
    /**
     * Before layout, make all of the GsnNodes at each depth the same width.
     */
    preLayout() {
        // We don't want to do this more than once, because it interacts poorly with
        // the node caching mechanism. So we record on the root of this tree (which
        // should be the node on which preLayout is called) whether or not we've done
        // this adjustment. This means that width adjustment only happens when the
        // argument is fully reloaded - in practice, that was true anyway because of
        // the behavior of node caching.
        if (!this.root.widthsAdjusted) {
            const maxWidthAtDepth = [];
            this.computeMaxWidth(0, maxWidthAtDepth);
            this.adjustWidths(0, maxWidthAtDepth);
            this.root.widthsAdjusted = true;
        }
    }
    /**
     * Recursively compute the maximum width of this GsnTreeNode at each depth. This
     * is used to ensure that, at each depth, all of the GsnNodes are the same width
     * since that yields a much nicer layout.
     *
     * @param depth the current depth in the recursion
     * @param maxWidthAtDepth the current estimate of the maximum
     *                                        width at each depth
     */
    computeMaxWidth(depth, maxWidthAtDepth) {
        maxWidthAtDepth[depth] =
            Math.max(this.node.width, maxWidthAtDepth[depth]) || this.node.width;
        this.children.forEach((subtree) => {
            subtree.computeMaxWidth(depth + 1, maxWidthAtDepth);
        });
    }
    /**
     * Recursively adjust the width of all GsnNodes at each depth so that they are
     * the same size as the widest node.
     *
     * @param {number} depth the current depth in the recursion
     * @param {Array[number]} maxWidthAtDepth the maximum width at each depth
     */
    adjustWidths(depth, maxWidthAtDepth) {
        this.children.forEach((subtree) => {
            subtree.adjustWidths(depth + 1, maxWidthAtDepth);
        });
        if (this.parent && this.width < maxWidthAtDepth[depth]) {
            this.node.adjustWidth(maxWidthAtDepth[depth]);
        }
    }
    position(x, y) {
        // The x, y coordinates passed are the coordinates at which our local node
        // must appear: that's what the contract on LayoutNode.position assumes, and
        // GsnTreeNode is used as a LayoutNode by the GsnTree, even though GsnTreeNode
        // is actually a LayoutTree.
        this.node.position(x, y);
        // But the abs_x and the abs_y for this GsnTreeNode need to be adjusted to be
        // consistent with the expectations of a LayoutTree. That means subtracting
        // the horizontal and vertical center and then also subtracting our margins.
        this.absX = x - this.horizontalCenter - this.marginLeft;
        this.absY = y - this.verticalCenter - this.marginTop;
        this.children.forEach((subtree) => {
            subtree.positionSubtree(x - this.horizontalCenter, y - this.verticalCenter);
        });
    }
    /**
     * Translate an already-rendered GsnTreeNode by the specified offsets. Note that
     * this never really resets, at present - we would need to reset the x_offset
     * and y_offset by overriding setPosition on the LayoutTree.
     *
     * @param {Number} dx the x offset
     * @param {Number} dy the y offset
     */
    translate(dx, dy) {
        // Recording this is an effect of the decision to make paths encode their
        // start location absolutely, rather than relatively positioning and using a
        // transform matrix, as we do for the nodes themselves. This also means that
        // a call to setPosition - which does reset this.x and this y - will not reset
        // the offsets.
        this.xOffset += dx;
        this.yOffset += dy;
        jQuery.each(this.arcGraphics, function (containerName, container) {
            jQuery.each(container, function (graphicsName, graphics) {
                graphics.setOffset(this.xOffset, this.yOffset);
            }.bind(this));
        }.bind(this));
        // End special handling for paths.
        this.x += dx;
        this.y += dy;
        this.children.forEach((subtree) => {
            subtree.translate(dx, dy);
        });
        this.node.translate(dx, dy);
    }
    /**
     * Detach the graphics for a rendered GsnTreeNode.
     */
    detach() {
        jQuery.each(this.arcGraphics, function (containerName, container) {
            jQuery.each(container, function (graphicsName, graphics) {
                graphics.detach();
            }.bind(this));
        }.bind(this));
        this.children.forEach((subtree) => {
            subtree.detach();
        });
        this.node.detach();
    }
    /**
     * Render the GsnTreeNode using the given renderer.
     *
     * @param {Renderer} renderer the renderer
     */
    render(renderer) {
        this.arcGraphics[renderer.name] = this.arcGraphics[renderer.name] || {};
        // First traversal: render all of our arcs.
        for (const subtree of this.children) {
            _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].assert(subtree instanceof GsnTreeNode, 'Internal error: rendering not GsnTreeNode');
            const localNode = this.node;
            const childNode = subtree.node;
            // This is the same as metrics.context_horizontal_margin
            const group = renderer.group();
            // calculate attributes
            const attrs = {};
            attrs['marker-end'] = 'url(#arrow)';
            // Put markers on the midpoint, as needed
            if (childNode.attrs['repeat']) {
                attrs['marker-mid'] = 'url(#dot)';
            }
            else if (childNode.attrs['optional']) {
                attrs['marker-mid'] = 'url(#empty-dot)';
            }
            // calculate id and path for arrow
            const pathId = localNode.id + '_to_' + childNode.id;
            const pathString = this.computePathString(localNode, childNode);
            // calculate the css class for the arrow
            let clazz;
            if (childNode.type !== 'comment' && childNode.type !== 'metadata') {
                attrs['marker-end'] = 'url(#empty-arrow)';
                clazz = 'side';
            }
            else {
                clazz = 'comment-line';
            }
            _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].assert(clazz !== undefined, 'clazz not init\'d, internal error');
            // render the path
            renderer.path(group, pathId, clazz, pathString, attrs);
            this.arcGraphics[renderer.name][childNode.id] = group;
            // Instruct this subtree to render (tail recursion)
            subtree.render(renderer);
        }
        // Render this node, which is a (GSN) layout node.
        this.node.render(renderer);
    }
    /**
     * Render the GsnTreeNode using the given renderer for navigator display. This
     * differs from the full render, above, because we don't draw any arcs (they
     * don't show up well).
     *
     * @param renderer the renderer
     */
    renderNavigator(renderer) {
        this.children.forEach((subtree) => {
            subtree.renderNavigator(renderer);
        });
        this.node.renderNavigator(renderer);
    }
    /**
     * Compute the path to a child node.
     * @param localNode The "from" node (aka, 'this')
     * @param childNode The "to" node.
     */
    computePathString(localNode, childNode) {
        // Simply using the node's right is appealing - but that won't work for
        // a strategy/evidence element, because of the slant/curve shape. We
        // therefore need to adjust the right value.
        let right;
        switch (localNode.type) {
            case 'strategy':
                right =
                    localNode.x + localNode.width - this.metrics.strategySlant / 2.0;
                break;
            case 'evidence':
                right =
                    localNode.x +
                        localNode.horizontalCenter +
                        this.metrics.evidenceRadius;
                break;
            default:
                right = localNode.x + localNode.width;
                break;
        }
        _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].assert(right !== undefined, 'Unset variable: \'right\'.  Internal error');
        // Compute the directed distance from the center of the local_node to the
        // center of the child_node
        //
        // The "-9" accounts for the length of the arrow head.
        const xDist = childNode.x - right - 9;
        // We insert a midpoint on every path because that allows us to put a
        // marker on the midpoint for those nodes that require them (repeated
        // node or optional node). So our xoffset becomes:
        const xOffset = xDist / 2.0;
        // Compute the directed distance between the bottom of the local node and
        // the top of the child node
        const yDist = childNode.y +
            childNode.verticalCenter -
            (localNode.y + localNode.verticalCenter);
        // Just like xoffset is xDist/2, the yoffset is half the vertical space
        // be.
        const yOffset = yDist / 2.0;
        return `M${right},${localNode.y + localNode.verticalCenter}  
			c10,0 
			 ${xOffset},${yOffset} 
			 ${xOffset},${yOffset}
			s${xOffset},${yOffset} 
			 ${xOffset},${yOffset}`;
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/layout/sct-gsn-tree-visitor.ts":
/*!**************************************************************!*\
  !*** ./sct-js/sources/viewer/layout/sct-gsn-tree-visitor.ts ***!
  \**************************************************************/
/*! exports provided: GsnTreeVisitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnTreeVisitor", function() { return GsnTreeVisitor; });
// -------------------------------------------------------------------------- //
// sct-gsn-tree-visitor.js      M. Anthony Aiello                        2012 //
// -------------------------------------------------------------------------- //
class GsnTreeVisitor {
    static visitVertical(gsnTree, predicate) {
        GsnTreeVisitor.prefixVertical(gsnTree, predicate);
    }
    static visitHorizontal(gsnTree, predicate) {
        GsnTreeVisitor.prefixVertical(gsnTree, function (vertical) {
            GsnTreeVisitor.prefixHorizontal(vertical.node, predicate);
        });
    }
    static visitNodes(gsnTree, predicate) {
        GsnTreeVisitor.prefixVertical(gsnTree, function (vertical) {
            GsnTreeVisitor.prefixHorizontal(vertical.node, function (horizontal) {
                predicate(horizontal.node);
            });
        });
    }
    static prefixVertical(gsnTree, predicate) {
        predicate(gsnTree);
        gsnTree.children.forEach((vertical) => {
            GsnTreeVisitor.prefixVertical(vertical, predicate);
        });
    }
    static prefixHorizontal(gsnTreeNode, predicate) {
        predicate(gsnTreeNode);
        gsnTreeNode.children.forEach((horizontal) => {
            GsnTreeVisitor.prefixHorizontal(horizontal, predicate);
        });
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/layout/sct-gsn-tree.ts":
/*!******************************************************!*\
  !*** ./sct-js/sources/viewer/layout/sct-gsn-tree.ts ***!
  \******************************************************/
/*! exports provided: GsnTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnTree", function() { return GsnTree; });
/* harmony import */ var _sct_vertical_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-vertical-tree */ "./sct-js/sources/viewer/layout/sct-vertical-tree.ts");
/* harmony import */ var _sct_gsn_tree_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sct-gsn-tree-node */ "./sct-js/sources/viewer/layout/sct-gsn-tree-node.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-tree.js              Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //


/**
 * <p>
 *  This is the {@link LayoutTree} for {@link GSN} instances. It is a
 *  {@link VerticalTree}: it lays out its {@link LayoutNode}s vertically. Its
 *  {@link LayoutNode}s are {@link GsnTreeNode}s, which are
 *  {@link HorizontalTree}s that have {@link GsnNode}s as their
 *  {@link LayoutNode}s. So this is a vertical tree of horizontal trees of
 *  GSN nodes.
 * </p>
 * <p>
 *  The {@link GsnNodeFactory} parameter of {@link #init} is optional; if
 *  unspecified, the global factory instance will be used.
 * </p>
 *
 * @author M. Anthony Aiello
 *
 * @constructor
 * @extends VerticalTree
 */
class GsnTree extends _sct_vertical_tree__WEBPACK_IMPORTED_MODULE_0__["VerticalTree"] {
    /**
     * <p>
     *  Initialize the instance from {@link GSN}. The {@link GsnNodeFactory} is
     *  optional; if unspecified, the global factory instance will be used.
     * </p>
     *
     * @param {GSN} gsn the GSN to lay out
     * @param {GsnNodeFactory} gsnNodeFactory the factory instance to use for
     *                                        {@link GsnNode} creation
     * @param {Metrics} metrics the metrics that should be used by this tree and
     *                          its nodes to size and lay out
     * @param {boolean} showAddresses true if addresses should be shown for GSN
     *                                elements
     * @param {Number} depth the depth of this {@link GsnTree} in the layout. If
     *                       unspecified, assumed to be zero (root)
     */
    initGsnTree(gsn, gsnNodeFactory, metrics, showAddresses, depth = 0) {
        this.metrics = metrics;
        this.showAddresses = showAddresses;
        this.depth = depth || 0;
        this.arcGraphics = {};
        this.xOffset = 0;
        this.yOffset = 0;
        // Recursively set up our children
        const children = [];
        gsn.vertical.forEach((verticalSubtree) => {
            const child = new GsnTree();
            child.initGsnTree(verticalSubtree, gsnNodeFactory, metrics, showAddresses, depth + 1);
            children.push(child);
        });
        // Create the local node
        const node = new _sct_gsn_tree_node__WEBPACK_IMPORTED_MODULE_1__["GsnTreeNode"]();
        node.initGsnTreeNode(gsn, gsnNodeFactory, metrics, showAddresses, depth);
        // Initialize our base class
        this.initVerticalTree(node, children);
        // The base padding for a goal is the metrics' vertical tree padding.
        if (this.node.node.type === 'goal') {
            this.interTreePadding = metrics.verticalTreePadding;
        }
    } // init
    init() {
        throw new Error('cannot init, use initGsnTree');
    }
    /**
     * Override the base {@link Tree#find} method to be aware of the details of the
     * the way our GSN layout tree works.
     * <ul>
     *   <li><strong>String</strong>, representing an ID to match; or</li>
     *   <li><strong>Function</strong>, which will be applied to each child.</li>
     * </ul>
     *
     * @param {string|Function} predicate the predicate to match
     *
     * @return the {@link GsnTree} found, or null if no tree matches
     */
    // @TODO: There appears to be a type error here. I think the author intended this
    // to return GsnNodes, and not GsnTreeNodes
    // as that is what the return type was originally in the above documentation
    // if that is the case, returning found.node will get the right answer
    find(predicate) {
        if (typeof predicate === 'string') {
            return this.find(function (tree) {
                return tree.id === predicate;
            });
        }
        const found = this.node.find(predicate);
        if (found) {
            return found;
        }
        for (const child of this.children) {
            const childFound = child.find(predicate);
            if (childFound) {
                return childFound;
            }
        }
        return null;
    }
    /**
     * Find the closest laid-out node to an x coordinate at a given depth.
     *
     * @param x the x coordinate
     * @param depth the depth at which to search
     *
     * @return {GsnNode} the node found
     */
    findClosestAtDepth(x, depth) {
        return this.findClosestAtDepthRecursive(x, depth, this.node.node, Infinity)[0];
    }
    /**
     * Recursive part of findClosestAtDepth
     */
    findClosestAtDepthRecursive(x, depth, node, dist) {
        if (this.depth === depth) {
            return this.node.findClosestToNode(x, node, dist);
        }
        else if (this.depth < depth) {
            let result = [node, dist];
            this.children.forEach((subtree) => {
                result = subtree.findClosestAtDepthRecursive(x, depth, result[0], result[1]);
            });
            return result;
        }
        else {
            throw new Error('Structural integrity failure in GsnTree: ' +
                'findClosestAtDepth_recursive descended below the search depth.');
        }
    }
    findClosestRecursive(x, y, node, distance, predicate) {
        // Delegate to our node, since it's actually a LayoutTree
        // and walk that horizontal tree
        let result = this.node.findClosestRecursive(x, y, node, distance, predicate);
        // then walk the next node down in the vertical gsn tree, repeating
        this.children.forEach((subtree) => {
            result = subtree.findClosestRecursive(x, y, result[0], result[1], predicate);
        });
        return result;
    }
    /*
     * A GsnTree's preLayout instructs its nodes to lay out, since they are trees
     */
    preLayout() {
        // First, recursively lay out our nodes (since they are trees)
        this.layOutNodes();
    }
    layOutNodes() {
        this.children.forEach((subtree) => {
            subtree.layOutNodes();
        });
        this.node.doLayout();
    }
    /**
     * postLayout for GSN Trees is all about making sure that elements at the same
     * depth in the tree are vertically aligned. This is decidedly non-hierarchical
     * and non-local, so it require several traversals to gather and apply the
     * changes.
     */
    postLayout() {
        const maxSpacingAtDepth = [];
        const leavesAtDepth = [];
        this.computeMaxSpacing(0, maxSpacingAtDepth, leavesAtDepth, 0);
        const levelForcedAtDepth = [];
        this.adjustForLeaves(0, maxSpacingAtDepth, leavesAtDepth, levelForcedAtDepth);
        this.adjustSpacing(0, maxSpacingAtDepth, levelForcedAtDepth);
    }
    /**
     * Determine the maximum amount of spacing between elements in any given "row"
     * so that we can make sure that elements at the same depth are vertically
     * aligned.
     */
    computeMaxSpacing(depth, maxSpacingAtDepth, leavesAtDepth, x) {
        if (this.parent) {
            // What we actually want to compute here is the maximum inter-node spacing.
            const spacing = this.y -
                this.parent.node.verticalCenter +
                this.parent.node.node.centerToBottom +
                this.node.verticalCenter -
                this.node.node.centerToTop;
            maxSpacingAtDepth[depth] =
                Math.max(spacing, maxSpacingAtDepth[depth]) || spacing;
        }
        // In order for leaf-spacing to work, we have to have absolute x values. We
        // will assign those here - they are working values and may be adjusted before
        // final positioning.
        this.preLeft = x + this.x - this.marginLeft;
        this.node.preLeft =
            x + this.x + this.horizontalCenter - this.node.horizontalCenter;
        this.preRight = this.preLeft + this.width;
        this.node.preRight = this.node.preLeft + this.node.width;
        leavesAtDepth[depth] = leavesAtDepth[depth] || [];
        if (!this.hasChildren()) {
            leavesAtDepth[depth].push(this);
        }
        this.children.forEach((subtree) => {
            subtree.computeMaxSpacing(depth + 1, maxSpacingAtDepth, leavesAtDepth, x + this.x);
        });
    }
    /**
     * Leaves break layout in that they may have a non-hierarchical impact on
     * spacing below them. We handle them here by adjusting the max spacing we've
     * defined. Since the adjustment means that max spacing should no longer be
     * applied relative to any parent, we mark that the level was "forced" at that
     * depth.
     */
    adjustForLeaves(depth, maxSpacingAtDepth, leavesAtDepth, levelForcedAtDepth) {
        // Head recursion this time.
        this.children.forEach((subtree) => {
            subtree.adjustForLeaves(depth + 1, maxSpacingAtDepth, leavesAtDepth, levelForcedAtDepth);
        });
        //		(depth > 0) &&
        if (depth > 0) {
            leavesAtDepth[depth - 1].forEach((leaf) => {
                if ((this.node.preLeft > leaf.node.preLeft &&
                    this.node.preLeft < leaf.node.preRight) ||
                    (this.node.preRight > leaf.node.preLeft &&
                        this.node.preRight < leaf.node.preRight)) {
                    // Inter-node spacing for a node to a (non-parent) leaf
                    const spacing = this.y -
                        leaf.node.verticalCenter +
                        leaf.node.node.centerToBottom +
                        this.node.verticalCenter -
                        this.node.node.centerToTop;
                    maxSpacingAtDepth[depth] =
                        Math.max(spacing, maxSpacingAtDepth[depth]) || spacing;
                    // @TODO: Why is this commented out?
                    //      levelForcedAtDepth[depth] = true;
                }
            });
        }
    }
    /**
     * Adjust the spacing for all elements at each depth, to effect vertical
     * alignment
     */
    adjustSpacing(depth, maxSpacingAtDepth, levelForcedAtDepth) {
        // Head recursion this time.
        this.children.forEach((subtree) => {
            subtree.adjustSpacing(depth + 1, maxSpacingAtDepth, levelForcedAtDepth);
        });
        if (this.parent) {
            if (levelForcedAtDepth[depth]) {
                this.y =
                    maxSpacingAtDepth[depth] -
                        this.node.verticalCenter +
                        this.node.node.verticalCenter;
            }
            else {
                this.y =
                    maxSpacingAtDepth[depth] +
                        this.parent.node.verticalCenter -
                        this.parent.node.node.centerToBottom -
                        this.node.verticalCenter +
                        this.node.node.centerToTop;
            }
        }
        this.computeHeight(); // recompute height since the subtree was updated
    }
    /**
     * Lay out each subtree relative to the local node.
     */
    layOutSubtrees() {
        // This array holds the coordinates for the "wall" at each (vertical)
        // depth. As we lay out each subtree, the wall gets further right - and not
        // necessarily uniformly. The initial case is the degenerate case of placing
        // the first subtree - an empty wall is correctly handled below.
        //
        // The wall therefore holds x coordinates that specify the width of the
        // wall
        const wall = [];
        // For correct handling of margins, we'll need to record the margin associated
        // with each entry in the wall.
        const wallMargins = [];
        // Determine where each subtree should go.
        this.children.forEach((subtree) => {
            // The first step is to determine the x coordinate for this subtree. To do
            // that, we effectively have to see how it "fits" next to its leftmost
            // sibling, which we can think of as the "wall" that this subtree will bump up
            // against. Remember, it's not enough to compare bounding boxes, we need to
            // consider the shape of the subtrees.
            //
            // To understand what's happening here, imagine that the wall is not uniform,
            // and looks like this (turn your head so it's vertical)
            //   --__--
            // Now imagine the current subtree looks like this:
            //   --_-
            // If we put them next to each other:
            //   --__--
            //   --_-
            // It's clear that the current subtree will hit the wall a depth 4 - after
            // depth 4, it doesn't matter anymore.
            //
            // We call depth 4, then our "forcing depth" and we take the 4th entry in our
            // wall list to be the "forcing right" and the 4th entry in our current
            // subtree's lefts list to be "forcing left".
            //
            // We arrive at the realization that depth 4 is our forcing depth by adding
            // the wall to the left (of the current subtree) at each common depth; our
            // forcing depth occurs when depth is maximized.
            let currentMaxDepth = 0;
            let forcingRight = 0;
            let forcingRightMargin = 0;
            let forcingLeft = 0;
            let forcingLeftMargin = 0;
            // Joint iteration over the indexes in common between wall and subtree.lefts
            const searchDepth = Math.min(wall.length, subtree.lefts.length);
            for (let depth = 0; depth < searchDepth; ++depth) {
                const newMax = wall[depth] + subtree.lefts[depth];
                if (newMax > currentMaxDepth) {
                    forcingRight = wall[depth];
                    forcingRightMargin = wallMargins[depth];
                    forcingLeft = subtree.lefts[depth];
                    forcingLeftMargin = subtree.marginLefts[depth];
                    currentMaxDepth = newMax;
                }
            }
            // If wall is (still) empty, we merely lay out relative to left of the
            // layout
            if (wall.length === 0) {
                subtree.x = 0;
            }
            // If wall is not empty, we lay out relative to forcing right. Now it
            // might be that the "highest" left does not coincide with forcing right -
            // this would happen if the wall is shorter than the current subtree. So
            // we need to find the max left and then shift down from forcing right the
            // difference between forcing left and max left.
            // The margin computation is the max of the margin for the forcing-right
            // node and the margin for the forcing-left node.
            else {
                const maxLeft = Math.max(...subtree.lefts);
                const margin = Math.max(forcingLeftMargin, forcingRightMargin);
                subtree.x = forcingRight - maxLeft + forcingLeft + margin;
            }
            const localTree = this.node;
            const childTree = subtree.node;
            const localNode = localTree.node;
            const childNode = childTree.node;
            // I hate this case logic, but I've spent hours (literally) trying to get
            // away from it and simply can't figure out how to.
            if (!localTree.hasChildren() && !childTree.hasChildren()) {
                subtree.y =
                    localNode.height +
                        Math.max(localNode.marginBottom, childNode.marginTop);
            }
            else if (!localTree.hasChildren() && childTree.hasChildren()) {
                subtree.y = localNode.height + childTree.marginTop;
            }
            else if (localTree.hasChildren() && !childTree.hasChildren()) {
                subtree.y = localTree.height + localTree.marginBottom;
            }
            else {
                if (localTree.maxBottom +
                    localTree.marginBottoms[localTree.maxBottomDepth] +
                    childTree.maxTop -
                    localNode.centerToBottom -
                    childNode.centerToTop >
                    Math.max(localNode.marginBottom, childNode.marginTop)) {
                    subtree.y =
                        localTree.height +
                            localTree.marginBottoms[localTree.maxBottomDepth];
                }
                else {
                    subtree.y =
                        localTree.centerToTop +
                            localNode.centerToBottom +
                            Math.max(localTree.marginBottom, childTree.marginTop);
                }
            }
            // Finally, update the wall with the rights from the subtree we just
            // placed.
            subtree.rights.forEach((right, depth) => {
                wall[depth] = right + subtree.x + subtree.horizontalCenter;
                wallMargins[depth] = subtree.marginRights[depth];
            });
        }); // for each subtree
    } // layOutSubtrees
    /**
     * Compute the height of the tree (and the top and bottom margin). This must
     * also be overridden from the default in vertical tree, to follow our more
     * precise handling of the GsnTreeNodes
     *
     */
    computeHeight() {
        let maxSubtreeHeight = 0;
        let maxSubtreeY = 0;
        let maxSubtreeMarginBottom = 0;
        this.children.forEach((subtree) => {
            if (subtree.height > maxSubtreeHeight) {
                maxSubtreeHeight = subtree.height;
                maxSubtreeY = subtree.y;
                maxSubtreeMarginBottom = subtree.marginBottom;
            }
        });
        // Our top margin is our node's top margin, since our node is the topmost
        // thing in our layout.
        this.marginTop = this.node.marginTop;
        if (this.hasChildren()) {
            // this.node.height is contained in max_subtree_y
            this.height = maxSubtreeY + maxSubtreeHeight;
            this.marginBottom = maxSubtreeMarginBottom;
        }
        else {
            this.height = this.node.height;
            this.marginBottom = this.node.marginBottom;
        }
        // Finally, set our vertical center-tos:
        this.centerToTop = this.verticalCenter;
        this.centerToBottom = this.height - this.verticalCenter;
    }
    /**
     * Translate an already-rendered GsnTree by the specified offsets. Note that
     * this never really resets, at present - we would need to reset the x_offset
     * and y_offset by overriding setPosition on the LayoutTree.
     *
     * @param dx the x offset
     * @param dy the y offset
     */
    translate(dx, dy) {
        // Recording this is an effect of the decision to make paths encode their
        // start location absolutely, rather than relatively positioning and using a
        // transform matrix, as we do for the nodes themselves. This also means that
        // a call to setPosition - which does reset this.x and this y - will not reset
        // the offsets.
        this.xOffset += dx;
        this.yOffset += dy;
        jQuery.each(this.arcGraphics, function (containerName, container) {
            jQuery.each(container, function (graphicsName, graphics) {
                graphics.setOffset(this.xOffset, this.yOffset);
            }.bind(this));
        }.bind(this));
        // End special handling for paths.
        this.x += dx;
        this.y += dy;
        this.children.forEach((subtree) => {
            subtree.translate(dx, dy);
        });
        this.node.translate(dx, dy);
    }
    /**
     * Detach the graphics for a rendered GsnTree.
     */
    detach() {
        jQuery.each(this.arcGraphics, function (containerName, container) {
            jQuery.each(container, function (graphicsName, graphics) {
                graphics.detach();
            }.bind(this));
        }.bind(this));
        this.children.forEach((subtree) => {
            subtree.detach();
        });
        this.node.detach();
    }
    update(renderer, left, top) {
        // Differences between the GSN and the Tree have been taken care of as the GSN
        // was edited (TODO). So, what we do now is re-run layout.
        this.doLayout();
        // Now, we re-position ourself.
        this.position(left, top);
        // Now, rather than re-running render, we run renderUpdates, which looks for
        // differences and, if possible, animates them.
        this.renderUpdates(renderer);
        // @TODO This likely needs to be here and elsewhere
        //this.updated = true;
    }
    /**
     * For any local-child pair where one has been updated, animate the transition
     * to the new arc needed to connect them. Does a full traversal, since each
     * renderUpdates method is expected to only actually take action if required
     *
     * @param renderer the renderer
     */
    renderUpdates(renderer) {
        this.children.forEach((subtree) => {
            if (this.updated || subtree.updated) {
                const localNode = this.node.node; // Our nodes are layout trees
                const childNode = subtree.node.node; // Our nodes are layout trees
                const pathString = this.computePathString(localNode, childNode);
                // Animate the transformation of the path.
                this.arcGraphics[renderer.name][childNode.id].animate({
                    path: pathString,
                }, 500, '<>');
            }
            subtree.renderUpdates(renderer);
            // @TODO This likely needs to be here
            //this.updated = false;
        });
        // @TODO: This was calling renderUpdates, which doesn't exist on GsnTreeNodes. appears to be a bug
        // where perhaps this method needs to be written?
        //this.node.renderUpdates(renderer);
    } // renderUpdates
    /**
     * Render the GsnTree using the given renderer
     *
     * @param renderer the renderer
     */
    render(renderer) {
        this.arcGraphics[renderer.name] = this.arcGraphics[renderer.name] || {};
        // DEBUG - layout visualization
        //   renderer.rect(renderer.group(),
        //                      this.node.id + '_layout_box', 'layout-box',
        //                      this.abs_x, this.abs_y,
        //                      this.width + this.margin_left + this.margin_right,
        //                      this.height + this.margin_top + this.margin_bottom);
        // END DEBUG
        // First traversal: render all of our arcs.
        this.children.forEach((subtree) => {
            const localNode = this.node.node; // Remember: our nodes are layout trees
            const childNode = subtree.node.node; // Remember: our nodes are layout trees
            const pathString = this.computePathString(localNode, childNode);
            const group = renderer.group();
            // Determine the attributes we'll set:
            const attrs = {};
            attrs['marker-end'] = 'url(#arrow)';
            // Put markers on the midpoint, as needed
            if (childNode.attrs['repeat']) {
                attrs['marker-mid'] = 'url(#dot)';
            }
            else if (childNode.attrs['optional']) {
                attrs['marker-mid'] = 'url(#empty-dot)';
            }
            // Create the path (indexed by child_node)
            renderer.path(group, localNode.id + '_to_' + childNode.id, 'down', pathString, attrs);
            this.arcGraphics[renderer.name][childNode.id] = group;
        });
        // Second traversal: do the subtrees (they will render above all the arcs)
        this.children.forEach((subtree) => {
            subtree.render(renderer);
        });
        // Finally, instruct our node (a GSN tree node) to render itself.
        this.node.render(renderer);
    }
    /**
     * Render the GsnTree using the given renderer for navigator display. This
     * differs from the full render, above, because we don't draw any arcs (they
     * don't show up well).
     *
     * @param renderer the renderer
     */
    renderNavigator(renderer) {
        // We don't draw arcs for the navigator - they are too hard to see.
        this.children.forEach((subtree) => {
            subtree.renderNavigator(renderer);
        });
        this.node.renderNavigator(renderer);
    }
    computePathString(localNode, childNode) {
        // Compute the directed distance from the center of the local_node to the
        // center of the child_node
        const xDist = childNode.x +
            childNode.horizontalCenter -
            localNode.x -
            localNode.horizontalCenter;
        // We insert a midpoint on every path because that allows us to put a
        // marker on the midpoint for those nodes that require them (repeated
        // node or optional node). So our xoffset becomes:
        const xoffset = xDist / 2.0;
        // Compute the directed distance between the bottom of the local node and
        // the top of the child node
        //
        // The "-9" accounts for the length of the arrow head.
        const yDist = childNode.y - localNode.y - localNode.height - 9;
        // Just like xoffset is xDist/2, the yoffset is half the vertical space
        // be.
        const yoffset = yDist / 2.0;
        let xWeight = 0;
        let yWeight = childNode.type === 'evidence' ? yoffset - 5 : 20;
        // If the xDist is very long, we want to weight the midpoint so that the
        // path will run flat for a while before curving down. We also want to
        // strengthen the yWeight in this case, which controls how far down the
        // path bends before flattening.
        if (xDist > 150) {
            xWeight = (xDist - 150) / 2.0;
            yWeight = yoffset;
        }
        else if (xDist < -150) {
            xWeight = (xDist + 150) / 2.0;
            yWeight = yoffset;
        }
        return ('M' +
            (localNode.x + localNode.horizontalCenter) +
            ',' +
            (localNode.y + localNode.height) +
            ' c0,' +
            yWeight +
            ' ' +
            (xoffset - xWeight) +
            ',' +
            yoffset +
            ' ' +
            xoffset +
            ',' +
            yoffset +
            ' s' +
            xoffset +
            ',' +
            (yoffset - yWeight) +
            ' ' +
            xoffset +
            ',' +
            yoffset +
            '');
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/layout/sct-horizontal-tree.ts":
/*!*************************************************************!*\
  !*** ./sct-js/sources/viewer/layout/sct-horizontal-tree.ts ***!
  \*************************************************************/
/*! exports provided: HorizontalTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalTree", function() { return HorizontalTree; });
/* harmony import */ var _sct_layout_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-layout-tree */ "./sct-js/sources/viewer/layout/sct-layout-tree.ts");
// -------------------------------------------------------------------------- //
// sct-horizontal-tree.js       M. Anthony Aiello                        2012 //
// -------------------------------------------------------------------------- //

/**
 * <p>
 *  A {@link LayoutTree} that lays out its {@link LayoutNodeInterface}s horizontally.
 * </p>
 *
 * @author M. Anthony Aiello
 *
 * @constructor
 * @extends LayoutTree
 */
class HorizontalTree extends _sct_layout_tree__WEBPACK_IMPORTED_MODULE_0__["LayoutTree"] {
    /**
     * <p>
     *  Initialize the base {@link HorizontalTree} instance.
     * </p>
     *
     * @param {LayoutNode} node the {@link LayoutNode} for this level in the layout
     * @param {HorizontalTree[]} children the subtrees of this
     *                                    {@link HorizontalTree}
     */
    initHorizontalTree(node, children) {
        // Initialize the underlying LayoutTree
        this.initLayoutTree(node, children, node.id + '_horizontal_layout');
    }
    /**
     * Alias of {@link #init} for subclasses
     *
     * @function
     */
    init() {
        throw new Error('Use initHorizontalTree instead');
    }
    /**
     * Recursively lay out each subtree relative to the local node.
     */
    doLayoutRecursive() {
        // Head recursion
        this.children.forEach((child) => {
            child.doLayoutRecursive();
        });
        // Now, each subtree is complete except that the subtrees have not been
        // positioned relative to this tree's local node.
        // First, position the subtrees
        this.layOutSubtrees();
        // Now, estimate the center of this tree - that is the midpoint between the
        // centers of the topmost and bottommost subtree
        this.estimateCenter();
        // Precise layout requires a more precise boundary for the tree than a mere
        // bounding box: we actually need to know the topmost and bottommost
        // coordinate at each level in the tree. We call these the tops and bottoms
        // lists, and they are computed now.
        //
        // A the same time, we record the margin for the topmost and bottommost node
        // at each depth of the tree.
        this.computeTopsAndBottoms();
        // Finally, we need to ensure that, given our estimated center, no subtree
        // is laid out such that its topmost coordinate is negative.
        this.finalizeCenter();
        // Now that layout is complete, we need to set our layout width and layout
        // height.
        this.computeHeight();
        this.computeWidth();
    }
    /**
     * Lay out each subtree relative to the local node.
     */
    layOutSubtrees() {
        // This array holds the coordinates for the "ceiling" at each (horizontal)
        // depth. As we lay out each subtree, the ceiling gets lower - and not
        // necessarily uniformly. The initial case is the degenerate case of placing
        // the first subtree - an empty ceiling is correctly handled below.
        //
        // The ceiling therefore holds y coordinates that specify the height of the
        // ceiling (or lowness, since positive numbers go down the canvas).
        const ceiling = [];
        // For correct handling of margins, we'll need to record the margin associated
        // with each entry in the ceiling.
        const ceilingMargins = [];
        // Determine where each subtree should go.
        this.children.forEach((subtree) => {
            // The first step is to determine the y coordinate for this subtree. To do
            // that, we effectively have to see how it "fits" next to its topmost
            // sibling, which we can think of as the "ceiling" that this subtree will
            // bump up against. Remember, it's not enough to compare bounding boxes, we
            // need to consider the shape of the subtrees.
            //
            // To understand what's happening here, imagine that the ceiling is not
            // uniform, and looks like this:
            //   --__--
            // Now imagine the current subtree looks like this:
            //   --_-
            // If we put them next to each other:
            //   --__--
            //   --_-
            // It's clear that the current subtree will hit the ceiling a depth 4 -
            // after depth 4, it doesn't matter anymore.
            //
            // We call depth 4, then our "forcing depth" and we take the 4th entry in
            // our ceiling list to be the "forcing bottom" and the 4th entry in our
            // current subtree's tops list to be "forcing top".
            //
            // We arrive at the realization that depth 4 is our forcing depth by adding
            // the ceiling to the top (of the current subtree) at each common depth;
            // our forcing depth occurs when depth is maximized.
            let currentMaxDepth = 0;
            let forcingBottom = 0;
            let forcingBottomMargin = 0;
            let forcingTop = 0;
            let forcingTopMargin = 0;
            // Joint iteration over the indexes in common between ceiling and
            // subtree.tops
            const searchDepth = Math.min(ceiling.length, subtree.tops.length);
            for (let depth = 0; depth < searchDepth; ++depth) {
                const newMax = ceiling[depth] + subtree.tops[depth];
                if (newMax > currentMaxDepth) {
                    forcingBottom = ceiling[depth];
                    forcingBottomMargin = ceilingMargins[depth];
                    forcingTop = subtree.tops[depth];
                    forcingTopMargin = subtree.marginTops[depth];
                    currentMaxDepth = newMax;
                }
            }
            // If ceiling is (still) empty, we merely lay out relative to top of the
            // layout
            if (ceiling.length === 0) {
                subtree.y = 0;
            }
            // If ceiling is not empty, we lay out relative to forcing bottom. Now it
            // might be that the "highest" top does not coincide with forcing bottom -
            // this would happen if the ceiling is shorter than the current subtree. So
            // we need to find the max top and then shift down from forcing bottom the
            // difference between forcing top and max top.
            // The margin computation is the max of the margin for the forcing-bottom
            // node and the margin for the forcing-top node.
            else {
                const maxTop = Math.max(...subtree.tops);
                const margin = Math.max(forcingTopMargin, forcingBottomMargin);
                subtree.y = forcingBottom - maxTop + forcingTop + margin;
            }
            // The margin computation leading to the x coordinate is the max of this
            // tree's right margin and the subtree's left margin. This implies that, to
            // ensure that all subtrees are left-aligned, all of the subtrees' left
            // margins must be identical (or smaller than this node's right margin).
            // Those assurances are not part of this layout tree's responsibility. It is
            // up to subclasses to enforce such assurances.
            subtree.x =
                this.node.width + Math.max(this.node.marginRight, subtree.marginLeft);
            // Finally, update the ceiling with the bottoms from the subtree we just
            // placed.
            subtree.bottoms.forEach((bottom, depth) => {
                ceiling[depth] = bottom + subtree.y + subtree.verticalCenter;
                ceilingMargins[depth] = subtree.marginBottoms[depth];
            });
        }); // for each subtree
    } // layOutSubtrees
    /**
     * Estimate the center of this tree - that is the midpoint between the centers
     * of the topmost and bottommost subtree.
     */
    estimateCenter() {
        if (this.hasChildren()) {
            // Compute the center of the topmost and bottommost subtree.
            const bottommostCenter = this.children[this.children.length - 1].y +
                this.children[this.children.length - 1]
                    .verticalCenter;
            const topmostCenter = this.children[0].y +
                this.children[0].verticalCenter;
            this.verticalCenter =
                (bottommostCenter - topmostCenter) / 2.0 + topmostCenter;
        }
        else {
            this.verticalCenter = this.node.verticalCenter;
        }
        this.horizontalCenter = this.node.horizontalCenter;
    }
    /**
     * <p>
     *  Precise layout requires a more precise boundary for the tree than a mere
     *  bounding box: we actually need to know the topmost and bottommost
     *  coordinate at each level in the tree. We call these the tops and bottoms
     *  lists, and they are computed now.
     * </p>
     * <p>
     *  A the same time, we record the margin for the topmost and bottommost node
     *  at each depth of the tree.
     * </p>
     */
    computeTopsAndBottoms() {
        // The tops list holds the directed y distance from the center of the topmost
        // node to the center of the tree at each depth in the tree
        this.tops = [];
        this.tops[0] = this.node.centerToTop;
        // Also store the max top and where it occurs - we use it for finalizing the
        // vertical center of this tree as well as for height computation.
        this.maxTop = this.node.centerToTop;
        this.maxTopDepth = 0;
        // The marginTops list holds the top margin for the topmost node at each
        // depth in the tree
        this.marginTops = [];
        this.marginTops[0] = this.node.marginTop;
        this.centerToTopMargin = this.node.marginTop + this.tops[0];
        // We fill these lists by copying the tops and marginTops lists from the
        // topmost subtree, then adding any deeper tops or marginTops from the next
        // subtree, and so on until all subtrees have been considered. Essentially,
        // tops and marginTops are built recursively as the tree is laid out.
        this.children.forEach((subtree) => {
            // Compute the directed y distance from the center of local node to the
            // center of the subtree
            const yDist = this.verticalCenter - subtree.verticalCenter - subtree.y;
            subtree.tops.forEach((top, depth) => {
                if (!this.tops[depth + 1]) {
                    this.tops[depth + 1] = yDist + top;
                    this.marginTops[depth + 1] =
                        subtree.marginTops[depth] + this.interTreePadding;
                    if (this.tops[depth + 1] > this.maxTop) {
                        this.maxTop = this.tops[depth + 1];
                        this.marginTop = this.marginTops[depth + 1];
                        this.maxTopDepth = depth + 1;
                    }
                    this.centerToTopMargin = Math.max(this.centerToTopMargin, this.marginTops[depth + 1] + this.tops[depth + 1]);
                }
            });
        });
        // The bottoms list holds the directed y distance from the center of the
        // bottommost node to the center of the tree at each depth in the tree
        this.bottoms = [];
        this.bottoms[0] = this.node.centerToBottom;
        // Also store the max bottom and where it occurs - we use it for height
        // computation.
        this.maxBottom = this.node.centerToBottom;
        this.maxBottomDepth = 0;
        // The marginBottoms list holds the bottom margin for the bottommost node at
        // each depth in the tree
        this.marginBottoms = [];
        this.marginBottoms[0] = this.node.marginBottom;
        this.centerToBottomMargin = this.node.marginBottom + this.bottoms[0];
        // We fill these lists by copying the tops and marginBottoms lists from the
        // bottommost subtree, then adding any deeper bottoms or marginBottoms from
        // the previous subtree, and so on until all subtrees have been considered.
        // Essentially, bottoms and marginBottoms are built recursively as the tree
        // is laid out.
        this.children.reverse().forEach((subtree) => {
            // Compute the directed y distance from the center of the local node to the
            // center of the subtree
            const yDist = subtree.y + subtree.verticalCenter - this.verticalCenter;
            subtree.bottoms.forEach((bottom, depth) => {
                if (!this.bottoms[depth + 1]) {
                    this.bottoms[depth + 1] = yDist + bottom;
                    this.marginBottoms[depth + 1] =
                        subtree.marginBottoms[depth] + this.interTreePadding;
                    if (this.bottoms[depth + 1] > this.maxBottom) {
                        this.maxBottom = this.bottoms[depth + 1];
                        this.maxBottomDepth = depth + 1;
                    }
                    this.centerToBottomMargin = Math.max(this.centerToBottomMargin, this.marginBottoms[depth + 1] + this.bottoms[depth + 1]);
                }
            });
        });
    } // computeTopsAndBottoms
    /**
     * Finally, we need to ensure that, given our estimated center, no subtree nor
     * the local node is laid out such that its topmost coordinate is negative.
     */
    finalizeCenter() {
        // There are two conditionals here, each with a loop. They rarely happen at
        // the same time.
        // Possibly, the top edge of the local node is negative. This would happen if
        // the top edge local node is "above" the top edge of the topmost subtree -
        // usually this happens if the local node is taller than its (single) subtree.
        //
        // In this case, we need to shift the subtrees down so that the top edge of
        // the local node can be placed at 0.
        if (this.verticalCenter - this.node.verticalCenter < 0) {
            const offset = this.node.verticalCenter - this.verticalCenter;
            this.children.forEach((subtree) => {
                subtree.y += offset;
            });
            this.verticalCenter += offset;
        }
        // It's also possible that one of our subtrees has an element whose top edge
        // is negative.
        if (this.maxTop > this.verticalCenter) {
            const offset = this.maxTop - this.verticalCenter;
            this.children.forEach((subtree) => {
                subtree.y += offset;
            });
            this.verticalCenter += offset;
        }
    } // finalizeCenter
    /**
     * Compute the height of the tree.
     */
    computeHeight() {
        this.height = this.maxTop + this.maxBottom;
        // Set our vertical center-tos:
        this.centerToTop = this.verticalCenter;
        this.centerToBottom = this.height - this.verticalCenter;
        this.marginTop = this.centerToTopMargin - this.centerToTop;
        this.marginBottom = this.centerToBottomMargin - this.centerToBottom;
    }
    /**
     * Compute the width of the tree (and the left and right margin)
     */
    computeWidth() {
        // Find the widest subtree and record its width and margins.
        let maxSubtreeWidth = 0;
        let maxSubtreeMarginLeft = 0;
        let maxSubtreeMarginRight = 0;
        this.children.forEach((subtree) => {
            if (subtree.width > maxSubtreeWidth) {
                maxSubtreeWidth = subtree.width;
                maxSubtreeMarginLeft = subtree.marginLeft;
                maxSubtreeMarginRight = subtree.marginRight;
            }
        });
        // Our left margin is our node's left margin, since our node is the leftmost
        // thing in our layout.
        this.marginLeft = this.node.marginLeft;
        if (this.hasChildren()) {
            this.width =
                this.node.width +
                    Math.max(this.node.marginRight, maxSubtreeMarginLeft) +
                    maxSubtreeWidth;
            this.marginRight = maxSubtreeMarginRight;
        }
        else {
            this.width = this.node.width;
            this.marginRight = this.node.marginRight;
        }
        // Finally, set our horizontal center-tos:
        this.centerToLeft = this.horizontalCenter;
        this.centerToRight = this.width - this.horizontalCenter;
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/layout/sct-layout-tree.ts":
/*!*********************************************************!*\
  !*** ./sct-js/sources/viewer/layout/sct-layout-tree.ts ***!
  \*********************************************************/
/*! exports provided: LayoutTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutTree", function() { return LayoutTree; });
/* harmony import */ var _tree_sct_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tree/sct-tree */ "./sct-js/sources/viewer/tree/sct-tree.ts");
// -------------------------------------------------------------------------- //
// sct-layout-tree2.js          M. Anthony Aiello                        2012 //
// -------------------------------------------------------------------------- //

/**
 * <p>
 *  The {@link LayoutTree} recursively describes the layout of
 *  {@link N}s that extend {@link LayoutNode}s.
 *   This base implementation is degenerate; it is intended
 *  to be extended by implementations that provide a certain kind of layout.
 * </p>
 * <p>
 *  As an example, the SCT provides both a {@link HorizontalTree} that effects a
 *  horizontal layout of its {@link N}s as well as a
 *  {@link VerticalTree} that effects a vertical layout of its
 *  {@link LayoutNodes}.
 * </p>
 *
 * <h2>Relationships</h2>
 * <p>
 *  A {@link LayoutTree} both <em>is a</em> {@link N} and <em>has
 *  a</em> {@link N}. The {@link LayoutTree} is also a {@link Tree}, of
 *  course, and inherits all of {@link Tree}'s methods.
 * </p>
 * <p>
 *  The <em>has-a</em> relationship is not surprising: the {@link LayoutTree} is
 *  responsible for laying out {@link N}s, so there must be a
 *  {@link N} at each level of the {@link LayoutTree}'s recursive
 *  structure. Moreover, keeping the details of the node hidden in a separate
 *  type means that a single {@link LayoutTree} can contain (recursively) and
 *  lay out many different kinds of {@link N}s.
 * </p>
 * <p>
 *  The <em>is-a</em> relationship might be more surprising, but it is
 *  tremendously powerful. Since a {@link LayoutTree} <em>is a</em>
 *  {@link N}, it can be used anywhere is {@link N} is
 *  expected. That means that a {@link LayoutTree} can be used to lay out other
 *  {@link LayoutTree}.
 * </p>
 * <p>
 *  As an example, we make use of this fact in the SCT for GSN layout: GSN is
 *  laid out as a {@link VerticalTree} whose {@link N}s are, in fact,
 *  {@link HorizontalTree}s.
 * </p>
 *
 * @author M. Anthony Aiello
 *
 * @extends N
 * @extends Tree
 *
 * @constructor
 */
class LayoutTree extends _tree_sct_tree__WEBPACK_IMPORTED_MODULE_0__["Tree"] {
    /**
     * <p>
     *  Initialize the base {@link LayoutTree} instance. {@link Tree#id} is derived
     *  from the {@link N}'s ID and no further attempt to ensure uniqueness
     *  is made. It is essential, therefore, that the node's ID be unique.
     * </p>
     *
     * @param {N} node the {@link N} for this level in the layout
     * @param {LayoutTree[]} children the subtrees of this {@link LayoutTree}
     * @param {String} id an optional, explicitly set ID
     */
    initLayoutTree(node, children, id) {
        this.node = node;
        this.verticalCenter = node.verticalCenter;
        this.horizontalCenter = node.horizontalCenter;
        this.centerToLeft = node.horizontalCenter;
        this.centerToRight = node.width - node.horizontalCenter;
        this.centerToTop = node.verticalCenter;
        this.centerToBottom = node.height - node.verticalCenter;
        this.marginTop = 0;
        this.marginBottom = 0;
        this.marginRight = 0;
        this.marginLeft = 0;
        this.interTreePadding = 0;
        this.width = 0;
        this.height = 0;
        this.x = 0;
        this.y = 0;
        // Initialize our base instance.
        this.initTree(id ? id : this.node.id + '_layout_tree', children);
    } // init
    /**
     * Alias of {@link #init} for subclasses
     *
     * @function
     */
    init() {
        throw new Error('Use initLayoutTree instead');
    }
    /**
     * <p>
     *  Cause the {@link LayoutTree} to recursively lay out its {@link LayoutNodes}.
     *  {@link #preLayout} will be called before layout begins; {@link #postLayout}
     *  will be called when layout is complete.
     * </p>
     * <p>
     *  Subclasses should implement doLayout_recursive to do the real work of
     *  layout. Clients should not, however, directly call doLayout_recursive.
     * </p>
     */
    doLayout() {
        this.preLayout();
        this.doLayoutRecursive();
        this.postLayout();
    }
    /**
     * This method is called before recursive layout starts. It can be used for
     * any sort of work that must be done at a "global" level. This base
     * implementation is empty.
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    preLayout() { }
    /**
     * This method is called after recursive layout completes. It can be used for
     * any sort of final tweaks that must be applied at a "global" level. This base
     * implementation is empty.
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    postLayout() { }
    /**
     * Absolutely position the {@link LayoutTree} and its {@link N}s.
     *
     * @param x the x coordinate to use as an offset for absolute
     *                   positioning
     * @param y the y coordinate to use as an offset for absolute
     *                   positioning
     */
    positionSubtree(x, y) {
        // These are for layout debugging only
        this.absX = x + this.x - this.marginLeft;
        this.absY = y + this.y - this.marginTop;
        // End layout debugging.
        this.node.position(x + this.x + this.horizontalCenter, y + this.y + this.verticalCenter);
        this.children.forEach((subtree) => {
            subtree.positionSubtree(x + this.x, y + this.y);
        });
    }
    /**
     * <p>
     *  For the base {@link LayoutTree}, this method is an alias of
     *  {@link #position}. It is provided so that subclasses can have a chance to
     *  act differently if the {@link LayoutTree} is used as a {@link N}.
     * </p>
     *
     * @param x the x coordinate to use as an offset for absolute
     *                   positioning
     * @param y the y coordinate to use as an offset for absolute
     *                   positioning
     */
    position(x, y) {
        return this.positionSubtree(x, y);
    }
    // -------------------------------------------------------------------------- //
    // ------------------------------- Searching -------------------------------- //
    /**
     * <p>
     *   Given a point as an x and y coordinate, find the {@link N} in this
     *   {@link LayoutTree} that is closest (using distance to center of the
     *   {@link N}) to the point.
     * </p>
     *
     * @param x the x coordinate of the point
     * @param y the y coordinate of the point
     * @param predicate the predicate to used to filter those nodes
     *                             being considered (optional)
     *
     * @return the {@link layoutNodeInterface} closest to the given coordinates
     */
    findClosest(x, y, predicate) {
        return this.findClosestRecursive(x, y, this.node, Infinity, predicate)[0];
    }
    // -------------------------------------------------------------------------- //
    // ---------------------------- Private Methods ----------------------------- //
    /**
     * Recursive component of {@link #findClosest}. Subclasses that lay out trees
     * as nodes must override this to delegate responsibility to the node.
     *
     * @param x the x coordinate of the point
     * @param y the y coordinate of the point
     * @param node the current guess as to the closest node
     * @param distance the distance to the current guess
     * @param predicate the predicate to use to exclude certain nodes
     *                             from being considered (optional)
     *
     * @return a heterogenous array of LayoutNodeInterface and Number: the current
     *                 LayoutNodeInterface and the best distance
     */
    findClosestRecursive(x, y, node, distance, predicate) {
        let closest = node;
        let closestDistance = distance;
        const deltaX = this.node.x + this.node.horizontalCenter - x;
        const deltaY = this.node.y + this.node.verticalCenter - y;
        const ourDistance = deltaX * deltaX + deltaY * deltaY;
        if (ourDistance < distance) {
            closest = this.node;
            closestDistance = ourDistance;
        }
        let result = [closest, closestDistance];
        for (const child of this.children) {
            if (!predicate || predicate(child)) {
                result = child.findClosestRecursive(x, y, result[0], result[1], null);
            }
        }
        return result;
    }
    /**
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    doLayoutRecursive() { }
}


/***/ }),

/***/ "./sct-js/sources/viewer/layout/sct-vertical-tree.ts":
/*!***********************************************************!*\
  !*** ./sct-js/sources/viewer/layout/sct-vertical-tree.ts ***!
  \***********************************************************/
/*! exports provided: VerticalTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalTree", function() { return VerticalTree; });
/* harmony import */ var _sct_layout_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-layout-tree */ "./sct-js/sources/viewer/layout/sct-layout-tree.ts");
// -------------------------------------------------------------------------- //
// sct-vertical-tree.js         M. Anthony Aiello                        2012 //
// -------------------------------------------------------------------------- //

/**
 * <p>
 *  A {@link LayoutTree} that lays out its {@link LayoutNodeInterface}s vertically.
 * </p>
 *
 * @author M. Anthony Aiello
 *
 * @constructor
 * @extends LayoutTree
 */
class VerticalTree extends _sct_layout_tree__WEBPACK_IMPORTED_MODULE_0__["LayoutTree"] {
    /**
     * <p>
     *  Initialize the base {@link VerticalTree} instance.
     * </p>
     *
     * @param {LayoutNode} node the {@link LayoutNode} for this level in the layout
     * @param {VerticalTree[]} children the subtrees of this {@link Vertical}
     */
    initVerticalTree(node, children) {
        // Initialize the underlying LayoutTree
        this.initLayoutTree(node, children, node.id + '_vertical_layout');
    }
    /**
     * Alias of {@link #init} for subclasses
     *
     * @function
     */
    init() {
        throw new Error('Call initVertTree instead');
    }
    /**
     * Recursively lay out each subtree relative to the local node.
     */
    doLayoutRecursive() {
        // Head recursion
        this.children.forEach((child) => {
            child.doLayoutRecursive();
        });
        // Now, each subtree is complete except that the subtrees have not been
        // positioned relative to this tree's local node.
        // First, position the subtrees
        this.layOutSubtrees();
        // Now, estimate the center of this tree - that is the midpoint between the
        // centers of the leftmost and rightmost subtree
        this.estimateCenter();
        // Precise layout requires a more precise boundary for the tree than a mere
        // bounding box: we actually need to know the leftmost and rightmost
        // coordinate at each level in the tree. We call these the lefts and rights
        // lists, and they are computed now.
        //
        // A the same time, we record the margin for the leftmost and rightmost node
        // at each depth of the tree.
        this.computeLeftsAndRights();
        // Finally, we need to ensure that, given our estimated center, no subtree
        // is laid out such that its leftmost coordinate is negative.
        this.finalizeCenter();
        // Now that layout is complete, we need to set our layout height and layout
        // width.
        this.computeWidth();
        this.computeHeight();
    }
    /**
     * Lay out each subtree relative to the local node.
     */
    layOutSubtrees() {
        // This array holds the coordinates for the "wall" at each (vertical)
        // depth. As we lay out each subtree, the wall gets further right - and not
        // necessarily uniformly. The initial case is the degenerate case of placing
        // the first subtree - an empty wall is correctly handled below.
        //
        // The wall therefore holds x coordinates that specify the width of the
        // wall
        const wall = [];
        // For correct handling of margins, we'll need to record the margin associated
        // with each entry in the wall.
        const wallMargins = [];
        // Determine where each subtree should go.
        this.children.forEach((subtree) => {
            // The first step is to determine the x coordinate for this subtree. To do
            // that, we effectively have to see how it "fits" next to its leftmost
            // sibling, which we can think of as the "wall" that this subtree will bump up
            // against. Remember, it's not enough to compare bounding boxes, we need to
            // consider the shape of the subtrees.
            //
            // To understand what's happening here, imagine that the wall is not uniform,
            // and looks like this (turn your head so it's vertical)
            //   --__--
            // Now imagine the current subtree looks like this:
            //   --_-
            // If we put them next to each other:
            //   --__--
            //   --_-
            // It's clear that the current subtree will hit the wall a depth 4 - after
            // depth 4, it doesn't matter anymore.
            //
            // We call depth 4, then our "forcing depth" and we take the 4th entry in our
            // wall list to be the "forcing right" and the 4th entry in our current
            // subtree's lefts list to be "forcing left".
            //
            // We arrive at the realization that depth 4 is our forcing depth by adding
            // the wall to the left (of the current subtree) at each common depth; our
            // forcing depth occurs when depth is maximized.
            let currentMaxDepth = 0;
            let forcingRight = 0;
            let forcingRightMargin = 0;
            let forcingLeft = 0;
            let forcingLeftMargin = 0;
            // Joint iteration over the indexes in common between wall and subtree.lefts
            const searchDepth = Math.min(wall.length, subtree.lefts.length);
            for (let depth = 0; depth < searchDepth; ++depth) {
                const newMax = wall[depth] + subtree.lefts[depth];
                if (newMax > currentMaxDepth) {
                    forcingRight = wall[depth];
                    forcingRightMargin = wallMargins[depth];
                    forcingLeft = subtree.lefts[depth];
                    forcingLeftMargin = subtree.marginLefts[depth];
                    currentMaxDepth = newMax;
                }
            }
            // If wall is (still) empty, we merely lay out relative to left of the
            // layout
            if (wall.length === 0) {
                subtree.x = 0;
            }
            // If wall is not empty, we lay out relative to forcing right. Now it
            // might be that the "highest" left does not coincide with forcing right -
            // this would happen if the wall is shorter than the current subtree. So
            // we need to find the max left and then shift down from forcing right the
            // difference between forcing left and max left.
            // The margin computation is the max of the margin for the forcing-right
            // node and the margin for the forcing-left node.
            else {
                const maxLeft = Math.max(...subtree.lefts);
                const margin = Math.max(forcingLeftMargin, forcingRightMargin);
                subtree.x = forcingRight - maxLeft + forcingLeft + margin;
            }
            // The margin computation leading to the y coordinate is the max of this
            // tree's bottom margin and the subtree's top margin. This implies that, to
            // ensure that all subtrees are top-aligned, all of the subtrees' top
            // margins must be identical (or smaller than this node's bottom margin).
            // Those assurances are not part of this layout tree's responsibility. It is
            // up to subclasses to enforce such assurances.
            subtree.y =
                this.node.height +
                    Math.max(this.node.marginBottom, subtree.marginTop);
            // Finally, update the wall with the rights from the subtree we just
            // placed.
            subtree.rights.forEach((right, depth) => {
                wall[depth] = right + subtree.x + subtree.horizontalCenter;
                wallMargins[depth] = subtree.marginRights[depth];
            });
        }); // for each subtree
    } // layOutSubtrees
    /**
     * Estimate the center of this tree - that is the midpoint between the centers
     * of the leftmost and rightmost subtree.
     */
    estimateCenter() {
        if (this.hasChildren()) {
            // Compute the center of the leftmost and rightmost subtree.
            const rightmostCenter = this.children[this.children.length - 1].x +
                this.children[this.children.length - 1]
                    .horizontalCenter;
            const leftmostCenter = this.children[0].x +
                this.children[0].horizontalCenter;
            this.horizontalCenter =
                (rightmostCenter - leftmostCenter) / 2.0 + leftmostCenter;
        }
        else {
            this.horizontalCenter = this.node.horizontalCenter;
        }
        this.verticalCenter = this.node.verticalCenter;
    }
    /**
     * <p>
     *  Precise layout requires a more precise boundary for the tree than a mere
     *  bounding box: we actually need to know the leftmost and rightmost
     *  coordinate at each level in the tree. We call these the lefts and rights
     *  lists, and they are computed now.
     * </p>
     * <p>
     *  A the same time, we record the margin for the leftmost and rightmost node
     *  at each depth of the tree.
     * </p>
     */
    computeLeftsAndRights() {
        // The lefts list holds the directed y distance from the center of the leftmost
        // node to the center of the tree at each depth in the tree
        this.lefts = [];
        this.lefts[0] = this.node.centerToLeft;
        // Also store the max left and where it occurs - we use it for finalizing the
        // horizontal center of this tree as well as for width computation.
        this.maxLeft = this.node.centerToLeft;
        this.maxLeftDepth = 0;
        // The marginLefts list holds the left margin for the leftmost node at each
        // depth in the tree
        this.marginLefts = [];
        this.marginLefts[0] = this.node.marginLeft;
        // Assumed to occur in conjunction with max_left. This is not technically
        // accurate, but to be really accurate requires more work than seems
        // profitable at the moment.
        this.marginLeft = this.node.marginLeft;
        // We fill these lists by copying the lefts and marginLefts lists from the
        // leftmost subtree, then adding any deeper lefts or marginLefts from the
        // next subtree, and so on until all subtrees have been considered.
        // Essentially, lefts and marginLefts are built recursively as the tree is
        // laid out.
        this.children.forEach((subtree) => {
            // Compute the directed x distance from the center of local node to the
            // center of the subtree
            const xDist = this.horizontalCenter - subtree.horizontalCenter - subtree.x;
            subtree.lefts.forEach((left, depth) => {
                if (!this.lefts[depth + 1]) {
                    this.lefts[depth + 1] = xDist + left;
                    this.marginLefts[depth + 1] =
                        subtree.marginLefts[depth] + this.interTreePadding;
                    if (this.lefts[depth + 1] > this.maxLeft) {
                        this.maxLeft = this.lefts[depth + 1];
                        this.marginLeft = this.marginLefts[depth + 1];
                        this.maxLeftDepth = depth + 1;
                    }
                }
            });
        });
        // The rights list holds the directed y distance from the center of the
        // rightmost node to the center of the tree at each depth in the tree
        this.rights = [];
        this.rights[0] = this.node.centerToRight;
        // Also store the max right and where it occurs - we use it for width
        // computation.
        this.maxRight = this.node.centerToRight;
        this.maxRightDepth = 0;
        // The marginRights list holds the right margin for the rightmost node at
        // each depth in the tree
        this.marginRights = [];
        this.marginRights[0] = this.node.marginRight;
        // Assumed to occur in conjunction with max_right. This is not technically
        // accurate, but to be really accurate requires more work than seems
        // profitable at the moment.
        this.marginRight = this.node.marginRight;
        // We fill these lists by copying the lefts and marginRights lists from the
        // rightmost subtree, then adding any deeper rights or marginRights from
        // the previous subtree, and so on until all subtrees have been considered.
        // Essentially, rights and marginRights are built recursively as the tree
        // is laid out.
        this.children.reverse().forEach((subtree) => {
            // Compute the directed y distance from the center of the local node to the
            // center of the subtree
            const xDist = subtree.x + subtree.horizontalCenter - this.horizontalCenter;
            subtree.rights.forEach((right, depth) => {
                if (!this.rights[depth + 1]) {
                    this.rights[depth + 1] = xDist + right;
                    this.marginRights[depth + 1] =
                        subtree.marginRights[depth] + this.interTreePadding;
                    if (this.rights[depth + 1] > this.maxRight) {
                        this.maxRight = this.rights[depth + 1];
                        this.marginRight = this.marginRights[depth + 1];
                        this.maxRightDepth = depth + 1;
                    }
                }
            });
        });
    } // computeRightsAndLefts
    /**
     * Finally, we need to ensure that, given our estimated center, no subtree nor
     * the local node is laid out such that its leftmost coordinate is negative.
     */
    finalizeCenter() {
        // There are two conditionals here, each with a loop. They rarely happen at
        // the same time.
        // Possibly, the left edge of the local node is negative. This would happen if
        // the left edge local node is left of the left edge of the leftmost subtree -
        // usually this happens if the local node is taller than its (single) subtree.
        //
        // In this case, we need to shift the subtrees right so that the left edge of
        // the local node can be placed at 0.
        if (this.horizontalCenter - this.node.horizontalCenter < 0) {
            const offset = this.node.horizontalCenter - this.horizontalCenter;
            this.children.forEach((subtree) => {
                subtree.x += offset;
            });
            this.horizontalCenter += offset;
        }
        // It's also possible that one of our subtrees has an element whose left edge
        // is negative.
        if (this.maxLeft > this.horizontalCenter) {
            const offset = this.maxLeft - this.horizontalCenter;
            this.children.forEach((subtree) => {
                subtree.x += offset;
            });
            this.horizontalCenter += offset;
        }
    } // finalizeCenter
    /**
     * Compute the width of the tree.
     */
    computeWidth() {
        this.width = this.maxLeft + this.maxRight;
        // Set our horizontal center-tos
        this.centerToLeft = this.horizontalCenter;
        this.centerToRight = this.width - this.horizontalCenter;
        // @TODO: eliminate
        // I have no idea what I was thinking when I started to write this.
        //   if (this.hasChildren()) {
        //     this.marginLeft;
        //     this.marginRight;
        //   }
    }
    /**
     * Compute the height of the tree (and the top and bottom margin)
     */
    computeHeight() {
        // Find the widest subtree and record its margins.
        let maxSubtreeHeight = 0;
        let maxSubtreeMarginTop = 0;
        let maxSubtreeMarginBottom = 0;
        this.children.forEach((subtree) => {
            if (subtree.height > maxSubtreeHeight) {
                maxSubtreeHeight = subtree.height;
                maxSubtreeMarginTop = subtree.marginTop;
                maxSubtreeMarginBottom = subtree.marginBottom;
            }
        });
        // Our top margin is our node's top margin, since our node is the topmost
        // thing in our layout.
        this.marginTop = this.node.marginTop;
        if (this.hasChildren()) {
            this.height =
                this.node.height +
                    Math.max(this.node.marginBottom, maxSubtreeMarginTop) +
                    maxSubtreeHeight;
            this.marginBottom = maxSubtreeMarginBottom;
        }
        else {
            this.height = this.node.height;
            this.marginBottom = this.node.marginBottom;
        }
        // Finally, set our vertical center-tos:
        this.centerToTop = this.verticalCenter;
        this.centerToBottom = this.height - this.verticalCenter;
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-gsn-assumption.ts":
/*!***********************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-gsn-assumption.ts ***!
  \***********************************************************/
/*! exports provided: GsnAssumption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnAssumption", function() { return GsnAssumption; });
/* harmony import */ var _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-gsn-node */ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-assumption.js        Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //

/**
 * This class represents a GSN Assumption.
 *
 * @constructor
 * @extends GsnNode
 * @final
 *
 * @param {GSN} gsn the gsn from which the Assumption will be created
 * @param {Metrics} metrics the {@link Metrics} used to render this node
 * @param {boolean} showAddresses true if addresses should be shown for GSN
 *                                elements
 *
 * @return {GsnAssumption} the new Assumption
 */
class GsnAssumption extends _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__["GsnNode"] {
    constructor(gsn, metrics, showAddresses) {
        super();
        this.renderShape = function (renderer, group) {
            this.shape[renderer.name] = renderer.rect(group, this.id + '_shape', 'context gsn-assumption', 0, 0, this.width, this.height, this.metrics.contextXRadius, this.metrics.contextYRadius);
            renderer.text(group, this.id + '_assumption_marker', 'name', 'A', this.width, this.height, {
                'font-size': 16,
            });
        };
        this.width = metrics.contextWidth;
        this.height = metrics.contextHeight;
        this.initGsnNode(gsn, metrics, showAddresses);
        this.marginLeft = metrics.contextHorizontalMargin;
        this.marginRight = metrics.contextHorizontalMargin;
        this.marginBottom = metrics.contextVerticalMargin;
        this.marginTop = metrics.contextVerticalMargin;
    }
    /**
     * computeConfidencePointX - compute the x position of the confidence point
     *                           graphic
     *
     * @return the x position of the confidence point graphic
     */
    computeConfidencePointX() {
        return this.width - 10;
    }
    /**
     * computeConfidencePointY - compute the y position of the confidence point
     *                           graphic
     *
     * @return the y position of the confidence point graphic
     */
    computeConfidencePointY() {
        return -1;
    }
    renderNavigatorShape(renderer, group) {
        this.shape[renderer.name] = renderer.rect(group, this.id + '_nav_shape', 'context', 0, 0, this.width, this.height, this.metrics.contextXRadius, this.metrics.contextYRadius);
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-gsn-away-context.ts":
/*!*************************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-gsn-away-context.ts ***!
  \*************************************************************/
/*! exports provided: GsnAwayContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnAwayContext", function() { return GsnAwayContext; });
/* harmony import */ var _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-gsn-node */ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-away-context.js      Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //

/**
 * This class represents a GSN Away Context.
 *
 * @constructor
 * @extends GsnNode
 * @final
 *
 * @param {GSN} gsn the gsn from which the Away Context will be created
 * @param {Metrics} metrics the {@link Metrics} used to render this node
 * @param {boolean} showAddresses true if addresses should be shown for GSN
 *                                elements
 *
 * @return {GsnAwayContext} the new Away Context
 */
class GsnAwayContext extends _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__["GsnNode"] {
    constructor(gsn, metrics, showAddresses) {
        super();
        let argumentName = '';
        let queryType = null;
        let queryId = null;
        // Break the link into pieces so that we can nicely format the link.
        if (gsn.attrs['link']) {
            const pieces = gsn.attrs['link'].split(/\.gsn\#?\??/);
            argumentName = pieces[0] || '';
            if (pieces[1]) {
                const queryPieces = pieces[1].split('=');
                queryType = queryPieces[0];
                queryId = queryPieces[1];
            }
        }
        // No matter what, we want to show the argument name.
        this.link = argumentName;
        // Add query type and ID, as appropriate.
        if (queryType && queryType !== '' && queryId && queryId !== '') {
            if (queryType === 'present') {
                this.link += ' (CSS ID ' + queryId + ')';
            }
            else if (queryType === 'gsn-id') {
                this.link += ' (GSN ID ' + queryId + ')';
            }
        }
        const linkWidth = metrics.computeWidth(this.link);
        this.width = Math.max(metrics.contextWidth, linkWidth + metrics.packageIconWidth);
        this.height = metrics.contextHeight;
        this.initGsnNode(gsn, metrics, showAddresses);
        this.bottomHeight = 25;
        this.marginLeft = metrics.contextHorizontalMargin;
        this.marginRight = metrics.contextHorizontalMargin;
        this.marginBottom = metrics.contextVerticalMargin + this.bottomHeight;
        this.marginTop = metrics.contextVerticalMargin;
    }
    /**
     * computeConfidencePointX - compute the x position of the confidence point
     *                           graphic
     *
     * @return the x position of the confidence point graphic
     */
    computeConfidencePointX() {
        return this.width - 10;
    }
    /**
     * computeConfidencePointY - compute the y position of the confidence point
     *                           graphic
     *
     * @return the y position of the confidence point graphic
     */
    computeConfidencePointY() {
        return -1;
    }
    renderShape(renderer, group) {
        // TODO: this rendering strategy works, but it makes the glow a bit weird and
        //       inconsistent with other elements. Might want to change to path-based
        //       rendering, here.
        this.shape[renderer.name] = renderer.rect(group, this.id + '_shape', 'context gsn-away-context', 0, 0, this.width, this.height + this.bottomHeight, this.metrics.contextXRadius, this.metrics.contextYRadius);
        renderer.rect(group, this.id + '_bottom', 'goal', 0, this.height, this.width, this.bottomHeight);
        this.renderPackageIcon(renderer, group, 'grey', this.metrics, 3, this.height + 3);
        if (this.link) {
            renderer.text(group, this.id + '_link_text', 'element-text', this.link, this.metrics.packageIconWidth + 6, this.height + this.bottomHeight - 6, {
                'font-size': 10,
            });
        }
    }
    renderNavigatorShape(renderer, group) {
        this.shape[renderer.name] = renderer.rect(group, this.id + '_nav_shape', 'context', 0, 0, this.width, this.height, this.metrics.contextXRadius, this.metrics.contextYRadius);
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-gsn-away-goal.ts":
/*!**********************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-gsn-away-goal.ts ***!
  \**********************************************************/
/*! exports provided: GsnAwayGoal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnAwayGoal", function() { return GsnAwayGoal; });
/* harmony import */ var _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-gsn-node */ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-away-goal.js         Dependable Computing                     2016 //
// -------------------------------------------------------------------------- //

/**
 * This class represents a GSN Away Goal.
 *
 * @constructor
 * @extends GsnNode
 * @final
 *
 * @param {GSN} gsn the gsn from which the Away Goal will be created
 * @param {Metrics} metrics the {@link Metrics} used to render this node
 * @param {boolean} showAddresses true if addresses should be shown for GSN
 *                                elements
 *
 * @return {GsnAwayGoal} the new Away Goal
 */
class GsnAwayGoal extends _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__["GsnNode"] {
    constructor(gsn, metrics, showAddresses) {
        super();
        let argumentName = '';
        let queryType = null;
        let queryId = null;
        // Break the link into pieces so that we can nicely format the link.
        if (gsn.attrs['link']) {
            const pieces = gsn.attrs['link'].split(/\.gsn\#?\??/);
            argumentName = pieces[0] || '';
            if (pieces[1]) {
                const queryPieces = pieces[1].split('=');
                queryType = queryPieces[0];
                queryId = queryPieces[1];
            }
        }
        // No matter what, we want to show the argument name.
        this.link = argumentName;
        // Add query type and ID, as appropriate.
        if (queryType && queryType !== '' && queryId && queryId !== '') {
            if (queryType === 'present') {
                this.link += ' (CSS ID ' + queryId + ')';
            }
            else if (queryType === 'gsn-id') {
                this.link += ' (GSN ID ' + queryId + ')';
            }
        }
        const linkWidth = metrics.computeWidth(this.link);
        this.width = Math.max(metrics.goalWidth, linkWidth + metrics.packageIconWidth);
        this.height = metrics.goalHeight;
        // Set up the common state elements of a GsnNode
        this.initGsnNode(gsn, metrics, showAddresses);
        this.metrics = metrics;
        this.bottomHeight = 25;
        this.originalHeight = this.height;
        this.height += this.bottomHeight;
    }
    renderShape(renderer, group) {
        renderer.rect(group, this.id + '_bottom', 'goal', 0, this.originalHeight, this.width, this.bottomHeight);
        this.shape[renderer.name] = renderer.rect(group, this.id + '_shape', 'goal gsn-away-goal', 0, 0, this.width, this.originalHeight);
        this.renderPackageIcon(renderer, group, 'grey', this.metrics, 3, this.originalHeight + 3);
        if (this.link) {
            renderer.text(group, this.id + '_link_text', 'element-text', this.link, this.metrics.packageIconWidth + 6, this.height - 6, {
                'font-size': 10,
            });
        }
    }
    renderNavigatorShape(renderer, group) {
        this.shape[renderer.name] = renderer.rect(group, this.id + '_nav_shape', 'goal', 0, 0, this.width, this.height);
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-gsn-comment.ts":
/*!********************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-gsn-comment.ts ***!
  \********************************************************/
/*! exports provided: GsnComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnComment", function() { return GsnComment; });
/* harmony import */ var _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-gsn-node */ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-comment.js           Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //

/**
 * This class represents a comment.
 *
 * @constructor
 * @extends GsnNode
 * @final
 *
 * @param {gsn} gsn the comment
 * @param {Metrics} metrics the {@link Metrics} used to render this node
 *
 * @return {GsnComment} the new comment Node
 */
class GsnComment extends _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__["GsnNode"] {
    constructor(gsn, metrics) {
        super();
        this.width = metrics.commentWidth;
        this.height = metrics.commentHeight;
        this.initGsnNode(gsn, metrics, false);
        this.marginLeft = metrics.contextHorizontalMargin;
        this.marginRight = metrics.contextHorizontalMargin;
        this.marginBottom = metrics.contextVerticalMargin;
        this.marginTop = metrics.contextVerticalMargin;
        this.userColor = 'yellow';
    }
    // Override default added text height, since we will never have "Not Set" or an
    // ID shown
    addedTextHeight() {
        return 1.5;
    }
    renderShape(renderer, group) {
        // Main shape
        this.shape[renderer.name] = renderer.path(group, this.id + '_comment', 'goal gsn-comment', 'm 0,0 ' +
            '0,' +
            this.height +
            ' ' +
            this.width +
            ',0 ' +
            '0,-' +
            (this.height - 15) +
            ' ' +
            'c 0,-5 ' +
            '-10,-15 ' +
            '-15,-15 z', {
            // Might /want/ to put this in /external/ CSS file, but it doesn't work
            // (the url reference doesn't resolve). Would work for embedded CSS...
            style: 'fill:url(#' + this.userColor + '-gradient);',
        });
        // Page curl
        renderer.path(group, this.id + '_comment_curl', 'comment', 'm ' +
            (this.width - 15) +
            ',0 ' +
            'c 3,5 ' +
            '2,13 ' +
            '2,13 ' +
            '0,0 ' +
            '8,-1 ' +
            '13,2 ' +
            '0,-5, ' +
            '-10,-15 ' +
            '-15,-15 z', {
            // Might /want/ to put this in /external/ CSS file, but it doesn't work
            // (the url reference doesn't resolve). Would work for embedded CSS...
            style: 'filter:url(#dropshadow);',
        });
    }
    renderNavigatorShape(renderer, group) {
        this.shape[renderer.name] = renderer.path(group, this.id + '_nav_comment', 'comment', 'm 0,0 ' +
            '0,' +
            this.height +
            ' ' +
            this.width +
            ',0 ' +
            '0,-' +
            (this.height - 15) +
            ' ' +
            'c 0,-5 ' +
            '-10,-15 ' +
            '-15,-15 z');
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-gsn-context.ts":
/*!********************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-gsn-context.ts ***!
  \********************************************************/
/*! exports provided: GsnContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnContext", function() { return GsnContext; });
/* harmony import */ var _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-gsn-node */ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-context.js           Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //

/**
 * This class represents a GSN Context.
 *
 */
class GsnContext extends _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__["GsnNode"] {
    /**
     *
     * @param gsn the gsn from which the Context will be created
     * @param metrics the {@link Metrics} used to render this node
     * @param showAddresses true if addresses should be shown for GSN
     * @param numberPadding extra space to allocate to the width of the shape
     *   after the width of the name has been computed, typically
     *   useful only for derived classes.
     */
    constructor(gsn, metrics, showAddresses, numberPadding = 0) {
        super();
        this.width = metrics.contextWidth;
        this.height = metrics.contextHeight;
        this.initGsnNode(gsn, metrics, showAddresses, numberPadding);
        this.marginLeft = metrics.contextHorizontalMargin;
        this.marginRight = metrics.contextHorizontalMargin;
        this.marginBottom = metrics.contextVerticalMargin;
        this.marginTop = metrics.contextVerticalMargin;
    }
    /**
     * computeConfidencePointX - compute the x position of the confidence point
     *                           graphic
     *
     * @return the x position of the confidence point graphic
     */
    computeConfidencePointX() {
        return this.width - 10;
    }
    /**
     * computeConfidencePointY - compute the y position of the confidence point
     *                           graphic
     *
     * @return the y position of the confidence point graphic
     */
    computeConfidencePointY() {
        return -1;
    }
    renderShape(renderer, group) {
        this.shape[renderer.name] = renderer.rect(group, this.id + '_shape', 'context gsn-context', 0, 0, this.width, this.height, this.metrics.contextXRadius, this.metrics.contextYRadius);
    }
    renderNavigatorShape(renderer, group) {
        this.shape[renderer.name] = renderer.rect(group, this.id + '_nav_shape', 'context', 0, 0, this.width, this.height, this.metrics.contextXRadius, this.metrics.contextYRadius);
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-gsn-contract.ts":
/*!*********************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-gsn-contract.ts ***!
  \*********************************************************/
/*! exports provided: GsnContract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnContract", function() { return GsnContract; });
/* harmony import */ var _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-gsn-node */ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-contract.js            Dependable Computing                   2015 //
// -------------------------------------------------------------------------- //

/**
 * This class represents a GSN Contract.
 *
 * @constructor
 * @extends GsnNode
 * @final
 *
 * @param {GSN} gsn the gsn from which the Contract will be created
 * @param {Metrics} metrics the {@link Metrics} used to render this node
 * @param {boolean} showAddresses true if addresses should be shown for GSN
 *                                elements
 *
 * @return {GsnContract} the new Contract
 */
class GsnContract extends _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__["GsnNode"] {
    constructor(gsn, metrics, showAddresses) {
        super();
        this.width = metrics.moduleWidth;
        this.height = metrics.moduleHeight;
        this.initGsnNode(gsn, metrics, showAddresses);
        this.height += 30;
        // Because we adjusted height, we have to update bottom, vertical margin, and
        // vertical center.
        this.verticalMargin =
            metrics.verticalMargin - this.height + this.shapeHeight;
        this.verticalCenter = (this.height - 15) / 2.0;
        this.bottom = this.height - 15;
    }
    /**
     * Compute the y position of the confidence point graphic
     *
     * @return the y position of the confidence point graphic
     */
    computeConfidencePointY() {
        return 11;
    }
    /**
     * Compute the y position of the text we will place
     * @return the y position of the text
     */
    computeTextY() {
        return this.metrics.textVerticalMargin + 15;
    }
    renderShape(renderer, group) {
        // FIXME: this should be done with a polygon followed by a path.
        renderer.rect(group, this.id + '_spinal', 'goal gsn-contract', 0, 0, this.width / 2.0, 15);
        renderer.rect(group, this.id + '_bottom', 'goal', this.horizontalCenter, this.height - 15, this.width / 2.0, 15);
        this.shape[renderer.name] = renderer.rect(group, this.id + '_shape', 'goal', 0, 15, this.width, this.height - 30);
    }
    renderNavigatorShape(renderer, group) {
        renderer.rect(group, this.id + '_nav_spinal', 'goal', 0, 0, this.width / 2.0, 15);
        renderer.rect(group, this.id + '_nav_bottom', 'goal', this.horizontalCenter, this.height - 15, this.width / 2.0, 15);
        this.shape[renderer.name] = renderer.rect(group, this.id + '_nav_shape', 'goal', 0, 15, this.width, this.height - 30);
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-gsn-evidence.ts":
/*!*********************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-gsn-evidence.ts ***!
  \*********************************************************/
/*! exports provided: GsnEvidence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnEvidence", function() { return GsnEvidence; });
/* harmony import */ var _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-gsn-node */ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-evidence.js          Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //

/**
 * This class represents a GSN Evidence.
 *
 * @constructor
 * @extends GsnNode
 * @final
 *
 * @param {GSN} gsn the gsn from which the Evidence will be created
 * @param {Metrics} metrics the {@link Metrics} used to render this node
 * @param {boolean} showAddresses true if addresses should be shown for GSN
 *                                elements
 *
 * @return {GsnEvidence} the new Evidence
 */
class GsnEvidence extends _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__["GsnNode"] {
    constructor(gsn, metrics, showAddresses) {
        super();
        this.width = metrics.evidenceTextWidth + 2 * metrics.textHorizontalMargin;
        this.height = metrics.evidenceRadius * 2;
        // Set up the common state elements of a GsnNode
        this.initGsnNode(gsn, metrics, showAddresses);
        const textHeight = (1.5 * 2 + this.lines.length) * metrics.lineHeight +
            metrics.textVerticalMargin * 2;
        this.width -= metrics.evidenceHorizontalTightening;
        // Because we adjusted the width, we have to recompute right, and horizontal
        // center
        this.right = this.width;
        this.horizontalCenter = this.width / 2.0;
        this.height = metrics.evidenceRadius * 2 + textHeight;
        // Because we adjusted height, we have to update bottom, vertical margin, and
        // vertical center.
        this.verticalMargin =
            metrics.verticalMargin - this.height + metrics.evidenceRadius * 2;
        this.verticalCenter = metrics.evidenceRadius;
        this.bottom = this.height;
        this.centerToLeft = this.horizontalCenter;
        this.centerToRight = this.horizontalCenter;
        this.centerToTop = this.verticalCenter;
        this.centerToBottom = this.height - this.verticalCenter;
    }
    /**
     * computeConfidencePointX - compute the x position of the confidence point
     *                           graphic
     *
     * @return the x position of the confidence point graphic
     */
    computeConfidencePointX() {
        return this.horizontalCenter + 7;
    }
    /**
     * computeConfidencePointY - compute the y position of the confidence point
     *                           graphic
     *
     * @return the y position of the confidence point graphic
     */
    computeConfidencePointY() {
        return 0;
    }
    /**
     * computeTextX - compute the x position of the text we will place
     *
     * @return the x position of the text
     */
    computeTextX() {
        return (-this.metrics.evidenceHorizontalTightening / 2 +
            this.metrics.evidenceRadius);
    }
    /**
     * computeTextY - compute the y position of the text we will place
     *
     * @return the y position of the text
     */
    computeTextY() {
        return this.metrics.evidenceRadius * 2 + this.metrics.textVerticalMargin;
    }
    renderShape(renderer, group) {
        this.shape[renderer.name] = renderer.circle(group, this.id + '_shape', 'evidence gsn-evidence', this.horizontalCenter - this.metrics.evidenceRadius, this.metrics.evidenceRadius, this.metrics.evidenceRadius);
    }
    renderNavigatorShape(renderer, group) {
        this.shape[renderer.name] = renderer.circle(group, this.id + '_nav_shape', 'evidence', this.horizontalCenter, this.metrics.evidenceRadius, this.metrics.evidenceRadius);
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-gsn-goal.ts":
/*!*****************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-gsn-goal.ts ***!
  \*****************************************************/
/*! exports provided: GsnGoal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnGoal", function() { return GsnGoal; });
/* harmony import */ var _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-gsn-node */ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-goal.js              Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //

/**
 * This class represents a GSN Goal.
 *
 * @constructor
 * @extends GsnNode
 * @final
 *
 * @param {GSN} gsn the gsn from which the Goal will be created
 * @param {Metrics} metrics the {@link Metrics} used to render this node
 * @param {boolean} showAddresses true if addresses should be shown for GSN
 *                                elements
 *
 * @return {GsnGoal} the new Goal
 */
class GsnGoal extends _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__["GsnNode"] {
    constructor(gsn, metrics, showAddresses) {
        super();
        this.width = metrics.goalWidth;
        this.height = metrics.goalHeight;
        // Set up the common state elements of a GsnNode
        this.initGsnNode(gsn, metrics, showAddresses);
    }
    renderShape(renderer, group) {
        this.shape[renderer.name] = renderer.rect(group, this.id + '_shape', 'goal gsn-goal', 0, 0, this.width, this.height);
    }
    renderNavigatorShape(renderer, group) {
        this.shape[renderer.name] = renderer.rect(group, this.id + '_nav_shape', 'goal', 0, 0, this.width, this.height);
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-gsn-justification.ts":
/*!**************************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-gsn-justification.ts ***!
  \**************************************************************/
/*! exports provided: GsnJustification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnJustification", function() { return GsnJustification; });
/* harmony import */ var _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-gsn-node */ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-justification.js     Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //

/**
 * This class represents a GSN Justification.
 *
 * @constructor
 * @extends GsnNode
 * @final
 *
 * @param {GSN} gsn the gsn from which the Justification will be created
 * @param {Metrics} metrics the {@link Metrics} used to render this node
 * @param {boolean} showAddresses true if addresses should be shown for GSN
 *                                elements
 *
 * @return {GsnJustification} the new Justification
 */
class GsnJustification extends _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__["GsnNode"] {
    constructor(gsn, metrics, showAddresses) {
        super();
        this.width = metrics.contextWidth;
        this.height = metrics.contextHeight;
        this.initGsnNode(gsn, metrics, showAddresses);
        this.marginLeft = metrics.contextHorizontalMargin;
        this.marginRight = metrics.contextHorizontalMargin;
        this.marginBottom = metrics.contextVerticalMargin;
        this.marginTop = metrics.contextVerticalMargin;
    }
    /**
     * computeConfidencePointX - compute the x position of the confidence point
     *                           graphic
     *
     * @return the x position of the confidence point graphic
     */
    computeConfidencePointX() {
        return this.width - 10;
    }
    /**
     * computeConfidencePointY - compute the y position of the confidence point
     *                           graphic
     *
     * @return the y position of the confidence point graphic
     */
    computeConfidencePointY() {
        return -1;
    }
    renderShape(renderer, group) {
        this.shape[renderer.name] = renderer.rect(group, this.id + '_shape', 'context gsn-justification', 0, 0, this.width, this.height, this.metrics.contextXRadius, this.metrics.contextYRadius);
        renderer.text(group, this.id + '_justification_marker', 'name', 'J', this.width, this.height, {
            'font-size': 16,
        });
    }
    renderNavigatorShape(renderer, group) {
        this.shape[renderer.name] = renderer.rect(group, this.id + '_nav_shape', 'context', 0, 0, this.width, this.height, this.metrics.contextXRadius, this.metrics.contextYRadius);
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-gsn-metadata.ts":
/*!*********************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-gsn-metadata.ts ***!
  \*********************************************************/
/*! exports provided: GsnMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnMetadata", function() { return GsnMetadata; });
/* harmony import */ var _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-gsn-node */ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-metadata.js          Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //

/**
 * This class represents metadata.
 *
 * @constructor
 * @extends GsnNode
 * @final
 *
 * @param {gsn} gsn the metadata
 * @param {Metrics} metrics the {@link Metrics} used to render this node
 *
 * @return {GsnComment} the new comment Node
 */
class GsnMetadata extends _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__["GsnNode"] {
    constructor(gsn, metrics) {
        super();
        this.width = metrics.commentWidth;
        this.height = metrics.commentHeight;
        this.initGsnNode(gsn, metrics, false);
        this.marginLeft = metrics.contextHorizontalMargin;
        this.marginRight = metrics.contextHorizontalMargin;
        this.marginBottom = metrics.contextVerticalMargin;
        this.marginTop = metrics.contextVerticalMargin;
        this.userColor = 'orange';
    }
    // Override default added text height, since we will never have "Not Set" or an
    // ID shown
    addedTextHeight() {
        return 1.5;
    }
    renderShape(renderer, group) {
        // Main shape
        this.shape[renderer.name] = renderer.rect(group, this.id + '_metadata', 'goal', 0, 0, this.width, this.height, 0, 0, {
            // Might /want/ to put this in /external/ CSS file, but it doesn't work
            // (the url reference doesn't resolve). Would work for embedded CSS...
            style: 'fill:url(#' + this.userColor + '-gradient);',
        });
    }
    renderNavigatorShape(renderer, group) {
        this.shape[renderer.name] = renderer.path(group, this.id + '_nav_metadata', 'comment', 'm 0,0 ' +
            '0,' +
            this.height +
            ' ' +
            this.width +
            ',0 ' +
            '0,-' +
            (this.height - 15) +
            ' ' +
            'c 0,-5 ' +
            '-10,-15 ' +
            '-15,-15 z');
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-gsn-module.ts":
/*!*******************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-gsn-module.ts ***!
  \*******************************************************/
/*! exports provided: GsnModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnModule", function() { return GsnModule; });
/* harmony import */ var _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-gsn-node */ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-module.js            Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //

/**
 * This class represents a GSN Module.
 *
 * @constructor
 * @extends GsnNode
 * @final
 *
 * @param {GSN} gsn the gsn from which the Module will be created
 * @param {Metrics} metrics the {@link Metrics} used to render this node
 * @param {boolean} showAddresses true if addresses should be shown for GSN
 *                                elements
 *
 * @return {GsnModule} the new Module
 */
class GsnModule extends _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__["GsnNode"] {
    constructor(gsn, metrics, showAddresses) {
        super();
        this.width = metrics.moduleWidth;
        this.height = metrics.moduleHeight;
        this.initGsnNode(gsn, metrics, showAddresses);
        this.height += 15;
        // Because we adjusted height, we have to update bottom, vertical margin, and
        // vertical center.
        this.verticalMargin =
            metrics.verticalMargin - this.height + this.shapeHeight;
        this.verticalCenter = this.height / 2.0;
        this.bottom = this.height;
    }
    /**
     * Compute the y position of the confidence point graphic
     *
     * @return the y position of the confidence point graphic
     */
    computeConfidencePointY() {
        return 11;
    }
    /**
     * Compute the y position of the text we will place
     *
     * @return the y position of the text
     */
    computeTextY() {
        return this.metrics.textVerticalMargin + 15;
    }
    renderShape(renderer, group) {
        // FIXME: this should be done with a polygon followed by a path.
        renderer.rect(group, this.id + '_spinal', 'goal gsn-module', 0, 0, this.width / 2.0, 15);
        this.shape[renderer.name] = renderer.rect(group, this.id + '_shape', 'goal', 0, 15, this.width, this.height - 15);
    }
    renderNavigatorShape(renderer, group) {
        renderer.rect(group, this.id + '_nav_spinal', 'goal', 0, 0, this.width / 2.0, 15);
        this.shape[renderer.name] = renderer.rect(group, this.id + '_nav_shape', 'goal', 0, 15, this.width, this.height - 15);
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-gsn-node-factory.ts":
/*!*************************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-gsn-node-factory.ts ***!
  \*************************************************************/
/*! exports provided: GsnNodeFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnNodeFactory", function() { return GsnNodeFactory; });
/* harmony import */ var _sct_gsn_contract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-gsn-contract */ "./sct-js/sources/viewer/nodes/sct-gsn-contract.ts");
/* harmony import */ var _sct_gsn_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sct-gsn-metadata */ "./sct-js/sources/viewer/nodes/sct-gsn-metadata.ts");
/* harmony import */ var _sct_gsn_comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sct-gsn-comment */ "./sct-js/sources/viewer/nodes/sct-gsn-comment.ts");
/* harmony import */ var _sct_gsn_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sct-gsn-module */ "./sct-js/sources/viewer/nodes/sct-gsn-module.ts");
/* harmony import */ var _sct_gsn_justification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sct-gsn-justification */ "./sct-js/sources/viewer/nodes/sct-gsn-justification.ts");
/* harmony import */ var _sct_gsn_away_goal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sct-gsn-away-goal */ "./sct-js/sources/viewer/nodes/sct-gsn-away-goal.ts");
/* harmony import */ var _sct_gsn_goal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sct-gsn-goal */ "./sct-js/sources/viewer/nodes/sct-gsn-goal.ts");
/* harmony import */ var _sct_gsn_evidence__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sct-gsn-evidence */ "./sct-js/sources/viewer/nodes/sct-gsn-evidence.ts");
/* harmony import */ var _sct_gsn_away_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sct-gsn-away-context */ "./sct-js/sources/viewer/nodes/sct-gsn-away-context.ts");
/* harmony import */ var _sct_gsn_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sct-gsn-context */ "./sct-js/sources/viewer/nodes/sct-gsn-context.ts");
/* harmony import */ var _sct_gsn_assumption__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sct-gsn-assumption */ "./sct-js/sources/viewer/nodes/sct-gsn-assumption.ts");
/* harmony import */ var _sct_gsn_public_goal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sct-gsn-public-goal */ "./sct-js/sources/viewer/nodes/sct-gsn-public-goal.ts");
/* harmony import */ var _sct_gsn_strategy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sct-gsn-strategy */ "./sct-js/sources/viewer/nodes/sct-gsn-strategy.ts");
/* harmony import */ var _sct_layout_node_factory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sct-layout-node-factory */ "./sct-js/sources/viewer/nodes/sct-layout-node-factory.ts");
/* harmony import */ var _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../gsn/sct-gsn */ "./sct-js/sources/viewer/gsn/sct-gsn.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils */ "./sct-js/sources/viewer/utils.ts");
/* harmony import */ var _sct_gsn_public_evidence__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sct-gsn-public-evidence */ "./sct-js/sources/viewer/nodes/sct-gsn-public-evidence.ts");
/* harmony import */ var _sct_gsn_public_context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sct-gsn-public-context */ "./sct-js/sources/viewer/nodes/sct-gsn-public-context.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-node-factory.js      Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //


















/**
 * Factory class for constructing GsnNode instances.
 *
 * @constructor
 *
 * @return {GsnNodeFactory}
 */
class GsnNodeFactory extends _sct_layout_node_factory__WEBPACK_IMPORTED_MODULE_13__["LayoutNodeFactory"] {
    /**
     * newNode - construct a new instance of a GsnNode from GSN
     *
     * @param gsn the GSN from which the new node will be built
     * @param metrics the metrics that will be used by this node.
     *
     * @return the new node
     */
    newNode(gsn, metrics, showAddresses) {
        switch (gsn.type) {
            case _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_14__["ValidGsnNodeTypes"].Assumption:
                return new _sct_gsn_assumption__WEBPACK_IMPORTED_MODULE_10__["GsnAssumption"](gsn, metrics, showAddresses);
            case _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_14__["ValidGsnNodeTypes"].Context:
                if (gsn.getVisibility() === _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_14__["GsnVisibility"].Private) {
                    return new _sct_gsn_context__WEBPACK_IMPORTED_MODULE_9__["GsnContext"](gsn, metrics, showAddresses);
                }
                else if (gsn.getVisibility() === _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_14__["GsnVisibility"].Away) {
                    return new _sct_gsn_away_context__WEBPACK_IMPORTED_MODULE_8__["GsnAwayContext"](gsn, metrics, showAddresses);
                }
                else if (gsn.getVisibility() === _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_14__["GsnVisibility"].Public) {
                    return new _sct_gsn_public_context__WEBPACK_IMPORTED_MODULE_17__["GsnPublicContext"](gsn, metrics, showAddresses);
                }
                else {
                    _utils__WEBPACK_IMPORTED_MODULE_15__["Utils"].assert(false, 'Unknown node visibility for context ');
                }
            case _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_14__["ValidGsnNodeTypes"].Evidence: {
                if (gsn.getVisibility() === _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_14__["GsnVisibility"].Private) {
                    return new _sct_gsn_evidence__WEBPACK_IMPORTED_MODULE_7__["GsnEvidence"](gsn, metrics, showAddresses);
                }
                else if (gsn.getVisibility() === _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_14__["GsnVisibility"].Public) {
                    return new _sct_gsn_public_evidence__WEBPACK_IMPORTED_MODULE_16__["GsnPublicEvidence"](gsn, metrics, showAddresses);
                }
                else {
                    _utils__WEBPACK_IMPORTED_MODULE_15__["Utils"].assert(false, 'Unknown node visibility for context ');
                }
            }
            case _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_14__["ValidGsnNodeTypes"].Goal:
                if (gsn.getVisibility() === _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_14__["GsnVisibility"].Private) {
                    return new _sct_gsn_goal__WEBPACK_IMPORTED_MODULE_6__["GsnGoal"](gsn, metrics, showAddresses);
                }
                else if (gsn.getVisibility() === _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_14__["GsnVisibility"].Away) {
                    return new _sct_gsn_away_goal__WEBPACK_IMPORTED_MODULE_5__["GsnAwayGoal"](gsn, metrics, showAddresses);
                }
                else if (gsn.getVisibility() === _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_14__["GsnVisibility"].Public) {
                    return new _sct_gsn_public_goal__WEBPACK_IMPORTED_MODULE_11__["GsnPublicGoal"](gsn, metrics, showAddresses);
                }
                _utils__WEBPACK_IMPORTED_MODULE_15__["Utils"].assert(false, 'Invalid vis/type combo');
            case _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_14__["ValidGsnNodeTypes"].Justification:
                return new _sct_gsn_justification__WEBPACK_IMPORTED_MODULE_4__["GsnJustification"](gsn, metrics, showAddresses);
            case _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_14__["ValidGsnNodeTypes"].Module:
                return new _sct_gsn_module__WEBPACK_IMPORTED_MODULE_3__["GsnModule"](gsn, metrics, showAddresses);
            case _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_14__["ValidGsnNodeTypes"].Contract:
                return new _sct_gsn_contract__WEBPACK_IMPORTED_MODULE_0__["GsnContract"](gsn, metrics, showAddresses);
            case _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_14__["ValidGsnNodeTypes"].Strategy:
                return new _sct_gsn_strategy__WEBPACK_IMPORTED_MODULE_12__["GsnStrategy"](gsn, metrics, showAddresses);
            case _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_14__["ValidGsnNodeTypes"].Comment:
                return new _sct_gsn_comment__WEBPACK_IMPORTED_MODULE_2__["GsnComment"](gsn, metrics);
            case _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_14__["ValidGsnNodeTypes"].Metadata:
                return new _sct_gsn_metadata__WEBPACK_IMPORTED_MODULE_1__["GsnMetadata"](gsn, metrics);
            default:
                throw Error('Cannot determine node type');
        }
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts":
/*!*****************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-gsn-node.ts ***!
  \*****************************************************/
/*! exports provided: GsnNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnNode", function() { return GsnNode; });
/* harmony import */ var _sct_text_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-text-node */ "./sct-js/sources/viewer/nodes/sct-text-node.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-node.js              Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //

/**
 * @classdesc
 * Base class for GSN Nodes.
 *
 * @constructor
 * @extends TextNode
 * @return {GsnNode} a new, empty instance
 */
class GsnNode extends _sct_text_node__WEBPACK_IMPORTED_MODULE_0__["TextNode"] {
    /**
     * Initialize the GSN Node
     *
     * @param gsn the GSN to use to set up the GsnNode
     * @param metrics the metrics that should be used by this text node
     *                          node
     * @param showAddresses true if addresses should be shown for GSN
     *                                elements
     * @param namePadding extra space to allocate to the width of the shape
     *                             after the width of the name has been computed
     */
    initGsnNode(gsn, metrics, showAddresses, namePadding = 0) {
        this.initTextNode(gsn.id, metrics);
        /**
         * Local reference to the GSN
         *
         * @type GSN
         */
        this.gsn = gsn;
        /**
         * True if we should prepend addresses to element names
         *
         * @type boolean
         */
        this.showAddresses = showAddresses;
        /**
         * Local copy of the {@link GSN#type}
         *
         * @type String
         */
        this.type = gsn.type;
        /**
         * Local copy of the orientation of the {@link GSN}
         *
         * @type String
         */
        this.orientation = gsn.selector();
        /**
         * Local copy of the {@link GSN#attrs}
         *
         * @type Object
         */
        this.attrs = gsn.attrs;
        /**
         * The height of our shape (which might not ultimately match the height of
         * the node)
         *
         * @type Number
         */
        this.shapeHeight = this.height;
        /**
         * A hash of graphics for this node, indexed by renderer name.
         *
         * @type Object
         */
        this.graphics = {};
        /**
         * A hash of drag zones for this node, indexed by renderer name.
         *
         * @type Object
         */
        this.dropZones = {};
        /**
         * A hash of glows for this node, indexed by renderer name. This seems a bit
         * awkward, but since there has to be a way to refer to the glow across event
         * callbacks, it seems better to store it here than elsewhere.
         *
         * @type Object
         */
        this.glows = {};
        /**
         * A hash of glows used to show this node as selected, indexed by renderer
         * name.
         *
         * @type Object
         */
        this.selectionGlows = {};
        /**
         * A hash of principle shapes for this node, indexed by renderer name.
         *
         * @type Object
         */
        this.shape = {};
        // Set up the text for this GsnNode
        const completeName = this.showAddresses
            ? gsn.address + ': ' + gsn.name
            : gsn.name;
        this.generateText(completeName, gsn.text, namePadding);
        this.horizontalCenter = this.width / 2.0;
        this.verticalCenter = this.height / 2.0;
        this.centerToLeft = this.horizontalCenter;
        this.centerToRight = this.horizontalCenter;
        this.centerToTop = this.verticalCenter;
        this.centerToBottom = this.verticalCenter;
        this.marginLeft = metrics.horizontalMargin;
        this.marginRight = metrics.contextHorizontalMargin;
        this.marginBottom = metrics.verticalMargin;
        this.marginTop = metrics.verticalMargin;
    }
    /**
     * Compute the x position of the text we will place
     *
     * @return the x position of the text
     *
     * It is expected that subclasses will replace this method with a version that
     * correctly places the text given the specific shape being rendered. This
     * version is suitable for simple rectangles.
     */
    computeTextX() {
        return this.metrics.textHorizontalMargin;
    }
    /**
     * Compute the y position of the text we will place
     *
     * @return the y position of the text
     *
     * It is expected that subclasses will replace this method with a version that
     * correctly places the text given the specific shape being rendered. This
     * version is suitable for simple rectangles.
     */
    computeTextY() {
        return this.metrics.textVerticalMargin;
    }
    /**
     * Compute the x position of the text of the GSN ID
     *
     * @param text of the GSN ID
     *
     * @return the x position of the text
     *
     * It is expected that subclasses will replace this method with a version that
     * correctly places the text given the specifics of the shape being rendered.
     * This version appears suitable for everything except evidence, since evidence
     * has a very different way of positioning its text box.
     */
    computeGsnIdX(text) {
        return this.width - 2 * this.computeTextX();
    }
    /**
     * Compute the x position of the confidence point graphic
     *
     * @return the x position of the confidence point graphic
     *
     * This default value is suitable for simple rectangles, but should be adjusted
     * for things like Evidence and Modules
     */
    computeConfidencePointX() {
        return this.width - 6;
    }
    /**
     * Compute the y position of the confidence point graphic
     *
     * @return the y position of the confidence point graphic
     *
     * This default value is suitable for simple rectangles, but should be adjusted
     * for things like Evidence and Modules
     */
    computeConfidencePointY() {
        return -4;
    }
    /**
     * Default implementation of the function that builds an href. This is used to
     * link an element to another argument or to a document or to a URL
     *
     * @param link the initial link
     *
     * @return the transformed link for use in the SVG a element
     */
    buildHref(link) {
        let href;
        const loc = window.location.href;
        if (link.match(/^http/)) {
            href = link;
        }
        else if (link.match(/.gsn$/) || link.match(/.svg$/)) {
            href = loc.replace(/[\w-\. ]+\.gsn$/, link).replace(/\.svg$/, '.gsn');
        }
        else {
            href =
                window.location.hash
                    .replace(/[\w-\. ]+\.gsn$/, '../references/')
                    .replace(/^#/, '') + link;
            if (!href.match(/^file:\/\//)) {
                href = 'file://' + href;
            }
        }
        return href;
    }
    /**
     * Default implementation of the function that builds an href for a confidence
     * point. This is used to link an element to another argument; it shouldn't be
     * used to link to a document
     *
     * @param link the initial link
     *
     * @return the transformed link for use on the confidence point
     */
    buildConfHref(link) {
        let href = '';
        const loc = window.location.href;
        // Shouldn't hard-code a URL for the confidence, but just in case, support
        // it.
        if (this.attrs['confidence'].match(/^http/)) {
            href = this.attrs['confidence'];
        }
        else {
            // Assume that no http means a relative path. Base the full href on our
            // current location and ensure that the user didn't enter a
            // .svg-terminated path (which was the old way to do things)
            href = loc
                .replace(/[\w-\. ]+\.gsn$/, this.attrs['confidence'])
                .replace(/\.svg$/, '.gsn');
        }
        return href;
    }
    renderPackageIcon(renderer, group, clazz, metrics, left, top) {
        renderer.rect(group, this.id + '_icon_body', clazz, left, top + metrics.packageIconTopHeight, metrics.packageIconWidth, metrics.packageIconBodyHeight);
        renderer.rect(group, this.id + '_icon_top', clazz, left, top, metrics.packageIconWidth / 2.0, metrics.packageIconTopHeight);
    }
    /**
     * Render the shape for this node using the provided renderer.
     *
     * @param {Renderer} renderer the renderer to use to render the shape
     * @param {Object} group the group into which the shape should be placed
     */
    renderShape(renderer, group) { }
    /**
     * Render the shape for this node in a manner suitable for display in a
     * navigator (mini-map) using the provided renderer. Generally, this will be a
     * lower level of detail than is provided through renderShape.
     *
     * @param renderer the renderer to use to render the shape
     * @param {Object} group the group into which the shape should be placed
     */
    renderNavigatorShape(renderer, group) { }
    /**
     * Fill the node with a specified color, overriding the default color.
     *
     * @param renderer the renderer to use
     * @param color the color to use for the new fill
     */
    fill(renderer, color) {
        this.shape[renderer.name].style.fill = color;
    }
    /**
     * Put a glow around the node
     *
     * @param renderer the renderer to use
     * @param color the color to use for the glow
     */
    glow(renderer, color) {
        this.glows[renderer.name] = renderer.glow(this.shape[renderer.name], color);
    }
    /**
     * Remove the glow from the node.
     *
     * @param {Renderer} renderer the renderer to use
     */
    unglow(renderer) {
        if (this.glows[renderer.name]) {
            renderer.unglow(this.glows[renderer.name]);
            this.glows[renderer.name] = null;
        }
    }
    /**
     * Move this rendered node by the given offset. Only effects core graphics.
     *
     * @param dx the x offset
     * @param dy the y offset
     */
    translate(dx, dy) {
        this.x += dx;
        this.y += dy;
        jQuery.each(this.graphics, function (name, graphics) {
            graphics.setPosition(this.x, this.y);
        }.bind(this));
    }
    /**
     * Remove all graphics for this rendered node.
     */
    detach() {
        jQuery.each(this.graphics, function (name, graphics) {
            graphics.detach();
        });
        this.graphics = {};
        jQuery.each(this.selectionGlows, function (name, graphics) {
            graphics.detach();
        });
        this.selectionGlows = {};
        jQuery.each(this.dropZones, function (name, graphics) {
            graphics.detach();
        });
        this.dropZones = {};
        jQuery.each(this.glows, function (name, graphics) {
            graphics.detach();
        });
        this.glows = {};
    }
    /**
     * Put a glow around the node to show that it has been selected
     *
     * @param {Renderer} renderer the renderer to use
     */
    showSelected(renderer) {
        this.selectionGlows[renderer.name] = renderer.glow(this.shape[renderer.name], 'green');
    }
    /**
     * Remove the glow from the node that was showing it was selected
     *
     * @param {Renderer} renderer the renderer to use
     */
    unShowSelected(renderer) {
        if (this.selectionGlows[renderer.name]) {
            renderer.unglow(this.selectionGlows[renderer.name]);
            this.selectionGlows[renderer.name] = null;
        }
    }
    /**
     * Clone the graphics of this node by re-rendering it, but not capturing the
     * output. Useful for dragging.
     *
     * @param renderer the renderer to use for cloning.
     * @return a render group that represents what was cloned?
     */
    cloneGraphics(renderer) {
        return this.innerRender(renderer);
    }
    /**
     * Render the GsnNode using the given renderer
     *
     * @param renderer the renderer to use
     */
    render(renderer) {
        this.graphics[renderer.name] = this.innerRender(renderer);
    }
    /**
     * This method is used to provide the core of render, without state maintenance.
     * It lets us clone efficiently.
     *
     * @param renderer the renderer to use.
     */
    innerRender(renderer) {
        const group = renderer.group(this, GsnNode.generateHyperlinks
            ? this.buildHref(this.attrs['link'])
            : undefined);
        // Confidence
        if (this.attrs['confidence']) {
            renderer.rect(group, this.id + '_conf_shape', 'confidence-point-bg', this.computeConfidencePointX(), this.computeConfidencePointY(), 10, 10, 0, 0, { href: this.buildHref(this.attrs['confidence']) });
        }
        // Build the shape.
        this.renderShape(renderer, group);
        // This breaks encapsulation?
        if (this.attrs['color']) {
            this.shape[renderer.name].style.fill = this.attrs['color'];
        }
        let gsnIdText;
        if (GsnNode.showNotSet) {
            if (this.gsn.type === 'comment' || this.gsn.type === 'metadata') {
                gsnIdText = '';
            }
            else {
                gsnIdText =
                    !this.gsn.gsnId || this.gsn.gsnId === '' ? 'Not Set' : this.gsn.gsnId;
            }
        }
        else {
            gsnIdText =
                !this.gsn.gsnId || this.gsn.gsnId === '' ? '' : this.gsn.gsnId;
        }
        // Build the text
        renderer.elementText(group, this.id + '_text', 'element-text', this.name, this.lines, gsnIdText, this.metrics, this.computeTextX(), this.computeTextY(), this.computeGsnIdX(gsnIdText), GsnNode.gsnidHrefTarget);
        // Elaboration
        if (this.attrs['elaborate']) {
            renderer.polygon(group, this.id + '_shape_diamond', 'goal', [
                this.width / 2.0 + ',' + this.height,
                this.width / 2.0 + 10 + ',' + (this.height + 10),
                this.width / 2.0 + ',' + (this.height + 20),
                this.width / 2.0 - 10 + ',' + (this.height + 10),
            ]);
        }
        if (GsnNode.showLinkIcon && this.attrs['link']) {
            renderer.createLinkIcon(group, this.width - 6, this.height - 9);
        }
        group.setPosition(this.x, this.y);
        return group;
    }
    /**
     * Render the GsnNode using the given renderer at a level of detail appropriate
     * for a navigator (mini-map).
     *
     * @param renderer the renderer to use
     */
    renderNavigator(renderer) {
        const group = renderer.group(this);
        this.renderNavigatorShape(renderer, group);
        group.setPosition(this.x, this.y);
        this.graphics[renderer.name] = group;
    }
    /**
     * Render the drop zones using the given renderer. Return them so that the
     * the caller and install event hooks for drop.
     *
     * @param renderer the renderer to use
     *
     * @return the group
     */
    renderDropZones(renderer) {
        const group = renderer.group(this);
        const top = -this.marginTop / 2.0;
        const left = -this.marginLeft / 2.0;
        const hCenter = this.width / 2.0;
        const vCenter = this.height / 4.0;
        const bottom = this.height + this.marginBottom / 2.0;
        const right = this.width + this.marginRight / 2.0;
        renderer.polygon(group, this.id + '_drag_left', 'drop-zone', [
            left + ',' + top,
            hCenter + ',' + top,
            hCenter + ',' + vCenter,
            left + ',' + bottom,
        ]);
        renderer.polygon(group, this.id + '_drag_right', 'drop-zone', [
            right + ',' + top,
            hCenter + ',' + top,
            hCenter + ',' + vCenter,
            right + ',' + bottom,
        ]);
        renderer.polygon(group, this.id + '_drag_bottom', 'drop-zone', [
            hCenter + ',' + vCenter,
            left + ',' + bottom,
            right + ',' + bottom,
        ]);
        group.setPosition(this.x, this.y);
        this.dropZones[renderer.name] = group;
        return group;
    }
}
/**
 * Class field to control whether or not 'Not Set' will be displayed for empty
 * or missing GSN IDs.
 */
GsnNode.showNotSet = true;
/**
 * Class field to control the visibility of comment nodes. Defaults to true
 */
GsnNode.showComments = true;
/**
 * Class field to control the visibility of metadata nodes. Defaults to true
 */
GsnNode.showMetadata = true;
/**
 * Class field to control the visibility of GSN IDs. Default to true
 */
GsnNode.showGsnIds = true;
/**
 * Set this to the URL of your index, if you want the GSN IDs to link to your
 * index. E.g., '../documents/argument-index.html'
 *
 * Initially null.
 *
 * @type String
 */
GsnNode.gsnidHrefTarget = null;
/**
 * Set this to true if you want hyperlinks to be generated with the node.
 *
 * @type Boolean
 */
GsnNode.generateHyperlinks = false;
/**
 * Set this to true if you want to have an icon indicating the presence of a
 * link.
 *
 * @type Boolean
 */
GsnNode.showLinkIcon = false;


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-gsn-public-context.ts":
/*!***************************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-gsn-public-context.ts ***!
  \***************************************************************/
/*! exports provided: GsnPublicContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnPublicContext", function() { return GsnPublicContext; });
/* harmony import */ var _sct_gsn_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-gsn-context */ "./sct-js/sources/viewer/nodes/sct-gsn-context.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-goal.js              Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //

/**
 * This class represents a Public Context node.
 */
class GsnPublicContext extends _sct_gsn_context__WEBPACK_IMPORTED_MODULE_0__["GsnContext"] {
    constructor(gsn, metrics, showAddresses) {
        super(gsn, metrics, showAddresses, metrics.packageIconWidth);
    }
    /**
     * Override the basic renderShape property to render the package icon
     * inside it.
     * @param renderer tbd.
     * @param group    tbd.
     */
    renderShape(renderer, group) {
        super.renderShape(renderer, group);
        this.renderPackageIcon(renderer, group, 'goal', this.metrics, this.width - this.metrics.packageIconWidth - 10, 3);
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-gsn-public-evidence.ts":
/*!****************************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-gsn-public-evidence.ts ***!
  \****************************************************************/
/*! exports provided: GsnPublicEvidence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnPublicEvidence", function() { return GsnPublicEvidence; });
/* harmony import */ var _sct_gsn_evidence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-gsn-evidence */ "./sct-js/sources/viewer/nodes/sct-gsn-evidence.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-goal.js              Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //

/**
 * This class represents a Public Evidence node.
 */
class GsnPublicEvidence extends _sct_gsn_evidence__WEBPACK_IMPORTED_MODULE_0__["GsnEvidence"] {
    constructor(gsn, metrics, showAddresses) {
        super(gsn, metrics, showAddresses);
    }
    /**
     * Override the basic renderShape property to render the package icon
     * inside it.
     * @param renderer tbd.
     * @param group    tbd.
     */
    renderShape(renderer, group) {
        // render the basic evidence shape
        super.renderShape(renderer, group);
        // render the package icon in the middle of the evidence.
        this.renderPackageIcon(renderer, group, 'goal', this.metrics, this.horizontalCenter - this.metrics.packageIconWidth / 2, this.metrics.evidenceRadius / 2);
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-gsn-public-goal.ts":
/*!************************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-gsn-public-goal.ts ***!
  \************************************************************/
/*! exports provided: GsnPublicGoal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnPublicGoal", function() { return GsnPublicGoal; });
/* harmony import */ var _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-gsn-node */ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-goal.js              Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //

/**
 * This class represents a GSN Public Goal.
 *
 * @constructor
 * @extends GsnNode
 * @final
 *
 * @param {GSN} gsn the gsn from which the Public Goal will be created
 * @param {Metrics} metrics the {@link Metrics} used to render this node
 * @param {boolean} showAddresses true if addresses should be shown for GSN
 *                                elements
 *
 * @return {GsnPublicGoal} the new Public Goal
 */
class GsnPublicGoal extends _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__["GsnNode"] {
    constructor(gsn, metrics, showAddresses) {
        super();
        this.width = metrics.goalWidth;
        this.height = metrics.goalHeight;
        this.metrics = metrics;
        // Set up the common state elements of a GsnNode
        this.initGsnNode(gsn, metrics, showAddresses, this.metrics.packageIconWidth);
    }
    renderShape(renderer, group) {
        this.shape[renderer.name] = renderer.rect(group, this.id + '_shape', 'goal gsn-public-goal', 0, 0, this.width, this.height);
        this.renderPackageIcon(renderer, group, 'goal', this.metrics, this.width - this.metrics.packageIconWidth - 3, 3);
    }
    renderNavigatorShape(renderer, group) {
        this.renderShape(renderer, group);
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-gsn-strategy.ts":
/*!*********************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-gsn-strategy.ts ***!
  \*********************************************************/
/*! exports provided: GsnStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnStrategy", function() { return GsnStrategy; });
/* harmony import */ var _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-gsn-node */ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-strategy.js          Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //

/**
 * This class represents a GSN Strategy.
 *
 * @constructor
 * @extends GsnNode
 * @final
 *
 * @param {GSN} gsn the gsn from which the Strategy will be created
 * @param {Metrics} metrics the {@link Metrics} used to render this node
 * @param {boolean} showAddresses true if addresses should be shown for GSN
 *                                elements
 *
 * @return {GsnStrategy} the new Strategy
 */
class GsnStrategy extends _sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__["GsnNode"] {
    constructor(gsn, metrics, showAddresses) {
        super();
        this.width = metrics.strategyWidth;
        this.height = metrics.strategyHeight;
        this.initGsnNode(gsn, metrics, showAddresses, 0);
        this.width += 1.5 * metrics.strategySlant;
        // Because we adjusted the width, we have to recompute right, and horizontal
        // center
        this.right = this.width;
        this.horizontalCenter = this.width / 2.0;
    }
    /**
     * Compute the x position of the text we will place
     *
     * @return the x position of the text
     */
    computeTextX() {
        return this.metrics.strategySlant;
    }
    renderShape(renderer, group) {
        this.shape[renderer.name] = renderer.polygon(group, this.id + '_shape', 'strategy gsn-strategy', [
            this.metrics.strategySlant + ',0',
            '0,' + this.height,
            this.width - this.metrics.strategySlant + ',' + this.height,
            this.width + ',0',
        ]);
    }
    renderNavigatorShape(renderer, group) {
        this.shape[renderer.name] = renderer.polygon(group, this.id + '_nav_shape', 'strategy', [
            this.metrics.strategySlant + ',0',
            '0,' + this.height,
            this.width - this.metrics.strategySlant + ',' + this.height,
            this.width + ',0',
        ]);
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-layout-node-factory.ts":
/*!****************************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-layout-node-factory.ts ***!
  \****************************************************************/
/*! exports provided: LayoutNodeFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutNodeFactory", function() { return LayoutNodeFactory; });
// -------------------------------------------------------------------------- //
// sct-layout-node-factory.js   Dependable Computing                     2012 //
// -------------------------------------------------------------------------- //
/**
 * Factory class for constructing LayoutNode instances. This is an abstract base
 * class, so attempting to use it will throw an error.
 *
 * @constructor
 *
 * @return {LayoutNodeFactory}
 */
class LayoutNodeFactory {
    /**
     * newNode - abstract method; always throws an error
     */
    newLayoutNode() {
        throw new Error('Cannot instantiate a LayoutNode using the abstract LayoutNodeFactory.');
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-layout-node.ts":
/*!********************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-layout-node.ts ***!
  \********************************************************/
/*! exports provided: LayoutNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutNode", function() { return LayoutNode; });
// -------------------------------------------------------------------------- //
// sct-layout-node.js            M. Anthony Aiello                       2012 //
// -------------------------------------------------------------------------- //
/**
 * <p>
 *  This class holds the data specification for a {@link LayoutNode}, which is
 *  the base type for things laid out with a {@link LayoutTree}. There are no
 *  methods here, just data, so the primary purpose for having this class is to
 *  provide documentation on what the {@link LayoutTree} expects from a
 *  {@link LayoutNode}.
 * </p>
 *
 * @author M. Anthony Aiello
 */
class LayoutNode {
    /**
     * Initialize the data in the {@link LayoutNode}.
     *
     * @param {String} id the unique ID for the node
     */
    initLayoutNode(id) {
        this.id = id;
        this.height = this.height || 0;
        this.width = this.width || 0;
        this.verticalCenter = 0;
        this.horizontalCenter = 0;
        this.centerToLeft = 0;
        this.centerToRight = 0;
        this.centerToTop = 0;
        this.centerToBottom = 0;
        this.marginTop = 0;
        this.marginBottom = 0;
        this.marginLeft = 0;
        this.marginRight = 0;
        this.x = 0;
        this.y = 0;
        this.left = 0;
        this.right = 0;
        this.bottom = 0;
        this.top = 0;
    }
    init(id) {
        this.initLayoutNode(id);
    }
    position(x, y) {
        this.x = x - this.horizontalCenter;
        this.y = y - this.verticalCenter;
        this.top = this.y;
        this.bottom = this.y + this.height;
        this.left = this.x;
        this.right = this.x + this.width;
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/nodes/sct-text-node.ts":
/*!******************************************************!*\
  !*** ./sct-js/sources/viewer/nodes/sct-text-node.ts ***!
  \******************************************************/
/*! exports provided: TextNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextNode", function() { return TextNode; });
/* harmony import */ var _sct_layout_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-layout-node */ "./sct-js/sources/viewer/nodes/sct-layout-node.ts");
// -------------------------------------------------------------------------- //
// sct-text-node.js             Dependable Computing                     2012 //
// -------------------------------------------------------------------------- //

/**
 * <p>
 *  A {@link TextNode} is a {@link LayoutNode} that has a name and text. The
 *  name is intended to be set in bold face; the text is intended to be set in
 *  normal weight and wrapped to fit the width of the {@link TextNode}.
 * </p>
 * <p>
 *  Text is set for the {@link TextNode} by calling generate set, which does
 *  the following:
 * </p>
 * <ol>
 *   <li>
 *     Determines the width of the name, assuming bold face.
 *   </li>
 *   <li>
 *     Sets the width of the node to the max of the original width and the width
 *     of the name.
 *   </li>
 *   <li>
 *     Wraps the text to fit the node, optionally increasing the width of the
 *     node up to 150% if that reduces the amount of whitespace at the end of
 *     the lines. This is like dragging the right edge of the node until the
 *     text seems to "fit" best.
 *   </li>
 *   <li>
 *      Updates the width again, as needed.
 *   </li>
 * </ol>
 *
 * @author M. Anthony Aiello
 *
 * @extends LayoutNode
 * @constructor
 */
class TextNode extends _sct_layout_node__WEBPACK_IMPORTED_MODULE_0__["LayoutNode"] {
    /**
     * Initialize the data in the {@link TextNode}.
     *
     * @param {String} id the unique ID for the node
     * @param {Metrics} metrics the metrics that should be used by this text node
     */
    initTextNode(id, metrics) {
        this.initLayoutNode(id);
        this.metrics = metrics;
        this.origHeight = null;
        this.origWidth = 0;
        this.text = '';
        this.name = '';
        this.gsnId = '';
        this.lines = [];
    }
    /**
     * Alias {@link #init} for subclasses
     *
     * @function
     */
    init(id) {
        throw new Error('Cannot init TextNode without Metrics');
    }
    /**
     * <p>
     *  A constant that defines the extra height to add when calculating the height
     *  to allow for text in a node
     * </p>
     *
     * @private
     */
    addedTextHeight() {
        return 2.8;
    }
    /**
     * <p>
     *   Lay out the name and the text for this {@link TextNode}, possibly updating
     *   its width.
     * </p>
     *
     * @param name the name (set with bold metrics)
     * @param text the text (set with normal metrics)
     * @param namePadding extra space to allocate to the width of the shape
     *                             after the width of the name has been computed
     */
    generateText(name, text, namePadding = 0) {
        // Compute the width of the shape.
        const nameWidth = this.metrics.computeWidthBold(name);
        const textWidth = nameWidth + 2 * this.metrics.textHorizontalMargin + (namePadding !== null && namePadding !== void 0 ? namePadding : 0);
        // Update the width of this Node
        this.origWidth = this.width;
        this.width = Math.max(this.origWidth, textWidth);
        // For now an implicit assumption is that the gsnId will be small compared to the text
        // Wrap text into lines - may update the width again.
        const result = this.metrics.cachedPreciseLineWrap(name, text, this.width, this.id);
        this.name = name;
        this.text = text;
        this.lines = result[0];
        this.width = result[1];
        const textHeight = (this.addedTextHeight() + this.lines.length) * this.metrics.lineHeight +
            this.metrics.textVerticalMargin;
        // Only set orig_height if it's not been previously set.
        this.origHeight = this.origHeight || this.height;
        this.height = Math.max(this.origHeight, textHeight);
    }
    /**
     * <p>
     *  Adjust the width of this {@link TextNode} after optimal text wrapping. This
     *  is useful when multiple nodes should be sized to match the widest node.
     * </p>
     *
     * @param newWidth the new width for this {@link TextNode}
     */
    adjustWidth(newWidth) {
        var _a;
        // All of these reassignments need to be moved into a function or something.
        // There was a long-lived layout bug because I forgot how many derivative
        // values are stored that are based on width and height.
        // Something about information hiding.... Sigh. I'm just loathe to use a
        // function call for values that are so frequently read and so infrequently
        // written.
        this.width = newWidth;
        this.right = newWidth;
        this.horizontalCenter = newWidth / 2;
        this.centerToLeft = this.horizontalCenter;
        this.centerToRight = this.horizontalCenter;
        // Call simple line wrap, since we're dictating the width
        this.lines = this.metrics.cachedLineWrap(this.text, this.width, this.id);
        const textHeight = (this.addedTextHeight() + this.lines.length) * this.metrics.lineHeight +
            this.metrics.textVerticalMargin;
        this.height = Math.max((_a = this.origHeight) !== null && _a !== void 0 ? _a : 0, textHeight);
        this.verticalCenter = this.height / 2;
        this.centerToTop = this.verticalCenter;
        this.centerToBottom = this.verticalCenter;
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/renderer/sct-metrics.ts":
/*!*******************************************************!*\
  !*** ./sct-js/sources/viewer/renderer/sct-metrics.ts ***!
  \*******************************************************/
/*! exports provided: Metrics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Metrics", function() { return Metrics; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./sct-js/sources/viewer/utils.ts");
// -------------------------------------------------------------------------- //
// sct-metrics                  M. Anthony Aiello                        2011 //
// -------------------------------------------------------------------------- //

// Global variables to cache line wrapping results. The use of these caches
// dramatically speeds up layout, as line wrapping is one of the most expensive
// operations (tight loops, lots of array manipulations and copying).
/**
 * Storage for "constants" controlling layout and operations for line wrapping.
 *
 * @constructor
 *
 * @return {Metrics} a new Metrics object
 */
class Metrics {
    constructor() {
        // Use require here because importing globally means importing an exported class
        // which will have trickle-down affects and cause us to run into TS errors on
        // code that is not yet converted.
        this.phi = 1.6180339887;
        this.easing = 50;
        this.wide = false;
        this.textVerticalMargin = 15;
        /**
         * Double vertical margin, to remove a multiplication from an inner loop.
         */
        this.textVerticalMargin2 = this.textVerticalMargin * 2;
        this.textHorizontalMargin = 10;
        /**
         * Double horizontal margin, to remove a multiplication from an inner loop.
         */
        this.textHorizontalMargin2 = this.textHorizontalMargin * 2;
        this.lineHeight = 11;
        this.goalWidth = 125;
        /** @type {number} */
        this.goalHeight = 50;
        /** @type {number} */
        this.commentWidth = 125;
        /** @type {number} */
        this.commentHeight = 25;
        /** @type {number} */
        this.moduleWidth = 125;
        /** @type {number} */
        this.moduleHeight = 25;
        /** @type {number} */
        this.contextWidth = 125;
        /** @type {number} */
        this.contextHeight = 50;
        /** @type {number} */
        this.contextXRadius = 15;
        /** @type {number} */
        this.contextYRadius = 25;
        /** @type {number} */
        this.contextVerticalMargin = 5;
        /** @type {number} */
        this.contextHorizontalMargin = 40;
        /** @type {number} */
        this.strategyWidth = 130;
        /** @type {number} */
        this.strategyHeight = 50;
        /** @type {number} */
        this.strategySlant = 20;
        /** @type {number} */
        this.evidenceRadius = 20;
        /** @type {number} */
        this.evidenceTextWidth = 125;
        /** @type {number} */
        this.evidenceVerticalTightening = 40;
        /** @type {number} */
        this.evidenceHorizontalTightening = 50;
        /** @type {number} */
        this.horizontalMargin = 40;
        /** @type {number} */
        this.verticalMargin = 80;
        /** @type {number} */
        this.spacerWidth = this.goalWidth;
        /** @type {number} */
        this.spacerHeight = this.goalHeight;
        /** @type {number} */
        this.padding = navigator.platform.match(/Mac/) ? 0 : 5;
        this.horizontalTreePadding = 10;
        this.verticalTreePadding = 20;
        this.packageIconWidth = 25;
        this.packageIconTopHeight = 4;
        this.packageIconBodyHeight = 15;
        // For some reason, Mozilla & IE don't compute the width correctly for us in
        // getComputedTextLength. So we have to scale it rather arbitrarily. WebKit
        // appears to do the right thing.
        this.widthScale = 1.0;
        // Hack for Mozilla and IE. Curious that they both are wrong in the same way.
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].browser().mozilla || _utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].browser().msie) {
            this.widthScale = 1.6;
        }
        this.textInit();
    }
    /**
     * textInit - initialize text-measurement services.
     */
    textInit() {
        this.svgNamespace = 'http://www.w3.org/2000/svg';
        const section = document.createElement('section');
        section.setAttribute('id', 'text-services');
        section.setAttribute('style', 'display: hidden;');
        const svg = document.createElementNS(this.svgNamespace, 'svg');
        svg.setAttribute('id', '__text__testing__');
        svg.setAttribute('width', '300px');
        svg.setAttribute('height', '300px');
        svg.setAttribute('version', '1.1');
        svg.setAttribute('xmlns', this.svgNamespace);
        svg.setAttribute('style', 'position:absolute;' + 'top:0;' + 'left:0;' + 'z-index:-1;');
        document.body.appendChild(section);
        section.appendChild(svg);
        this.container = document.createElementNS(this.svgNamespace, 'text');
        this.container.setAttribute('id', '__text__testing__');
        this.container.setAttribute('style', 'font-size: 10.0');
        this.tspanBold = document.createElementNS(this.svgNamespace, 'tspan');
        this.tspanBold.setAttribute('class', 'name');
        this.tspan = document.createElementNS(this.svgNamespace, 'tspan');
        this.container.appendChild(this.tspanBold);
        this.container.appendChild(this.tspan);
        svg.appendChild(this.container);
    } // class Metrics
    /**
     * computeWidthBold - Compute an estimate of the layout width of a given
     *                    string of bold text. This function should be called with
     *                    a single word (i.e., a unit that must be placed atomically
     *                    on a line)
     *
     * @param {string} content the string whose width should be computed
     *
     * @return {number} the width of the string
     */
    computeWidthBold(content) {
        // Cache, since this is expensive (involves adding to and removing from the
        // DOM
        let width = Metrics.lineWrapCacheBold[content];
        if (!width) {
            const node = document.createTextNode(content);
            this.tspanBold.appendChild(node);
            width = this.tspanBold.getComputedTextLength();
            this.tspanBold.removeChild(node);
            Metrics.lineWrapCacheBold[content] = width;
        }
        return width / this.widthScale;
    }
    /**
     * computeWidth - Compute an estimate of the layout width of a given
     *                string of text. This function should be called with
     *                a single word (i.e., a unit that must be placed atomically
     *                on a line)
     *
     * @param {string} text the string whose width should be computed
     *
     * @return {number} the width of the string
     */
    computeWidth(text) {
        // Cache, since this is expensive (involves adding to and removing from the
        // DOM
        let width = Metrics.lineWrapCache[text];
        if (!width) {
            const node = document.createTextNode(text);
            this.tspan.appendChild(node);
            width = this.tspan.getComputedTextLength();
            this.tspan.removeChild(node);
            Metrics.lineWrapCache[text] = width;
        }
        return width / this.widthScale;
    }
    /**
     * cachedLineWrap
     *
     * @param {string} text the text to wrap
     * @param {number} width the maximum width of each line
     * @param {String} id a unique id for cache discrimination
     *
     * @return {Array} an array of stings; each string is a line
     */
    cachedLineWrap(text, width, id) {
        let cached = Metrics.lineWrapCacheLines[id + '_basic'];
        let result = [];
        // Here, we require that the cached width match the input width, since this
        // method is not supposed to change the width.
        if (!cached || width !== cached.width || cached.text !== text) {
            result = this.lineWrap(text, width);
            // Cache the result
            cached = {};
            cached.text = text;
            cached.lines = result;
            cached.width = width;
            Metrics.lineWrapCacheLines[id + '_basic'] = cached;
        } // Didn't find useable cached information
        return cached.lines;
    }
    /**
     * lineWrap - determine how text should be line-wrapped, given a previously-
     *            computed width.
     *
     * @param {string} text the text to wrap
     * @param {number} width the maximum width of each line
     *
     * @return {Array} an array of stings; each string is a line
     */
    lineWrap(text, width) {
        const words = text.trim().split(/\s+/);
        const wordWidths = [];
        let index = 0;
        // Degenerate case:
        if (text === '') {
            return [''];
        }
        // Build the table of word widths.
        for (; index < words.length; ++index) {
            const word = words[index];
            const wordWidth = this.computeWidth(word);
            wordWidths.push(wordWidth);
        }
        return this.lineWrapInternal(words, wordWidths, width - this.textHorizontalMargin2)[0];
    } // lineWrap
    /**
     * cachedPreciseLineWrap
     *
     * @param name the name of the node to wrap
     * @param text the text to wrap
     * @param width the initial width to use in wrapping; also the minimum
     *                      wrapped width
     * @param id a unique id for cache discrimination
     * @return {Array} an array with the lines of wrapped text as the first element
     *                 and the width of the wrapped text as the second element.
     */
    cachedPreciseLineWrap(name, text, width, id) {
        var _a;
        const cached = Metrics.lineWrapCache[id + '_precise'];
        // The cached width may always be an increase over the input width, since
        // precise line wrap is allowed to change (increase) the width of the element.
        // It may not, however, be strictly smaller than the input width, since this
        // method must not shrink the width of the element.
        const textChanged = (cached === null || cached === void 0 ? void 0 : cached.text) !== text || (cached === null || cached === void 0 ? void 0 : cached.name) !== name;
        const gotWider = width > ((_a = cached === null || cached === void 0 ? void 0 : cached.width) !== null && _a !== void 0 ? _a : -1);
        if (cached && !gotWider && !textChanged) {
            // return the found information.
            return [cached.lines, cached.width];
        }
        // Didn't find useable cached information
        const result = this.preciseLineWrap(text, width);
        // Cache the result.
        const newCacheEntry = {};
        newCacheEntry.text = text;
        newCacheEntry.name = name;
        newCacheEntry.lines = result[0];
        newCacheEntry.width = result[1];
        Metrics.lineWrapCache[id + '_precise'] = cached;
        // and return the new information.
        return [result[0], result[1]];
    }
    /**
     * preciseLineWrap
     *
     * Wrap the given text for an element of the given initial width into a golden
     * rectangle, allowing for up to this#easing of additional width to to improve
     * the right-hand edge.
     *
     * This method differs from best line wrap both because it first fits the text
     * to a golden rectangle, but also because it does not ever serve the request
     * from a cache.
     *
     * Note that calculation of the golden section assumes a particular computation
     * of shape height (not text height), even though the computed height is never
     * output.
     *
     * @param {String} text the text to wrap
     * @param {number} width the initial width to use in wrapping; also the minimum
     *                       wrapped width
     * @return {Array} an array with the lines of wrapped text as the first element
     *                 and the width of the wrapped text as the second element.
     */
    preciseLineWrap(text, width) {
        // Summarization of the algorithm.
        //
        // 1. Build parallel arrays with the words and the word widths.
        //
        // 2. Find the text wrapping whose wrapped width makes the shape containing
        //    the text a golden rectangle; call the width phi width.
        //   2.1. Compute wrapping for the current width
        //   2.2. Compute shape height
        //   2.3. Compute difference between width/height and golden ratio, phi
        //   2.4. Compute a new width based on the golden ratio, to use for the next
        //        pass through the loop. Because of the possibility of loop stability,
        //        add to the new width 25% of the distance to height*phi. In other
        //        words, don't set the new width to be correct for a golden rectangle,
        //        but head in that direction. This helps to control loop stability and
        //        also accounts for the change in the dimensions of the rectangle
        //        when the text is rewrapped.
        //   2.5. Stop when we are within 5% of the golden rectangle or when we've
        //        stepped through the loop 25 times. This provides protection against
        //        possible loop stability.
        //
        // 3. Set the width to be Max(initial width, phi width)
        //
        // 4. Adjust the width by up to the value of easing, by increments of 2,
        //    looking for a better fit (less ragged right-hand edge).
        //
        // 5. Return the lines and the width of the lines.
        // Pre-allocate all temporaries, with assignments, to help the interpreter
        // with typing.
        // Degenerate case:
        if (text === '') {
            return [[''], width];
        }
        // Build the table of word widths.
        const words = text.trim().split(/\s+/);
        const wordWidths = [];
        let index = 0;
        for (; index < words.length; ++index) {
            const word = words[index];
            const wordWidth = this.computeWidth(word);
            wordWidths.push(wordWidth);
        }
        // This loop exits when we're within 5% of the golden rectangle, or we've
        // taken 25 steps to try to get there. The latter is to make sure we don't
        // fall into an attractor and end up with a stable loop.
        let currWidth = width;
        let phiError = 0.0;
        let phiWidth = 0.0;
        let count = 0;
        let result;
        do {
            phiWidth = currWidth;
            result = this.computeLineWrap(wordWidths, currWidth);
            const shapeHeight = (result[0] + 3) * this.lineHeight + this.textVerticalMargin2; // 3 for title + GSN ID
            phiError = this.phi - currWidth / shapeHeight;
            // Regardless of the direction of the error (shape too tall or shape too
            // wide), recompute the width based on the height.
            currWidth = (shapeHeight * this.phi - currWidth) / 4 + currWidth;
            ++count;
        } while (Math.abs(phiError) > 0.05 && count < 25);
        // Find the best-fit width for the text, with the set easing.
        const originalWidth = Math.max(phiWidth - this.textHorizontalMargin2, width);
        currWidth = this.computeOptimizedLineWrapping(wordWidths, originalWidth, Math.max(this.easing + originalWidth, this.easing + this.goalWidth));
        const retRes = this.lineWrapInternal(words, wordWidths, currWidth);
        return [retRes[0], currWidth + this.textHorizontalMargin2];
    } // preciseLineWrap
    /**
     * [private] computeOptimizedLineWrapping - improve the fit of text by
     *                                          increasing the width of the text
     *                                          box. Does not actually generate
     *                                          lines of text
     *
     * @param {Array} wordWidths the precomputed widths of the words
     * @param {number} initialWidth the minimum/initial width of a line
     * @param {number} maxWidth the maximum width of a line
     *
     * @return {number} the optimized width corresponding to the lines
     *
     * Search, 2 pixels at a time, for a line wrapping between initialWidth and
     * maxWidth that minimizes the average leftover space on each line. This mimics
     * a person grabbing the text box and dragging it to the right until the text
     * looks "better".
     */
    computeOptimizedLineWrapping(wordWidths, initialWidth, maxWidth) {
        // Summarization of the algorithm:
        //
        // Add up to this.easing of additional width, to see if it improves the text
        // by reducing the average of the difference between the width and the length
        // of each line. We call the difference between the width and the length of
        // the line the error, and we are minimizing the average error.
        //
        // The purpose is to mimic the behavior of a person grabbing the edge of the
        // box and making it wider, to see if the look of the text improves.
        let lines = 0;
        let fit = 0;
        let overflow = 0;
        let bestFit = Infinity;
        let bestWidth = 0;
        let newWidth = initialWidth;
        do {
            const result = this.computeLineWrap(wordWidths, newWidth);
            lines = result[0];
            fit = result[1];
            overflow = result[2];
            if (fit / lines < bestFit) {
                bestFit = fit / lines;
                bestWidth = Math.max(overflow, newWidth);
            }
            newWidth += 2;
        } while (newWidth < maxWidth);
        return bestWidth;
    } // computeOptimizedLineWrapping
    /**
     * [private] computeLineWrap - determine how text should be line-wrapped,
     *                             given previously-computed width. Does not
     *                             actually assemble lines of words.
     *
     * @param {Array} wordWidths the precomputed widths of the words
     * @param {number} newWidth the maximum width of a line
     *
     * @return {Array} an array: [lines: the number of lines that will be used
     *                            error: the sum of the errors of the line widths;
     *                            overflow: the width of the largest overflowing
     *                                      word (if any)]
     */
    computeLineWrap(wordWidths, width) {
        // Summarization of the algorithm.
        //
        // Compute the effect of adding a new word to the current line and, when the
        // new word would cause the line width to exceed the input width, bump the
        // number of lines
        //
        // There are two indices that are of interest, per line:
        //  - slice_start : the index of the first word to put on the current line
        //  - index       : the index of the word currently being examined
        //
        // When a line is set, we set words from slice_start through index.
        let lineCount = 0;
        let accumulatedLineError = 0;
        let accumulatedLength = 0;
        let overflowWidth = 0;
        let sliceStart = 0;
        let index = 0;
        let wordWidth = 0;
        let paddedWidth = 0;
        let lineExceeded = false;
        while (index < wordWidths.length) {
            wordWidth = wordWidths[index];
            paddedWidth = wordWidth + this.padding;
            lineExceeded = accumulatedLength + paddedWidth > width;
            // We have not yet identified the word that would cause overflow, so simply
            // record the impact of adding the current word to the line.
            if (!lineExceeded) {
                accumulatedLength += wordWidth + 3;
                // We will push the current word, so we bump the index
                ++index;
            }
            // This is the case in which we have "accumulated" enough words to fill a
            // line. That is, we just found the word at which we would overflow, and
            // now, we will push into our line array words from the last line break
            // up to (but not including) the word that caused overflow.
            else if (lineExceeded && accumulatedLength > 0) {
                ++lineCount;
                accumulatedLineError += width - accumulatedLength - 3;
                accumulatedLength = 0;
                sliceStart = index;
                // We did /not/ "push" the current word, so we /don't/ bump the index.
            }
            // This is the case in which a single word is longer than the requested
            // wrapped width.
            else if (lineExceeded && accumulatedLength === 0) {
                ++lineCount;
                // We pushed the current word, so we bump the index.
                sliceStart = ++index;
                overflowWidth = Math.max(overflowWidth, wordWidth);
            }
            // Those three cases cover the possible input space, so there is no bare
            // else branch needed.
        } // while: examine all words.
        // This handles the last line of text: we examined every word, we may not
        // have actually set the last set of words (from slice_start to index
        // (= words.length))
        if (sliceStart <= wordWidths.length) {
            ++lineCount;
            accumulatedLineError += width - accumulatedLength - 3;
        }
        return [lineCount, accumulatedLineError, overflowWidth];
    } // computeLineWrap
    /**
     * [private] lineWrap_internal - determine how text should be line-wrapped,
     *                               given previously-computed width.
     *
     * @param {Array} words the words that we want to place into lines
     * @param {Array} wordWidths the precomputed widths of the words
     * @param {number} width the maximum width of a line
     *
     * @return {Array} an array: [lines: array of stings - the lines of words;
     *                            error: the sum of the errors of the line widths;
     *                            overflow: the width of the largest overflowing
     *                                      word (if any)]
     */
    lineWrapInternal(words, wordWidths, width) {
        // Summarization of the algorithm.
        //
        // Compute the effect of adding a new word to the current line and, when the
        // new word would cause the line width to exceed the input width, push all
        // the words for the line into the lines array at once. This is dramatically
        // faster than adding one word at a time to the line in the lines array, as
        // it significantly cuts down on the number of string operations that must be
        // performed in the loop.
        //
        // There are two indices that are of interest:
        //  - slice_start : the index of the first word to put on the current line
        //  - index       : the index of the word currently being examined
        //
        // When a line is set, we set words from slice_start through index.
        const lines = [];
        let accumulatedLineError = 0;
        let accumulatedLength = 0;
        let overflowWidth = 0;
        let sliceStart = 0;
        let index = 0;
        let word = '';
        let wordWidth = 0;
        let paddedWidth = 0;
        let lineExceeded = false;
        while (index < words.length) {
            word = words[index];
            wordWidth = wordWidths[index];
            paddedWidth = wordWidth + this.padding;
            lineExceeded = accumulatedLength + paddedWidth > width;
            // We have not yet identified the word that would cause overflow, so simply
            // record the impact of adding the current word to the line.
            if (!lineExceeded) {
                accumulatedLength += wordWidth + 3;
                // We will push the current word, so we bump the index
                ++index;
            }
            // This is the case in which we have "accumulated" enough words to fill a
            // line. That is, we just found the word at which we would overflow, and
            // now, we will push into our line array words from the last line break
            // up to (but not including) the word that caused overflow.
            else if (lineExceeded && accumulatedLength > 0) {
                lines.push(words.slice(sliceStart, index).join(' '));
                accumulatedLineError += width - accumulatedLength - 3;
                accumulatedLength = 0;
                sliceStart = index;
                // We did /not/ push the current word, so we /don't/ bump the index.
            }
            // This is the case in which a single word is longer than the requested
            // wrapped width.
            else if (lineExceeded && accumulatedLength === 0) {
                lines.push(word);
                // We pushed the current word, so we bump the index.
                sliceStart = ++index;
                overflowWidth = Math.max(overflowWidth, wordWidth);
            }
            // Those three cases cover the possible input space, so there is no bare
            // else branch needed.
        } // while: examine all words.
        // This handles the last line of text: we examined every word, we may not
        // have actually set the last set of words (from slice_start to index
        // (= words.length))
        if (sliceStart <= words.length) {
            lines.push(words.slice(sliceStart).join(' '));
            accumulatedLineError += width - accumulatedLength - 3;
        }
        return [lines, accumulatedLineError, overflowWidth];
    } // lineWrap_internal
}
Metrics.lineWrapCache = {};
Metrics.lineWrapCacheBold = {};
Metrics.lineWrapCacheLines = {};


/***/ }),

/***/ "./sct-js/sources/viewer/renderer/sct-render-group.ts":
/*!************************************************************!*\
  !*** ./sct-js/sources/viewer/renderer/sct-render-group.ts ***!
  \************************************************************/
/*! exports provided: RenderGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderGroup", function() { return RenderGroup; });
// -------------------------------------------------------------------------- //
// sct-render-group.js          Dependable Computing                     2012 //
// -------------------------------------------------------------------------- //
/**
 * @classdesc
 *
 * This class provides an abstraction for a group that is constructed by a
 * {@link Renderer}.
 *
 * @constructor
 * @return {RenderGroup} a new, empty instance
 */
class RenderGroup {
}


/***/ }),

/***/ "./sct-js/sources/viewer/renderer/sct-renderer-factory.ts":
/*!****************************************************************!*\
  !*** ./sct-js/sources/viewer/renderer/sct-renderer-factory.ts ***!
  \****************************************************************/
/*! exports provided: RendererFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendererFactory", function() { return RendererFactory; });
// -------------------------------------------------------------------------- //
// sct-renderer-factory.js      Dependable Computing                     2012 //
// -------------------------------------------------------------------------- //
/**
 * Factory class for constructing Renderer instances. This is an abstract base
 * class so attempting to use it will throw an error.
 *
 * @constructor
 *
 * @return {RendererFactory}
 */
class RendererFactory {
    /**
     * newRenderer - abstract method; always throws an error
     */
    newRenderer(name, width, height) {
        throw new Error('Cannot instantiate a Renderer using the abstract RendererFactory.');
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/renderer/sct-renderer.ts":
/*!********************************************************!*\
  !*** ./sct-js/sources/viewer/renderer/sct-renderer.ts ***!
  \********************************************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return Renderer; });
// -------------------------------------------------------------------------- //
// sct-renderer.js              Dependable Computing                     2012 //
// -------------------------------------------------------------------------- //
/**
 * @classdesc
 * This class defines an abstract renderer.
 *
 * @constructor
 * @return {Renderer} a new, empty instance
 */
class Renderer {
    /**
     * Initialize the abstract renderer by specifying its name
     *
     * @param name the name used to look up this renderer from active renderers
     * @param canvas the canvas on which graphics will be placed by this
     *                        renderer. Subclasses are expected to set this after
     *                        they actually create the canvas.
     */
    initRenderer(name, canvas) {
        this.name = name;
        this.canvas = canvas;
    }
    /**
     * Alias {@link Renderer#init} for subclasses
     */
    init(name, canvas) {
        throw new Error('Use initRenderer instead');
    }
    /**
     * Set the size of the renderer. This changes only the size of the canvas; it
     * does not scale or translate the graphics.
     *
     * @param width the new width of the canvas
     * @param height the new height of the canvas
     */
    setSize(width, height) { }
}


/***/ }),

/***/ "./sct-js/sources/viewer/renderer/sct-svg-render-group.ts":
/*!****************************************************************!*\
  !*** ./sct-js/sources/viewer/renderer/sct-svg-render-group.ts ***!
  \****************************************************************/
/*! exports provided: SvgRenderGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgRenderGroup", function() { return SvgRenderGroup; });
/* harmony import */ var _sct_render_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-render-group */ "./sct-js/sources/viewer/renderer/sct-render-group.ts");
// -------------------------------------------------------------------------- //
// sct-svg-render-group.js      Dependable Computing                     2012 //
// -------------------------------------------------------------------------- //
/* tslint:disable deprecation */

/**
 * @classdesc
 *
 * SVG-specific {@link RenderGroup}
 *
 * @constructor
 * @return {SvgRenderGroup} a new, empty instance
 */
class SvgRenderGroup extends _sct_render_group__WEBPACK_IMPORTED_MODULE_0__["RenderGroup"] {
    init(renderer, gsnNode) {
        this.canvas = renderer.canvas;
        this.viewport = renderer.viewport;
        this.gsnNode = gsnNode !== null && gsnNode !== void 0 ? gsnNode : null;
        /**
         * The collection of items in this group.
         *
         * @type {Array[]}
         */
        this.items = [];
        this.mouseDownListener = this.handleMouseDown.bind(this);
        this.mouseMoveListener = this.handleMouseMove.bind(this);
        this.mouseUpListener = this.handleMouseUp.bind(this);
        this.keyListener = this.handleKey.bind(this);
        this.eventsInitialized = false;
        this.dragX = 0;
        this.dragY = 0;
        this.moved = false;
        this.copying = false;
        this.canceled = false;
        this.onDragStart = null;
        this.onDragEnd = null;
        this.onDrag = null;
        this.onclick = function () { };
    }
    push(item) {
        this.items.push(item);
    }
    /**
     * Set callbacks for starting and stopping hovering over a group.
     *
     * @param {Function} hoverStart start callback
     * @param {Function} hoverEnd stop callback
     */
    hover(hoverStart, hoverEnd) {
        this.items.forEach(item => {
            item.addEventListener('mouseover', hoverStart, false);
            item.addEventListener('mouseout', hoverEnd, false);
        });
    }
    /**
     * Set callback for clicking on a group.
     *
     * @param onclick the click callback
     */
    click(onclick) {
        if (!this.eventsInitialized) {
            this.initializeEvents();
        }
        this.onclick = onclick;
    }
    /**
     * Set callbacks for dragging the group
     *
     * @param dragStart start callback
     * @param drag drag callback
     * @param dragEnd stop callback
     */
    drag(dragStart, drag, dragEnd) {
        if (!this.eventsInitialized) {
            this.initializeEvents();
        }
        this.onDragStart = dragStart;
        this.onDragEnd = dragEnd;
        this.onDrag = drag;
    }
    /**
     * Detach all of the objects in this group from the {@link Renderer}.
     */
    detach() {
        this.items.forEach(item => {
            jQuery(item).detach();
        });
    }
    /**
     * Set the absolute position of this group on the canvas.
     *
     * @param x
     * @param y
     */
    setPosition(x, y) {
        const transform = this.canvas.createSVGMatrix();
        transform.a = 1;
        transform.b = 0;
        transform.c = 0;
        transform.d = 1;
        transform.e = x;
        transform.f = y;
        this.items.forEach(item => {
            item.setAttributeNS(null, 'transform', 'matrix(' +
                transform.a +
                ',' +
                transform.b +
                ',' +
                transform.c +
                ',' +
                transform.d +
                ',' +
                transform.e +
                ',' +
                transform.f +
                ')');
        });
    }
    setOffset(dx, dy) {
        const transform = this.canvas.createSVGMatrix();
        transform.a = 1;
        transform.b = 0;
        transform.c = 0;
        transform.d = 1;
        transform.e = dx;
        transform.f = dy;
        this.items.forEach(item => {
            item.setAttributeNS(null, 'transform', 'matrix(' +
                transform.a +
                ',' +
                transform.b +
                ',' +
                transform.c +
                ',' +
                transform.d +
                ',' +
                transform.e +
                ',' +
                transform.f +
                ')');
        });
    }
    initializeEvents() {
        // The mouse down listener must be installed on each item in the group: that
        // way, we'll capture the mouse down and begin our reasoning about what's
        // happening.
        jQuery.each(this.items, function (index, item) {
            item.addEventListener('mousedown', this.mouseDownListener, false);
        }.bind(this));
        // Notice that mouseup is not hooked here. We hook it in response to mouse
        // down and unhook it in response to mouse up. Mouse up must be hooked on the
        // window because we always care about it - not only when the mouse is still
        // over the item that fired mousedown. It seems cleaner to hook it at need
        // rather than leave it turned on and ignore it - especially since there are
        // likely to be lots of groups on a large argument.
        // Notice that mousemove is not hooked here. We hook it in response to mouse
        // down and unhook it in response to mouse up. Like the mouse up listener, we
        // must hook mouse move on the window, not the item that generated the mouse
        // down event: we want to track mouse movement everywhere, not just over that
        // item.
        this.eventsInitialized = true;
    }
    handleMouseDown(evt) {
        // Mouse down on a specific item. There are two possibilities:
        //
        //  1. The user is clicking.
        //  2. The user is dragging.
        //
        // We can't tell, here, which it is because the needed information is in the
        // future. We therefore have to prepare for either possibility.
        // Hook events for mouse move. We do this no matter what, because we want to
        // prevent the default mouse-move behavior, no matter what.
        window.addEventListener('mousemove', this.mouseMoveListener, false);
        // Hook the mouse up listener, on the window
        window.addEventListener('mouseup', this.mouseUpListener, false);
        window.addEventListener('keydown', this.keyListener, false);
        window.addEventListener('keyup', this.keyListener, false);
        this.canceled = false;
        this.moved = false;
        // If this element can drag, set up drag support:
        if (this.onDragStart) {
            // Set initial state for drag.
            this.dragX = 0;
            this.dragY = 0;
            this.copying =
                (!navigator.platform.match(/Mac/) && evt.ctrlKey) ||
                    (!!navigator.platform.match(/Mac/) && evt.altKey);
            this.canvas.style['cursor'] = this.copying ? 'copy' : 'default';
        }
        // Event cleanup code. Prevent default behavior and terminate bubbling.
        if (evt.preventDefault) {
            evt.preventDefault();
        }
        evt.returnValue = false;
        return false;
    }
    handleMouseMove(evt) {
        // Update internal state because the user is dragging (and not just clicking).
        if (this.onDragStart) {
            // Coordinate transform - from window coordinates to viewport coordinates
            const vPoint = this.viewport.canvas2viewport(evt.clientX, evt.clientY);
            // We need to issue drag start so that the client can do what's needed to
            // show the user that dragging is happening.
            if (!this.moved) {
                jQuery('.drop-zone').show();
                if (this.onDragStart) {
                    this.onDragStart(vPoint.x, vPoint.y, this.gsnNode);
                }
            }
            else {
                // Send the drag event
                if (this.onDrag) {
                    this.onDrag(vPoint.x - this.dragX, vPoint.y - this.dragY, this.gsnNode);
                }
            }
            // Update the internal drag state.
            this.dragX = vPoint.x;
            this.dragY = vPoint.y;
            this.moved = true;
        }
        // Event cleanup code. Prevent default behavior and terminate bubbling.
        if (evt.preventDefault) {
            evt.preventDefault();
        }
        evt.returnValue = false;
        return false;
    }
    handleMouseUp(evt) {
        // No matter what, we want to unhook this handler and the move listener:
        window.removeEventListener('mousemove', this.mouseMoveListener, false);
        window.removeEventListener('mouseup', this.mouseUpListener, false);
        window.removeEventListener('keydown', this.keyListener, false);
        window.removeEventListener('keyup', this.keyListener, false);
        // Now figure out if the original mouse down was a click or a drag and handle
        // accordingly:
        if (this.moved) {
            // Was a drag
            jQuery('.drop-zone').hide();
            if (this.onDragEnd) {
                this.onDragEnd(this.gsnNode, this.copying, this.canceled);
            }
        }
        else {
            // Was a click
            this.onclick(this.gsnNode);
        }
        // Clear all state (overzealous)
        this.canvas.style.cursor = '';
        this.moved = false;
        this.copying = false;
        this.canceled = false;
        this.dragX = 0;
        this.dragY = 0;
        // Event cleanup code. Prevent default behavior and terminate bubbling.
        if (evt.preventDefault) {
            evt.preventDefault();
        }
        evt.returnValue = false;
        return false;
    }
    handleKey(evt) {
        // If we don't think we're copying, we should check to see if the user hit
        // the meta key to request copy.
        if (!this.copying &&
            ((!navigator.platform.match(/Mac/) && evt.ctrlKey) ||
                (navigator.platform.match(/Mac/) && evt.altKey))) {
            this.canvas.style['cursor'] = 'copy';
            this.copying = true;
        }
        // If we are copying, we should check to see if the user released the meta
        // key and canceled copy.
        if (this.copying &&
            ((!navigator.platform.match(/Mac/) && !evt.ctrlKey) ||
                (navigator.platform.match(/Mac/) && !evt.altKey))) {
            this.canvas.style['cursor'] = 'default';
            this.copying = false;
        }
        // Escape terminates drag.
        if (evt.keyCode === 27) {
            this.copying = false;
            this.canceled = true;
            // this is illegal in typescript
            //this.handleMouseUp(evt);
            // so instead we pass along a new MouseEvent with its initiator
            this.handleMouseUp(new MouseEvent('mouseUp', evt));
        }
        // Event cleanup code. Prevent default behavior and terminate bubbling.
        if (evt.preventDefault) {
            evt.preventDefault();
        }
        evt.returnValue = false;
        return false;
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/renderer/sct-svg-renderer-factory.ts":
/*!********************************************************************!*\
  !*** ./sct-js/sources/viewer/renderer/sct-svg-renderer-factory.ts ***!
  \********************************************************************/
/*! exports provided: SvgRendererFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgRendererFactory", function() { return SvgRendererFactory; });
/* harmony import */ var _sct_svg_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-svg-renderer */ "./sct-js/sources/viewer/renderer/sct-svg-renderer.ts");
/* harmony import */ var _sct_renderer_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sct-renderer-factory */ "./sct-js/sources/viewer/renderer/sct-renderer-factory.ts");
// -------------------------------------------------------------------------- //
// sct-svg-renderer-factory.js  Dependable Computing                  2012 //
// -------------------------------------------------------------------------- //


/**
 * Factory class for constructing SvgRenderer instances.
 *
 * @constructor
 * @extends RendererFactory
 *
 * @return {SvgRendererFactory}
 */
class SvgRendererFactory extends _sct_renderer_factory__WEBPACK_IMPORTED_MODULE_1__["RendererFactory"] {
    /**
     * Create a new {@link SvgRenderer}, initialize it, and return it.
     *
     * @param name the name of the renderer, which is also the name of the
     *                      DOM element that will contain its canvas.
     * @param width the initial width of the canvas
     * @param height the initial height of the canvas
     */
    newRenderer(name, width, height) {
        const renderer = new _sct_svg_renderer__WEBPACK_IMPORTED_MODULE_0__["SvgRenderer"]();
        renderer.initSvgRenderer(name, width, height);
        return renderer;
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/renderer/sct-svg-renderer.ts":
/*!************************************************************!*\
  !*** ./sct-js/sources/viewer/renderer/sct-svg-renderer.ts ***!
  \************************************************************/
/*! exports provided: SvgRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgRenderer", function() { return SvgRenderer; });
/* harmony import */ var _nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nodes/sct-gsn-node */ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts");
/* harmony import */ var _sct_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sct-renderer */ "./sct-js/sources/viewer/renderer/sct-renderer.ts");
/* harmony import */ var _sct_svg_viewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sct-svg-viewport */ "./sct-js/sources/viewer/renderer/sct-svg-viewport.ts");
/* harmony import */ var _sct_svg_render_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sct-svg-render-group */ "./sct-js/sources/viewer/renderer/sct-svg-render-group.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./sct-js/sources/viewer/utils.ts");
// -------------------------------------------------------------------------- //
// sct-svg-renderer.js          Dependable Computing                     2012 //
// -------------------------------------------------------------------------- //





/**
 * @classdesc
 * This class defines a {@link Renderer} that uses directly-constructed SVG to
 * render elements.
 *
 * @constructor
 * @extends Renderer
 * @return {SvgRenderer} a new, empty instance
 */
class SvgRenderer extends _sct_renderer__WEBPACK_IMPORTED_MODULE_1__["Renderer"] {
    /**
     * Initialize the renderer.
     *
     * @param name the name of the renderer, which is also the name of the
     *                      DOM element that will contain its canvas.
     * @param width the initial width of the canvas
     * @param height the initial height of the canvas
     */
    initSvgRenderer(name, width, height) {
        this.width = width;
        this.height = height;
        const container = jQuery('#' + name)[0];
        const svgNamespace = 'http://www.w3.org/2000/svg';
        this.svgNamespace = svgNamespace;
        this.xLinkNamespace = 'http://www.w3.org/1999/xlink';
        const svg = document.createElementNS(svgNamespace, 'svg');
        svg.setAttribute('id', '__svg__viewer__for__' + name);
        svg.setAttribute('width', width.toString());
        svg.setAttribute('height', height.toString());
        svg.setAttribute('version', '1.1');
        svg.setAttribute('xmlns', svgNamespace);
        svg.setAttribute('text-rendering', 'geometricprecision');
        svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
        // HACK: if we are a navigator, don't generate defs. This is to work around a
        // WebKit bug.
        if (name !== 'navigator') {
            const defs = document.createElementNS(svgNamespace, 'defs');
            defs.setAttribute('id', 'defs__for__' + name);
            let marker = document.createElementNS(svgNamespace, 'marker');
            marker.setAttribute('id', 'arrow');
            marker.setAttribute('viewBox', '-5 -5 50 40');
            marker.setAttribute('refX', '0');
            marker.setAttribute('refY', '15');
            marker.setAttribute('markerUnits', 'strokeWidth');
            marker.setAttribute('markerWidth', '15');
            marker.setAttribute('markerHeight', '10');
            marker.setAttribute('orient', 'auto');
            let path = document.createElementNS(svgNamespace, 'path');
            path.setAttribute('class', 'solid');
            path.setAttribute('d', 'M 0 0 L 40 15 L 0 30 z');
            marker.appendChild(path);
            defs.appendChild(marker);
            marker = document.createElementNS(svgNamespace, 'marker');
            marker.setAttribute('id', 'empty-arrow');
            marker.setAttribute('viewBox', '-5 -5 50 40');
            marker.setAttribute('refX', '0');
            marker.setAttribute('refY', '15');
            marker.setAttribute('markerUnits', 'strokeWidth');
            marker.setAttribute('markerWidth', '15');
            marker.setAttribute('markerHeight', '10');
            marker.setAttribute('orient', 'auto');
            path = document.createElementNS(svgNamespace, 'path');
            path.setAttribute('class', 'empty');
            path.setAttribute('d', 'M 0 0 L 40 15 L 0 30 z');
            marker.appendChild(path);
            defs.appendChild(marker);
            marker = document.createElementNS(svgNamespace, 'marker');
            marker.setAttribute('id', 'dot');
            marker.setAttribute('viewBox', '-5 -5 50 50');
            marker.setAttribute('refX', '20');
            marker.setAttribute('refY', '20');
            marker.setAttribute('markerUnits', 'strokeWidth');
            marker.setAttribute('markerWidth', '15');
            marker.setAttribute('markerHeight', '15');
            marker.setAttribute('orient', 'auto');
            let circle = document.createElementNS(svgNamespace, 'circle');
            circle.setAttribute('class', 'solid');
            circle.setAttribute('cx', '20');
            circle.setAttribute('cy', '20');
            circle.setAttribute('r', '20');
            marker.appendChild(circle);
            defs.appendChild(marker);
            marker = document.createElementNS(svgNamespace, 'marker');
            marker.setAttribute('id', 'empty-dot');
            marker.setAttribute('viewBox', '-5 -5 50 50');
            marker.setAttribute('refX', '20');
            marker.setAttribute('refY', '20');
            marker.setAttribute('markerUnits', 'strokeWidth');
            marker.setAttribute('markerWidth', '15');
            marker.setAttribute('markerHeight', '15');
            marker.setAttribute('orient', 'auto');
            circle = document.createElementNS(svgNamespace, 'circle');
            circle.setAttribute('class', 'empty');
            circle.setAttribute('cx', '20');
            circle.setAttribute('cy', '20');
            circle.setAttribute('r', '20');
            marker.appendChild(circle);
            defs.appendChild(marker);
            // A light red gradient
            let gradient = document.createElementNS(svgNamespace, 'linearGradient');
            gradient.setAttribute('id', 'red-gradient');
            gradient.setAttribute('x1', '0');
            gradient.setAttribute('y1', '0');
            gradient.setAttribute('x2', '0');
            gradient.setAttribute('y2', '1');
            gradient.setAttribute('gradientUnits', 'objectBoundingBox');
            let startStop = document.createElementNS(svgNamespace, 'stop');
            startStop.setAttribute('style', 'stop-color:#fcc;stop-opacity:1');
            startStop.setAttribute('offset', '100%');
            let endStop = document.createElementNS(svgNamespace, 'stop');
            endStop.setAttribute('style', 'stop-color:#fff;stop-opacity:1;');
            endStop.setAttribute('offset', '0%');
            gradient.appendChild(endStop);
            gradient.appendChild(startStop);
            defs.appendChild(gradient);
            // A light orange gradient
            gradient = document.createElementNS(svgNamespace, 'linearGradient');
            gradient.setAttribute('id', 'orange-gradient');
            gradient.setAttribute('x1', '0');
            gradient.setAttribute('y1', '0');
            gradient.setAttribute('x2', '0');
            gradient.setAttribute('y2', '1');
            gradient.setAttribute('gradientUnits', 'objectBoundingBox');
            startStop = document.createElementNS(svgNamespace, 'stop');
            startStop.setAttribute('style', 'stop-color:#fdb;stop-opacity:1');
            startStop.setAttribute('offset', '100%');
            endStop = document.createElementNS(svgNamespace, 'stop');
            endStop.setAttribute('style', 'stop-color:#fff;stop-opacity:1;');
            endStop.setAttribute('offset', '0%');
            gradient.appendChild(endStop);
            gradient.appendChild(startStop);
            defs.appendChild(gradient);
            // A light yellow gradient
            gradient = document.createElementNS(svgNamespace, 'linearGradient');
            gradient.setAttribute('id', 'yellow-gradient');
            gradient.setAttribute('x1', '0');
            gradient.setAttribute('y1', '0');
            gradient.setAttribute('x2', '0');
            gradient.setAttribute('y2', '1');
            gradient.setAttribute('gradientUnits', 'objectBoundingBox');
            startStop = document.createElementNS(svgNamespace, 'stop');
            startStop.setAttribute('style', 'stop-color:#ffc;stop-opacity:1');
            startStop.setAttribute('offset', '100%');
            endStop = document.createElementNS(svgNamespace, 'stop');
            endStop.setAttribute('style', 'stop-color:#fff;stop-opacity:1;');
            endStop.setAttribute('offset', '0%');
            gradient.appendChild(endStop);
            gradient.appendChild(startStop);
            defs.appendChild(gradient);
            // A light green gradient
            gradient = document.createElementNS(svgNamespace, 'linearGradient');
            gradient.setAttribute('id', 'green-gradient');
            gradient.setAttribute('x1', '0');
            gradient.setAttribute('y1', '0');
            gradient.setAttribute('x2', '0');
            gradient.setAttribute('y2', '1');
            gradient.setAttribute('gradientUnits', 'objectBoundingBox');
            startStop = document.createElementNS(svgNamespace, 'stop');
            startStop.setAttribute('style', 'stop-color:#cfc;stop-opacity:1');
            startStop.setAttribute('offset', '100%');
            endStop = document.createElementNS(svgNamespace, 'stop');
            endStop.setAttribute('style', 'stop-color:#fff;stop-opacity:1;');
            endStop.setAttribute('offset', '0%');
            gradient.appendChild(endStop);
            gradient.appendChild(startStop);
            defs.appendChild(gradient);
            // A light blue gradient
            gradient = document.createElementNS(svgNamespace, 'linearGradient');
            gradient.setAttribute('id', 'blue-gradient');
            gradient.setAttribute('x1', '0');
            gradient.setAttribute('y1', '0');
            gradient.setAttribute('x2', '0');
            gradient.setAttribute('y2', '1');
            gradient.setAttribute('gradientUnits', 'objectBoundingBox');
            startStop = document.createElementNS(svgNamespace, 'stop');
            startStop.setAttribute('style', 'stop-color:#bcf;stop-opacity:1');
            startStop.setAttribute('offset', '100%');
            endStop = document.createElementNS(svgNamespace, 'stop');
            endStop.setAttribute('style', 'stop-color:#fff;stop-opacity:1;');
            endStop.setAttribute('offset', '0%');
            gradient.appendChild(endStop);
            gradient.appendChild(startStop);
            defs.appendChild(gradient);
            // A light purple gradient
            gradient = document.createElementNS(svgNamespace, 'linearGradient');
            gradient.setAttribute('id', 'purple-gradient');
            gradient.setAttribute('x1', '0');
            gradient.setAttribute('y1', '0');
            gradient.setAttribute('x2', '0');
            gradient.setAttribute('y2', '1');
            gradient.setAttribute('gradientUnits', 'objectBoundingBox');
            startStop = document.createElementNS(svgNamespace, 'stop');
            startStop.setAttribute('style', 'stop-color:#fbf;stop-opacity:1');
            startStop.setAttribute('offset', '100%');
            endStop = document.createElementNS(svgNamespace, 'stop');
            endStop.setAttribute('style', 'stop-color:#fff;stop-opacity:1;');
            endStop.setAttribute('offset', '0%');
            gradient.appendChild(endStop);
            gradient.appendChild(startStop);
            defs.appendChild(gradient);
            // A light grey gradient
            gradient = document.createElementNS(svgNamespace, 'linearGradient');
            gradient.setAttribute('id', 'grey-gradient');
            gradient.setAttribute('x1', '0');
            gradient.setAttribute('y1', '0');
            gradient.setAttribute('x2', '0');
            gradient.setAttribute('y2', '1');
            gradient.setAttribute('gradientUnits', 'objectBoundingBox');
            startStop = document.createElementNS(svgNamespace, 'stop');
            startStop.setAttribute('style', 'stop-color:#ddd;stop-opacity:1');
            startStop.setAttribute('offset', '100%');
            endStop = document.createElementNS(svgNamespace, 'stop');
            endStop.setAttribute('style', 'stop-color:#fff;stop-opacity:1;');
            endStop.setAttribute('offset', '0%');
            gradient.appendChild(endStop);
            gradient.appendChild(startStop);
            defs.appendChild(gradient);
            // Drop shadow (a filter)
            const shadow = document.createElementNS(svgNamespace, 'filter');
            shadow.setAttribute('id', 'dropshadow');
            shadow.setAttribute('width', '1.5');
            shadow.setAttribute('height', '1.75');
            shadow.setAttribute('x', '-.25');
            shadow.setAttribute('y', '-.25');
            let gaussian = document.createElementNS(svgNamespace, 'feGaussianBlur');
            gaussian.setAttribute('id', '_shadow_gaussian');
            gaussian.setAttribute('in', 'SourceAlpha');
            gaussian.setAttribute('stdDeviation', '2');
            gaussian.setAttribute('result', 'blur');
            let matrix = document.createElementNS(svgNamespace, 'feColorMatrix');
            matrix.setAttribute('id', '_shadow_matrix');
            matrix.setAttribute('result', 'bluralpha');
            matrix.setAttribute('type', 'matrix');
            // The salient parameter here is the second-to-last, which controls the
            // opacity. Currently set to 33%.
            matrix.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.33 0');
            const offset = document.createElementNS(svgNamespace, 'feOffset');
            offset.setAttribute('id', '_shadow_offset');
            offset.setAttribute('in', 'bluralpha');
            offset.setAttribute('dx', '0');
            offset.setAttribute('dy', '2.5');
            offset.setAttribute('result', 'offsetBlur');
            let merge = document.createElementNS(svgNamespace, 'feMerge');
            merge.setAttribute('id', '_shadow_merge');
            let node = document.createElementNS(svgNamespace, 'feMergeNode');
            node.setAttribute('id', '_shadow_merge_offset');
            node.setAttribute('in', 'offsetBlur');
            merge.appendChild(node);
            node = document.createElementNS(svgNamespace, 'feMergeNode');
            node.setAttribute('id', '_shadow_merge_graphic');
            node.setAttribute('in', 'SourceGraphic');
            merge.appendChild(node);
            shadow.appendChild(gaussian);
            shadow.appendChild(matrix);
            shadow.appendChild(offset);
            shadow.appendChild(merge);
            defs.appendChild(shadow);
            // A blue shadow, for hover-glow.
            const blueGlow = document.createElementNS(svgNamespace, 'filter');
            blueGlow.setAttributeNS(null, 'id', 'blueglow');
            blueGlow.setAttributeNS(null, 'x', '-50%');
            blueGlow.setAttributeNS(null, 'y', '-50%');
            blueGlow.setAttributeNS(null, 'width', '200%');
            blueGlow.setAttributeNS(null, 'height', '200%');
            matrix = document.createElementNS(svgNamespace, 'feColorMatrix');
            matrix.setAttribute('type', 'matrix');
            matrix.setAttribute('values', '0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0');
            gaussian = document.createElementNS(svgNamespace, 'feGaussianBlur');
            gaussian.setAttributeNS(null, 'stdDeviation', '4');
            gaussian.setAttributeNS(null, 'result', 'coloredBlur');
            merge = document.createElementNS(svgNamespace, 'feMerge');
            node = document.createElementNS(svgNamespace, 'feMergeNode');
            node.setAttribute('in', 'coloredBlur');
            merge.appendChild(node);
            node = document.createElementNS(svgNamespace, 'feMergeNode');
            node.setAttribute('in', 'SourceGraphic');
            merge.appendChild(node);
            blueGlow.appendChild(matrix);
            blueGlow.appendChild(gaussian);
            blueGlow.appendChild(merge);
            defs.appendChild(blueGlow);
            // A red shadow, for highlighting
            const redGlow = document.createElementNS(svgNamespace, 'filter');
            redGlow.setAttributeNS(null, 'id', 'redglow');
            redGlow.setAttributeNS(null, 'x', '-50%');
            redGlow.setAttributeNS(null, 'y', '-50%');
            redGlow.setAttributeNS(null, 'width', '200%');
            redGlow.setAttributeNS(null, 'height', '200%');
            matrix = document.createElementNS(svgNamespace, 'feColorMatrix');
            matrix.setAttribute('type', 'matrix');
            matrix.setAttribute('values', '1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0');
            gaussian = document.createElementNS(svgNamespace, 'feGaussianBlur');
            gaussian.setAttributeNS(null, 'stdDeviation', '4');
            gaussian.setAttributeNS(null, 'result', 'coloredBlur');
            merge = document.createElementNS(svgNamespace, 'feMerge');
            node = document.createElementNS(svgNamespace, 'feMergeNode');
            node.setAttribute('in', 'coloredBlur');
            merge.appendChild(node);
            node = document.createElementNS(svgNamespace, 'feMergeNode');
            node.setAttribute('in', 'SourceGraphic');
            merge.appendChild(node);
            redGlow.appendChild(matrix);
            redGlow.appendChild(gaussian);
            redGlow.appendChild(merge);
            defs.appendChild(redGlow);
            // A green shadow, for selection
            const greenGlow = document.createElementNS(svgNamespace, 'filter');
            greenGlow.setAttributeNS(null, 'id', 'greenglow');
            greenGlow.setAttributeNS(null, 'x', '-50%');
            greenGlow.setAttributeNS(null, 'y', '-50%');
            greenGlow.setAttributeNS(null, 'width', '200%');
            greenGlow.setAttributeNS(null, 'height', '200%');
            matrix = document.createElementNS(svgNamespace, 'feColorMatrix');
            matrix.setAttribute('type', 'matrix');
            matrix.setAttribute('values', '0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0');
            gaussian = document.createElementNS(svgNamespace, 'feGaussianBlur');
            gaussian.setAttributeNS(null, 'stdDeviation', '4');
            gaussian.setAttributeNS(null, 'result', 'coloredBlur');
            merge = document.createElementNS(svgNamespace, 'feMerge');
            node = document.createElementNS(svgNamespace, 'feMergeNode');
            node.setAttribute('in', 'coloredBlur');
            merge.appendChild(node);
            node = document.createElementNS(svgNamespace, 'feMergeNode');
            node.setAttribute('in', 'SourceGraphic');
            merge.appendChild(node);
            greenGlow.appendChild(matrix);
            greenGlow.appendChild(gaussian);
            greenGlow.appendChild(merge);
            defs.appendChild(greenGlow);
            svg.appendChild(defs);
        }
        this.graphics = document.createElementNS(svgNamespace, 'g');
        this.graphics.setAttribute('id', 'graphics_for_' + name);
        svg.appendChild(this.graphics);
        this.viewport = new _sct_svg_viewport__WEBPACK_IMPORTED_MODULE_2__["SvgViewport"]();
        this.viewport.initSvgViewport(this.graphics, svg, width, height);
        this.viewport.addListener(this.handleViewport.bind(this));
        this.anchors = {};
        container.appendChild(svg);
        this.initRenderer(name, svg);
    }
    /**
     * Alias {@link Renderer#init} for subclasses
     *
     * @function
     */
    init() {
        throw 'Call initSvgRenderer instead';
    }
    setSize(width, height) {
        if (this.width !== width || this.height !== height) {
            this.width = width;
            this.height = height;
            this.canvas.setAttribute('width', width.toString());
            this.canvas.setAttribute('height', height.toString());
            this.viewport.updateCanvasSize(width, height);
        }
    }
    getViewport() {
        return this.viewport;
    }
    setViewport(viewport) {
        throw Error('setViewport not implemented for SvgRenderer');
    }
    /**
     * Clear all graphics held by the SvgRenderer. This should be equivalent to having
     * a brand new renderer, except for any viewport changes.
     */
    clear() {
        jQuery(this.graphics)
            .children()
            .detach();
    }
    /** Create a group linked to a GsnNode, or using no parameters, create
     * a generic unlinked SVG group
     */
    group(gsnNode, href) {
        const group = new _sct_svg_render_group__WEBPACK_IMPORTED_MODULE_3__["SvgRenderGroup"]();
        group.init(this, gsnNode);
        if (href) {
            _utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].assert(!!gsnNode, 'Gsn node not provided for href?');
            group.hrefId = gsnNode.id;
            const a = document.createElementNS(this.svgNamespace, 'a');
            a.setAttributeNS(this.xLinkNamespace, 'xlink:href', href);
            a.setAttributeNS(null, 'target', '_blank');
            this.graphics.appendChild(a);
            this.anchors[gsnNode.id] = a;
        }
        return group;
    }
    rect(group, id, clazz, x, y, width, height, cx = 0, cy = 0, attrs) {
        const element = document.createElementNS(this.svgNamespace, 'rect');
        // Pack the attrs object with our parameters
        attrs = attrs || {};
        attrs['id'] = id;
        attrs['class'] = clazz;
        attrs['x'] = x;
        attrs['y'] = y;
        attrs['width'] = width;
        attrs['height'] = height;
        attrs['rx'] = cx || 0;
        attrs['ry'] = cy || 0;
        // Apply the attrs to the to the element, put the element in the group, add
        // the element to the viewport.
        return this.finalizeElement(element, group, attrs);
    }
    circle(group, id, clazz, x, y, r, attrs) {
        const element = document.createElementNS(this.svgNamespace, 'circle');
        // Pack the attrs object with our parameters
        attrs = attrs || {};
        attrs['id'] = id;
        attrs['class'] = clazz;
        attrs['cx'] = x + r; // I don't understand why this is needed here.
        attrs['cy'] = y;
        attrs['r'] = r;
        // Apply the attrs to the to the element, put the element in the group, add
        // the element to the viewport.
        return this.finalizeElement(element, group, attrs);
    }
    ellipse(group, id, clazz, x, y, rx, ry, attrs) {
        // Not yet implemented (or needed)....
        throw 'Unsupported operation: ellipse';
    }
    polygon(group, id, clazz, points, attrs) {
        const element = document.createElementNS(this.svgNamespace, 'polygon');
        // Pack the attrs object with our parameters
        attrs = attrs || {};
        attrs['id'] = id;
        attrs['class'] = clazz;
        // SVG isn't picky about spaces (like we were when we did the polygons by
        // hand).
        attrs['points'] = points.join(',');
        // Apply the attrs to the to the element, put the element in the group, add
        // the element to the viewport.
        return this.finalizeElement(element, group, attrs);
    }
    path(group, id, clazz, pathString, attrs) {
        const element = document.createElementNS(this.svgNamespace, 'path');
        // Pack the attrs object with our parameters
        if (!attrs) {
            attrs = {};
        }
        attrs['id'] = id;
        attrs['class'] = clazz;
        attrs['d'] = pathString;
        // Apply the attrs to the to the element, put the element in the group, add
        // the element to the viewport.
        return this.finalizeElement(element, group, attrs);
    }
    text(group, id, clazz, text, x, y, attrs) {
        const element = document.createElementNS(this.svgNamespace, 'text');
        // Set the text
        element.textContent = text;
        // Pack the attrs object with our parameters
        attrs = attrs || {};
        attrs['id'] = id;
        attrs['class'] = clazz;
        attrs['x'] = x;
        attrs['y'] = y;
        // Apply the attrs to the to the element, put the element in the group, add
        // the element to the viewport.
        return this.finalizeElement(element, group, attrs);
    }
    elementText(group, id, clazz, name, lines, gsnId, metrics, x, y, idX, idHrefTarget) {
        const element = document.createElementNS(this.svgNamespace, 'text');
        const attrs = {};
        attrs['id'] = id;
        attrs['class'] = clazz;
        attrs['font-size'] = 10.0;
        attrs['x'] = 0;
        attrs['y'] = 0;
        let tspan = document.createElementNS(this.svgNamespace, 'tspan');
        tspan.setAttributeNS(null, 'class', 'name');
        tspan.setAttributeNS(null, 'x', x.toString());
        tspan.setAttributeNS(null, 'y', y.toString());
        tspan.textContent = name;
        element.appendChild(tspan);
        let yOffset = 1.5 * metrics.lineHeight;
        jQuery.each(lines, function (index, line) {
            tspan = document.createElementNS(this.svgNamespace, 'tspan');
            tspan.setAttributeNS(null, 'x', x.toString());
            tspan.setAttributeNS(null, 'dy', yOffset.toString());
            tspan.textContent = line;
            element.appendChild(tspan);
            yOffset = metrics.lineHeight;
        }.bind(this));
        if (_nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_0__["GsnNode"].showGsnIds) {
            tspan = document.createElementNS(this.svgNamespace, 'tspan');
            tspan.setAttributeNS(null, 'class', 'gsnid');
            tspan.setAttributeNS(null, 'text-anchor', 'end');
            tspan.setAttributeNS(null, 'x', (x + idX).toString());
            tspan.setAttributeNS(null, 'dy', (1.5 * metrics.lineHeight).toString());
            tspan.textContent = gsnId;
            if (idHrefTarget && gsnId !== '' && gsnId !== 'Not Set') {
                const a = document.createElementNS(this.svgNamespace, 'a');
                a.setAttributeNS(this.xLinkNamespace, 'xlink:href', idHrefTarget.toString() + '#gsnid-' + gsnId);
                a.setAttributeNS(null, 'target', '_blank');
                a.appendChild(tspan);
                element.appendChild(a);
            }
            else {
                element.appendChild(tspan);
            }
        }
        return this.finalizeElement(element, group, attrs);
    }
    glow(element, color) {
        const group = this.group();
        const clone = jQuery(element).clone()[0];
        group.push(clone);
        switch (color) {
            case 'blue':
                clone.setAttributeNS(null, 'filter', 'url(#blueglow)');
                break;
            case 'red':
                clone.setAttributeNS(null, 'filter', 'url(#redglow)');
                break;
            case 'green':
                clone.setAttributeNS(null, 'filter', 'url(#greenglow)');
                break;
            default:
                clone.setAttributeNS(null, 'filter', 'url(#dropshadow)');
                break;
        }
        // @TODO: This breaks type safety, arbitrary tagging not allowed in TypeScript
        if (element._href_id) {
            this.anchors[element._href_id].insertBefore(clone, element);
        }
        else {
            this.graphics.insertBefore(clone, element);
        }
        return group;
    }
    unglow(group) {
        jQuery(group.items[0]).detach();
    }
    /**
     * Finalize an element by setting its attributes, putting it in its group, and
     * adding it to the viewport.
     *
     * @param {SVGElement} element
     * @param {SvgRenderGroup} group the group to which the element should be added
     * @param {Object} attrs the attributes for the element
     *
     * @return SVGElement the element passed in
     */
    finalizeElement(element, group, attrs) {
        let href = null;
        Object.entries(attrs).forEach(([name, value]) => {
            if (name === 'href') {
                href = value;
            }
            else {
                element.setAttributeNS(null, name, value);
            }
        });
        if (href) {
            const a = document.createElementNS(this.svgNamespace, 'a');
            a.setAttributeNS(this.xLinkNamespace, 'xlink:href', href);
            a.setAttributeNS(null, 'target', '_blank');
            a.appendChild(element);
            element = a;
        }
        group.push(element);
        // @TODO: This breaks type safety, arbitrary tagging not allowed in TypeScript
        if (group.hrefId) {
            element._href_id = group.hrefId;
            this.anchors[group.hrefId].appendChild(element);
        }
        else {
            this.graphics.appendChild(element);
        }
        return element;
    }
    /**
     * Listener for the viewport
     */
    handleViewport(viewport) {
        this.graphics.setAttributeNS(null, 'transform', 'matrix(' +
            viewport.matrix.a +
            ',' +
            viewport.matrix.b +
            ',' +
            viewport.matrix.c +
            ',' +
            viewport.matrix.d +
            ',' +
            viewport.matrix.e +
            ',' +
            viewport.matrix.f +
            ')');
    }
    /**
     * Draw a link icon adapted from the icon used on Wikipedia
     */
    createLinkIcon(group, x, y, attrs) {
        const rect = document.createElementNS(this.svgNamespace, 'rect');
        const rectAttrs = attrs || {};
        rectAttrs['class'] = 'icon';
        rectAttrs['x'] = x + 1.5;
        rectAttrs['y'] = y + 4.5;
        rectAttrs['width'] = 6;
        rectAttrs['height'] = 6;
        rectAttrs['style'] =
            'fill: white;' +
                'fill-opacity: 1;' +
                'fill-rule:nonzero;' +
                'stroke-width: 1;' +
                'stroke-linecap: butt;' +
                'stroke-linejoin: miter;' +
                'stroke-miterlimit: 4; ' +
                'stroke-opacity: 1';
        this.finalizeElement(rect, group, rectAttrs);
        const path1 = document.createElementNS(this.svgNamespace, 'path');
        const path1Attrs = attrs || {};
        path1Attrs['class'] = 'icon';
        path1Attrs['d'] =
            'M ' +
                (4 + x) +
                ',' +
                (2.5 + y) +
                ' ' +
                'L ' +
                (5 + x) +
                ',' +
                (3.5 + y) +
                ' ' +
                'L ' +
                (5.25 + x) +
                ',' +
                (4.25 + y) +
                ' ' +
                'L ' +
                (2.75 + x) +
                ',' +
                (6.5 + y) +
                ' ' +
                'L ' +
                (5.5 + x) +
                ',' +
                (9.25 + y) +
                ' ' +
                'L ' +
                (7.75 + x) +
                ',' +
                (6.75 + y) +
                ' ' +
                'L ' +
                (8.5 + x) +
                ',' +
                (7 + y) +
                ' ' +
                'L ' +
                (9.5 + x) +
                ',' +
                (8 + y) +
                ' ' +
                'L ' +
                (11 + x) +
                ',' +
                (6.5 + y) +
                ' ' +
                'L ' +
                (11 + x) +
                ',' +
                (1 + y) +
                ' ' +
                'L ' +
                (5.5 + x) +
                ',' +
                (1 + y) +
                ' ' +
                'L ' +
                (4 + x) +
                ',' +
                (2.5 + y) +
                ' z';
        path1Attrs['style'] =
            'fill-opacity: 1; ' +
                'fill-rule: evenodd;' +
                'stroke: none;' +
                'stroke-width: 1px;' +
                'stroke-linecap: butt;' +
                'stroke-linejoin: miter;' +
                'stroke-opacity: 1';
        this.finalizeElement(path1, group, path1Attrs);
        const path2 = document.createElementNS(this.svgNamespace, 'path');
        const path2Attrs = attrs || {};
        // No class here, on purpose.
        path2Attrs['d'] =
            'M ' +
                (6 + x) +
                ',' +
                (2 + y) +
                ' ' +
                'L ' +
                (10 + x) +
                ',' +
                (2 + y) +
                ' ' +
                'L ' +
                (10 + x) +
                ',' +
                (6 + y) +
                ' ' +
                'L ' +
                (9.5 + x) +
                ',' +
                (6.75 + y) +
                ' ' +
                'L ' +
                (8.25 + x) +
                ',' +
                (4.75 + y) +
                ' ' +
                'L ' +
                (5.25 + x) +
                ',' +
                (8 + y) +
                ' ' +
                'L ' +
                (4 + x) +
                ',' +
                (6.75 + y) +
                ' ' +
                'L ' +
                (7.25 + x) +
                ',' +
                (3.75 + y) +
                ' ' +
                'L ' +
                (5.25 + x) +
                ',' +
                (2.5 + y) +
                ' ' +
                'L ' +
                (6 + x) +
                ',' +
                (2 + y) +
                ' z';
        path2Attrs['style'] =
            'fill: #ffffff;' +
                'fill-opacity: 1;' +
                'fill-rule: evenodd;' +
                'stroke: none;' +
                'stroke-width: 1px;' +
                'stroke-linecap: butt;' +
                'stroke-linejoin: miter;' +
                'stroke-opacity: 1';
        this.finalizeElement(path2, group, path2Attrs);
    }
    /**
     * @return {String} the SVG currently rendered, suitable for exporting. This
     *                  SVG will have all styles internalized so that it is self-
     *                  contained
     */
    getSvg(tree) {
        /**
         * Fix for SCT-28
         *
         * Since Inkscape does not honor text-anchor for tspan, we have to offset all
         * of the GSN IDs by their width and remove the text-anchor attribute.
         *
         * This is written for clarity and simplicity, not efficiency. Since it's
         * done once, as part of the render, efficiency did not seem very important.
         */
        var _a, _b;
        jQuery('.gsnid')
            .removeAttr('text-anchor')
            .each(function (index, gsnId) {
            const x = jQuery(gsnId).attr('x');
            jQuery(gsnId).attr('orig_x', x);
            jQuery(gsnId).attr('x', x - gsnId.getComputedTextLength());
        });
        /**
         * End fix for SCT-28
         */
        let svg = '<?xml version="1.0" encoding="utf-8"?>' +
            '\n\n' +
            '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"' +
            '\n' +
            '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' +
            '\n\n';
        svg += (_b = (_a = this.canvas.parentElement) === null || _a === void 0 ? void 0 : _a.innerHTML) !== null && _b !== void 0 ? _b : '';
        const css = '<style type="text/css" >' +
            '\n' +
            '<![CDATA[' +
            '\n' +
            '.goal {' +
            '\n' +
            '  fill: white;' +
            '\n' +
            '  stroke-width: 1;' +
            '\n' +
            '  stroke: black;' +
            '\n' +
            '}' +
            '\n' +
            '.grey {' +
            '\n' +
            '  fill: #ddd;' +
            '\n' +
            '  stroke-width: 1;' +
            '\n' +
            '  stroke: black;' +
            '\n' +
            '}' +
            '\n' +
            '.confidence-point-bg {' +
            '\n' +
            '  fill: #FFF9D0;' +
            '\n' +
            '  stroke-width: 1;' +
            '\n' +
            '  stroke: black;' +
            '\n' +
            '}' +
            '\n' +
            '.confidence-point-fg {' +
            '\n' +
            '  fill: white;' +
            '\n' +
            '  opacity: 0;' +
            '\n' +
            '  ' +
            '\n' +
            '  cursor: pointer;' +
            '\n' +
            '}' +
            '\n' +
            '.comment {' +
            '\n' +
            '  fill: white;' +
            '\n' +
            '  stroke-width: 1;' +
            '\n' +
            '  stroke: #888;' +
            '\n' +
            '}' +
            '\n' +
            '' +
            '\n' +
            '.comment-line {' +
            '\n' +
            '  fill: none;' +
            '\n' +
            '  stroke: #888;' +
            '\n' +
            '  stroke-width: 1;' +
            '\n' +
            '  stroke-linecap: round;' +
            '\n' +
            '  stroke-linejoin: miter;' +
            '\n' +
            '  stroke-opacity: 1;' +
            '\n' +
            '  stroke-miterlimit: 4;' +
            '\n' +
            '  stroke-dasharray: 2,6;' +
            '\n' +
            '  stroke-dashoffset: 5;' +
            '\n' +
            '}' +
            '\n' +
            '' +
            '\n' +
            '.annote {' +
            '\n' +
            '  display: none;' +
            '\n' +
            '}' +
            '\n' +
            '' +
            '\n' +
            '.annote rect {' +
            '\n' +
            '  fill: white;' +
            '\n' +
            '  stroke: black;' +
            '\n' +
            '  stroke-width: 1;' +
            '\n' +
            '}' +
            '\n' +
            '' +
            '\n' +
            '.strategy {' +
            '\n' +
            '  fill: white;' +
            '\n' +
            '  stroke-width: 1;' +
            '\n' +
            '  stroke: black;' +
            '\n' +
            '}' +
            '\n' +
            '' +
            '\n' +
            '.solid {' +
            '\n' +
            '  stroke-width: 3;' +
            '\n' +
            '  stroke: black;' +
            '\n' +
            '  fill: black;' +
            '\n' +
            '}' +
            '\n' +
            '' +
            '\n' +
            '.empty {' +
            '\n' +
            '  stroke-width: 3;' +
            '\n' +
            '  stroke: black;' +
            '\n' +
            '  fill: white;' +
            '\n' +
            '}' +
            '\n' +
            '' +
            '\n' +
            '.context {' +
            '\n' +
            '  fill: white;' +
            '\n' +
            '  stroke-width: 1;' +
            '\n' +
            '  stroke: black;' +
            '\n' +
            '}' +
            '\n' +
            '' +
            '\n' +
            '.evidence {' +
            '\n' +
            '  fill: white;' +
            '\n' +
            '  stroke-width: 1;' +
            '\n' +
            '  stroke: black;' +
            '\n' +
            '}' +
            '\n' +
            '' +
            '\n' +
            '.down {' +
            '\n' +
            '  fill: none;' +
            '\n' +
            '  stroke-width: .75;' +
            '\n' +
            '  stroke: #888;' +
            '\n' +
            '}' +
            '\n' +
            '' +
            '\n' +
            '.side {' +
            '\n' +
            '  fill: none;' +
            '\n' +
            '  stroke-width: .75;' +
            '\n' +
            '  stroke: #888;' +
            '\n' +
            '}' +
            '\n' +
            '' +
            '\n' +
            'text {' +
            '\n' +
            '  font-family: "Arial";' +
            '\n' +
            '}' +
            '\n' +
            '' +
            '\n' +
            '.name {' +
            '\n' +
            '  font-weight: bold;' +
            '\n' +
            '}' +
            '\n' +
            '' +
            '\n' +
            '.gsnid {' +
            '\n' +
            '  fill: gray;' +
            '\n' +
            '  font-style: italic;' +
            '\n' +
            '}' +
            '\n' +
            '' +
            '\n' +
            'rect.icon {' +
            '\n' +
            '  stroke: gray;' +
            '\n' +
            '}' +
            '\n' +
            'path.icon {' +
            '\n' +
            '  fill: gray;' +
            '\n' +
            '}' +
            '\n' +
            ']]>' +
            '\n' +
            '</style>' +
            '\n\n';
        svg = svg.replace(/transform.*?>/, '>');
        svg = svg.replace(/width=".*?"/, 'width="' + (tree.marginLeft + tree.width + tree.marginRight) + '"');
        svg = svg.replace(/height=".*?"/, 'height="' + (tree.marginTop + tree.height + tree.marginBottom) + '"');
        svg = svg.replace(/<defs/, css + '\n\n' + '<defs');
        /**
         * Fix for SCTL-2 (required because of SCT-28)
         *
         * Undo the changes made at the top of this function
         */
        jQuery('.gsnid').each(function (index, gsnId) {
            // Undo moving the x value to the left
            const x = jQuery(gsnId).attr('orig_x');
            jQuery(gsnId).attr('x', x);
            // Put the text anchor back.
            jQuery(gsnId).attr('text-anchor', 'end');
            jQuery(gsnId).removeAttr('orig_x');
        });
        /**
         * End fix for SCTL-2
         */
        return svg;
    } // getSvg
}


/***/ }),

/***/ "./sct-js/sources/viewer/renderer/sct-svg-viewport.ts":
/*!************************************************************!*\
  !*** ./sct-js/sources/viewer/renderer/sct-svg-viewport.ts ***!
  \************************************************************/
/*! exports provided: SvgViewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgViewport", function() { return SvgViewport; });
/* harmony import */ var _sct_viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-viewport */ "./sct-js/sources/viewer/renderer/sct-viewport.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./sct-js/sources/viewer/utils.ts");
// -------------------------------------------------------------------------- //
// sct-viewport.js              Dependable Computing                     2012 //
// -------------------------------------------------------------------------- //


/**
 * @classdesc
 *
 * <p>
 *  This version is designed to be used in conjunction with the
 *  {@link SvgRenderer} and as such uses SVG-specific calls to implement its
 *  functionality.
 * <p>
 *
 * <p>
 *  To aid in debugging, the SvgViewport has a flag that can be set that will
 *  cause it to build a box and annotate the box showing where it is on the
 *  canvas and relative to its constraints. You can enable this by setting
 *  {@link SvgViewport#debug} to true.
 * </p>
 *
 * @constructor
 * @extends Viewport
 * @return {SvgViewport} a new, empty instance
 */
class SvgViewport extends _sct_viewport__WEBPACK_IMPORTED_MODULE_0__["Viewport"] {
    /**
     * Initialize the instance.
     *
     * @param graphics the SVG group element containing the graphics
     *                              that this viewport will "transform" to create
     *                              the effect of having a viewport
     * @param canvas the SVG element
     * @param canvasWidth the initial width of the canvas
     * @param canvasHeight the initial height of the canvas
     */
    initSvgViewport(graphics, canvas, canvasWidth, canvasHeight) {
        this.debug = false;
        this.graphics = graphics;
        this.canvas = canvas;
        this.canvasWidth = canvasWidth;
        /**
         * Height of the canvas
         *
         * @type Number
         */
        this.canvasHeight = canvasHeight;
        /**
         * Width of the graphics
         *
         * @type Number
         */
        this.width = 0;
        /**
         * Height of the graphics
         *
         * @type Number
         */
        this.height = 0;
        /**
         * The x coordinate of the viewport
         *
         * @type Number
         */
        this.x = 0;
        /**
         * The y coordinate of the viewport
         *
         * @type Number
         */
        this.y = 0;
        /**
         * The scale factor of the viewport
         *
         * @type Number
         */
        this.scaleFactor = 1;
        /**
         * Listeners for changes to the viewport.
         *
         * @type Array[Function]
         */
        this.listeners = [];
        /**
         * The applied transform matrix
         *
         * @type SVGMatrix
         */
        this.matrix = this.canvas.createSVGMatrix();
        this.buildDebugBox();
        this.updateClamps();
        this.apply();
    }
    init() {
        throw 'Call initSvgViewport instead';
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    /**
     * Wrap an x, y coordinate pair or a point (an object with a .x and a y) in an
     * SVGPoint.
     *
     * <p>
     *  This is really a convenience method used by the SvgViewport and not meant
     *  for client use.
     * </p>
     *
     * @param xOrPoint either the x coordinate or a point
     * @param yOrNull either the y coordinate or null
     *
     * @return {SVGPoint} the converted point
     */
    wrapPoint(xOrPoint, yOrNull) {
        const point = this.canvas.createSVGPoint();
        if (typeof xOrPoint === 'object') {
            _utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].assert(!yOrNull, 'yOrNull ignored as xOrPoint is Point. ');
            point.x = xOrPoint.x;
            point.y = xOrPoint.y;
        }
        else {
            _utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].assert(typeof yOrNull === 'number', 'yOrNull not ignored but is null. ');
            point.x = xOrPoint;
            point.y = yOrNull;
        }
        return point;
    }
    canvas2viewport(xOrPoint, yOrNull) {
        const canvasPoint = this.wrapPoint(xOrPoint, yOrNull);
        const viewportPoint = canvasPoint.matrixTransform(this.inverse);
        return viewportPoint;
    }
    viewport2canvas(xOrPoint, yOrNull) {
        const viewportPoint = this.wrapPoint(xOrPoint, yOrNull);
        const canvasPoint = viewportPoint.matrixTransform(this.matrix);
        return canvasPoint;
    }
    canvas2viewportRelative(dxOrPoint, dyOrNull) {
        const canvasRelative = this.wrapPoint(dxOrPoint, dyOrNull);
        const viewportRelative = this.wrapPoint(canvasRelative.x / this.scaleFactor, canvasRelative.y / this.scaleFactor);
        return viewportRelative;
    }
    viewport2canvasRelative(dxOrPoint, dyOrNull) {
        const viewportRelative = this.wrapPoint(dxOrPoint, dyOrNull);
        const canvasRelative = this.wrapPoint(viewportRelative.x * this.scaleFactor, viewportRelative.y * this.scaleFactor);
        return canvasRelative;
    }
    assign(scale, x, y, width, height) {
        this.x = x;
        this.y = y;
        this.matrix.a = scale;
        this.matrix.b = 0;
        this.matrix.c = 0;
        this.matrix.d = scale;
        this.matrix.e = x;
        this.matrix.f = y;
        this.inverse = this.matrix.inverse();
        this.scaleFactor = scale;
        this.width = width;
        this.height = height;
        this.updateClamps();
        this.notifyListeners();
    }
    /**
     * Update the clamp values that are used in {@link SvgViewport#clamp}.
     *
     * <p>
     *  Note that there is no minX or minY that are precomputed, since they rely on
     *  {@link SvgViewport#scaleFactor}. They are computed on the fly in
     *  {@link SvgViewport#clamp}.
     * </p>
     */
    updateClamps() {
        const scaleX = this.canvasWidth / this.width;
        const scaleY = this.canvasHeight / this.height;
        this.minScale = Math.min(scaleX, scaleY);
        this.minScale = this.minScale > 1.0 ? 1.0 : this.minScale;
        /**
         * The maximum value to which this viewport can be scaled
         *
         * @type Number
         */
        this.maxScale = 2.0;
        this.maxX = (this.canvasWidth * 2.0) / 3.0;
        this.maxY = (this.canvasHeight * 2.0) / 3.0;
        this.updateDebugBox();
    }
    updateCanvasSize(width, height) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.updateClamps();
        this.apply();
    }
    updateViewportSize(width, height) {
        this.width = width;
        this.height = height;
        this.updateClamps();
        this.apply();
    }
    pan(dxOrPoint, dyOrNull) {
        const viewportRelative = this.wrapPoint(dxOrPoint, dyOrNull);
        this.matrix = this.matrix.translate(viewportRelative.x, viewportRelative.y);
        return this;
    }
    centerOn(xOrPoint, yOrNull) {
        const viewportRelative = this.wrapPoint(xOrPoint, yOrNull);
        this.matrix.e =
            -viewportRelative.x * this.scaleFactor + this.canvasWidth / 2.0;
        this.matrix.f =
            -viewportRelative.y * this.scaleFactor + this.canvasHeight / 2.0;
        return this;
    }
    scale(deltaScale, xOrPoint, yOrNull) {
        if (deltaScale === 0) {
            return this;
        }
        const viewportPoint = this.wrapPoint(xOrPoint, yOrNull);
        const delta = 1 + deltaScale;
        if ((this.matrix.a >= this.maxScale && delta > 1) ||
            (this.matrix.a <= this.minScale && delta < 1)) {
            return this;
        }
        this.matrix = this.matrix.translate(viewportPoint.x, viewportPoint.y);
        this.matrix = this.matrix.scale(delta);
        this.matrix = this.matrix.translate(-viewportPoint.x, -viewportPoint.y);
        return this;
    }
    scaleTo(scale, xOrPoint, yOrNull) {
        const relativeScale = scale / this.scaleFactor;
        const deltaScale = relativeScale - 1;
        return this.scale(deltaScale, xOrPoint, yOrNull);
    }
    apply() {
        // Clamp values on the matrix.
        this.clamp();
        this.scaleFactor = this.matrix.a;
        this.x = this.matrix.e;
        this.y = this.matrix.f;
        this.inverse = this.matrix.inverse();
        this.notifyListeners();
    }
    /**
     * Helper function to clamp a value to a range.
     *
     * @param min the minimum value of the range
     * @param value the value to clamp
     * @param max the maximum value of the range
     *
     * @return the clamped value
     */
    ensureBetween(min, value, max) {
        if (value < min) {
            return min;
        }
        else if (value > max) {
            return max;
        }
        else {
            return value;
        }
    }
    /**
     * Clamp the matrix to ensure that the viewport isn't too small and isn't off
     * the canvas.
     */
    clamp() {
        this.minX = this.canvasWidth - this.maxX - this.width * this.scaleFactor;
        this.minY = this.canvasHeight - this.maxY - this.height * this.scaleFactor;
        this.matrix.a = this.ensureBetween(this.minScale, this.matrix.a, this.maxScale);
        this.matrix.b = 0;
        this.matrix.c = 0;
        this.matrix.d = this.matrix.a;
        this.matrix.e = this.ensureBetween(this.minX, this.matrix.e, this.maxX);
        this.matrix.f = this.ensureBetween(this.minY, this.matrix.f, this.maxY);
        this.updateDebugBox();
    }
    /**
     * Notify our listeners that we have been updated.
     */
    notifyListeners() {
        jQuery.each(this.listeners, function (index, listener) {
            listener(this);
        }.bind(this));
    }
    /**
     * Build an SVG rect that describes this viewport
     */
    buildDebugBox() {
        if (this.debug) {
            const svgNamespace = 'http://www.w3.org/2000/svg';
            this.box = document.createElementNS(svgNamespace, 'rect');
            this.box.setAttributeNS(null, 'width', (0).toString());
            this.box.setAttributeNS(null, 'height', (0).toString());
            this.box.setAttributeNS(null, 'fill-opacity', (0).toString());
            this.box.setAttributeNS(null, 'class', 'goal');
            this.graphics.appendChild(this.box);
            this.topLeft = document.createElementNS(svgNamespace, 'text');
            this.topLeft.setAttributeNS(null, 'font-size', '10.0');
            this.topLeft.setAttributeNS(null, 'x', '-10');
            this.topLeft.setAttributeNS(null, 'y', '-10');
            this.topLeft.textContent = '(' + this.x + ', ' + this.y + ')';
            this.graphics.appendChild(this.topLeft);
            this.bottomRight = document.createElementNS(svgNamespace, 'text');
            this.bottomRight.setAttributeNS(null, 'font-size', '10.0');
            this.bottomRight.setAttributeNS(null, 'x', (this.width + 10).toString());
            this.bottomRight.setAttributeNS(null, 'y', (this.height + 10).toString());
            this.bottomRight.textContent =
                '(' + this.width + ', ' + this.height + ')';
            this.graphics.appendChild(this.bottomRight);
        }
    }
    /**
     * Update the SVG rect that describes this viewport
     */
    updateDebugBox() {
        if (this.debug) {
            this.box.setAttributeNS(null, 'width', this.width.toString());
            this.box.setAttributeNS(null, 'height', this.height.toString());
            this.topLeft.textContent =
                't = (' +
                    this.x +
                    ', ' +
                    this.y +
                    '); c = (' +
                    this.maxX +
                    ',' +
                    this.maxY +
                    ')';
            this.bottomRight.setAttributeNS(null, 'x', (this.width + 10).toString());
            this.bottomRight.setAttributeNS(null, 'y', (this.height + 10).toString());
            this.bottomRight.textContent =
                't = (' +
                    this.x +
                    ', ' +
                    this.y +
                    '); c = (' +
                    this.minX +
                    ', ' +
                    this.minY +
                    '); s = (' +
                    this.width +
                    ', ' +
                    this.height +
                    ')';
        }
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/renderer/sct-viewport.ts":
/*!********************************************************!*\
  !*** ./sct-js/sources/viewer/renderer/sct-viewport.ts ***!
  \********************************************************/
/*! exports provided: Viewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Viewport", function() { return Viewport; });
// -------------------------------------------------------------------------- //
// sct-viewport.js              Dependable Computing                     2012 //
// -------------------------------------------------------------------------- //
/**
 * @classdesc
 * An encapsulation of the viewport used by the {@link Renderer} to control what
 * part of the canvas is visible to the user.
 *
 * <p>
 *  The Viewport is observable. By calling {@link Viewport#addListener}, clients
 *  can register to receive updates whenever the viewport (or the underlying
 *  canvas) has been updated.
 * </p>
 *
 * <p>
 *  Clients should not create the viewport, but should instead get it from their
 *  {@link Renderer}, which is responsible for creating and maintaining the
 *  viewport.
 * </p>
 *
 * @constructor
 * @return {Viewport} a new, empty instance
 */
class Viewport {
    /**
     * Initialize the viewport instance.
     */
    init() {
        this.canvasWidth = 0;
        this.canvasHeight = 0;
        this.width = 0;
        this.height = 0;
        this.x = 0;
        this.y = 0;
        this.scaleFactor = 1;
    }
    /**
     * Alias {@link Viewport#init} for subclasses
     *
     */
    initViewport() {
        this.init();
    }
    /**
     * Add a listener to the viewport
     *
     * @param listener the listener, which will receive the viewport when
     *                            it is called.
     */
    addListener(listener) {
        this.listeners.push(listener);
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/sct-with-context.ts":
/*!***************************************************!*\
  !*** ./sct-js/sources/viewer/sct-with-context.ts ***!
  \***************************************************/
/*! exports provided: escapeHTML, escapeHTMLattr, buildPad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeHTML", function() { return escapeHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeHTMLattr", function() { return escapeHTMLattr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildPad", function() { return buildPad; });
// -------------------------------------------------------------------------- //
// sct-with-context.js          M. Anthony Aiello                        2011 //
// -------------------------------------------------------------------------- //
// This article: http://www.digital-web.com/articles/scope_in_javascript/
// put me on the path to write this method. It ensures that when object-methods
// are used as event handlers, 'this' will have the value of 'context'
/**
 * console.watch - a method for breaking whenever a variable is changed.
 *
 * This code exists to support debugging. It should always be commented out when
 * we are not actively using it.
 */
// console = console || {}; // just in case
// console.watch = function(oObj, sProp) {
//    sPrivateProp = "$_"+sProp+"_$"; // to minimize the name clash risk
//    oObj[sPrivateProp] = oObj[sProp];
//
//    // overwrite with accessor
//    Object.defineProperty(oObj, sProp, {
//        get: function () {
//            return oObj[sPrivateProp];
//        },
//
//        set: function (value) {
//            console.log("setting " + sProp + " to " + value);
//            debugger; // sets breakpoint
//            oObj[sPrivateProp] = value;
//        }
//    });
// }
/**
 * extend - extend a method with additional functionality
 *
 * Example:
 *
 * Obj.prototype.foo = extend(Obj.prototype.foo, function(arg1, arg2) {
 *   // do something new
 * })
 *
 * @param {Function} original the original method that should be extended
 * @param {Function} extension another method that should extend original
 */
function extend(original, extension) {
    // Simply create a new function that invokes original followed by extension.
    return function () {
        original.apply(this, arguments);
        extension.apply(this, arguments);
    };
}
// This function doesn't *really* belong here, but I'm putting it here because
// I need somewhere handy to store a truly global function.
/**
 * escapeHTML - escape special HTML characters
 *
 * @param {string} text
 *
 * @return {string} escaped text
 */
function escapeHTML(text) {
    try {
        return jQuery('<div/>')
            .text(text)
            .html();
    }
    catch (error) {
        return text;
    }
}
function escapeHTMLattr(text) {
    var _a, _b, _c;
    try {
        return (_c = (_b = (_a = jQuery('<div/>')) === null || _a === void 0 ? void 0 : _a.attr('test', text)[0]) === null || _b === void 0 ? void 0 : _b.outerHTML) === null || _c === void 0 ? void 0 : _c.match(/test="(.*)"/)[1];
    }
    catch (error) {
        return text;
    }
}
// Helper function to make a pad of spaces for us. Since JavaScript doesn't
// let us do " "*2 like Ruby.
function buildPad(times) {
    let s = '';
    for (let i = 0; i < times * 2; ++i) {
        s += ' ';
    }
    return s;
}
function fastSerializeContent(element) {
    if (!element) {
        return '';
    }
    let str = '';
    jQuery.each(element.childNodes, function (index, child) {
        str += fastSerialize(child);
    });
    return str;
}
function fastSerialize(element) {
    if (!element) {
        return '';
    }
    else if (element.nodeName === '#text') {
        return element.textContent;
    }
    else {
        let str = '<' + element.nodeName;
        if (element.attributes) {
            jQuery.each(element.attributes, function (index, key) {
                str += ' ' + key.nodeName + '="' + key.nodeValue + '"';
            });
        }
        str += '>';
        if (element.childNodes) {
            jQuery.each(element.childNodes, function (index, child) {
                str += fastSerialize(child);
            });
        }
        return str + '</' + element.nodeName + '>';
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/tree/sct-partitioned-tree.ts":
/*!************************************************************!*\
  !*** ./sct-js/sources/viewer/tree/sct-partitioned-tree.ts ***!
  \************************************************************/
/*! exports provided: PartitionedTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartitionedTree", function() { return PartitionedTree; });
/* harmony import */ var _sct_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sct-tree */ "./sct-js/sources/viewer/tree/sct-tree.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./sct-js/sources/viewer/utils.ts");
// -------------------------------------------------------------------------- //
// sct-partitioned-tree.js      M. Anthony Aiello                        2012 //
// -------------------------------------------------------------------------- //


/**
 * <p>
 *  {@link PartitionedTree} is a recursive class based on {@link Tree} that, in
 *  addition to containing its children in a flat list, also partitions its
 *  children between two other lists: horizontal and vertical.
 * </p>
 * <p>
 *  The choice of "horizontal" and "vertical" as names is somewhat arbitrary;
 *  other partitionings are certainly possible. However the visual
 *  representation of a tree is familiar, and horizontal and vertical children
 *  are a naturally appealing partitioning. For the SCT, moreover, this is
 *  exactly the distinction that we usually see.
 * </p>
 * <p>
 *  In addition to providing specific methods that deal with the horizontal and
 *  vertical children of the {@link PartitionedTree}, the non-specific methods
 *  from {@link Tree} are extended to support partitioning. This is accomplished
 *  by way of the {@link #selector} method.
 * </p>
 * <p>
 *  The {@link #selector} must be a function that returns either 'horizontal' or
 *  'vertical' (as strings).
 * </p>
 *
 * @author M. Anthony Aiello
 *
 * @constructor
 * @extends Tree
 *
 * @return {PartitionedTree} a new, empty {@link PartitionedTree} object
 */
class PartitionedTree extends _sct_tree__WEBPACK_IMPORTED_MODULE_0__["Tree"] {
    /**
     * <p>
     *  Initialize the {@link PartitionedTree} instance by fully specifying its
     *  fields.
     * </p>
     *
     * @param {string} id the id of this {@link PartitionedTree}
     * @param {PartitionedTree[]} horizontal the horizontal children of this
     *                                       {@link PartitionedTree}
     * @param {PartitionedTree[]} vertical the vertical children of this
     *                                     {@link PartitionedTree}
     */
    initPartitionedTree(id, horizontal, vertical) {
        /**
         * The 'horizontal' children of this {@link PartitionedTree}. The items in
         * this list will be a subset in the items in the children list of the base
         * {@link Tree}.
         *
         * @type PartitionedTree[]
         */
        this.horizontal = horizontal;
        /**
         * The 'vertical' children of this {@link PartitionedTree}. The items in
         * this list will be a subset of the items in the children list of the base
         * {@link Tree}.
         *
         * @type PartitionedTree[]
         */
        this.vertical = vertical;
        // Call our base-class initializer.
        this.initTree(id, horizontal.concat(vertical));
    }
    /**
     * Alias of {@link #init}
     *
     * @function
     */
    init() {
        throw new Error('Call initPartitionedTree instead');
    }
    /**
     * <p>
     *  A function that examines the {@link PartitionedTree} instance and returns
     *  either 'horizontal' or 'vertical'. Initially defined to be null; must be
     *  provided by subclasses that wish to use the more general methods of the
     *  {@link PartitionedTree}.
     * </p>
     *
     * @return {string} 'horizontal' or 'vertical' according to the details of the
     *                  instance.
     */
    selector() {
        return '';
    }
    // Alias methods we want to override, so we can call the base class's method.
    /*
    PartitionedTree.prototype.baseInsertChild = Tree.prototype.insertChild;
    PartitionedTree.prototype.baseRemoveChild = Tree.prototype.removeChild;
    PartitionedTree.prototype.baseAppendChild = Tree.prototype.appendChild;
    PartitionedTree.prototype.basePrependChild = Tree.prototype.prependChild;
    can call with super keyword.
     */
    insertChild(element, index) {
        if (!element.selector) {
            throw new Error('Cannot use PartitionedTree.insertChild without a selector defined:' +
                ' the PartitionedTree would be unable to maintain partitioning');
        }
        switch (element.selector()) {
            case 'horizontal':
                return this.insertHorizontalChild(element, index);
            case 'vertical':
                return this.insertVerticalChild(element, index);
            default:
                throw new Error('PartitionedTree selectors must return either ' +
                    '\'horizontal\' or \'vertical\'');
        }
    }
    /**
     * <p>
     *  Insert the given element as a horizontal child of this element, at the
     *  given index. Then, find the element after which the new element was inserted
     *  in the base children list, and insert the given element after that element.
     *  This guarantees that while the indexes may not be the same, the adjacency
     *  is preserved.
     * </p>
     *
     * @param {PartitionedTree} element the element to insert
     * @param {number} index the position in the horizontal child list at which
     *                       the new element should be inserted
     *
     * @return {boolean} true if the element was successfully inserted.
     *
     * @throws {String} if the element is not horizontal, according to the selector
     *                 or if there is structural inconsistency in the
     *                 {@link PartitionedTree} (which could happen if the children
     *                 were directly edited)
     */
    insertHorizontalChild(element, index) {
        if (element.selector && element.selector() !== 'horizontal') {
            throw new Error('Attempted to use a non-horizontal element in insertHorizontalChild');
        }
        if (index === 0) {
            return this.prependHorizontalChild(element);
        }
        else if (index > 0) {
            const before = this.horizontal[index - 1];
            this.horizontal.splice(index, 0, element);
            this.postInsertElement(element);
            this.children = this.horizontal.concat(this.vertical);
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * <p>
     *  Insert the given element as a vertical child of this element, at the
     *  given index. Then, find the element after which the new element was inserted
     *  in the base children list, and insert the given element after that element.
     *  This guarantees that while the indexes may not be the same, the adjacency
     *  is preserved.
     * </p>
     *
     * @param {PartitionedTree} element the element to insert
     * @param {number} index the position in the horizontal child list at which
     *                       the new element should be inserted
     *
     * @return {boolean} true if the element was successfully inserted.
     *
     * @throws {String} if the element is not vertical, according to the selector
     *                 or if there is structural inconsistency in the
     *                 {@link PartitionedTree} (which could happen if the children
     *                 were directly edited)
     */
    insertVerticalChild(element, index) {
        if (element.selector && element.selector() !== 'vertical') {
            throw new Error('Attempted to use a non-vertical element in insertVerticalChild');
        }
        if (index === 0) {
            return this.prependVerticalChild(element);
        }
        else if (index > 0) {
            const before = this.vertical[index - 1];
            this.vertical.splice(index, 0, element);
            this.postInsertElement(element);
            this.children = this.horizontal.concat(this.vertical);
            return true;
            //     if (this.baseInsertChild(element, this.indexOfChildWithId(before.id))) {
            //       return true;
            //     } else {
            //       throw "Structural inconsistency in PartitionedTree; detected in " +
            //             "insertVerticalChild";
            //     }
        }
        else {
            return false;
        }
    }
    /**
     * <p>
     *  Remove the given element from either the horizontal or vertical children
     *  of this element.
     * </p>
     * <p>
     *   Since this method does not directly specify if the element to append is
     *   horizontal or vertical, it requires that {@link #selector} has been set to
     *   a valid function on the element that will return "horizontal" or
     *   "vertical".
     * </p>
     * <p>
     *  See the documentation at the top of the class for more information.
     * </p>
     *
     * @param {PartitionedTree} element the element to remove
     *
     * @return {boolean} true if the removal succeeds
     *
     * @throws {String} a string describing the nature of the problem — intended to
     *                  help the programmer use the class, not to be handled at
     *                  runtime.
     */
    removeChild(element) {
        if (!element.selector) {
            throw new Error('Cannot use PartitionedTree.appendChild without a selector defined:' +
                ' the PartitionedTree would be unable to maintain partitioning');
        }
        switch (element.selector()) {
            case 'horizontal':
                return this.removeHorizontalChild(element);
            case 'vertical':
                return this.removeVerticalChild(element);
            default:
                throw new Error('PartitionedTree selectors must return either ' +
                    '\'horizontal\' or \'vertical\'');
        }
    }
    /**
     * <p>
     *  Remove the given element from the horizontal children of this element.
     * </p>
     *
     * @param {PartitionedTree} element the element to remove
     *
     * @return {boolean} true if the removal succeeds.
     *
     * @throws {String} if the element is not horizontal, according to the selector
     *                 or if there is structural inconsistency in the
     *                 {@link PartitionedTree} (which could happen if the children
     *                 were directly edited)
     */
    removeHorizontalChild(element) {
        if (element.selector && element.selector() !== 'horizontal') {
            throw new Error('Attempted to use a non-vertical element in removeHorizontalChild');
        }
        const index = this.indexOfHorizontalChildWithId(element.id);
        if (index !== -1) {
            this.horizontal.splice(index, 1);
            if (super.removeChild(element)) {
                return true;
            }
            else {
                throw new Error('Structural inconsistency in PartitionedTree; detected in ' +
                    'removeHorizontalChild');
            }
        }
        else {
            return false;
        }
    }
    /**
     * <p>
     *  Remove the given element from the vertical children of this element.
     * </p>
     *
     * @param {PartitionedTree} element the element to remove
     *
     * @return {boolean} true if the removal succeeds.
     *
     * @throws {String} if the element is not vertical, according to the selector
     *                 or if there is structural inconsistency in the
     *                 {@link PartitionedTree} (which could happen if the children
     *                 were directly edited)
     */
    removeVerticalChild(element) {
        if (element.selector && element.selector() !== 'vertical') {
            throw new Error('Attempted to use a non-vertical element in removeVerticalChild');
        }
        const index = this.indexOfVerticalChildWithId(element.id);
        if (index !== -1) {
            this.vertical.splice(index, 1);
            if (super.removeChild(element)) {
                return true;
            }
            else {
                throw new Error('Structural inconsistency in PartitionedTree; detected in ' +
                    'removeVerticalChild');
            }
        }
        else {
            return false;
        }
    }
    /**
     * <p>
     *  Append the given element to the end of either the horizontal or vertical
     *  children of this element.
     * </p>
     * <p>
     *   Since this method does not directly specify if the element to append is
     *   horizontal or vertical, it requires that {@link #selector} has been set to
     *   a valid function on the element that will return "horizontal" or
     *   "vertical".
     * </p>
     * <p>
     *  See the documentation at the top of the class for more information.
     * </p>
     *
     * @param {PartitionedTree} element the element to append
     *
     * @return {boolean} true unless an exception is thrown
     *
     * @throws {String} a string describing the nature of the problem — intended to
     *                  help the programmer use the class, not to be handled at
     *                  runtime.
     */
    appendChild(element) {
        if (!element.selector) {
            throw new Error('Cannot use PartitionedTree.appendChild without a selector defined:' +
                ' the PartitionedTree would be unable to maintain partitioning');
        }
        switch (element.selector()) {
            case 'horizontal':
                return this.appendHorizontalChild(element);
            case 'vertical':
                return this.appendVerticalChild(element);
            default:
                throw new Error('PartitionedTree selectors must return either ' +
                    '\'horizontal\' or \'vertical\'');
        }
    }
    /**
     * <p>
     *   Append the given element to the end of the horizontal children of this
     *   element.
     * </p>
     *
     * @param {PartitionedTree} element the element to append
     *
     * @return {boolean} true unless an exception is thrown
     *
     * @throws {String} if the element is not horizontal, according to the selector
     */
    appendHorizontalChild(element) {
        if (element.selector && element.selector() !== 'horizontal') {
            throw new Error('Attempted to use a non-horizontal element in appendHorizontalChild');
        }
        this.horizontal.push(element);
        this.postInsertElement(element);
        this.children = this.horizontal.concat(this.vertical);
        return true;
        //  return this.baseAppendChild(element);
    }
    /**
     * <p>
     *  Append the given element to the end of the vertical children of this
     *  element.
     * </p>
     *
     * @param {PartitionedTree} element the element to append
     *
     * @return {boolean} true unless an exception is thrown
     *
     * @throws {String} if the element is not vertical, according to the selector
     */
    appendVerticalChild(element) {
        if (element.selector && element.selector() !== 'vertical') {
            throw new Error('Attempted to use a non-vertical element in appendVerticalChild');
        }
        this.vertical.push(element);
        this.postInsertElement(element);
        this.children = this.horizontal.concat(this.vertical);
        return true;
        //  return this.baseAppendChild(element);
    }
    /**
     * <p>
     *  Prepend the given element to the beginning of either the horizontal or
     *  vertical children of this element.
     * </p>
     * <p>
     *   Since this method does not directly specify if the element to prepend is
     *   horizontal or vertical, it requires that {@link #selector} has been set to
     *   a valid function on the element that will return "horizontal" or
     *   "vertical".
     * </p>
     * <p>
     *  See the documentation at the top of the class for more information.
     * </p>
     *
     * @param {PartitionedTree} element the element to prepend
     *
     * @return {boolean} true unless an exception is thrown
     *
     * @throws {String} a string describing the nature of the problem — intended to
     *                  help the programmer use the class, not to be handled at
     *                  runtime.
     */
    prependChild(element) {
        if (!element.selector) {
            throw new Error('Cannot use PartitionedTree.prependChild without a selector defined:' +
                ' the PartitionedTree would be unable to maintain partitioning');
        }
        switch (element.selector()) {
            case 'horizontal':
                return this.prependHorizontalChild(element);
            case 'vertical':
                return this.prependVerticalChild(element);
            default:
                throw new Error('PartitionedTree selectors must return either ' +
                    '\'horizontal\' or \'vertical\'');
        }
    }
    /**
     * <p>
     *   Prepend the given element to the beginning of the horizontal children of
     *   this element.
     * </p>
     *
     * @param {PartitionedTree} element the element to append
     *
     * @return {boolean} true unless an exception is thrown
     *
     * @throws {String} if the element is not horizontal, according to the selector
     */
    prependHorizontalChild(element) {
        if (element.selector && element.selector() !== 'horizontal') {
            throw new Error('Attempted to use a non-horizontal element in prependHorizontalChild');
        }
        this.horizontal.splice(0, 0, element);
        this.postInsertElement(element);
        this.children = this.horizontal.concat(this.vertical);
        return true;
        //  return this.basePrependChild(element);
    }
    /**
     * <p>
     *   Prepend the given element to the beginning of the vertical children of
     *   this element.
     * </p>
     *
     * @param {PartitionedTree} element the element to append
     *
     * @return {boolean} true unless an exception is thrown
     *
     * @throws {String} if the element is not vertical, according to the selector
     */
    prependVerticalChild(element) {
        if (element.selector && element.selector() !== 'vertical') {
            throw new Error('Attempted to use a non-vertical element in prependVerticalChild');
        }
        this.vertical.splice(0, 0, element);
        this.postInsertElement(element);
        this.children = this.horizontal.concat(this.vertical);
        return true;
        //  return this.basePrependChild(element);
    }
    /**
     * <p>
     *  Insert the given element before the child matching the reference element.
     *  The reference element is searched for in both the horizontal or vertical
     *  children as well as in the base children, so the result is consistent for
     *  both the partitioned children and the base children.
     * </p>
     * <p>
     *   Since this method does not directly specify if the element to prepend is
     *   horizontal or vertical, it requires that {@link #selector} has been set to
     *   a valid function on the element that will return "horizontal" or
     *   "vertical".
     * </p>
     * <p>
     *  See the documentation at the top of the class for more information.
     * </p>
     *
     * @param {PartitionedTree} element the element to insert
     * @param {PartitionedTree} reference the child before which the element should
     *                                    be inserted
     *
     * @return {boolean} true if the insertion was successful
     *
     * @throws {String} a string describing the nature of the problem — intended to
     *                  help the programmer use the class, not to be handled at
     *                  runtime.
     */
    insertChildBefore(element, reference) {
        if (!element.selector) {
            throw new Error('Cannot use PartitionedTree.insertChildBefore without a selector ' +
                ' defined: the PartitionedTree would be unable to maintain ' +
                ' partitioning');
        }
        switch (element.selector()) {
            case 'horizontal':
                return this.insertHorizontalChildBefore(element, reference);
            case 'vertical':
                return this.insertVerticalChildBefore(element, reference);
            default:
                throw new Error('PartitionedTree selectors must return either ' +
                    '\'horizontal\' or \'vertical\'');
        }
    }
    /**
     * <p>
     *  Insert the given element before the horizontal child matching the reference
     *  element. Then, find the reference element in the base children list, and
     *  insert the given element after that element. This guarantees that while the
     *  indexes may not be the same, the adjacency is preserved.
     * </p>
     *
     * @param {PartitionedTree} element the element to insert
     * @param {PartitionedTree} reference the child before which the element should
     *                                    be inserted
     *
     * @return {boolean} true if the insertion was successful
     *
     * @throws {String} if the element is not horizontal, according to the selector
     *                 or if there is structural inconsistency in the
     *                 {@link PartitionedTree} (which could happen if the children
     *                 were directly edited)
     */
    insertHorizontalChildBefore(element, reference) {
        if (element.selector && element.selector() !== 'horizontal') {
            throw new Error('Attempted to use a non-horizontal element in ' +
                'insertHorizontalChildBefore');
        }
        return this.insertHorizontalChild(element, this.indexOfHorizontalChildWithId(reference.id));
    }
    /**
     * <p>
     *  Insert the given element before the vertical child matching the reference
     *  element. Then, find the reference element in the base children list, and
     *  insert the given element after that element. This guarantees that while the
     *  indexes may not be the same, the adjacency is preserved.
     * </p>
     *
     * @param {PartitionedTree} element the element to insert
     * @param {PartitionedTree} reference the child before which the element should
     *                                    be inserted
     *
     * @return {boolean} true if the insertion was successful
     *
     * @throws {String} if the element is not vertical, according to the selector
     *                 or if there is structural inconsistency in the
     *                 {@link PartitionedTree} (which could happen if the children
     *                 were directly edited)
     */
    insertVerticalChildBefore(element, reference) {
        if (element.selector && element.selector() !== 'vertical') {
            throw new Error('Attempted to use a non-vertical element in ' +
                'insertVerticalChildBefore');
        }
        return this.insertVerticalChild(element, this.indexOfVerticalChildWithId(reference.id));
    }
    /**
     * <p>
     *  Insert the given element before the child matching the reference element.
     *  The reference element is searched for in both the horizontal or vertical
     *  children as well as in the base children, so the result is consistent for
     *  both the partitioned children and the base children.
     * </p>
     * <p>
     *   Since this method does not directly specify if the element to prepend is
     *   horizontal or vertical, it requires that {@link #selector} has been set to
     *   a valid function on the element that will return "horizontal" or
     *   "vertical".
     * </p>
     * <p>
     *  See the documentation at the top of the class for more information.
     * </p>
     *
     * @param {PartitionedTree} element the element to insert
     * @param {PartitionedTree} reference the child before which the element should
     *                                    be inserted
     *
     * @return {boolean} true if the insertion was successful
     *
     * @throws {String} a string describing the nature of the problem — intended to
     *                  help the programmer use the class, not to be handled at
     *                  runtime.
     */
    insertChildAfter(element, reference) {
        if (!element.selector) {
            throw new Error('Cannot use PartitionedTree.insertChildAfter without a selector ' +
                ' defined: the PartitionedTree would be unable to maintain ' +
                ' partitioning');
        }
        switch (element.selector()) {
            case 'horizontal':
                return this.insertHorizontalChildAfter(element, reference);
            case 'vertical':
                return this.insertVerticalChildAfter(element, reference);
            default:
                throw new Error('PartitionedTree selectors must return either ' +
                    '\'horizontal\' or \'vertical\'');
        }
    }
    /**
     * <p>
     *  Insert the given element before the horizontal child matching the reference
     *  element. Then, find the reference element in the base children list, and
     *  insert the given element after that element. This guarantees that while the
     *  indexes may not be the same, the adjacency is preserved.
     * </p>
     *
     * @param {PartitionedTree} element the element to insert
     * @param {PartitionedTree} reference the child before which the element should
     *                                    be inserted
     *
     * @return {boolean} true if the insertion was successful
     *
     * @throws {String} if the element is not horizontal, according to the selector
     *                 or if there is structural inconsistency in the
     *                 {@link PartitionedTree} (which could happen if the children
     *                 were directly edited)
     */
    insertHorizontalChildAfter(element, reference) {
        if (element.selector && element.selector() !== 'horizontal') {
            throw new Error('Attempted to use a non-horizontal element in ' +
                'insertHorizontalChildAfter');
        }
        return this.insertHorizontalChild(element, this.indexOfHorizontalChildWithId(reference.id) + 1);
    }
    /**
     * <p>
     *  Insert the given element before the vertical child matching the reference
     *  element. Then, find the reference element in the base children list, and
     *  insert the given element after that element. This guarantees that while the
     *  indexes may not be the same, the adjacency is preserved.
     * </p>
     *
     * @param {PartitionedTree} element the element to insert
     * @param {PartitionedTree} reference the child before which the element should
     *                                    be inserted
     *
     * @return {boolean} true if the insertion was successful
     *
     * @throws {String} if the element is not vertical, according to the selector
     *                 or if there is structural inconsistency in the
     *                 {@link PartitionedTree} (which could happen if the children
     *                 were directly edited)
     */
    insertVerticalChildAfter(element, reference) {
        if (element.selector && element.selector() !== 'vertical') {
            throw new Error('Attempted to use a non-vertical element in ' +
                'insertVerticalChildAfter');
        }
        return this.insertVerticalChild(element, this.indexOfVerticalChildWithId(reference.id) + 1);
    }
    /**
     * Insert the given element as a sibling that comes before this element
     *
     * @param {Tree} element the element to insert
     *
     * @return {boolean} true if the insertion was successful
     *
     * @throws {String} if the element is not horizontal, according to the selector
     *                 or if there is structural inconsistency in the
     *                 {@link PartitionedTree} (which could happen if the children
     *                 were directly edited)
     */
    insertHorizontalBefore(element) {
        if (!this.parent) {
            return false;
        }
        return this.parent.insertHorizontalChildBefore(element, this);
    }
    /**
     * Insert the given element as a sibling that comes before this element
     *
     * @param {Tree} element the element to insert
     *
     * @return {boolean} true if the insertion was successful
     *
     * @throws {String} if the element is not vertical, according to the selector
     *                 or if there is structural inconsistency in the
     *                 {@link PartitionedTree} (which could happen if the children
     *                 were directly edited)
     */
    insertVerticalBefore(element) {
        if (!this.parent) {
            return false;
        }
        return this.parent.insertVerticalChildBefore(element, this);
    }
    /**
     * Insert the given element as a sibling that comes after this element
     *
     * @param {Tree} element the element to insert
     *
     * @return {boolean} true if the insertion was successful
     *
     * @throws {String} if the element is not horizontal, according to the selector
     *                 or if there is structural inconsistency in the
     *                 {@link PartitionedTree} (which could happen if the children
     *                 were directly edited)
     */
    insertHorizontalAfter(element) {
        if (!this.parent) {
            return false;
        }
        return this.parent.insertHorizontalChildAfter(element, this);
    }
    /**
     * Insert the given element as a sibling that comes after this element
     *
     * @param {Tree} element the element to insert
     *
     * @return {boolean} true if the insertion was successful
     *
     * @throws {String} if the element is not vertical, according to the selector
     *                 or if there is structural inconsistency in the
     *                 {@link PartitionedTree} (which could happen if the children
     *                 were directly edited)
     */
    insertVerticalAfter(element) {
        if (!this.parent) {
            return false;
        }
        return this.parent.insertVerticalChildAfter(element, this);
    }
    // -------------------------------------------------------------------------- //
    // ------------------------- Boolean-valued Methods ------------------------- //
    /**
     * Test for horizontal children.
     *
     * @return {boolean} true if this {@link PartitionedTree} has horizontal
     *                   children
     */
    hasHorizontalChildren() {
        return this.horizontal.length > 0;
    }
    /**
     * Test for vertical children.
     *
     * @return {boolean} true if this {@link PartitionedTree} has vertical
     *                   children
     */
    hasVerticalChildren() {
        return this.vertical.length > 0;
    }
    /**
     * <p>
     *  Return true if any horizontal child of this element matches the given
     *  predicate. A predicate may be one of:
     * </p>
     * <ul>
     *   <li><strong>String</strong>, representing an ID to match;</li>
     *   <li><strong>{@link PartitionedTree}</strong>, representing an element to
     *       match; or</li>
     *   <li><strong>Function</strong>, which will be applied to each child.</li>
     * </ul>
     *
     * @param {string|PartitionedTree|Function} predicate the predicate to test
     *                                                    against each horizontal
     *                                                    child
     *
     * @return {boolean} true if the predicate matches any horizontal child
     */
    hasHorizontalChildMatching(predicate) {
        if (typeof predicate === 'string') {
            return this.hasHorizontalChildMatching(function (tree) {
                return tree.id === predicate;
            });
        }
        else if (predicate instanceof PartitionedTree) {
            return this.hasHorizontalChildMatching(function (tree) {
                return tree.id === predicate.id;
            });
        }
        let matches = false;
        this.horizontal.forEach(function (child, index) {
            matches = predicate(child);
            if (matches) {
                return false;
            }
        });
        return matches;
    }
    /**
     * <p>
     *  Return true if any vertical child of this element matches the given
     *  predicate. A predicate may be one of:
     * </p>
     * <ul>
     *   <li><strong>String</strong>, representing an ID to match;</li>
     *   <li><strong>{@link PartitionedTree}</strong>, representing an element to
     *       match; or</li>
     *   <li><strong>Function</strong>, which will be applied to each child.</li>
     * </ul>
     *
     * @param {string|PartitionedTree|Function} predicate the predicate to test
     *                                                    against each vertical
     *                                                    child
     *
     * @return {boolean} true if the predicate matches any vertical child
     */
    hasVerticalChildMatching(predicate) {
        if (typeof predicate === 'string') {
            return this.hasVerticalChildMatching(function (tree) {
                return tree.id === predicate;
            });
        }
        else if (predicate instanceof PartitionedTree) {
            return this.hasVerticalChildMatching(function (tree) {
                return tree.id === predicate.id;
            });
        }
        let matches = false;
        this.vertical.forEach(function (child, index) {
            matches = predicate(child);
            if (matches) {
                return false;
            }
        });
        return matches;
    }
    // -------------------------------------------------------------------------- //
    // ------------------------------- Searching -------------------------------- //
    /**
     * <p>
     *  Given a predicate, find the tree that matches the predicate, considering
     *  only horizontal children during traversal. The predicate may be one of:
     * </p>
     * <ul>
     *   <li><strong>String</strong>, representing an ID to match; or</li>
     *   <li><strong>Function</strong>, which will be applied to each child.</li>
     * </ul>
     * <p>
     *  Note that the current element is only tested against the predicate if a
     *  {@link #selector} has been set and the current element is horizontal.
     *  Regardless, the horizontal children of the current element will be tested.
     *  This allows a vertical element's horizontal children to be (recursively)
     *  searched.
     * </p>
     *
     * @param {string|Function} predicate the predicate against which all horizontal
     *                                   children will be tested
     *
     * @return {PartitionedTree} the tree found, or null if no tree matches the
     *                           predicate.
     */
    findHorizontal(predicate) {
        if (typeof predicate === 'string') {
            return this.find(function (tree) {
                return tree.id === predicate;
            });
        }
        if (this.selector() === 'horizontal' && predicate(this)) {
            return this;
        }
        let found = null;
        this.horizontal.forEach(function (child, index) {
            found = child.find(predicate);
            if (found) {
                return false;
            }
        });
        return found;
    }
    /**
     * <p>
     *  Given a predicate, find the tree that matches the predicate, considering
     *  only vertical children during traversal. The predicate may be one of:
     * </p>
     * <ul>
     *   <li><strong>String</strong>, representing an ID to match; or</li>
     *   <li><strong>Function</strong>, which will be applied to each child.</li>
     * </ul>
     * <p>
     *  Note that the current element is only tested against the predicate if a
     *  {@link #selector} has been set and the current element is vertical.
     *  Regardless, the vertical children of the current element will be tested.
     *  This allows a horizontal element's horizontal children to be (recursively)
     *  searched.
     * </p>
     *
     * @param {string|Function} predicate the predicate against which all vertical
     *                                   children will be tested
     *
     * @return {PartitionedTree} the tree found, or null if no tree matches the
     *                           predicate.
     */
    findVertical(predicate) {
        if (typeof predicate === 'string') {
            return this.find(function (tree) {
                return tree.id === predicate;
            });
        }
        if (this.selector() === 'vertical' && predicate(this)) {
            return this;
        }
        let found = null;
        this.vertical.forEach(function (child, index) {
            found = child.find(predicate);
            if (found) {
                return false;
            }
        });
        return found;
    }
    /**
     * <p>
     *  Given a predicate, return the index of the child matching the
     *  predicate. A predicate may be one of:
     * </p>
     * <ul>
     *   <li><strong>String</strong>, representing an ID to match;</li>
     *   <li><strong>{@link Tree}</strong>, representing an element to match; or
     *   </li>
     *   <li><strong>Function</strong>, which will be applied to each child.</li>
     * </ul>
     * <p>
     *  The index returned is for the list in which the child appears. So for a
     *  horizontal child, the index will be its position in the horizontal list. For
     *  a vertical child, the index will be its position in the vertical list. This
     *  works for the insertChild function, as the index it expects is an index in
     *  the list for which the element is destined.
     * </p>
     *
     * @param {string|Tree|Function} predicate the id, tree or predicate to test
     *                                         against the children
     *
     * @return {number} the index of the child matching the predicate, or
     *                  -1 if no such child exists.
     */
    indexOfChildMatching(predicate) {
        if (!this.selector) {
            throw new Error('Cannot use PartitionedTree.indexOfChildMatching without a selector ' +
                ' defined: the PartitionedTree would be unable to maintain ' +
                ' partitioning');
        }
        if (predicate instanceof PartitionedTree) {
            switch (predicate.selector()) {
                case 'horizontal':
                    return this.indexOfHorizontalChildMatching(predicate);
                case 'vertical':
                    return this.indexOfVerticalChildMatching(predicate);
                default:
                    throw new Error('PartitionedTree selectors must return either ' +
                        '\'horizontal\' or \'vertical\'');
            }
        }
        else {
            throw new Error('Cannot use PartitionedTree.indexOfChildMatching with a predicate ' +
                'that is not a PartitionedTree: there is no way to determine the ' +
                'orientation of the child that will match the predicate.');
        }
    }
    /**
     * <p>
     *  Given a predicate, return the index of the horizontal child matching the
     *  predicate. A predicate may be one of:
     * </p>
     * <ul>
     *   <li><strong>String</strong>, representing an ID to match;</li>
     *   <li><strong>{@link PartitionedTree}</strong>, representing an element to
     *       match; or</li>
     *   <li><strong>Function</strong>, which will be applied to each child.</li>
     * </ul>
     *
     * @param {string|PartitionedTree|Function} predicate the predicate to test
     *                                                    against each horizontal
     *                                                    child
     *
     * @return {number} the index of the horizontal child matching the predicate, or
     *                  -1 if no such horizontal child exists.
     */
    indexOfHorizontalChildMatching(predicate) {
        if (typeof predicate === 'string') {
            return this.indexOfHorizontalChildWithId(predicate);
        }
        else if (predicate instanceof PartitionedTree) {
            return this.indexOfHorizontalChildWithId(predicate.id);
        }
        let index = -1;
        this.horizontal.forEach(function (child, loopIndex) {
            if (predicate(child)) {
                index = loopIndex;
                return false;
            }
        });
        return index;
    }
    /**
     * <p>
     *  Given a predicate, return the index of the vertical child matching the
     *  predicate. A predicate may be one of:
     * </p>
     * <ul>
     *   <li><strong>String</strong>, representing an ID to match;</li>
     *   <li><strong>{@link PartitionedTree}</strong>, representing an element to
     *       match; or</li>
     *   <li><strong>Function</strong>, which will be applied to each child.</li>
     * </ul>
     *
     * @param {string|PartitionedTree|Function} predicate the predicate to test
     *                                                    against each vertical
     *                                                    child
     *
     * @return {number} the index of the vertical child matching the predicate, or
     *                  -1 if no such vertical child exists.
     */
    indexOfVerticalChildMatching(predicate) {
        if (typeof predicate === 'string') {
            return this.indexOfVerticalChildWithId(predicate);
        }
        else if (predicate instanceof PartitionedTree) {
            return this.indexOfVerticalChildWithId(predicate.id);
        }
        let index = -1;
        this.vertical.forEach(function (child, loopIndex) {
            if (predicate(child)) {
                index = loopIndex;
                return false;
            }
        });
        return index;
    }
    /**
     * @return true if this node is horizontal.
     */
    isHorizontal() {
        return this.selector() === 'horizontal';
    }
    /**
     * @return true if this node is vertical.
     */
    isVertical() {
        return this.selector() === 'vertical';
    }
    /**
     * Return the nearest tree node that is vertical.
     * If this node vertical, that's nearest.  Else, walk up the tree
     * and get some parent that's vertical.  Null if no vertical nodes in the tree.
     * @returns nearest vertical node
     */
    nearestVerticalNode() {
        return this.isVertical() ? this : this.getFirstVerticalParent();
    }
    /**
     * @return the first node that is both a parent and vertical, or null if none exist
     */
    getFirstVerticalParent() {
        let node = this._parent;
        while (node) {
            if (node.isVertical()) {
                return node;
            }
            node = node.getParent();
        }
        return null;
    }
    // -------------------------------------------------------------------------- //
    // ---------------------------- Private Methods ----------------------------- //
    /**
     * <p>
     *  A special case of {@link #indexOfHorizontalChildMatching} that assumes the
     *  predicate is an ID. Provided because searching by ID is a frequent, internal
     *  operation. Private because later refactoring may roll its functionality into
     *  another method.
     * </p>
     *
     * @private
     *
     * @param {string} id the ID to find
     *
     * @return {number} the index of the horizontal child matching the ID, or -1 if
     *                  no such child exists
     */
    indexOfHorizontalChildWithId(id) {
        let index = -1;
        this.horizontal.forEach(function (child, loopIndex) {
            if (child.id === id) {
                index = loopIndex;
                return false;
            }
        });
        return index;
    }
    /**
     * <p>
     *  A special case of {@link #indexOfVerticalChildMatching} that assumes the
     *  predicate is an ID. Provided because searching by ID is a frequent, internal
     *  operation. Private because later refactoring may roll its functionality into
     *  another method.
     * </p>
     *
     * @private
     *
     * @param {string} id the ID to find
     *
     * @return {number} the index of the vertical child matching the ID, or -1 if
     *                  no such child exists
     */
    indexOfVerticalChildWithId(id) {
        let index = -1;
        this.vertical.forEach(function (child, loopIndex) {
            if (child.id === id) {
                index = loopIndex;
                return false;
            }
        });
        return index;
    }
    // This method is used for restriction in the GSN Editor. It should never be
    // called for any other reason. It's here to make it a little harder to find.
    recursiveCount(element) {
        ++this.root.accumulator;
        element.vertical.forEach(function (child, index) {
            this.recursiveCount(child);
        });
    }
    /**
     * Re-order the children of this node.  Note: the new children
     * array should _not_ add or delete any children.
     * @param children the new order for children.
     */
    reorderChildren(children) {
        const horizontal = [];
        const vertical = [];
        for (const child of children) {
            if (child.isVertical()) {
                vertical.push(child);
            }
            else {
                horizontal.push(child);
            }
        }
        this.horizontal = horizontal;
        this.vertical = vertical;
        const newChildren = this.horizontal.concat(this.vertical);
        // sanity check that we used this function properly
        const arrayA = this.children;
        const arrayB = newChildren;
        const msg = 'reorder children used to modify children? ';
        _utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].assert(this.children.length === newChildren.length, msg);
        _utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].assert(this.children.every(el => newChildren.includes(el)), msg);
        this.children = newChildren;
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/tree/sct-tree.ts":
/*!************************************************!*\
  !*** ./sct-js/sources/viewer/tree/sct-tree.ts ***!
  \************************************************/
/*! exports provided: Tree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tree", function() { return Tree; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./sct-js/sources/viewer/utils.ts");
// -------------------------------------------------------------------------- //
// sct-tree.js                  M. Anthony Aiello                        2011 //
// -------------------------------------------------------------------------- //

/**
 * <p>
 *  {@link Tree} is a recursive class that describes a tree with an unspecified
 *  number of children. It is designed to be as generic as possible, so it holds
 *  very little in the way of data.
 * </p>
 * <p>
 *  The decision to include 'id' was made because most programs written in
 *  JavaScript will need to do DOM manipulation; a string id naturally supports
 *  DOM manipulation.
 * </p>
 *
 * @author M. Anthony Aiello
 *
 * @constructor
 *
 * @return {Tree} a new, empty Tree object
 */
class Tree {
    /**
     * Get the children of this node.
     *
     * @returns An array of [[Tree]] nodes that are the children of this node.
     * @throws none
     */
    getChildren() {
        return this._children;
    }
    get children() {
        return this.getChildren();
    }
    /**
     * Set the children of this node. Once they are set, call a method
     * that subclasses can override to do work whenever the children
     * are updated. @see [[Tree.childrenUpdated]].
     *
     * @param newChildren An array of [[Tree]] nodes that are the new children of this node.
     * @returns void
     * @throws none
     */
    setChildren(newChildren) {
        this._children = newChildren;
        this.childrenUpdated();
    }
    set children(newChildren) {
        this.setChildren(newChildren);
    }
    /**
     * A method invoked by setChildren that subclasses can use to do work whenever
     * the children of this node are updated.
     *
     * @returns void
     * @throws none
     */
    childrenUpdated() { }
    /**
     * Re-parent this node.
     * @param newParent the parent node to use, may be null to indicate that I'm the new root.
     * @returns void
     * @throws none
     */
    setParent(newParent) {
        this._parent = newParent;
    }
    set parent(newParent) {
        this.setParent(newParent);
    }
    getParent() {
        return this._parent;
    }
    get parent() {
        return this.getParent();
    }
    /**
     * <p>
     *  Initialize a Tree instance by specifying some fields. parent will remain
     *  null and root will remain this.
     * </p>
     *
     * @param {string} id the id of the Tree
     * @param {Array} children the children of the Tree
     */
    initTree(id, children) {
        /**
         * The ID of the element. Expected to be unique.
         *
         * @type string
         */
        this.id = id || '';
        /**
         * The children of the element. Never null.
         *
         * @type Tree[]
         */
        this.children = children || [];
        this.children.map(child => {
            child.parent = this;
        });
        /**
         * The parent of the element. Null if the element is the root of the
         * {@link Tree}.
         *
         * @type Tree
         */
        this.parent = null;
        /**
         * An explicit link up to the root of the {@link Tree}. It's frequently useful
         * to be able to get back to the root quickly; the root also ends up being a
         * useful place to store "global" data for a complete tree.
         *
         * @type Tree
         */
        this.root = this;
    }
    /**
     * Alias of {@link #init} for subclasses
     *
     * @function
     */
    init() {
        throw new Error('Use initTree instead');
    }
    // -------------------------------------------------------------------------- //
    // ------------------------- Structure Manipulation ------------------------- //
    //
    // Each of the methods in this section call "structureUpdated" when they are
    // done so that subclasses can take additional action as needed.
    /**
     * <p>
     *  Set a new root for a Tree, recursively.
     * </p>
     *
     * @param {Tree} root the new root
     */
    reRoot(root) {
        this.root = root;
        this.children.map(child => {
            child.reRoot(root);
        });
    }
    /**
     * <p>
     *  Insert the given element as a child of this element, at the given index in
     *  the children list.
     * </p>
     * <p>
     *  Calls {@link #structureUpdated}.
     * </p>
     *
     * @param {Tree} element the element to insert
     * @param {number} index the index at which the element should be inserted
     *
     * @return {boolean} true if the insertion was successful
     */
    insertChild(element, index) {
        if (index >= 0) {
            this.children.splice(index, 0, element);
            this.postInsertElement(element);
            return true;
        }
        return false;
    }
    /**
     * <p>
     *  Remove the given element from this element's children.
     * </p>
     * <p>
     *  Calls {@link #structureUpdated}.
     * </p>
     *
     * @param {Tree} element the element to remove
     *
     * @return {boolean} true if the removal succeeds
     */
    removeChild(element) {
        const index = this.indexOfChildWithId(element.id);
        if (index !== -1) {
            this.children.splice(index, 1);
            this.postInsertElement(element);
            return true;
        }
        return false;
    }
    /**
     * <p>
     *  Append the given element to the end of the children of this element.
     * </p>
     * <p>
     *  Calls {@link #structureUpdated}.
     * </p>
     *
     * @param {Tree} element the element to append
     *
     * @return {boolean} true (always succeeds)
     */
    appendChild(element) {
        this.children.push(element);
        this.postInsertElement(element);
        return true;
    }
    /**
     * <p>
     *  Prepend the given element at the beginning of the children of this element.
     * </p>
     * <p>
     *  Calls {@link #structureUpdated}.
     * </p>
     *
     * @param {Tree} element the element to append
     *
     * @return {boolean} true (always succeeds)
     */
    prependChild(element) {
        this.children.splice(0, 0, element);
        this.postInsertElement(element);
        return true;
    }
    /**
     * <p>
     *  Insert the given element as a sibling that comes before this element.
     * </p>
     * <p>
     *  Calls {@link #structureUpdated}.
     * </p>
     *
     * @param {Tree} element the element to insert
     *
     * @return {boolean} true if the insertion was successful
     */
    insertBefore(element) {
        if (!this.parent) {
            return false;
        }
        return this.parent.insertChildBefore(element, this);
    }
    /**
     * <p>
     *  Insert the given element as a sibling that comes after this element.
     * </p>
     * <p>
     *  Calls {@link #structureUpdated}.
     * </p>
     *
     * @param {Tree} element the element to insert
     *
     * @return {boolean} true if the insertion was successful
     */
    insertAfter(element) {
        if (!this.parent) {
            return false;
        }
        return this.parent.insertChildAfter(element, this);
    }
    /**
     * <p>
     *  Insert the given element before the child matching the reference element.
     * </p>
     * <p>
     *  Calls {@link #structureUpdated}.
     * </p>
     *
     * @param {Tree} element the element to insert
     * @param {Tree} reference the child before which the element should be inserted
     *
     * @return {boolean} true if the insertion was successful
     */
    insertChildBefore(element, reference) {
        return this.insertChild(element, this.indexOfChildWithId(reference.id));
    }
    /**
     * <p>
     *  Insert the given element after the child matching the reference element.
     * </p>
     * <p>
     *  Calls {@link #structureUpdated}.
     * </p>
     *
     * @param {Tree} element the element to insert
     * @param {Tree} reference the child after which the element should be inserted
     *
     * @return {boolean} true if the insertion was successful
     */
    insertChildAfter(element, reference) {
        return this.insertChild(element, this.indexOfChildWithId(reference.id) + 1);
    }
    /**
     * structureUpdated - abstract method that allows subclasses a chance to act in
     *                    response to structure changes in the Tree
     */
    structureUpdated(element) { }
    // -------------------------------------------------------------------------- //
    // ------------------------- Boolean-valued Methods ------------------------- //
    /**
     * Test for children.
     *
     * @return {boolean} true if this {@link Tree} has children
     */
    hasChildren() {
        return this.children.length > 0;
    }
    /**
     * <p>
     *  Return true if any child of this element matches the given predicate. A
     *  predicate may be one of:
     * </p>
     * <ul>
     *   <li><strong>String</strong>, representing an ID to match;</li>
     *   <li><strong>{@link Tree}</strong>, representing an element to
     *       match; or</li>
     *   <li><strong>Function</strong>, which will be applied to each child.</li>
     * </ul>
     *
     * @param {string|Tree|Function} predicate the id, tree or predicate to test
     *                                         against the children
     *
     * @return {boolean} true if the predicate matches any child
     */
    hasChildMatching(predicate) {
        // Re-call this method with a predicate designed to search for the id
        if (typeof predicate === 'string') {
            return this.hasChildMatching(function (tree) {
                return tree.id === predicate;
            });
        }
        else if (predicate instanceof Tree) {
            return this.hasChildMatching(function (tree) {
                return tree.id === predicate.id;
            });
        }
        let matches = false;
        this.children.forEach(function (child, index) {
            matches = predicate(child);
            if (matches) {
                return false;
            }
        });
        return matches;
    }
    /**
     * Test if the {@link Tree} is a root
     *
     * @return {boolean} true if this {@link Tree} has no parent
     */
    isRoot() {
        return !this.parent;
    }
    /**
     * <p>
     *  Return true if the given element is directly adjacent to the right of this
     *  element.
     * </p>
     *
     * @param {Tree} element the element to test
     *
     * @return {boolean} true if the given element is directly adjacent and to the
     *                   right of this element.
     */
    isToRightOf(element) {
        return this.isNextTo(element, 'right');
    }
    /**
     * <p>
     *  Return true if the given element is directly adjacent to the left of this
     *  element.
     * </p>
     *
     * @param {Tree} element the element to test
     *
     * @return {boolean} true if the given element is directly adjacent and to the
     *                   left of this element.
     */
    isToLeftOf(element) {
        return this.isNextTo(element, 'left');
    }
    /**
     * <p>
     *  Return true if the element is an ancestor of this element.
     * </p>
     *
     * @param {Tree} element the element to test
     *
     * @return {boolean} true if the given element is an ancestor of this element
     */
    isAncestorOf(element) {
        let parent = element.parent;
        while (parent) {
            if (parent.id === this.id) {
                return true;
            }
            parent = parent.parent;
        }
        return false;
    }
    // -------------------------------------------------------------------------- //
    // ------------------------------- Searching -------------------------------- //
    /**
     * <p>
     *  Given a predicate, find the tree that matches the predicate. The predicate
     *  may be one of:
     * </p>
     * <ul>
     *   <li><strong>String</strong>, representing an ID to match; or</li>
     *   <li><strong>Function</strong>, which will be applied to each child.</li>
     * </ul>
     *
     * @param {string|Function} predicate the predicate to match
     *
     * @return {Tree} the {@link Tree} found, or null if no tree matches
     */
    find(predicate) {
        // Re-call this find method with a predicate designed to search for the id
        if (typeof predicate === 'string') {
            return this.find(function (tree) {
                return tree.id === predicate;
            });
        }
        // Test the predicate on this Tree
        if (predicate(this)) {
            return this;
        }
        // Test the predicate on our children
        for (const child of this.children) {
            const found = child.find(predicate);
            if (found) {
                return found;
            }
        }
        return null;
    }
    /**
     * Visit this node and all its children recursively.  Return an array of nodes where the predicate matches.
     * @param predicate the function which which to test if a node meets before finding the answer
     * @return an array into which additional nodes that meet predicate are pushed.
     */
    findAll(predicate) {
        if (typeof predicate === 'string') {
            return this.findAll(function (tree) {
                return tree.id === predicate;
            });
        }
        const result = [];
        this.findAllRecursive(predicate, result);
        return result;
    }
    /**
     * Visit this node and all its children recursively.  If predicate matches, add node to result.
     * @param predicate the function which which to test if a node meets before finding the answer
     * @param result an array into which additional nodes that meet predicate are pushed.
     */
    findAllRecursive(predicate, result) {
        if (predicate(this)) {
            result.push(this);
        }
        this.children.map(child => child.findAllRecursive(predicate, result));
    }
    /**
     * <p>
     *  Given a predicate, return the index of the child matching the
     *  predicate. A predicate may be one of:
     * </p>
     * <ul>
     *   <li><strong>String</strong>, representing an ID to match;</li>
     *   <li><strong>{@link Tree}</strong>, representing an element to match; or
     *   </li>
     *   <li><strong>Function</strong>, which will be applied to each child.</li>
     * </ul>
     *
     * @param {string|Tree|Function} predicate the id, tree or predicate to test
     *                                         against the children
     *
     * @return {number} the index of the child matching the predicate, or
     *                  -1 if no such child exists.
     */
    indexOfChildMatching(predicate) {
        // Delegate based on the predicate type
        if (typeof predicate === 'string') {
            return this.indexOfChildWithId(predicate);
        }
        else if (predicate instanceof Tree) {
            return this.indexOfChildWithId(predicate.id);
        }
        let index = -1;
        this.children.forEach(function (child, loopIndex) {
            if (predicate(child)) {
                index = loopIndex;
                return false; // break;
            }
        });
        return index;
    }
    // -------------------------------------------------------------------------- //
    // ---------------------------- Private Methods ----------------------------- //
    /**
     * <p>
     *  Return true if the element is directly adjacent to this element in the
     *  specified direction.
     * </p>
     * <p>
     *  Clients should call "isToLeftOf" or "isToRightOf" rather than this method.
     * </p>
     *
     * @private
     *
     * @param {Tree} element the element to test
     * @param {string} direction one of "left" or "right"
     *
     * @return {boolean} true if the given element is directly adjacent to this
     *                   element in the specified direction.
     */
    isNextTo(element, direction) {
        if (this.isRoot()) {
            return false;
        }
        _utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].assert(this.parent !== null, 'One must be root or have a parent.');
        let myIndex = 0;
        let otherIndex = -2;
        this.parent.children.forEach(function (child, index) {
            if (this.id === child.id) {
                myIndex = index;
            }
            else if (element.id === child.id) {
                otherIndex = index;
            }
        });
        switch (direction) {
            case 'left':
                return myIndex === otherIndex - 1;
            case 'right':
                return myIndex === otherIndex + 1;
            default:
                return false;
        }
    } // isNextTo
    /**
     * <p>
     *  Return the index of the child that has the given id.
     * </p>
     * <p>
     *  This is a special case of indexOfChildMatching. Since we search by id often,
     *  internally, we've coded this operation as a separate method from
     *  indexOfChildMatching to save a function call. This is unlikely to provide
     *  huge speed benefits, so if it becomes irritating to maintain, it should be
     *  dropped. Hence it's private.
     * </p>
     *
     * @private
     *
     * @param {string} id the id to find
     *
     * @return {number} the index of the matching child or -1 if no child matches
     */
    indexOfChildWithId(id) {
        let index = -1;
        this.children.forEach(function (child, loopIndex) {
            if (child.id === id) {
                index = loopIndex;
                return false; // break
            }
        });
        return index;
    }
    postInsertElement(element) {
        element.parent = this;
        element.reRoot(this.root);
        this.childrenUpdated();
        this.structureUpdated(element);
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/utils.ts":
/*!****************************************!*\
  !*** ./sct-js/sources/viewer/utils.ts ***!
  \****************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
class Utils {
    /**
     * Assert that `value` is true. This function uses the `asserts` type so that the
     * TypeScript compiler can propagate its assertions properly. In other words, if the user
     * asserts that a variable is non-null, TypeScript's typechecker will know that subsequent
     * uses are always safe. For example,
     *
     * ```typescript
     * let x: Optional<string> = null;
     *
     * x = functionThatMayReturnNull();
     *
     * // Not okay -- could be null.
     * x.trim();
     *
     * // Check to make sure that x is truthy. If it is not,
     * // and exception will be thrown.
     * assert(x, "X must be non-null.");
     *
     * // Okay because of the assert.
     * x.trim()
     * ```
     *
     * @param value The value to be asserted as true.
     * @param message The message of the exception generated if `value` is not true.
     */
    static assert(value, message) {
        if (!value) {
            throw new Error(message);
        }
    }
    /**
     * An implementation of Python's zip. It returns an array of arrays where the i-th
     * array contains the i-th element from each of the argument arrays. All arrays in `arrays`
     * must be the same length.
     *
     * E.g.,
     *
     * const zipped = Utils.zip([[1, 2, 3], [11, 22, 33], [111, 222, 333]]);
     * expect(zipped).toStrictEqual([[1, 11, 111], [2, 22, 222], [3, 33, 333]]);
     *
     * @param arrays The arrays to zip
     * @returns The zipped arrays if `arrays`'s arrays are all the same length; `[]`, otherwise.
     */
    static zip(arrays) {
        // Make sure that each of the arrays is the same length.
        const arrayLength = arrays[0].length;
        if (arrays.findIndex(array => array.length !== arrayLength) !== -1) {
            // Because each of the arrays are not the same length,
            // return the empty array.
            return [];
        }
        return arrays[0].map(function (_, i) {
            return arrays.map(function (array) {
                return array[i];
            });
        });
    }
    static browser(userAgent) {
        if (!userAgent) {
            try {
                userAgent = navigator.userAgent;
            }
            catch (e) {
                // This is a ReferenceError. In testing, accessing navigator will fail because
                // there is no DOM.
                userAgent = '';
            }
        }
        userAgent = userAgent.toLowerCase();
        const browser = {
            webkit: false,
            msie: false,
            mozilla: false,
            opera: false,
            chrome: false,
        };
        // This is ordered in a very specific way. Do not change unless/until consulting
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent and
        // ensuring that any changes are proper.
        if (userAgent.match(/gecko.*firefox/)) {
            browser.mozilla = true;
        }
        else if (userAgent.match(/trident/)) {
            browser.msie = true;
        }
        else if (userAgent.match(/opr/) || userAgent.match(/presto/)) {
            browser.opera = true;
        }
        else if (userAgent.match(/chrome/)) {
            browser.chrome = true;
        }
        else if (userAgent.match(/safari/)) {
            browser.webkit = true;
        }
        return browser;
    }
    /**
     * Return the key in an enum with the given value.
     * Note: any types here are relevant as this is a helper function to work
     * on an enumeration type with any key or value types.
     * @param myEnum the enumeration to lookup in
     * @param enumValue the value in the enum
     * @returns the key that first corresponds to the value in the enum, or null
     * if no key exists with the given value.
     */
    static getEnumKeyByEnumValue(myEnum, enumValue) {
        const keys = Object.keys(myEnum).filter(x => myEnum[x] === enumValue);
        return keys.length > 0 ? keys[0] : null;
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/view/sct-gsn-view-context.ts":
/*!************************************************************!*\
  !*** ./sct-js/sources/viewer/view/sct-gsn-view-context.ts ***!
  \************************************************************/
/*! exports provided: GsnViewContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnViewContext", function() { return GsnViewContext; });
/* harmony import */ var _layout_sct_gsn_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/sct-gsn-tree */ "./sct-js/sources/viewer/layout/sct-gsn-tree.ts");
/* harmony import */ var _sct_view_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sct-view-context */ "./sct-js/sources/viewer/view/sct-view-context.ts");
// -------------------------------------------------------------------------- //
// sct-view-context.js          Dependable Computing                     2015 //
// -------------------------------------------------------------------------- //


/**
 * @classdesc
 *
 * Context for a viewer, based on GSN.
 *
 * @constructor
 * @extends ViewContext
 * @return {GsnViewContext} a new, empty instance
 */
class GsnViewContext extends _sct_view_context__WEBPACK_IMPORTED_MODULE_1__["ViewContext"] {
    /**
     * Initialize the context
     *
     * @param nodeFactory the factory to be used to create GSN
     *                                     nodes
     * @param metrics the metrics that should be used by the tree for
     *                          layout
     */
    init(nodeFactory, metrics) {
        this.nodeFactory = nodeFactory;
        this.metrics = metrics;
        //	  this.gsn = null;
        //	  this.fullLayout = null;
        this.focusLayout = null;
        this.focusSelector = null;
        this.focusRoot = null;
        this.focusRootID = null;
        this.showAddresses = false;
    }
    /**
     * Return the root of this view context; our GSN.
     *
     * @return GSN
     */
    getRoot() {
        return this.gsn;
    }
    /**
     * Set the source for this context, a {@link GSN}. Immediately lays out the GSN
     * for full layout; clears all focus-related state.
     *
     * @param {GSN} gsn the gsn
     */
    setSource(gsn) {
        this.gsn = gsn;
        this.update();
    }
    update() {
        this.gsn.generateAddresses();
        this.focusLayout = null;
        this.focusSelector = ':all';
        this.focusRoot = this.gsn;
        this.focusRootID = this.gsn.id;
        this.fullLayout = new _layout_sct_gsn_tree__WEBPACK_IMPORTED_MODULE_0__["GsnTree"]();
        this.fullLayout.initGsnTree(this.gsn, this.nodeFactory, this.metrics, this.showAddresses);
        this.fullLayout.doLayout();
        this.fullLayout.position(this.fullLayout.marginLeft, this.fullLayout.marginTop);
    }
    /**
     * Set the focus for this context.
     *
     * @param focusRootID the CSS ID of the GSN element that is the root of
     *                             the focus selector
     * @param focusSelector the selector string to use
     */
    setFocus(focusRootID, focusSelector) {
        // Don't do anything if the requested focus level is the current focus level.
        if (focusSelector === this.focusSelector &&
            focusRootID === this.focusRootID) {
            return false;
        }
        this.focusSelector = focusSelector;
        if (this.focusSelector === ':all') {
            this.focusRoot = this.gsn;
            this.focusRootID = this.gsn.id;
            this.focusLayout = null;
        }
        else {
            this.focusRoot = this.gsn.find(focusRootID);
            this.focusRootID = focusRootID;
            this.focusLayout = new _layout_sct_gsn_tree__WEBPACK_IMPORTED_MODULE_0__["GsnTree"]();
            this.focusLayout.initGsnTree(this.focusRoot.select(this.focusSelector), this.nodeFactory, this.metrics, this.showAddresses);
            this.focusLayout.doLayout();
            this.focusLayout.position(this.focusLayout.marginLeft, this.focusLayout.marginTop);
        }
        return true;
    }
    /**
     * Get the full layout for this context - this is the entire argument, without
     * respect to any focus setting
     *
     * @return GsnTree
     */
    getFullLayout() {
        return this.fullLayout;
    }
    /**
     * Get the focus layout for this context - this is just the focused part of the
     * argument.
     *
     * @return GsnTree
     */
    getFocusLayout() {
        return this.focusLayout;
    }
    /**
     * Get the layout that should be displayed - focused, if available, full if not
     *
     * @return GsnTree
     */
    getActiveLayout() {
        return this.focusLayout || this.fullLayout;
    }
    /**
     * @return boolean true if focus is active
     */
    isFocused() {
        return this.focusLayout !== null;
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/view/sct-gsn-viewer.ts":
/*!******************************************************!*\
  !*** ./sct-js/sources/viewer/view/sct-gsn-viewer.ts ***!
  \******************************************************/
/*! exports provided: GsnViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsnViewer", function() { return GsnViewer; });
/* harmony import */ var _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gsn/sct-gsn */ "./sct-js/sources/viewer/gsn/sct-gsn.ts");
/* harmony import */ var _sct_gsn_view_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sct-gsn-view-context */ "./sct-js/sources/viewer/view/sct-gsn-view-context.ts");
/* harmony import */ var _nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nodes/sct-gsn-node */ "./sct-js/sources/viewer/nodes/sct-gsn-node.ts");
/* harmony import */ var _nodes_sct_gsn_node_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nodes/sct-gsn-node-factory */ "./sct-js/sources/viewer/nodes/sct-gsn-node-factory.ts");
/* harmony import */ var _layout_sct_gsn_tree_visitor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/sct-gsn-tree-visitor */ "./sct-js/sources/viewer/layout/sct-gsn-tree-visitor.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./sct-js/sources/viewer/utils.ts");
// -------------------------------------------------------------------------- //
// sct-gsn-viewer.js            Dependable Computing                     2012 //
// -------------------------------------------------------------------------- //






/**
 * @classdesc
 * <p>
 *  The GsnViewer is a view/controller for GSN model objects.
 * </p>
 *
 * <h3>Role</h3>
 *
 * <p>
 *  The role of the GsnViewer is to present GSN to the user, laid out, in an
 *  interactive fashion. The GsnViewer therefore has the following
 *  responsibilities:
 * </p>
 * <ul>
 *   <li>
 *     <strong>Renderer Creation</strong>: the GsnViewer creates its own
 *     {@link Renderer} using the {@link RendererFactory} it is given as an
 *     input parameter. The GsnViewer fully manages the renderer's lifecycle.
 *   </li>
 *   <li>
 *     <strong>Layout and Rendering</strong>: the GsnViewer, relying on the
 *     {@link GsnTree}, lays out {@link GSN} and renders it using the
 *     {@link Renderer} it creates.
 *   </li>
 *   <li>
 *     <strong>Update</strong>: the GsnViewer renders incremental updates to the
 *     rendered GSN.
 *   </li>
 *   <li>
 *     <strong>Hover Feedback</strong>: the GsnViewer hooks the necessary event
 *     listeners on the rendered GSN to provide the "glow" effect on mouseover
 *     that provides feedback for users.
 *   </li>
 *   <li>
 *     <strong>Selection</strong>: the GsnViewer hooks the necessary event
 *     listeners to allow the user to select single elements of the rendered
 *     GSN.
 *   </li>
 *   <li>
 *     <strong>Viewport Manipulation</strong>: the GsnViewer provides API
 *     methods that allow its viewport to be manipulated (e.g., pan and zoom).
 *   </li>
 *  </ul>
 *
 * <h3>Usage</h3>
 *
 * <p>
 *  A general call sequence for the GsnViewer is:
 * </p>
 * <ol>
 *   <li>
 *     {@link GsnViewer#setGSN} to set the {@link GSN} object for display;
 *   </li>
 *   <li>
 *     {@link GsnViewer#render} to render the GSN;
 *   </li>
 *   <li>
 *     {@link GsnViewer#update} to cause the GsnViewer to display any
 *     incremental updates that have been performed on the GSN
 *   </li>
 * </ol>
 * <p>
 *  Once initialized, the GsnViewer has no content. You must first call
 *  {@link GsnViewer#setGSN} to set the {@link GSN} object that the viewer will
 *  display. <em>Note</em>: setting the GSN does not immediately lay out or
 *  render the GSN.
 * </p>
 * <p>
 *  After the GSN has been set, {@link GsnViewer#render} will cause the GSN to
 *  be laid out and rendered in the view.
 * </p>
* <p>
*  When updates are performed to the GSN, {@link GsnViewer#update} should be
*  called, which will cause the viewer to incrementally update the display to
*  reflect the changes to the GSN.
* </p>
*
* <h3>Viewport Control</h3>
*
* <p>
*  The GsnViewer does not hook event listeners to manage its viewport. Instead,
    *  it provides API methods that external event listeners can use for viewport
    *  manipulation. For example, {@link BaseEvents} provides a set of event
    *  handlers and bindings to the viewer that allow pan and zoom of the viewport.
    * </p>
    *
    * <h3>Listeners</h3>
    *
    * <p>
    *  The GsnViewer, following the Observer pattern, provides notification for
    *  registered listeners whenever an event occurs. The table below summarizes
    *  the events:
    * </p>
    * <table>
    *   <tr>
    *     <th>Event</th>
    *     <th>Registration</th>
    *     <th>Parameter</th>
    *     <th>Description<th>
    *   </tr>
    *   <tr>
    *     <td>render</td>
    *     <td>{@link GsnViewer#addRenderListener}</td>
    *     <td>N/A</td>
    *     <td>
    *       Listeners are notified whenever the {@link GsnViewer#render} method is
    *       called, indicating that GSN has been freshly rendered.
    *     </td>
    *   </tr>
    *   <tr>
    *     <td>update</td>
    *     <td>{@link GsnViewer#addUpdateListener}</td>
    *     <td>N/A</td>
    *     <td>
    *       Listeners are notified whenever the {@link GsnViewer#update} method is
    *       called, indicating that the view has been incrementally updated to
    *       reflect changed GSN.
    *     </td>
    *   </tr>
    *   <tr>
    *     <td>clear</td>
    *     <td>{@link GsnViewer#addClearListener}</td>
    *     <td>N/A</td>
    *     <td>
    *       Listeners are notified whenever the {@link GsnViewer#clear} method is
    *       called indicating that the view has been cleared (no more graphics are
            *       being shown).
    *     </td>
    *   </tr>
    *   <tr>
    *     <td>select</td>
    *     <td>{@link GsnViewer#addSelectListener}</td>
    *     <td>{@link GsnNode} selected</td>
    *     <td>
    *       Listeners are notified that a {@link GsnNode} in the view has been
    *       selected. Care is taken to ensure that listeners are only notified
    *       when the selection has actually been changed. So if the same element
    *       is "reselected," no notification will be raised. Similarly, if there
    *       was a prior selection and a new element is selected, a deselect event
    *       will be generated and deselect listeners will be notified.
    *     </td>
    *   </tr>
    *   <tr>
    *     <td>deselect</td>
    *     <td>{@link GsnViewer#addDeselectListener}</td>
    *     <td>{@link GsnNode} deselected</td>
    *     <td>
    *       Listeners are notified that the {@link GsnNode} that was previously
    *       selected in the view has been deselected.
    *     </td>
    *   </tr>
    *   <tr>
    *     <td>viewport</td>
    *     <td>{@link GsnViewer#addViewportListener}</td>
    *     <td>{@link Viewport} viewport</td>
    *     <td>
    *       Listeners are notified that the viewport has been changed. This could
    *       mean zooming or panning, for instance. The new viewport is given as the
    *       parameter to the listeners.
    *     </td>
    *   </tr>
    *   <tr>
    *   <tr>
    *     <td>focus</td>
    *     <td>{@link GsnViewer#addFocusListener}</td>
    *     <td>{@link String} focus</td>
    *     <td>
    *       Listeners are notified that the focus has been changed. The new focus
    *       selector is given as the parameter to the listeners.
    *     </td>
    *   </tr>
    *   <tr>
    *     <td>present</td>
    *     <td>{@link GsnViewer#addPresentListener}</td>
    *     <td>{@link String} css_id</td>
    *     <td>
    *       Listeners are notified that the specified element should be presented.
    *       For example, the element might be highlighted in red.
    *     </td>
    *   </tr>
    *   <tr>
    * </table>
    *
    * @requires jQuery
    *
    * @constructor
    * @return {GsnViewer} a new, empty object.
    */
class GsnViewer {
    /**
     * <p>
     *  Initialize the instance. Note that both width and height must be specified,
     *  or width will be ignored.
     * </p>
     *
     * @param parent the parent for the view.
     * @param rendererFactory the factory instance that should be
     *                        used by the view to create its {@link Renderer}
     * @param metrics the metrics that should be used by the view for layout
     * @param width an explicit width for the viewer, useful for embedding
     *                       GSN in a text page or a hierarchy of other visual tools in a layout
     * @param height an explicit height for the viewer, useful for embedding GSN or a hierarchy of other visual tools in a layout
     * @param xOffset the offset of the left side of the viewer relative to the window origin
     * @param yOffset the offset of the top of the viewer relative to the window origin
     */
    init(parent, rendererFactory, metrics, width, height, xOffset = 0, yOffset = 0) {
        this.parent = parent;
        this.metrics = metrics;
        // Set up our sizes.
        if (width && height) {
            this.width = width;
            this.height = height;
            this.explicitSize = true;
        }
        else {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        }
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        this.renderListeners = [];
        this.updateListeners = [];
        this.clearListeners = [];
        this.selectListeners = [];
        this.deselectListeners = [];
        this.focusListeners = [];
        this.presentListeners = [];
        this.renderer = rendererFactory.newRenderer(parent, this.width, this.height);
        this.viewport = this.renderer.getViewport();
        this.focusSelector = ':all';
        this.focusRoot = null;
        this.viewContext = new _sct_gsn_view_context__WEBPACK_IMPORTED_MODULE_1__["GsnViewContext"]();
        this.viewContext.init(new _nodes_sct_gsn_node_factory__WEBPACK_IMPORTED_MODULE_3__["GsnNodeFactory"](), this.metrics);
        // Finish initializing by calling clear.
        this.clear();
    } // init
    /**
     * Add the given listener to our list of render listeners
     *
     * @param listener
     */
    addRenderListener(listener) {
        this.renderListeners.push(listener);
    }
    /**
     * Add the given listener to our list of update listeners
     *
     * @param listener
     */
    addUpdateListener(listener) {
        this.updateListeners.push(listener);
    }
    /**
     * Add the given listener to our list of clear listeners
     *
     * @param listener
     */
    addClearListener(listener) {
        this.clearListeners.push(listener);
    }
    /**
     * Add the given listener to our list of select listeners
     *
     * @param listener
     */
    addSelectListener(listener) {
        this.selectListeners.push(listener);
    }
    /**
     * Add the given listener to our list of deselect listeners
     *
     * @param listener
     */
    addDeselectListener(listener) {
        this.deselectListeners.push(listener);
    }
    /**
     * Add the given listener to our list of viewport listeners
     *
     * @param listener
     */
    addViewportListener(listener) {
        this.viewport.addListener(listener);
    }
    /**
     * Add the given listener to our list of focus listeners
     *
     * @param listener
     */
    addFocusListener(listener) {
        this.focusListeners.push(listener);
    }
    /**
     * Add the given listener to our list of present listeners
     *
     * @param listener
     */
    addPresentListener(listener) {
        this.presentListeners.push(listener);
    }
    /**
     * Set the GSN to be displayed by this GsnViewer. Does not actually render the
     * GSN.
     *
     * @param gsn the GSN to be displayed
     */
    setGSN(gsn) {
        if (this.metadataNames) {
            gsn.setMetadataFieldNames(this.metadataNames);
        }
        this.viewContext.setSource(gsn);
    }
    /**
     * Set the size of this GsnViewer. Maintains scale.
     * Note, this can optionally record the offset of the viewer
     *
     * @param width the new width of the viewer's canvas
     * @param height the new height of the viewer's canvas
     */
    setCanvasSize(width, height) {
        this.width = width;
        this.height = height;
        this.renderer.setSize(this.width, this.height);
    }
    /**
     * Set the offset of the GsnViewer from the upper left corner of the
     * window. This is important for correct mouse position recording
     * relative to the drawing canvas.
     *
     * @param xOffset the xOffset of the viewer relative to window origin
     * @param yOffset the yOffset of the viewer relative to window origin
     */
    setCanvasOffset(xOffset, yOffset) {
        this.xOffset = xOffset;
        this.yOffset = yOffset;
    }
    /** Given coordinates from a window, translate them to a pair of canvas coordinates
     *
     * @param x the input window x coordinate
     * @param y the input window y coordinate
     * @return a tuple pair representing the canvas coordinates
     */
    fromWindowToCanvasCoords(x, y) {
        return [x - this.xOffset, y - this.yOffset];
    }
    /**
     * Set the metadata field names for this view
     *
     * @param names with id to field name
     */
    setMetadataFieldNames(names) {
        this.metadataNames = names;
        const gsn = this.viewContext.getRoot();
        if (gsn) {
            this.setGSN(gsn);
            this.clear();
            this.render();
        }
    }
    /**
     * Refresh the view. This resets the viewport, clears any current graphics, and
     * redoes layout and rendering from the GSN down.
     */
    refresh() {
        this.clear();
        this.render();
        this.reset(false);
    } // refresh
    /**
     * Reset the view.
     */
    reset(partial) {
        if (this.viewContext.getActiveLayout()) {
            // TODO: This setting width to layoutWidth seems incorrect. JCR 
            // this increases width to include slide margins, thus expanding
            // with each successive reset. That seems erroneous
            const width = this.layoutWidth;
            const height = this.layoutHeight;
            const scaleX = this.width / width;
            const scaleY = this.height / height;
            let scale = Math.min(scaleX, scaleY);
            scale = scale > 1 ? 1 : scale;
            const x = (this.width - this.layoutWidth * scale) / 2.0;
            const y = 0;
            if (partial) {
                this.viewport.updateViewportSize(width, height);
            }
            else {
                this.viewport.assign(scale, x, y, width, height);
            }
        }
    } // reset
    /**
     * Set the view to be one-to-one
     */
    oneToOne(x, y) {
        if (this.viewContext.getActiveLayout()) {
            const scale = 1;
            this.viewport.scaleTo(scale, this.viewport.canvas2viewport(x, y)).apply();
        }
    } // oneToOne
    /**
     * Clear the view.
     */
    clear() {
        // Clear all the graphics from the renderer.
        this.renderer.clear();
        this.selection = null;
        this.notifyListeners(this.clearListeners, null);
    } // clear
    /**
     * Focus on the selection to the specified level
     *
     * @param level a focus-selector string (see GSN)
     * @param toSelect a GSN id (not a GSN ID, but the CSS ID for a GSN) to use as
     *                 the root of focus. Optional. If omitted, the current
     *                 selection is assumed to be the root of focus.
     */
    focusOn(level, toSelect) {
        // Ensure that we will reselect based on the ID of the selected GSN, since
        // GSN.select returns a clone.
        const oldSelection = (this.selection && this.selection.gsn.id) || toSelect;
        _utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].assert(!!oldSelection, 'Need to focus on selection?');
        // If we don't actually change focus, simply return.
        if (!this.viewContext.setFocus(oldSelection, level)) {
            return;
        }
        // Don't invoke the clear logic, because we don't want to post clear to our
        // listeners. The only part out of clear we care about is clearing the
        // renderer.
        this.renderer.clear();
        this.render();
        this.reset(false);
        this.select(oldSelection);
        this.notifyListeners(this.focusListeners, level);
    }
    /**
     * Focus on the selection to the specified level
     *
     * @param level a focus-selector string (see GSN)
     */
    focusOnCurrentSelection(level) {
        this.focusOn(level, null);
    }
    /**
     * Present the indicated element by highlighting it in red.
     *
     * @param toPresent the CSS id of the GSN to present or a function
     */
    present(toPresent) {
        var _a;
        // Find the node requested — a GSN Node
        const node = (_a = this.viewContext.getActiveLayout().find(toPresent)) === null || _a === void 0 ? void 0 : _a.node;
        _utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].assert(!!node, 'Cannot present non-existent node.');
        // Find the x and y center of the node.
        const x = node.left + node.horizontalCenter;
        const y = node.top + node.verticalCenter;
        // Make the node glow.
        node.glow(this.renderer, 'red');
        // Scale to 1 and center on the element to present. Cannot stack the commands,
        // because the centering is computed before the scaling takes effect (if
        // stacked).
        this.viewport.scaleTo(1.0, x, y).apply();
        this.viewport.centerOn(x, y).apply();
        this.notifyListeners(this.presentListeners, toPresent);
    }
    /**
     * @return the top-level node
     */
    getRoot() {
        return this.viewContext.getRoot();
    }
    /**
     * Render the current GSN, from the GSN through layout to rendering.
     */
    render() {
        this.tree = this.viewContext.getActiveLayout();
        this.viewContext.getActiveLayout().render(this.renderer);
        // decorate?
        this.layoutWidth =
            this.viewContext.getActiveLayout().width
                + this.viewContext.getActiveLayout().marginLeft
                + this.viewContext.getActiveLayout().marginRight;
        this.layoutHeight =
            this.viewContext.getActiveLayout().height
                + this.viewContext.getActiveLayout().marginTop
                + this.viewContext.getActiveLayout().marginBottom;
        // Glow and selection are handled by the nodes themselves.
        _layout_sct_gsn_tree_visitor__WEBPACK_IMPORTED_MODULE_4__["GsnTreeVisitor"].visitNodes(this.viewContext.getActiveLayout(), function (gsnNode) {
            const renderer = this.renderer;
            // Hook hover on the collected graphics build by this node. We use this to
            // do glow.
            gsnNode.graphics[renderer.name].hover(
            // In
            function () {
                gsnNode.glow(renderer, 'blue');
            }, 
            // Out
            function () {
                gsnNode.unglow(renderer);
            });
            // Hook click on the collected graphics build by the node.
            gsnNode.graphics[renderer.name].click(this.select.bind(this));
            // Record that we've hooked viewer events for this node. This is bookkeeping
            // that we're adding to the node, by convenience; it's not part of the
            // node's interface. We use it to find nodes that have not been hooked
            // during update.
            gsnNode.viewerEventsHooked = true;
        }.bind(this));
        this.notifyListeners(this.renderListeners, this.viewContext);
    } // render
    /**
     * Update the viewer's display based on any changes made to the GSN
     */
    update() {
        // This is not a real update, yet. It is instead a different kind of refresh
        // that doesn't cause a full viewport reset.
        this.renderer.clear();
        this.viewContext.update();
        this.render();
        this.reset(true);
        // Notify listeners with the view context here.
        this.notifyListeners(this.updateListeners, this.viewContext);
    } // update
    /**
     * Zoom the viewport by delta around the point x,y.
     *
     * @param delta the amount by which the scale factor should be adjusted
     *                       (directed distance)
     * @param x the x coordinate of the point around which we zoom,
     *                   in client coordinates
     * @param y the y coordinate of the point around which we zoom,
     *                   in client coordinates
     */
    zoom(delta, x, y) {
        this.viewport.scale(delta, this.viewport.canvas2viewport(x, y)).apply();
    } // zoom
    /**
     * Pan the viewport by delta x and delta y
     *
     * @param dx the delta x value, in client coordinates
     * @param dy the delta y value, in client coordinates
     */
    pan(dx, dy) {
        this.viewport.pan(this.viewport.canvas2viewportRelative(dx, dy)).apply();
        //  this.viewport.pan(dx, dy).apply();
    } // pan
    /**
     * <p>
     *  Set the selection in the viewer, by specifying either a string or a GsnNode.
     *  If there is a currently selected element, it will be deselected. If the arg
     *  is null, no selection will be made.
     * </p>
     * <p>
     *  This function is precise about notifying listeners: e.g. if selection is not
     *  actually changed, there will be neither a deselect nor a select.
     *
     * @param arg the element to select
     * @param focus focus on the selected element or not? Default to `true`.
     */
    select(arg, focus = true) {
        var _a;
        const layout = this.viewContext.getActiveLayout();
        // If there is no tree, there is nothing to do.
        if (!layout) {
            return;
        }
        // Record the prior selection, so that we can reason about what's happening.
        const priorSelection = this.selection;
        this.selection = null;
        // Based on the argument to function, find the gsnNode that should be selected
        let gsnNode = null;
        if (typeof arg === 'string') {
            const found = layout.find(arg);
            _utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].assert(!!found, 'Cannot find selection');
            gsnNode = found.node;
        }
        else if (arg instanceof _nodes_sct_gsn_node__WEBPACK_IMPORTED_MODULE_2__["GsnNode"]) {
            // re-find the GsnNode in the layout based on its id. I'm doing this because
            // of NRA-128: under some situations, without this code, selection fails
            // when the renderer attempts to attach the glow to the graphics object. My
            // guess is that in those situations, the glow was made from another glow,
            // rather than the original GsnNode that is part of the layout. Since the
            // glows share IDs with their originals, re-finding the original is possible
            const found = layout.find(arg.id);
            _utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].assert(!!found, 'Cannot find selection');
            gsnNode = found.node;
        }
        else if (arg instanceof _gsn_sct_gsn__WEBPACK_IMPORTED_MODULE_0__["GSN"]) {
            const found = layout.find(arg.id);
            _utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].assert(!!found, 'Cannot find selection');
            gsnNode = found.node;
        }
        // Set the selection to the node we found/were given or null.
        this.selection = gsnNode;
        if (this.selection && this.selection.gsn.type === 'metadata') {
            this.selection = (_a = layout.find(this.selection.gsn.parent.id)) === null || _a === void 0 ? void 0 : _a.node;
        }
        // If there was a selection and it has been changed, deselect that node.
        if (priorSelection) {
            if (this.selection && this.selection.id !== priorSelection.id) {
                priorSelection.unShowSelected(this.renderer);
                this.notifyListeners(this.deselectListeners, priorSelection);
            }
            else {
                // If we have changed focus, the following can be true
                if (this.selection && this.selection !== priorSelection) {
                    this.selection.showSelected(this.renderer);
                }
                return;
            }
        }
        // If we actually made a selection, select that node.
        if (this.selection) {
            if (focus) {
                this.selection.showSelected(this.renderer);
            }
            this.notifyListeners(this.selectListeners, this.selection);
        }
    } // select
    /**
     * Deselect the currently selected element, if any. Like select, listeners are
     * only notified if there was actually an element to deselect.
     */
    deselect() {
        // Only try to unshow if there is something to deselect
        if (this.selection && this.viewContext.getActiveLayout()) {
            this.selection.unShowSelected(this.renderer);
        }
        const priorSelection = this.selection;
        this.selection = null;
        // Only notify if there was really a meaningful deselect
        if (priorSelection && this.viewContext.getActiveLayout()) {
            this.notifyListeners(this.deselectListeners, priorSelection);
        }
    } // deselect
    /**
     * Generic, helper function to notify a list of listeners, with an optional
     * parameter to be passed to the listener.
     *
     * @param {Array[Function]} list the list of listeners to notify
     * @param {Object} param the parameter to pass to the listener; optional.
     */
    notifyListeners(list, param) {
        jQuery.each(list, function (index, listener) {
            listener(param);
        });
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/view/sct-navigator.ts":
/*!*****************************************************!*\
  !*** ./sct-js/sources/viewer/view/sct-navigator.ts ***!
  \*****************************************************/
/*! exports provided: SctNavigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SctNavigator", function() { return SctNavigator; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./sct-js/sources/viewer/utils.ts");
// -------------------------------------------------------------------------- //
// sct-navigator.js             Dependable Computing                     2012 //
// -------------------------------------------------------------------------- //

/**
 * @classdesc
 *
 * <p>
 *  The SctNavigator provides a view in which a {@link LayoutTree} is rendered in a
 *  manner appropriate for a mini-map — simpler graphics that are suitable at
 *  small scale. It reflects the viewport of a {@link Viewer} using a box that
 *  indicates the currently-visible part of the {@link LayoutTree}.
 * </p>
 *
 * <p>
 *  The SctNavigator needs to know about the following events from a
 *  {@link Viewer}:
 * </p>
 *
 * <ul>
 *  <li>clear</li>
 *  <li>render</li>
 *  <li>update</li>
 *  <li>viewport</li>
 * </ul>
 *
 * <p>
 *  The SctNavigator itself is observable and will post three distinct events, each
 *  of which have their own associated addListener methods:
 * </p>
 *
 * <ul>
 *  <li>centerOn</li>
 *  <li>zoom</li>
 *  <li>pan</li>
 * </ul>
 *
 * <p>
 *  If the SctNavigator and the {@link Viewer} are in the same window/JavaScript
 *  instance, then you can use the {@link SctNavigator#attachToViewer} to get the
 *  SctNavigator and the {@link Viewer} linked. If they are not in the same window
 *  or JavaScript instance (as would be the case when using a separate Eclipse
 *  view for the SctNavigator and the {@link Viewer}), then some other mechanism
 *  will be required to ensure that each of the SctNavigator's "handle" methods
 *  are called when the {@link Viewer} notifies its listeners of the associated
 *  events.
 * </p>
 *
 * @requires jQuery
 *
 * @constructor
 * @return {SctNavigator} a new, empty object
 */
class SctNavigator {
    constructor() { }
    /**
     * Initialize the instance.
     *
     * @param {String} parent the parent for the view.
     * @param {RendererFactory} rendererFactory the factory instance that should be
     *                                          used by the view to create its
     *                                          {@link Renderer}
     * @param {Metrics} metrics the metrics that should be used by the view for
     *                          layout
     * @param {Number} width an explicit width for the navigator. If omitted, the
     *                       navigator will dynamically adjust its size
     * @param {Number} height an explicit height for the navigator. If omitted, the
     *                        navigator will dynamically adjust its size
     */
    init(parent, rendererFactory, metrics, width, height) {
        this.parent = parent;
        this.dynamicallySize = !width || !height;
        this.height = this.dynamicallySize ? SctNavigator.initHeight : height;
        this.width = this.dynamicallySize ? SctNavigator.initWidth : width;
        this.context = null;
        this.renderer = rendererFactory.newRenderer(parent, this.width, this.height);
        this.metrics = metrics;
        this.centerListeners = [];
        this.panListeners = [];
        this.zoomListeners = [];
        this.visibilityListeners = [];
        this.showing = true;
        this.rect = document.createElement('div');
        this.rect.setAttribute('id', 'navigator-rect');
        jQuery('#' + parent).append(this.rect);
        this.viewportReady = false;
        this.gsnReady = false;
    } // init
    /**
     * Set the size of this SctNavigator.
     *
     * @param {Number} width the new width of the canvas
     * @param {Number} height the new height of the canvas
     */
    setCanvasSize(canvasWidth, canvasHeight) {
        this.dynamicallySize = !canvasWidth || !canvasHeight;
        if (!this.dynamicallySize) {
            this.width = canvasWidth;
            this.height = canvasHeight;
            this.renderer.setSize(this.width, this.height);
        }
        else {
            this.width = SctNavigator.initWidth;
            this.height = SctNavigator.initHeight;
            // Don't set the size for a dynamically sized SctNavigator. See the comment in
            // rescale for details.
        }
        this.rescale();
        this.drawViewportBox();
    }
    /**
     * Make the navigator visible
     */
    show() {
        jQuery('#' + this.parent).show();
        this.showing = true;
        this.notifyVisibilityListeners();
    }
    /**
     * Make the navigator invisible
     */
    hide() {
        jQuery('#' + this.parent).hide();
        this.showing = false;
        this.notifyVisibilityListeners();
    }
    /**
     * Notify visibility listeners of a change in state.
     */
    notifyVisibilityListeners() {
        jQuery.each(this.visibilityListeners, function (index, listener) {
            listener();
        });
    }
    /**
     * The provided listener will get called whenever the visibility of the
     * navigator changes.
     *
     * @param listener
     */
    addVisibilityListener(listener) {
        this.visibilityListeners.push(listener);
    }
    /**
     * The provided listener will get called with a point in viewport coordinates
     * when the SctNavigator desires to set the central point on the {@link Viewer}'s
     * {@link Viewport}. This would be in response to, e.g., a mouse click on the
     * SctNavigator.
     *
     * @param listener
     */
    addCenterListener(listener) {
        this.centerListeners.push(listener);
    }
    /**
     * The provided listener will get called with a relative point in viewport scale
     * when the SctNavigator desires to pan the {@link Viewer}'s {@link Viewport}. This
     * would be in response to, e.g., a mouse move on the SctNavigator.
     *
     * @param listener
     */
    addPanListener(listener) {
        this.panListeners.push(listener);
    }
    /**
     * The provided listener will get called with a zoom delta and a point in
     * viewport coordinates when the SctNavigator desires to zoom around a point on
     * the {@link Viewer}'s {@link Viewport}. This would be in response to, e.g., a
     * mouse wheel on the SctNavigator.
     *
     * @param listener
     */
    addZoomListener(listener) {
        this.zoomListeners.push(listener);
    }
    /**
     * This method binds a SctNavigator to a {@link GsnViewer} if the two are in the
     * same JavaScript instance. It is not suitable for use when the SctNavigator is
     * in a completely different browser window (e.g., when in a separate view in
     * Eclipse).
     *
     * @param viewer the viewer to which this navigator should attach
     *                           itself.
     */
    attachToViewer(viewer) {
        viewer.addClearListener(this.handleClear.bind(this));
        viewer.addRenderListener(this.handleRender.bind(this));
        viewer.addUpdateListener(this.handleUpdate.bind(this));
        viewer.addViewportListener(this.handleViewport.bind(this));
        viewer.addPresentListener(this.handlePresent.bind(this));
        this.addCenterListener(function (point) {
            viewer.viewport.centerOn(point).apply();
        });
        this.addPanListener(function (point) {
            viewer.viewport.pan(point).apply();
        });
        this.addZoomListener(function (delta, point) {
            viewer.viewport
                .centerOn(point)
                .scale(delta, point)
                .apply();
        });
    }
    /**
     * Clear the contents of the SctNavigator
     */
    clear() {
        this.renderer.clear();
        this.context = null;
    }
    /**
     * Render the given tree using the SctNavigator's renderer.
     *
     * @param context
     */
    render(context) {
        var _a;
        // Render the tree.
        this.context = context;
        const fullLayout = (_a = this.context) === null || _a === void 0 ? void 0 : _a.getFullLayout();
        _utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].assert(!!fullLayout, 'No layout or context in render?');
        this.layoutWidth =
            fullLayout.width + fullLayout.marginLeft + fullLayout.marginRight;
        this.layoutHeight =
            fullLayout.height + fullLayout.marginTop + fullLayout.marginBottom;
        this.gsnReady = true;
        this.rescale();
        this.drawViewportBox();
        fullLayout.renderNavigator(this.renderer);
        // Now highlight for focus.
        const focusLayout = this.context.getFocusLayout();
        if (focusLayout) {
            this.highlight(focusLayout);
        }
    }
    /**
     * Recursively highlight elements of the full layout that are contained in the
     * layout passed in.
     *
     * @param {GsnTree} layout the (focused) layout
     */
    highlight(layout) {
        // This is a really ugly method, since we're doing the traversal directly,
        // rather than using a visitor. It is, however, effective.
        var _a, _b;
        _utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].assert(!!this.context, 'Need context to highlight');
        const layoutNode = (_a = this.context.getFullLayout()) === null || _a === void 0 ? void 0 : _a.find(layout.node.node.id);
        _utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].assert(!!layoutNode, 'Need layout node to highlight');
        layoutNode.node.fill(this.renderer, 'red');
        if (layout.node.hasChildren()) {
            for (const innerChild of layout.node.children) {
                const innerChildTyped = innerChild;
                const toHighlight = (_b = this.context
                    .getFullLayout()) === null || _b === void 0 ? void 0 : _b.find(innerChildTyped.node.id);
                if (toHighlight) {
                    toHighlight.node.fill(this.renderer, 'red');
                }
            }
        }
        if (layout.hasChildren()) {
            for (const child of layout.children) {
                this.highlight(child);
            }
        }
    }
    present(cssId) {
        var _a, _b;
        const fullLayout = (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.getFullLayout()) === null || _b === void 0 ? void 0 : _b.find(cssId);
        _utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].assert(!!fullLayout, 'No layout node to present?');
        fullLayout.node.fill(this.renderer, 'red');
    }
    /**
     * Rescale the navigator after a change in the full layout.
     */
    rescale() {
        if (!this.gsnReady) {
            return;
        }
        const width = this.layoutWidth;
        const height = this.layoutHeight;
        if (this.dynamicallySize) {
            const scale = Math.sqrt(SctNavigator.maxArea / (width * height));
            this.scale = scale > 0.2 ? 0.2 : scale;
            this.width = width * this.scale;
            this.height = height * this.scale;
            const parent = jQuery('#' + this.parent)[0];
            // Note the funny + 3px here: not at all sure why it's needed, but without
            // it, the rubber-band box falls off the bottom. Works in Webkit and
            // Gecko.
            parent.style.width = this.width + 'px';
            parent.style.height = this.height + 3 + 'px';
            // Note that we don't actually set the size of the renderer here. Doing so
            // causes WebKit to crash - and I have no idea why. I've tried all sorts of
            // ways and other workarounds, but the best strategy appears to be to simply
            // clip the canvas using the SctNavigator's parent.
        }
        else {
            const scaleX = this.width / width;
            const scaleY = this.height / height;
            const scale = Math.min(scaleX, scaleY);
            this.scale = scale > 1 ? 1 : scale;
        }
        // Intentionally using the layoutWidth and layoutHeight here.
        this.renderer.getViewport().assign(this.scale, 0, 0, width, height);
    }
    /**
     * Delegate a zoom to our zoom listeners based on a delta and an x, y point
     * given in (SctNavigator) canvas coordinates
     *
     * @param delta the amount to zoom by
     * @param x the x coordinate on the canvas
     * @param y the y coordinate on the canvas
     */
    zoom(delta, x, y) {
        if (this.context && this.context.getFocusLayout()) {
            return;
        }
        const point = this.renderer.getViewport().canvas2viewport(x, y);
        jQuery.each(this.zoomListeners, function (index, listener) {
            listener(delta, point);
        });
    }
    /**
     * Delegate a center to our center listeners based on an x, y point
     * given in (SctNavigator) canvas coordinates
     *
     * @param x the x coordinate on the canvas
     * @param y the y coordinate on the canvas
     */
    centerOn(x, y) {
        if (this.context && this.context.getFocusLayout()) {
            return;
        }
        const point = this.renderer.getViewport().canvas2viewport(x, y);
        jQuery.each(this.centerListeners, function (index, listener) {
            listener(point);
        });
    }
    /**
     * Delegate a pan to our pan listeners based on a relative x, y point
     * given in (SctNavigator) canvas coordinates
     *
     * @param dx the x distance on the canvas
     * @param dy the y distance on the canvas
     */
    pan(dx, dy) {
        if (this.context && this.context.getFocusLayout()) {
            return;
        }
        const point = this.renderer.getViewport().canvas2viewportRelative(-dx, -dy);
        jQuery.each(this.panListeners, function (index, listener) {
            listener(point);
        });
    }
    /**
     * Respond to a ({@link Viewer}) {@link Viewport} update by redrawing the box
     * showing what is currently visible.
     *
     * @param viewport
     */
    handleViewport(viewport) {
        this.assignViewport(viewport.scaleFactor, viewport.x, viewport.y, viewport.width, viewport.height, viewport.canvasWidth, viewport.canvasHeight);
    }
    /**
     * Assign the viewport for the navigator, setting all of its parameters
     * directly.
     */
    assignViewport(scaleFactor, x, y, width, height, canvasWidth, canvasHeight) {
        this.vpScaleFactor = scaleFactor;
        this.vpX = x;
        this.vpY = y;
        this.vpWidth = width;
        this.vpHeight = height;
        this.vpCanvasWidth = canvasWidth;
        this.vpCanvasHeight = canvasHeight;
        this.viewportReady = true;
        this.drawViewportBox();
    }
    /**
     * Draw a box on the navigator corresponding to the viewer's viewport
     */
    drawViewportBox() {
        if (!this.gsnReady || !this.viewportReady) {
            return;
        }
        if (this.context && this.context.getFocusLayout()) {
            this.rect.style.setProperty('left', -2 + 'px', '');
            this.rect.style.setProperty('top', -2 + 'px', '');
            this.rect.style.setProperty('width', 1 + 'px', '');
            this.rect.style.setProperty('height', 1 + 'px', '');
            return;
        }
        // Handle the case in which there are focused elements
        // Compute the coordinates of the navigator's box
        const scaling = this.vpScaleFactor / this.scale;
        let left = -this.vpX / scaling;
        let top = -this.vpY / scaling;
        let width = this.vpCanvasWidth / scaling;
        let height = this.vpCanvasHeight / scaling;
        // Adjust the box if any side is "off" the navigator.
        if (left < 0) {
            width += left;
            left = 0;
        }
        if (top < 0) {
            height += top;
            top = 0;
        }
        if (left + width > this.width) {
            width -= left + width - this.width;
        }
        if (top + height > this.height) {
            height -= top + height - this.height;
        }
        width -= 2;
        height += 1;
        // Set the computed dimensions of the box as CSS properties
        this.rect.style.setProperty('left', left + 'px', '');
        this.rect.style.setProperty('top', top + 'px', '');
        this.rect.style.setProperty('width', width + 'px', '');
        this.rect.style.setProperty('height', height + 'px', '');
    }
    /**
     * Respond to a render event by clearing and rendering the given tree.
     *
     * @param {ViewContext} context
     */
    handleRender(context) {
        this.gsnReady = false;
        this.clear();
        this.render(context);
    }
    /**
     * Respond to an update event by clearing and rendering the given tree.
     *
     * @param {ViewContext} context
     */
    handleUpdate(context) {
        this.gsnReady = false;
        this.clear();
        this.render(context);
    }
    /**
     * Respond to a clear event by clearing
     */
    handleClear() {
        this.gsnReady = false;
        this.clear();
    }
    /**
     * Respond to a present event by presenting the specified element
     */
    handlePresent(cssId) {
        this.present(cssId);
    }
}
/**
 * The initial width of a dynamically sized SctNavigator
 */
SctNavigator.initWidth = 1000;
/**
 * The initial height of a dynamically size SctNavigator
 */
SctNavigator.initHeight = 1000;
/**
 * The maximum width x height of a dynamically sized SctNavigator
 */
SctNavigator.maxArea = 75000;


/***/ }),

/***/ "./sct-js/sources/viewer/view/sct-overview.ts":
/*!****************************************************!*\
  !*** ./sct-js/sources/viewer/view/sct-overview.ts ***!
  \****************************************************/
/*! exports provided: Overview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overview", function() { return Overview; });
// -------------------------------------------------------------------------- //
// sct-overview.js                 M. Anthony Aiello                     2012 //
// -------------------------------------------------------------------------- //
/**
 * An Overview shows an overview of an argument. The overview is an HTML
 * fragment; section elements break the content across pages.
 *
 * @constructor
 */
class Overview {
    /**
     * Construct an instance
     *
     * @params container the name of the container for this Overview
     * @params html the html to display in this Overview
     */
    init(container, html) {
        this.container = jQuery('#' + container);
        this.html = html;
        this.showing = false;
        this.listeners = [];
        this.buildHTML();
    } // init
    /**
     * Add a listener, a Function taking no arguments that we will call whenever our
     * visibility changes
     *
     * @param listener a function to add
     */
    addListener(listener) {
        this.listeners.push(listener);
    }
    /**
     * Close the overview, disposing of its DOM. If you simply want it to not be
     * visible, but be able to be displayed later, then use {@link Overview#hide}
     * instead.
     */
    close() {
        this.container.empty();
    }
    /**
     * Make the overview visible.
     */
    show() {
        this.showing = true;
        this.container.show();
        this.notifyListeners();
    }
    /**
     * Make the overview invisible.
     */
    hide() {
        this.showing = false;
        this.container.hide();
        this.notifyListeners();
    }
    /**
     * <p>
     *  Given an href, update it so that it can be used for a 'local search' of the
     *  current argument structure.
     * </p>
     * <p>
     *  In its default form, this method leaves the href unchanged. It should be
     *  overridden as needed to support, for example, editors, which include a
     *  filename as part of the document's location hash.
     * </p>
     *
     * @param href the href to update
     *
     * @return the updated href
     */
    updateSearchHyperlink(href) {
        return href;
    }
    updateArgumentHyperlink(href) {
        return href + '.html';
    }
    updateImageSource(src) {
        return src;
    }
    showSection(section) {
        this.sections.each(function (index, section) {
            if (index === this.currentSection) {
                jQuery(section).show();
            }
            else {
                jQuery(section).hide();
            }
        }.bind(this));
    }
    forward() {
        if (this.currentSection >= this.sections.length - 1) {
            this.currentSection = this.sections.length - 1;
            return;
        }
        this.showSection(++this.currentSection);
        if (this.currentSection > 0) {
            jQuery('.backward').removeClass('inactive');
        }
        if (this.currentSection === this.sections.length - 1) {
            jQuery('.forward').addClass('inactive');
        }
    }
    backward() {
        if (this.currentSection <= 0) {
            this.currentSection = 0;
            return;
        }
        this.showSection(--this.currentSection);
        if (this.currentSection === 0) {
            jQuery('.backward').addClass('inactive');
        }
        if (this.currentSection < this.sections.length - 1) {
            jQuery('.forward').removeClass('inactive');
        }
    }
    buildHTML() {
        this.container.append('<div>' +
            '<command class="close"></command>' +
            '<div class="page-buttons">' +
            // The forward arrow in unicode doesn't match the backward arrow. So we
            // use the backward arrow and, in CSS, flip it. It's stupid. But since
            // Windows 7 doesn't even include the black arrows I like....
            '<span class="backward inactive flip">➡</span>' +
            '<span class="forward">➡</span>' +
            '</div>' +
            this.html +
            '</div>');
        // Figure out if we have more than one section
        if (jQuery('div section', this.container).length === 1) {
            jQuery('.forward', this.container).addClass('inactive');
        }
        jQuery('.close', this.container)[0].addEventListener('click', this.hide.bind(this), false);
        jQuery('.forward', this.container)[0].addEventListener('click', this.forward.bind(this), false);
        jQuery('.backward', this.container)[0].addEventListener('click', this.backward.bind(this), false);
        // Now, go back through and update the hyperlinks.
        jQuery('a', this.container).each(function (index, anchor) {
            const href = anchor.getAttribute('href');
            if (href.match(/^#\?/)) {
                // Assume this is a search command for the local document
                anchor.setAttribute('href', this.updateSearchHyperlink(href));
            }
            else if (!href.match(/:\/\//) && !href.match(/\.html/)) {
                // Assume this is a reference to another argument.
                anchor.setAttribute('href', this.updateArgumentHyperlink(href));
            }
            // Regardless, we want to make the overview go away.
            anchor.addEventListener('click', this.hide.bind(this), false);
        }.bind(this));
        jQuery('img', this.container).each(function (index, image) {
            const src = image.getAttribute('src');
            image.setAttribute('src', this.updateImageSource(src));
        }.bind(this));
        this.sections = jQuery('section', this.container);
        this.currentSection = 0;
        this.showSection(this.currentSection);
    }
    /**
     * Tell all of our listeners that our state has changed.
     */
    notifyListeners() {
        jQuery.each(this.listeners, function (index, listener) {
            listener();
        });
    }
}


/***/ }),

/***/ "./sct-js/sources/viewer/view/sct-view-context.ts":
/*!********************************************************!*\
  !*** ./sct-js/sources/viewer/view/sct-view-context.ts ***!
  \********************************************************/
/*! exports provided: ViewContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewContext", function() { return ViewContext; });
// -------------------------------------------------------------------------- //
// sct-view-context.js          Dependable Computing                     2013 //
// -------------------------------------------------------------------------- //
/**
 * @classdesc
 *
 * Context for a viewer.
 *
 * @constructor
 * @return {ViewContext} a new, empty instance
 */
// @TODO This abstraction is useless with strong typing. Eliminate or rework abstract ViewContext
class ViewContext {
}


/***/ }),

/***/ "./sct-js/sources/viewer/view/sct-viewer-menus.ts":
/*!********************************************************!*\
  !*** ./sct-js/sources/viewer/view/sct-viewer-menus.ts ***!
  \********************************************************/
/*! exports provided: ViewerMenus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerMenus", function() { return ViewerMenus; });
// -------------------------------------------------------------------------- //
// sct-viewer-events.js         Dependable Computing                     2012 //
// -------------------------------------------------------------------------- //
let helpPath = '';
const meta = !navigator.platform.match(/Mac/) ? 'Ctrl+' : '&#8984';
const escKey = !navigator.platform.match(/Mac/) ? 'Esc' : '&#9099;';
/**
 * @classdesc
 * This class separates out and encapsulates the details of making contributions
 * to a menu. The menu must be in a nav element and must contain a ul. The
 * contributions will be made as li elements.
 *
 * @constructor
 * @return {ViewerMenus} a new, empty instance
 */
class ViewerMenus {
    /**
     * Initialize the instance by providing the components that the menus will drive
     *
     * @param viewer the viewer
     * @param navigator the navigator
     * @param overview the overview
     */
    init(viewer, navigator, overview) {
        this.viewer = viewer;
        this.navigator = navigator;
        this.navigator.addVisibilityListener(this.handleNavigatorVisibilityChange.bind(this));
        this.overview = overview;
        this.overview.addListener(this.handleOverviewVisibilityChange.bind(this));
        this.menu = jQuery('nav');
        this.buildMenus();
        /**
         * Listener for key down; cached so we can remove if needed
         *
         * @type Function
         */
        this.keyDownListener = this.handleKeyDown.bind(this);
        window.addEventListener('keydown', this.keyDownListener);
        // Ensure that we have the correct initial state for the overview and nav
        // menus
        this.handleOverviewVisibilityChange();
        this.handleNavigatorVisibilityChange();
    } // init
    /**
     * Build the menu contributions and wire up their event handlers
     */
    buildMenus() {
        helpPath = '../help/';
        jQuery('#help-menu', this.menu).before('<li id="view-menu" onclick="void(0)">View ' +
            '<ul>' +
            '<li id="reset-menu" class="control">' +
            'Reset' +
            '</li>' +
            '<li id="overview-menu" class="control">' +
            'Show Overview' +
            '</li>' +
            '<li class="rule"><hr /></li>' +
            '<li id="navigator-menu" class="control">' +
            'Hide SctNavigator<span class="shortcut">' +
            meta +
            '/</span>' +
            '</li>' +
            '</ul>' +
            '</li>' +
            '<li id="focus-menu" onclick="void(0)">Focus ' +
            '<ul>' +
            '<li id="focus-whole-menu" class="control">' +
            'On Whole Argument<span class="shortcut">' +
            escKey +
            '</span>' +
            '</li>' +
            '<li class="rule"><hr /></li>' +
            '<li id="focus-1" class="control">' +
            'On Children<span class="shortcut">1</span>' +
            '</li>' +
            '<li id="focus-2" class="control">' +
            'On Grandchildren<span class="shortcut">2</span>' +
            '</li>' +
            '<li id="focus-3" class="control">' +
            'On Great-grandchildren<span class="shortcut">3</span>' +
            '</li>' +
            '<li id="focus-4" class="control">' +
            'On 4th Generation<span class="shortcut">4</span>' +
            '</li>' +
            '<li id="focus-5" class="control">' +
            'On 5th Generation<span class="shortcut">5</span>' +
            '</li>' +
            '<li id="focus-6" class="control">' +
            'On 6th Generation<span class="shortcut">6</span>' +
            '</li>' +
            '<li id="focus-7" class="control">' +
            'On 7th Generation<span class="shortcut">7</span>' +
            '</li>' +
            '<li id="focus-8" class="control">' +
            'On 8th Generation<span class="shortcut">8</span>' +
            '</li>' +
            '<li id="focus-9" class="control">' +
            'On 9th Generation<span class="shortcut">9</span>' +
            '</li>' +
            '<li id="focus-subtree" class="control">' +
            'On Subtree<span class="shortcut">-</span>' +
            '</li>' +
            '</ul>' +
            '</li>');
        jQuery('#help-menu > table > tbody:last-child', this.menu).after('<tbody>' +
            '<tr>' +
            '<td>' +
            'Argument Viewer' +
            '</td>' +
            '</tr><tr>' +
            '<td>' +
            '<a id="help-view" href="' +
            helpPath +
            'view.html' +
            '">' +
            'View Controls' +
            '</a>' +
            '</td>' +
            '</tr><tr>' +
            '<td>' +
            '<a href="' +
            helpPath +
            'focus.html' +
            '">' +
            'Focus Controls' +
            '</a>' +
            '</td>' +
            '</tr>' +
            '</tbody>');
        const resetMenu = jQuery('#reset-menu')[0];
        const overviewMenu = jQuery('#overview-menu')[0];
        const navigatorMenu = jQuery('#navigator-menu')[0];
        const focusWholeMenu = jQuery('#focus-whole-menu')[0];
        const focus1Menu = jQuery('#focus-1')[0];
        const focus2Menu = jQuery('#focus-2')[0];
        const focus3Menu = jQuery('#focus-3')[0];
        const focus4Menu = jQuery('#focus-4')[0];
        const focus5Menu = jQuery('#focus-5')[0];
        const focus6Menu = jQuery('#focus-6')[0];
        const focus7Menu = jQuery('#focus-7')[0];
        const focus8Menu = jQuery('#focus-8')[0];
        const focus9Menu = jQuery('#focus-9')[0];
        const focusSubtreeMenu = jQuery('#focus-subtree')[0];
        // View Menu
        resetMenu.addEventListener('click', function () {
            this.viewer.reset();
        }.bind(this), false);
        overviewMenu.addEventListener('click', function () {
            if (!overviewMenu.className.match(/inactive/)) {
                this.toggleOverview();
            }
        }.bind(this), false);
        navigatorMenu.addEventListener('click', function () {
            this.toggleNavigator();
        }.bind(this), false);
        // Focus
        focusWholeMenu.addEventListener('click', function () {
            this.viewer.focusOn(':all');
        }.bind(this), false);
        focus1Menu.addEventListener('click', function () {
            if (this.viewer.selection) {
                this.viewer.focusOn(':1st-generation');
            }
        }.bind(this), false);
        focus2Menu.addEventListener('click', function () {
            if (this.viewer.selection) {
                this.viewer.focusOn(':2nd-generation');
            }
        }.bind(this), false);
        focus3Menu.addEventListener('click', function () {
            if (this.viewer.selection) {
                this.viewer.focusOn(':3rd-generation');
            }
        }.bind(this), false);
        focus4Menu.addEventListener('click', function () {
            if (this.viewer.selection) {
                this.viewer.focusOn(':4th-generation');
            }
        }.bind(this), false);
        focus5Menu.addEventListener('click', function () {
            if (this.viewer.selection) {
                this.viewer.focusOn(':5th-generation');
            }
        }.bind(this), false);
        focus6Menu.addEventListener('click', function () {
            if (this.viewer.selection) {
                this.viewer.focusOn(':6th-generation');
            }
        }.bind(this), false);
        focus7Menu.addEventListener('click', function () {
            if (this.viewer.selection) {
                this.viewer.focusOn(':7th-generation');
            }
        }.bind(this), false);
        focus8Menu.addEventListener('click', function () {
            if (this.viewer.selection) {
                this.viewer.focusOn(':8th-generation');
            }
        }.bind(this), false);
        focus9Menu.addEventListener('click', function () {
            if (this.viewer.selection) {
                this.viewer.focusOn(':9th-generation');
            }
        }.bind(this), false);
        focusSubtreeMenu.addEventListener('click', function () {
            if (this.viewer.selection) {
                this.viewer.focusOn(':subtree');
            }
        }.bind(this), false);
    } // buildMenus
    /**
     * Toggle the visibility of the overview.
     */
    toggleOverview() {
        if (this.overview.showing) {
            this.overview.hide();
        }
        else {
            this.overview.show();
        }
    }
    /**
     * Respond to a visibility change in the overview.
     */
    handleOverviewVisibilityChange() {
        const overviewMenu = jQuery('#overview-menu')[0];
        if (this.overview.showing) {
            overviewMenu.innerHTML = 'Hide Overview';
        }
        else {
            overviewMenu.innerHTML = 'Show Overview';
        }
    }
    /**
     * Toggle the visibility of the navigator
     */
    toggleNavigator() {
        const navigatorMenu = jQuery('#navigator-menu')[0];
        if (this.navigator.showing) {
            this.navigator.hide();
        }
        else {
            this.navigator.show();
        }
    }
    /**
     * Respond to visibility change in the navigator.
     */
    handleNavigatorVisibilityChange() {
        const navigatorMenu = jQuery('#navigator-menu')[0];
        if (this.navigator.showing) {
            navigatorMenu.innerHTML =
                'Hide SctNavigator<span class="shortcut">' + meta + '/</span>';
        }
        else {
            navigatorMenu.innerHTML =
                'Show SctNavigator<span class="shortcut">' + meta + '/</span>';
        }
    }
    /**
     * Really only looking for meta/ctrl + '/', since that will let us hide the
     * navigator
     *
     * @param evt the event
     */
    handleKeyDown(evt) {
        if ((!navigator.platform.match(/Mac/) && evt.ctrlKey) ||
            (navigator.platform.match(/Mac/) && evt.metaKey)) {
            const code = evt.code;
            switch (code) {
                // The '/' key.
                case 'Slash':
                    this.toggleNavigator();
                    break;
                default:
                    return false;
            }
            // Make sure the browser doesn't also try to handle our shortcut
            if (evt.preventDefault) {
                evt.preventDefault();
            }
            evt.returnValue = false;
            return true;
        } // if meta key down
        return false;
    }
}


/***/ })

/******/ });