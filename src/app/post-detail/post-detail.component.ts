import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Post } from '../interfaces';
import { Service } from '../service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  @Input() post: Post;
  constructor(private httpService: Service) {}

  ngOnInit(): void {}

  save(): void {
    this.httpService.updatePostTitle(this.post);
    console.log('after', this.post.title);
  }
}
