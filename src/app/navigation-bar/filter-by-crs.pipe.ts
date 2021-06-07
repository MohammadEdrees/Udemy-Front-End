import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './../models/Course';

@Pipe({
  name: 'filterByCrs'
})
export class FilterByCrsPipe implements PipeTransform {

  transform(items: Course[], searchText: string): Course[] {


    if (!items) {
      return [];
    }
    if (!searchText) {
      return [];
    }
    searchText = searchText.toLocaleLowerCase();
    
    return items.filter(crs => {
      return crs.title.toLocaleLowerCase().includes(searchText) ;
      // ||      
    });

  }

}
