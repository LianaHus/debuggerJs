//the vm trace is taken from block number 1160004, tx number 1 as an example

var multi = function(func) { return func.toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1]; }

var BALLOT_EXAMPLE = multi(function(){/*
[{
  address: '1e6281f871ec414e4fbf66b4f2697a7a096f54f6',
  depth: 0,
  gas: '727704',
  gascost: '3',
  inst: 96,
  instname: 'PUSH1',
  memory: '',
  pc: '0',
  stack: [],
  steps: 0,
  storage: {
  }
}, {
  gas: '727701',
  gascost: '3',
  inst: 96,
  instname: 'PUSH1',
  pc: '2',
  stack: ['60'],
  steps: 1
}, {
  gas: '727698',
  gascost: '3',
  inst: 129,
  instname: 'DUP2',
  pc: '4',
  stack: ['60', '40'],
  steps: 2
}, {
  gas: '727695',
  gascost: '3',
  inst: 129,
  instname: 'DUP2',
  pc: '5',
  stack: ['60', '40', '60'],
  steps: 3
}, {
  gas: '727692',
  gascost: '12',
  inst: 82,
  instname: 'MSTORE',
  memexpand: '3',
  pc: '6',
  stack: ['60', '40', '60', '40'],
  steps: 4
}, {
  gas: '727680',
  gascost: '3',
  inst: 128,
  instname: 'DUP1',
  memory: '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060',
  pc: '7',
  stack: ['60', '40'],
  steps: 5
}, {
  gas: '727677',
  gascost: '3',
  inst: 97,
  instname: 'PUSH2',
  pc: '8',
  stack: ['60', '40', '40'],
  steps: 6
}, {
  gas: '727674',
  gascost: '3',
  inst: 131,
  instname: 'DUP4',
  pc: '11',
  stack: ['60', '40', '40', 'd08'],
  steps: 7
}, {
  gas: '727671',
  gascost: '15',
  inst: 57,
  instname: 'CODECOPY',
  memexpand: '2',
  pc: '12',
  stack: ['60', '40', '40', 'd08', '60'],
  steps: 8
}, {
  gas: '727656',
  gascost: '3',
  inst: 96,
  instname: 'PUSH1',
  memory: '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000020a6a4cf2be3b58136c5a54e0614fd50342a12040000000000000000000000000000000000000000000000000000000000000000',
  pc: '13',
  stack: ['60', '40'],
  steps: 9
}, {
  gas: '727653',
  gascost: '3',
  inst: 144,
  instname: 'SWAP1',
  pc: '15',
  stack: ['60', '40', 'a0'],
  steps: 10
}, {
  gas: '727650',
  gascost: '3',
  inst: 82,
  instname: 'MSTORE',
  pc: '16',
  stack: ['60', 'a0', '40'],
  steps: 11
}, {
  gas: '727647',
  gascost: '3',
  inst: 81,
  instname: 'MLOAD',
  memory: '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000020a6a4cf2be3b58136c5a54e0614fd50342a12040000000000000000000000000000000000000000000000000000000000000000',
  pc: '17',
  stack: ['60'],
  steps: 12
}, {
  gas: '727644',
  gascost: '3',
  inst: 96,
  instname: 'PUSH1',
  memory: '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000020a6a4cf2be3b58136c5a54e0614fd50342a12040000000000000000000000000000000000000000000000000000000000000000',
  pc: '18',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204'],
  steps: 13
}, {
  gas: '727641',
  gascost: '3',
  inst: 81,
  instname: 'MLOAD',
  pc: '20',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '80'],
  steps: 14
}, {
  gas: '727638',
  gascost: '3',
  inst: 96,
  instname: 'PUSH1',
  memory: '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000020a6a4cf2be3b58136c5a54e0614fd50342a12040000000000000000000000000000000000000000000000000000000000000000',
  pc: '21',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', ''],
  steps: 15
}, {
  gas: '727635',
  gascost: '3',
  inst: 128,
  instname: 'DUP1',
  pc: '23',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', ''],
  steps: 16
}, {
  gas: '727632',
  gascost: '50',
  inst: 84,
  instname: 'SLOAD',
  pc: '24',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', '', ''],
  steps: 17
}, {
  gas: '727582',
  gascost: '3',
  inst: 96,
  instname: 'PUSH1',
  pc: '25',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', '', ''],
  steps: 18
}, {
  gas: '727579',
  gascost: '3',
  inst: 96,
  instname: 'PUSH1',
  pc: '27',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', '', '', '1'],
  steps: 19
}, {
  gas: '727576',
  gascost: '3',
  inst: 96,
  instname: 'PUSH1',
  pc: '29',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', '', '', '1', 'a0'],
  steps: 20
}, {
  gas: '727573',
  gascost: '20',
  inst: 10,
  instname: 'EXP',
  pc: '31',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', '', '', '1', 'a0', '2'],
  steps: 21
}, {
  gas: '727553',
  gascost: '3',
  inst: 3,
  instname: 'SUB',
  pc: '32',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', '', '', '1', '10000000000000000000000000000000000000000'],
  steps: 22
}, {
  gas: '727550',
  gascost: '3',
  inst: 25,
  instname: 'NOT',
  pc: '33',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', '', '', 'ffffffffffffffffffffffffffffffffffffffff'],
  steps: 23
}, {
  gas: '727547',
  gascost: '3',
  inst: 144,
  instname: 'SWAP1',
  pc: '34',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', '', '', 'ffffffffffffffffffffffff0000000000000000000000000000000000000000'],
  steps: 24
}, {
  gas: '727544',
  gascost: '3',
  inst: 129,
  instname: 'DUP2',
  pc: '35',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', '', 'ffffffffffffffffffffffff0000000000000000000000000000000000000000', ''],
  steps: 25
}, {
  gas: '727541',
  gascost: '3',
  inst: 22,
  instname: 'AND',
  pc: '36',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', '', 'ffffffffffffffffffffffff0000000000000000000000000000000000000000', '', 'ffffffffffffffffffffffff0000000000000000000000000000000000000000'],
  steps: 26
}, {
  gas: '727538',
  gascost: '3',
  inst: 132,
  instname: 'DUP5',
  pc: '37',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', '', 'ffffffffffffffffffffffff0000000000000000000000000000000000000000', ''],
  steps: 27
}, {
  gas: '727535',
  gascost: '3',
  inst: 23,
  instname: 'OR',
  pc: '38',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', '', 'ffffffffffffffffffffffff0000000000000000000000000000000000000000', '', '20a6a4cf2be3b58136c5a54e0614fd50342a1204'],
  steps: 28
}, {
  gas: '727532',
  gascost: '3',
  inst: 144,
  instname: 'SWAP1',
  pc: '39',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', '', 'ffffffffffffffffffffffff0000000000000000000000000000000000000000', '20a6a4cf2be3b58136c5a54e0614fd50342a1204'],
  steps: 29
}, {
  gas: '727529',
  gascost: '3',
  inst: 145,
  instname: 'SWAP2',
  pc: '40',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', '', '20a6a4cf2be3b58136c5a54e0614fd50342a1204', 'ffffffffffffffffffffffff0000000000000000000000000000000000000000'],
  steps: 30
}, {
  gas: '727526',
  gascost: '20000',
  inst: 85,
  instname: 'SSTORE',
  pc: '41',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', 'ffffffffffffffffffffffff0000000000000000000000000000000000000000', '20a6a4cf2be3b58136c5a54e0614fd50342a1204', ''],
  steps: 31
}, {
  gas: '707526',
  gascost: '3',
  inst: 96,
  instname: 'PUSH1',
  pc: '42',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', 'ffffffffffffffffffffffff0000000000000000000000000000000000000000'],
  steps: 32,
  storage: {
    : '20a6a4cf2be3b58136c5a54e0614fd50342a1204'
  }
}, {
  gas: '707523',
  gascost: '3',
  inst: 128,
  instname: 'DUP1',
  pc: '44',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', 'ffffffffffffffffffffffff0000000000000000000000000000000000000000', '1'],
  steps: 33
}, {
  gas: '707520',
  gascost: '50',
  inst: 84,
  instname: 'SLOAD',
  pc: '45',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', 'ffffffffffffffffffffffff0000000000000000000000000000000000000000', '1', '1'],
  steps: 34
}, {
  gas: '707470',
  gascost: '3',
  inst: 144,
  instname: 'SWAP1',
  pc: '46',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', 'ffffffffffffffffffffffff0000000000000000000000000000000000000000', '1', ''],
  steps: 35
}, {
  gas: '707467',
  gascost: '3',
  inst: 145,
  instname: 'SWAP2',
  pc: '47',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', 'ffffffffffffffffffffffff0000000000000000000000000000000000000000', '', '1'],
  steps: 36
}, {
  gas: '707464',
  gascost: '3',
  inst: 22,
  instname: 'AND',
  pc: '48',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', '1', '', 'ffffffffffffffffffffffff0000000000000000000000000000000000000000'],
  steps: 37
}, {
  gas: '707461',
  gascost: '3',
  inst: 130,
  instname: 'DUP3',
  pc: '49',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', '1', ''],
  steps: 38
}, {
  gas: '707458',
  gascost: '3',
  inst: 23,
  instname: 'OR',
  pc: '50',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', '1', '', ''],
  steps: 39
}, {
  gas: '707455',
  gascost: '3',
  inst: 144,
  instname: 'SWAP1',
  pc: '51',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', '1', ''],
  steps: 40
}, {
  gas: '707452',
  gascost: '5000',
  inst: 85,
  instname: 'SSTORE',
  pc: '52',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', '', '', '1'],
  steps: 41
}, {
  gas: '702452',
  gascost: '2',
  inst: 80,
  instname: 'POP',
  pc: '53',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204', ''],
  steps: 42,
  storage: {
    : '20a6a4cf2be3b58136c5a54e0614fd50342a1204'
  }
}, {
  gas: '702450',
  gascost: '2',
  inst: 80,
  instname: 'POP',
  pc: '54',
  stack: ['20a6a4cf2be3b58136c5a54e0614fd50342a1204'],
  steps: 43
}, {
  gas: '702448',
  gascost: '3',
  inst: 97,
  instname: 'PUSH2',
  pc: '55',
  stack: [],
  steps: 44
}, {
  gas: '702445',
  gascost: '3',
  inst: 128,
  instname: 'DUP1',
  pc: '58',
  stack: ['cc4'],
  steps: 45
}, {
  gas: '702442',
  gascost: '3',
  inst: 97,
  instname: 'PUSH2',
  pc: '59',
  stack: ['cc4', 'cc4'],
  steps: 46
}, {
  gas: '702439',
  gascost: '3',
  inst: 96,
  instname: 'PUSH1',
  pc: '62',
  stack: ['cc4', 'cc4', '44'],
  steps: 47
}, {
  gas: '702436',
  gascost: '626',
  inst: 57,
  instname: 'CODECOPY',
  memexpand: '98',
  pc: '64',
  stack: ['cc4', 'cc4', '44', ''],
  steps: 48
}, {
  gas: '701810',
  gascost: '3',
  inst: 96,
  instname: 'PUSH1',
  pc: '65',
  sha3memory: 'e70fbff0aeed7fc0d70077defbbfa0d8892596b963658d743815c7f1991c1aa7',
  stack: ['cc4'],
  steps: 49
}, {
  gas: '701807',
  gascost: '0',
  inst: 243,
  instname: 'RETURN',
  pc: '67',
  stack: ['cc4', ''],
  steps: 50
}]
*/});
