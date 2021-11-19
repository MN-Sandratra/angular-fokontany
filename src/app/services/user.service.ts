import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/assets/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:3030";

  constructor(private http:HttpClient) { }

  getAllUser():Observable<any>{
    return this.http.get(this.baseUrl+"/api/users");
  }

  getAllUserById(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"/api/users/"+id);
  }

  createUser(user:User):Observable<any>{
    return this.http.post(this.baseUrl+"/api/users/",user);
  }

  updateUser(user:any):Observable<any>{
    return this.http.put(this.baseUrl+"/api/users/"+user._id,user);
  }

  deleteUser(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"/api/users/"+id);
  }
}
