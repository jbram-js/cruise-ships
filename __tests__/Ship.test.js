/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('with ports and an itinerary', () => {
  let ship;
  let dover;
  let calais;
  let itinerary;

  beforeEach(() => {
    dover = new Port('Dover');
    calais = new Port('Calais');
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);
  });

    it("can be instantiated", () => {

    expect(ship).toBeInstanceOf(Object);
  });

    it('has a starting port', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
      
        expect(ship.currentPort).toBe(port);
      });
    
      it('can set sail', () => {
      
        ship.setSail();
      
        expect(ship.currentPort).toBeFalsy();
        expect(dover.ships).not.toContain(ship);
      });

    it('gets added to port on instantiation', () => {

      expect(dover.ships).toContain(ship);

    });
    
      it('can dock at a different port', () => {
      
        ship.setSail();
        ship.dock();
      
        expect(ship.currentPort).toBe(calais);
        expect(calais.ships).toContain(ship);
      });

      it('can\'t sail further than its itinerary', () => {
      
        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });
});