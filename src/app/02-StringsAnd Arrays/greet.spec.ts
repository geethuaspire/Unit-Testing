import { greet } from './greet';
describe('greet',()=>{
    it('should include the name in the message',()=>{
       //const result = greet('mosh');
       //expect(result).toBe('Welcome mosh');

       //expect((greet('mosh'))).toBe('Welcomemosh');
       expect((greet('mosh'))).toContain('mosh');
    })
})