/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Port', () => {
    it('can be instantiated', () => {

        expect(new Port()).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const port = new Port('Dover');
      
        expect(port.portName).toEqual('Dover');
    });

    it('can add a ship', () => {
        const port = new Port('Dover');
        const ship = jest.fn();

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });

    it('can remove a ship', () => {
        const port = new Port('Dover');
        const titanic = jest.fn();
        const queenMary = jest.fn();

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);
    });
});


