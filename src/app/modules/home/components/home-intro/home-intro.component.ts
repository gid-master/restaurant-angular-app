import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IUser } from "src/app/store/user/interfaces/user.interface";

@Component({
  selector: "app-home-intro",
  templateUrl: "./home-intro.component.html",
  styleUrls: ["./home-intro.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeIntroComponent {
  @Input() user: IUser;
}
