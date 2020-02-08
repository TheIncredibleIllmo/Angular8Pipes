import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hide'
})
export class HidePipe implements PipeTransform {

  transform(password: string, hide:boolean = true): string {
    return hide ? this.getHiddenPassword(password.length) : password;
  }

  private getHiddenPassword(passwordLength: number) : string {
    let output:string = "";  
    for (let index = 0; index < passwordLength; index++) {
      output += "*";
   }

   return output;
  }  

}

