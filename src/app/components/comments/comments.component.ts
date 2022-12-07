import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { RoutesService } from 'src/app/services/routes.service';
import { IComment, Post } from '../../models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  posts!: Post[]
  @Input()
  post!: Post;
  @Input()
  showMe!: boolean;
  toggleAddComment: boolean = false;
  comments: IComment[] = [];
  subscription!: Subscription;
  
  constructor(
    private routesService: RoutesService,
    ) {
    }

  showAddComment() {
    this.toggleAddComment = !this.toggleAddComment
  }

  handleAddComment(data: any) {
    console.log("data is", data)
    this.routesService.addComment(data).subscribe((res) => {
      this.comments.push(res)
    } );
  }

  ngOnInit() {
    this.routesService.getComments(this.post.id).subscribe((data) => {
      this.comments = data;
    });
    this.routesService.getMessages().subscribe((res) => {
      (this.posts = res);
       });
  }
}
