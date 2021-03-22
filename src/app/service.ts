import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Post, User } from './interfaces';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Service {
  url = 'https://jsonplaceholder.typicode.com';

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

  handleError(error: any) {
    return throwError(error.message);
  }
}
