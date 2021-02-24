import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalCase",
})
export class CapitalCasePipe implements PipeTransform {
  transform(value: string): string {
    const first: string = value.substr(0, 1).toUpperCase();
    return first + value.substr(1);
  }
}
