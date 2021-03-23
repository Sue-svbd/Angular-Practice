import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Post, User } from './interfaces';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Service {
  url = 'https://jsonplaceholder.typicode.com';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users/1/todos`);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts`);
  }
  getPost(id: number): Observable<Post> {
    const url = `${this.url}/posts/${id}`;
    return this.http.get<Post>(url).pipe(catchError(this.handleError));
  }

  getComments(id: number): Observable<Comment[]> {
    const url = `${this.url}/posts/${id}/comments`;
    return this.http.get<Comment[]>(url).pipe(catchError(this.handleError));
  }

  updatePostTitle(post: Post): Observable<Post> {
    const url = `${this.url}/posts/${post.id}`;
    return this.http
      .patch<Post>(url, post, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    return throwError(error.message);
  }
}
