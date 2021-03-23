import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { Post, Comment } from '../interfaces';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss'],
})
export class PostCommentComponent implements OnInit {
  post: Post;
  comments: Comment[];
  constructor(private httpService: Service) {}

  ngOnInit(): void {
    this.httpService.getComments(this.post.id);
  }
}
