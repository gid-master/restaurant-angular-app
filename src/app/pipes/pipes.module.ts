import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CapitalCasePipe } from "./capital-case.pipe";

@NgModule({
  imports: [CommonModule],
  exports: [CapitalCasePipe],
  declarations: [CapitalCasePipe],
})
export class PipesModule {}
