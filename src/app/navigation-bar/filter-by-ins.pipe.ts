import { Pipe, PipeTransform } from '@angular/core';
import { Instructor } from '../models/Instructor';

@Pipe({
  name: 'filterByIns'
})
export class FilterByInsPipe implements PipeTransform {

  transform(items: Instructor[], searchText: string): Instructor[] {


    if (!items) {
      return [];
    }
    if (!searchText) {
      return [];
    }
    searchText = searchText.toLocaleLowerCase();
    
    return items.filter(instructor => {
      return instructor.fname.toLocaleLowerCase().includes(searchText) ;
      // ||      
    });


  }
}
