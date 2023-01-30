import { Component, EventEmitter, Output } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Post} from './post.component';

@Component({
  selector: 'post-creation-form',
  templateUrl: './form.component.html',
  styleUrls: ['form.component.css'],
})
export class PostCreationFormComponent  {
  title : string;
  content : string;

  @Output()
  change: EventEmitter<object> = new EventEmitter<object>();

  onSubmit(f: NgForm) {
    let content = f.value.content;
    let title = f.value.title;
    let newPost = new Post();
    newPost.title = title;
    newPost.content = content;
    this.change.emit(newPost);
  }
}
