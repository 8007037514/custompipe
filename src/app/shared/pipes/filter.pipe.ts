import { Pipe, PipeTransform } from '@angular/core';
import { Iplayer } from '../models/player';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Iplayer[],serachInput:string ){
   if(!value){
    return []
   }
   if(!serachInput){
    return value
   };
   let filterArry = value.filter(e =>{
    return e.name.toLowerCase().startsWith(serachInput.toLowerCase())
   })
   return filterArry
  }

}
