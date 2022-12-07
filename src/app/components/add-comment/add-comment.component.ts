import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})

export class AddCommentComponent implements OnInit {
  @Input()
  showMe!: boolean
  @Input()
  post!: Post;
  @Output() OnAddComment = new EventEmitter();
  email!: string;
  name!: string;
  body!: string;
 
  
onSubmit() {
  const formData = {
  postId: this.post.id,
  name: this.name,
  email: this.email,
  body: this.body,
  }

  this.OnAddComment.emit(formData);
  (this.name= ""), (this.email=""), (this.body="")
}

ngOnInit() { 
  
}
}
