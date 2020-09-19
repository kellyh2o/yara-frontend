import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReflectionResponse, ReflectionType } from './reflection-response.model'; 
import { Guid } from 'guid-typescript';

const BASE_URL = 'http://localhost:3000/api';
const REFLECTIONS_URL = `${BASE_URL}/reflections`;

const header = (token: string) => ({
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
});

@Injectable({
  providedIn: 'root'
})
export class ReflectionService {
  constructor(private http: HttpClient) { }

  getReflections(token: string): Observable<ReflectionResponse[]> {
    return this.http.get<ReflectionResponse[]>(REFLECTIONS_URL, {
      headers: header(token)
    });
  }

  getReflection(token: string, reflectionId: Guid): Observable<ReflectionResponse[]> {
    return this.http.get<ReflectionResponse[]>(`${REFLECTIONS_URL}/${reflectionId}`, {
      headers: header(token)
    });
  }

  createReflection(token: string, title: string, text: string, type: ReflectionType): Observable<ReflectionResponse> {
    return this.http.post<ReflectionResponse>(REFLECTIONS_URL, {
      headers: header(token),
      title,
      text,
      type
    });
  }
}
