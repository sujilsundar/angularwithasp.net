import { Pipe, PipeTransform } from '@angular/core';
import { BookDetail } from './shared/book-detail.model';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(list:BookDetail[],searchValue:string): BookDetail[] {
    if(!list || !searchValue){
      return list;
    }
    return list.filter(BookDetail=>
      BookDetail.bookTitle.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      BookDetail.bookCategory.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      BookDetail.authorName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      BookDetail.isbnNumber.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      BookDetail.publisherName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

}
