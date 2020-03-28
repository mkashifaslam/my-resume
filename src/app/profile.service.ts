import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './profile';
import { environment } from '../environments/environment';

const API_BASE_URL = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  getProfile(): Observable<Profile> {
    return this.httpClient.get<Profile>(`${API_BASE_URL}/profile`);
  }
}
