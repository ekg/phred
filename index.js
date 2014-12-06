function log10(val) {
  return Math.log(val) / Math.LN10;
}

function ln2log10(prob) {
    return Math.LOG10E * prob;
}

function log102ln(prob) {
    return Math.LN10 * prob;
}

function phred2log10(qual) {
  return Math.LN10 * qual * -.1;
}

function float2phred(prob) {
  var PHRED_MAX = 10000
  if (prob === 1)
    return 10000;
  var p = -10 * log10(prob);
  if (p < 0 || p > PHRED_MAX) // overflow guard
    return PHRED_MAX;
  else
    return p;
}

function phred2ln(qual) {
    return Math.LN10 * qual * -.1;
}

function ln2phred(prob) {
    return -10 * Math.LOG10E * prob;
}

function phred2float(qual) {
    return Math.pow(10, qual * -.1);
}


function Phred() {
  this.quality = 0
}

Phred.prototype.fromProb = function(prob) {
  this.quality = float2phred(prob)
  return this
}

Phred.prototype.fromQuality = function(qual) {
  this.quality = qual
  return this
}

Phred.prototype.fromLog10Prob = function(problog10) {
  this.quality = ln2phred(log102ln(problog10))
  return this
}

Phred.prototype.fromLnProb = function(probln) {
  this.quality = ln2phred(probln)
  return this
}

Phred.prototype.toQuality = function() {
  return this.quality
}

Phred.prototype.toProb = function() {
  return phred2float(this.quality)
}

Phred.prototype.toLog10Prob = function() {
  return phred2log10(this.quality)
}

Phred.prototype.toLnProb = function() {
  return phred2ln(this.quality)
}

module.exports = Phred
