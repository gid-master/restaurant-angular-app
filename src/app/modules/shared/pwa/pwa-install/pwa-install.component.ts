import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-pwa-install",
  templateUrl: "./pwa-install.component.html",
  styleUrls: ["./pwa-install.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PwaInstallComponent {
  @Input() installed: boolean;
  @Input() developmentMode: boolean;
  @Input() ios: boolean;
  @Output() installClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
}
