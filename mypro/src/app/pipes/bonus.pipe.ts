import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bonus'
})
export class BonusPipe implements PipeTransform {

  transform(s, g, a) {
    let x;
    let y;
    if(g=="male")
    {
      x = s * 20 / 100;
      
    }
    if(g=="female")
    {
      x = s * 30 / 100;
      
    }
    if(a<=25)
    {
      y = s*10/100;
      x  = x+y;
    }
    return x;


  }

}
