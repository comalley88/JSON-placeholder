import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})

export class AddCommentComponent implements OnInit {
  @ViewChild(FormGroupDirective) 
  formGroupDirective!: FormGroupDirective;
  @Input()
  showMe!: boolean
  @Input()
  post!: Post;
  @Output() OnAddComment = new EventEmitter();
  addCommentForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    body: ['', Validators.required],
  });
 
  constructor(private fb: FormBuilder) {}

  
onSubmit() {
  const formData = {...this.addCommentForm.value, postId: this.post.id}

  this.OnAddComment.emit(formData);
  this.formGroupDirective.resetForm();
 
}

ngOnInit() { 
  
}
}
