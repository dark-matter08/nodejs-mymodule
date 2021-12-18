'use strict'

const Enigma = require('./enigma');
const eng = new Enigma('magrathea');

let encodedString = eng.encode("Don't Panic!");
let decodedString = eng.decode(encodedString);

let qr = eng.qrgen("Nde Che Lucien Ngwa", "nde.png");

console.log("Encoded: ", encodedString);
console.log("Decoded: ", decodedString);

qr ? console.log('QR Code create') : console.log('QR Code failed');
