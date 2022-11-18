import { Component, OnInit } from '@angular/core';
import {Post } from '../models/post';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts:Post[]=[];

  constructor(private postservice:PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts(){
     this.postservice.getPosts().subscribe(posts=>{
      this.posts = posts;
     })
  }
  delete(post:Post){
       this.posts = this.posts.filter(p => p.id != post.id);
       this.postservice.deletePost(post).subscribe();
  }

}
