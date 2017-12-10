import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';
@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {
  posts: any[];
  
  constructor(private service: PostService) {
    
  }

  ngOnInit() {
    this.service.getPost() 
      .subscribe(response => {
      this.posts = response.json();
  }, error => {
    alert('An unexpected error')
    console.log(error);
  });
}

createPost(input: HTMLInputElement) {
  let post = { title: input.value}
  this.service.createPost(post)
    .subscribe(response => {
      post['id'] = response.json();
      this.posts.splice(0,0,post);
    }, (error: AppError) => {
      if(error instanceof BadRequestError)
        alert('An unexpected error')
      console.log(error);
    })
}
deletePost(post) {
  this.service.deletePost(post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    }, 
    (error: AppError) => {
      if(error instanceof NotFoundError) {
        alert('The post has been already deleted');
      } 
      else {
        alert('An unexpected error occurred');
        console.log(error);
      }
    });
}
}
