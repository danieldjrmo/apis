import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { forumPost } from './app';



@Injectable({
  providedIn: 'root'
})
export class ForumsServices {

  private readonly apiUrl = environment.api
  private httpVariable = inject(HttpClient)
  private jsonHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  getForums(): Observable<forumPost[]> {
    return this.httpVariable.get<forumPost[]>(`${this.apiUrl}`, {
      headers: this.jsonHeaders
    }).pipe(
      map((raw) => raw.reverse())
    );
  }

  addForum(forum: forumPost): Observable<forumPost> {
    return this.httpVariable.post<forumPost>(`${this.apiUrl}`,forum, {
      headers: this.jsonHeaders
    })
  }


}
