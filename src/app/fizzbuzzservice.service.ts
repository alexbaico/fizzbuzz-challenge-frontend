import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FizzbuzzserviceService {

  //host is hardcoded here, this should be setted by an environment variable or other way
  private apiUrl = 'http://localhost:8080/intraway/api/fizzbuzz/{min}/{max}';

  constructor(private http: HttpClient) { }

  fetchData(min: number, max: number): Observable<any> {
    return this.http.get<any>(this.apiUrl.replace("{min}", min.toString()).replace("{max}", max.toString()));
  }
}
