import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'truncate',
    pure: true
})
export class TrancatePipe implements PipeTransform {
    transform(value: string, textSize: number) {
        console.log(textSize);
        return value.substring(textSize, 10) + '...';
    }
}