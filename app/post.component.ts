import { Component, Input, Output, EventEmitter } from '@angular/core';

export class Post {
  title : string;
  content : string;
}

@Component({
  selector: 'post',
  templateUrl: 'post.component.html'
})
export class PostComponent  {
  @Input() title: string;
  @Input() content: string;
  postLikes : number = 0;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  onPostLikesUpdate = function(newNumberOfLikes) {
    this.postLikes = newNumberOfLikes;
  }

  onRemovePostClick = function() {
    this.change.emit(this);
  }
}
