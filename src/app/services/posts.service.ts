import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  search(search): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/posts?q=${search}`);
  }
}
