import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import {  Post } from '../../../models';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  form!: FormGroup;
  @Input()
  posts!: Post[]; 
  @Output() OnAddPost = new EventEmitter();
  addPostForm = this.fb.group({
    title: ['', Validators.required],
    name: ['', Validators.required],
    body: ['', Validators.required],
    company:['', Validators.required],
  });
 id!: number
  
  

  constructor(private fb: FormBuilder) {}

  onSubmit() {

    const id = Math.max(...this.posts.map(post => post.id))
    const userId = Math.max(...this.posts.map(post => post.userId))
    const postData = {...this.addPostForm.value, id: id, userId: userId}
  
    this.OnAddPost.emit(postData);

  }


  ngOnInit() {
  }
 
}
