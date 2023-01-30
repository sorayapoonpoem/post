import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like-box',
  templateUrl: 'like.component.html',
  styleUrls: [ './like.component.css' ]
})
export class LikeComponent  {
  @Input() numberOfLikes : number;
  
  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  likeButtonClick() {
    this.numberOfLikes++;
    this.change.emit(this.numberOfLikes);
  }

  dislikeButtonClick() {
    this.numberOfLikes--;
    this.change.emit(this.numberOfLikes);
  }
}
