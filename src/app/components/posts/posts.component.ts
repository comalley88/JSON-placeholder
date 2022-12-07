import { Component, Input, OnInit } from '@angular/core';
import { RoutesService } from 'src/app/services/routes.service';
import {  ISubmitPost, Post, User } from '../../models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts!: Post[];
  users!: User[];

  constructor(private routesService: RoutesService) {}

  handleAddPost(submitPost: ISubmitPost) {
    this.routesService.addUser({name: submitPost.name, company: {name: submitPost.company}}).subscribe((res) => {
      res = {...res, id: submitPost.userId + 1}
      this.users.push({...res, id: submitPost.userId + 1})
      this.routesService.addPost({id: submitPost.id, userId: res.id, title: submitPost.title, body: submitPost.body}).subscribe((res) =>{
        this.posts.unshift({...res, id: submitPost.id + 1})
      } );
    } );    
  }
  ngOnInit() {
    this.routesService.getMessages().subscribe(res => this.posts = res);
    this.routesService.getUsers().subscribe(res => this.users = res);
  }
}