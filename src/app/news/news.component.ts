import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  mArticles:Object;
  mSources:Object;
  constructor(private data:DataService) { }

  ngOnInit() {
    //load articles
  this.data.initArticles().subscribe(data => this.mArticles = data['articles']);
//load news sources
this.data.initSources().subscribe(data=> this.mSources = data['sources']);	
}


searchArticles(source){
console.log("selected source is: "+source);
this.data.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
}

}
