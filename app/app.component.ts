import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Post} from './post.component';

@Component({
  selector: 'hello-world-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  posts : Post[];

  constructor() {
    this.posts = [{
      'title' : '',
      'content': ''
    }];
  }

  onPostCreated(post) {
    this.posts.push(post);
  }

  onRemovePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
  }
}
