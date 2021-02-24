import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-menu-filter",
  templateUrl: "./menu-filter.component.html",
  styleUrls: ["./menu-filter.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuFilterComponent implements AfterViewInit {
  @Input() categories: string[];
  @Output() filterClicked: EventEmitter<string> = new EventEmitter<string>();

  // Using input setter concept, a different way to detect change of a prop and update content or call side effect function
  public categorySelected: string;
  @Input() set filterId(value: string) {
    this.categorySelected = value;
    this.scrollElementTo(value);
  }

  ngAfterViewInit(): void {
    this.scrollElementTo(this.categorySelected);
  }

  private scrollElementTo(id?: string): void {
    const target: HTMLElement = document.getElementById("filter");
    const element: HTMLElement = document.getElementById(id ? id : "all");
    const x: number = element ? element.offsetLeft - 25 : 0;

    // doesn't work on ios devices, works only for web
    target.scrollTo({ left: x, behavior: "smooth" });
  }
}
