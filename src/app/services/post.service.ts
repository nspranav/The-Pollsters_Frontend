import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from "../interfaces/response";
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = ' https://lyh2uglde3.execute-api.us-east-1.amazonaws.com/default/pollsters';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
    return this.httpClient.get(this.url);
  }
  
  create(post){
    return this.httpClient.post<Response[]>(this.url, JSON.stringify(post));
  }
  
}