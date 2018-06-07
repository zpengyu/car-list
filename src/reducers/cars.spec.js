import reducer, * as cars from './cars'

describe('reducers', () => {
  describe('cars', () => {
    let state

    describe('when cars are received', () => {

      beforeEach(() => {
        state = reducer({}, {
          type: 'RECEIVE_CARS',
          cars: [
            {
              id: 1,
              reg: 'ABC123',
              name: 'BMW',
              color: '#666666',
              year: 2018
            },
            {
              id: 2,
              reg: 'XYZ999',
              name: 'VOLVO',
              color: '#888888',
              year: 2019
            }
          ]
        })
      })

      it('should contain cars from the action', () => {
        expect(cars.getCar(state, 1)).toEqual({
          id: 1,
          reg: 'ABC123',
          name: 'BMW',
          color: '#666666',
          year: 2018
        })
        expect(cars.getCar(state, 2)).toEqual({
          id: 2,
          reg: 'XYZ999',
          name: 'VOLVO',
          color: '#888888',
          year: 2019
        })
      })

      it ('should contain no other cars', () => {
        expect(cars.getCar(state, 3)).toEqual(undefined)
      })

      it('should list all of the cars', () => {
        expect(cars.getAllCars(state)).toEqual([
          {
            id: 1,
            reg: 'ABC123',
            name: 'BMW',
            color: '#666666',
            year: 2018
          }, {
            id: 2,
            reg: 'XYZ999',
            name: 'VOLVO',
            color: '#888888',
            year: 2019
          }
        ])
      })
    })
  })
})
