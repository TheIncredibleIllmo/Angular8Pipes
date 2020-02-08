import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalized'})
export class CapitalizedPipe implements PipeTransform {
    
    transform(value: string, capitalizeAll:boolean = true): string {
        let lowerCasedValue = value.toLowerCase();
        let names = lowerCasedValue.split(" ");

        for(let i in names) {
            if(capitalizeAll){
                names[i] = names[i][0].toUpperCase() + names[i].substr(1);
                console.log(names[i]);  
            }
            else{
                names[0] = names[0][0].toUpperCase() + names[0].substr(1);
            }          
        }
         return names.join(" ");
    }
}