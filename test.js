var test = require('tape')
var Phred = require('./')

test('phred to prob', function (t) {

  t.plan(1)

  var a = [
    1,
    0.1,
    0.01,
    0.001,
    0.0001,
    0.00001 ]

  var b = [0,10,20,30,40,50].map(function(x) {
    return new Phred().fromQuality(x).toProb()
  })

  t.deepEqual(a, b)
  
})

test('phred to log10', function (t) {

  t.plan(1)

  var a = [
      0,
      -2.3025850929940463,
      -4.605170185988093,
      -6.907755278982139,
      -9.210340371976185,
      -11.51292546497023 ]

  var b = [0,10,20,30,40,50].map(function(x) {
    return new Phred().fromQuality(x).toLog10Prob()
  })

  t.deepEqual(a, b)
  
})
