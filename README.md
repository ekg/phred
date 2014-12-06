# phred

[![NPM](https://nodei.co/npm/phred.png?global=true)](https://nodei.co/npm/phred/)

[![Build Status](https://travis-ci.org/ekg/phred.svg)](https://travis-ci.org/ekg/phred)

convert phred quality scores to and from other numerical representations

## Overview

[Phred quality scores](https://en.wikipedia.org/wiki/Phred_quality_score) are a humanized representation of small error probabilities. They have a long history of use in genomics, where they have been employed to represent the quality of sequencing observations.

If the probability of error is P, the phred quality score Q is defined as `Q = -10 * log10(P)`.

[![q to p](https://upload.wikimedia.org/math/2/7/9/27965b367978f44297efd5b3544bae04.png)](https://en.wikipedia.org/wiki/Phred_quality_score)

Inversely, `P = 10^(-Q/10)`:

[![p to q](https://upload.wikimedia.org/math/5/b/c/5bc7e86d6002b0f824c1cc00b97e3047.png)](https://en.wikipedia.org/wiki/Phred_quality_score)

This library encapsulates conversions between error probabilities and phred scores.

## Installation

```
npm install phred
```

## Usage

A Phred object is provided that allows for manipulation of quality scores.

``` js
var Phred = require('phred')

// print the phred to probability mapping
[0,10,20,30,40,50].forEach(function(x) {
    var p = new Phred().fromQuality(x)
    console.log(x, p.toProb())
    })
/* 
0 1
10 0.1
20 0.01
30 0.001
40 0.0001
50 0.00001
*/
```

## License

MIT
