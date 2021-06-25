import { Pipe, PipeTransform } from '@angular/core';
import { Topic } from './../models/Topic';

@Pipe({
  name: 'filterByTopic'
})
export class FilterByTopicPipe implements PipeTransform {

  transform(items: Topic[], searchText: string): Topic[] {


    if (!items) {
      return [];
    }
    if (!searchText) {
      return [];
    }
    searchText = searchText.toLocaleLowerCase();
    
    return items.filter(topic => {
      return topic.topName.toLocaleLowerCase().includes(searchText) ;     
    });


  }

}
