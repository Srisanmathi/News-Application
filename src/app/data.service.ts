import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  api_key = 'f42b50983bd5434bbb1a5fa3c2b2f9a1';
  constructor(public http:HttpClient) { }
  getUsers()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getUser(userId)
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId)
  }
  getPosts()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
   }
 
 
   initArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
   }
 
   getArticlesByID(source: String){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
   }
}
