import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReflectionResponse, ReflectionType } from './reflection-response.model'; 

const BASE_URL = 'http://localhost:3000/api';
const REFLECTIONS_URL = `${BASE_URL}/reflections`;

@Injectable({
  providedIn: 'root'
})
export class ReflectionsService {
  constructor(private http: HttpClient) { }

  getReflections(): Observable<ReflectionResponse[]> {
    return this.http.get<ReflectionResponse[]>(REFLECTIONS_URL);
  }

  getReflection(reflectionId: string): Observable<ReflectionResponse> {
    return this.http.get<ReflectionResponse>(`${REFLECTIONS_URL}/${reflectionId}`);
  }

  createReflection(title: string, text: string, type: ReflectionType): Observable<ReflectionResponse> {
    return this.http.post<ReflectionResponse>(REFLECTIONS_URL, {
      title,
      text,
      type
    });
  }
}
