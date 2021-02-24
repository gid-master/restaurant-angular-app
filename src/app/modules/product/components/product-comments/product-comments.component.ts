import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-product-comments",
  templateUrl: "./product-comments.component.html",
  styleUrls: ["./product-comments.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCommentsComponent {
  @Input() comments: string;
  @Output() commentsChanged: EventEmitter<string> = new EventEmitter<string>();
}
