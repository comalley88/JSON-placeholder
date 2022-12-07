import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IComment, IMessage, Post, User } from '../models';

@Injectable({
  providedIn: 'root',
})


export class RoutesService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  getMessages(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(
      this.apiUrl + '/posts'
    );
  }
  addPost(data: any): Observable<Post> {
    return this.http.post<Post>(this.apiUrl + '/posts', data);
  }
  addUser(data: any): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/users', data);
  }
  addComment(data: IComment): Observable<IComment> {
    return this.http.post<IComment>(this.apiUrl + `/posts/${data.postId}/comments`, data);
  }
  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.apiUrl + '/users');
  }
  getComments(id: number): Observable<Array<IComment>> {
    return this.http.get<Array<IComment>>(
      this.apiUrl + `/posts/${id}/comments`
    );
  }

  constructor(private http: HttpClient) {}
}