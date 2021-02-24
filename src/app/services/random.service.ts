import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class RandomService {
  public getUid(): string {
    return Math.floor((1 + Math.random()) * 0x10000).toString();
  }

  public getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public getRandomArbitrary(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  public encodeData(data: string): string {
    return btoa(data);
  }
}
