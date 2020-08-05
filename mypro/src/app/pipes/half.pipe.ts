import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'half'
})
export class HalfPipe implements PipeTransform {

  transform(x) {
      return x/4;
  }

}
