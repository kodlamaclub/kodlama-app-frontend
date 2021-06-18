import {Pipe, PipeTransform} from '@angular/core';
import {DaysEnum} from '../interfaces';

// noinspection SpellCheckingInspection
@Pipe({
  name: 'daysPipe'
})
export class DaysPipe implements PipeTransform {

  transform(value: number): string {

    if (value === DaysEnum.MONDAY) {
      return 'Pazartesi';
    }

    if (value === DaysEnum.TUESDAY) {
      return 'Salı';
    }

    if (value === DaysEnum.WEDNESDAY) {
      return 'Çarşamba';
    }

    if (value === DaysEnum.THURSDAY) {
      return 'Perşembe';
    }

    if (value === DaysEnum.FRIDAY) {
      return 'Cuma';
    }

    if (value === DaysEnum.SATURDAY) {
      return 'Cumartesi';
    }

    if (value === DaysEnum.SUNDAY) {
      return 'Pazar';
    }

    return 'Bilinmeyen';
  }

}
