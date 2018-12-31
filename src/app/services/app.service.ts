import { OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable()
export class AppService implements OnInit {

  protected url : string = 'https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts';

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) {}
  
  ngOnInit() {
  }

  getAll() {
    return this.http.get<any[]>(this.url).pipe(map(data => data));
  }

}