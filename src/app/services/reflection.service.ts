import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReflectionResponse, ReflectionType } from './reflection-response.model'; 
import { Guid } from 'guid-typescript';

const BASE_URL = 'http://localhost:3000/api';
const ReflectionResponse = `${BASE_URL}/reflections`;

@Injectable({
  providedIn: 'root'
})
export class ReflectionService {
  constructor(private http: HttpClient) { }

  getReflections(userId: string): Observable<ReflectionResponse[]> {
    return this.http.get<ReflectionResponse[]>(ReflectionResponse);
  }

  getReflection(userId: string, reflectionId: Guid): Observable<ReflectionResponse[]> {
    return this.http.get<ReflectionResponse[]>(`${ReflectionResponse}/${reflectionId}`);
  }

  createReflection(userId: string, title: string, text: string, type: ReflectionType): Observable<ReflectionResponse> {
    return this.http.post<ReflectionResponse>(ReflectionResponse, {
      title,
      text,
      type
    });
  }
}
