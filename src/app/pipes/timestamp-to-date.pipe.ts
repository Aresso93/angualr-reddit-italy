import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampToDate'
})
export class TimestampToDatePipe implements PipeTransform {

  //questa funzione prende un numero e lo trasforma in una stringa. Lo usiamo per modificare il numero in millisecondi e trasformarlo in una data sensata
  transform(value: number, hasTime:boolean = true): string {
    const millisecond = value * 1000 //perché Reddit ce li dà in secondi e a noi serve in millisecondi
    const date = new Date(millisecond);
    let dateString = date.getDate()
            + '/'
            + (date.getMonth()+1)
            +'/'
            + date.getFullYear()

    if (hasTime) {
      dateString += ' ore:' + ' '
      + date.getHours()
      + ':'
      + (date.getMinutes().toString().length > 1 ? date.getMinutes() : ('0' + date.getMinutes()))
    }

    return dateString
  }

}
