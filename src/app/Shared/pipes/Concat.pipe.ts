import { Pipe , PipeTransform } from "@angular/core";

@Pipe({
  name: "appConcat",
})
export class ConcatPipe implements PipeTransform {
  transform(str1: string , str2: string): string {
    if (str1 === '') return;
    return `${str1} ${str2}`;
  }
}
