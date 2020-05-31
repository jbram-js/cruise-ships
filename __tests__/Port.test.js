/* globals describe it expect */
const Port = require('../src/Port.js');

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
