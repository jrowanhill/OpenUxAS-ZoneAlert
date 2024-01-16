// Incredibly, IE<9 does not support the .trim() method for Strings. We end up
// using this in lots of places throughout the case.
if (!String.prototype.trim) {
  String.prototype.trim = function(){
    // From http://blog.stevenlevithan.com/archives/faster-trim-javascript
    // purported to be extremely fast for IE6 (and, I'm assuming, 7 and 8)
    return this.replace(/^\s*((?:[\S\s]*\S)?)\s*$/, '$1');
  };
}
