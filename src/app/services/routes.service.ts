import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { IComment, IMessage, Post, User } from '../models';

@Injectable({
  providedIn: 'root',
})


export class RoutesService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getMessages(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.apiUrl + '/posts').pipe(
      catchError(this.handleError)
    );;
  }
  addPost(data: any): Observable<Post> {
    return this.http.post<Post>(this.apiUrl + '/posts', data).pipe(
      catchError(this.handleError)
    );;
  }
  addUser(data: any): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/users', data).pipe(
      catchError(this.handleError)
    );;
  }
  addComment(data: IComment): Observable<IComment> {
    return this.http.post<IComment>(this.apiUrl + `/posts/${data.postId}/comments`, data).pipe(
      catchError(this.handleError)
    );;
  }
  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.apiUrl + '/users').pipe(
      catchError(this.handleError)
    );;
  }
  getComments(id: number): Observable<Array<IComment>> {
    return this.http.get<Array<IComment>>(
      this.apiUrl + `/posts/${id}/comments`
    ).pipe(
      catchError(this.handleError)
    );;
  }

  constructor(private http: HttpClient) {}
}