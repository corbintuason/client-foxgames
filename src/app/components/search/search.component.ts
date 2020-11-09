import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search = "";
  faSearch = faSearch

  
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    
  }

  searchGame(){
    console.log("sending??", this.search);
    this.searchService.sendSearchQuery(this.search);
    // this.productService.getProducts(this.search).subscribe(products => this.messengerService.sendMsg(product));

  }

}
