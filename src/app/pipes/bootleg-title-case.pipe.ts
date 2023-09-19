import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bootlegTitleCase'
})
export class BootlegTitleCasePipe implements PipeTransform {

  transform(value: string): string {
    let charArray = value.split(' ')
    charArray.forEach((word, index) =>{
    const firstLetter = word.charAt(0).toUpperCase();
    const rest = word.slice(1).toLowerCase();
    charArray[index] = firstLetter + rest
   })
   return charArray.join(' ')
  }

}
