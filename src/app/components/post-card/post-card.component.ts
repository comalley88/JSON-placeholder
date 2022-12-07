import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { RoutesService } from 'src/app/services/routes.service';
import { Post, User } from '../../models';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  
  showComments: boolean = false;
  @Input()
  post!: Post;
  @Input()
  users!: User[] ;
  user!: User | undefined 

  findUser(post: Post) {
    this.user = this.users.find((user) => user.id === post.userId);
    return this.user;
  }

  constructor(private routesService : RoutesService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.users = changes['users'].currentValue
    this.findUser(this.post);
  }

  ngOnInit() {

  }

  onToggleComments() {
    this.showComments = !this.showComments;
  }

}

