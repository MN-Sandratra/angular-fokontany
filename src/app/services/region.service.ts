import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private baseUrl = "http://localhost:3030";

  constructor(private http:HttpClient) { }

  getAllRegion():Observable<any>{
    return this.http.get(this.baseUrl+"/api/regions");
  }
}
