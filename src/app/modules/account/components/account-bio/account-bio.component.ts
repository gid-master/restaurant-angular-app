import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { IUser } from "src/app/store/user/interfaces/user.interface";

@Component({
  selector: "app-account-bio",
  templateUrl: "./account-bio.component.html",
  styleUrls: ["./account-bio.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountBioComponent {
  @Input() user: IUser;
  @Output() logoutClicked: EventEmitter<string> = new EventEmitter<string>();
}
