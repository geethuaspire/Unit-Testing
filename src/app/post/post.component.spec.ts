import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { PostComponent } from './post.component';
import { PostService } from './post.service';
import { mockPOSTS } from '../mock/post.mock';
import { HttpClientModule } from '@angular/common/http';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  //let POSTS: Post[];
  let service:PostService;
  let mockposts = mockPOSTS;
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [
         PostComponent 
        ],
      imports:[
        HttpClientTestingModule,
        HttpClientModule,
      ],
      providers:[
        PostService,
      ]
      
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete the selected post from the post',()=>{
     //  service.deletePost.and.returnValue(of(true))
       component.posts = mockPOSTS;
       
       component.delete(mockPOSTS[1]);
       expect(component.posts.length).toBe(2);
  });
  // it('should call thedelete method in post service',fakeAsync(()=>{
  //   let spy = spyOn(service,'deletePost').and.returnValue(of(mockposts))
  //   component.delete(mockposts[1]);
  //   tick();
  //   expect(spy).toHaveBeenCalled();
  // }));
  


  it('unit test for subscribe method',fakeAsync(()=>{
    let spy = spyOn(service,'getPosts').and.returnValue(of(mockposts));
    component.getPosts();
    tick();
    expect(spy).toHaveBeenCalled();
  }));
  

  it('unit test for subscribe method',fakeAsync(()=>{
    let spy = spyOn(service,'deletePost').and.returnValue(of(mockposts));
    component.delete(mockposts[1]);
    tick();
    expect(spy).toHaveBeenCalled();
  }));

  it('should delete the actual selected posts in posts ',()=>{
      //service.deletePost.and.returnValue(of(true));
      component.posts = mockposts;
      component.delete(mockposts[1]);
      for(let post of mockposts){
        expect(post).not.toEqual(mockposts[1]);
      }
  })
  
  

});
