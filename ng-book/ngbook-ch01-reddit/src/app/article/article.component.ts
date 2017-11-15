import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'nb-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {
    this.article = new Article(
      'Angular 5',
      'http://angular.io',
      10);
  }

  voteUp(): Boolean {
    this.article.voteUp();

    // 阻止事件的冒泡
    return false;
  }

  voteDown(): Boolean {
    this.article.voteDown();

    // 阻止事件的冒泡
    return false;
  }

  ngOnInit() {
  }

}
