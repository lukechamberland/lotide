let assertEqual = require('../assertEqual');
let tail = require('../tail');

assertEqual(tail(['heyo', 33, 'yes', true], [33, 'yes', true]));

module.exports = tail;