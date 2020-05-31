/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Port', () => {
    it('can be instantiated', () => {

        expect(new Port()).toBeInstanceOf(Object);
    });
});

describe('name', () => {
    it('sets the name property', () => {
        const port = new Port('Southampton');
      
        expect(port.portName).toEqual('Southampton');
    });
});
