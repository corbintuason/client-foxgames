import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  subject = new Subject();

  constructor() { }

  sendSearchQuery(search_query){
    this.subject.next(search_query);
  }

  getSearchQuery(){
    return this.subject.asObservable();
  }
}
