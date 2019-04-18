import {greeter} from '../server'

describe('func test', () => {
    it('should return an string with name: Hello, wellerson', () => {
      expect(greeter('wellerson')).toBe('Hello, wellerson');
    });
    it('should return an string with name: Hello, moreira', () => {
      expect(greeter('moreira')).toBe('Hello, moreira');
    });
})