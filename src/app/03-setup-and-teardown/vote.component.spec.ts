
import { VoteComponent } from './vote.component';

describe('VoteComponent',()=>{

     //Arrange     //ie, we are creating instance of the component
     let component: VoteComponent;
      
  beforeEach(()=>{
      //set up
    component = new VoteComponent();

    });

    afterEach(()=>{
        //tear down
    })
   // beforeAll();
   // afterAll();

    it('should increment totalvotes when upvoted',()=>{

        // //Arrange     //ie, we are creating instance of the component
        //  let component = new VoteComponent();

         //Act         //ie, calling a method or a function
         component.upVote();

         //Assert     
         expect(component.totalVotes).toBe(1);
    });
    it('should decrement total votes when downvotes',()=>{

        //  let component = new VoteComponent();

        component.downVote();

        expect(component.totalVotes).toBe(-1);
        

    });
});