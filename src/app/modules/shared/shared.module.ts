import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DirectivesModule } from "src/app/directives/directives.module";

// layout
import { WrapperComponent } from "./layouts/wrapper/wrapper.component";
import { ContainerComponent } from "./layouts/container/container.component";
import { BlockComponent } from "./layouts/block/block.component";
import { ToolbarComponent } from "./layouts/toolbar/toolbar.component";

// buttons
import { ButtonBadgeComponent } from "./buttons/button-badge/button-badge.component";
import { ButtonCircleComponent } from "./buttons/button-circle/button-circle.component";
import { ButtonIconComponent } from "./buttons/button-icon/button-icon.component";
import { ButtonIncrementComponent } from "./buttons/button-increment/button-increment.component";
import { ButtonStandardComponent } from "./buttons/button-standard/button-standard.component";

// modal
import { ModalBackdropComponent } from "./modals/modal-backdrop/modal-backdrop.component";
import { ModalBottomSheetComponent } from "./modals/modal-bottom-sheet/modal-bottom-sheet.component";
import { ModalSnackbarComponent } from "./modals/modal-snackbar/modal-snackbar.component";
import { ModalSuccessComponent } from "./modals/modal-success/modal-success.component";

// grids and cards
import { GridListComponent } from "./grids/grid-list/grid-list.component";
import { GridRowComponent } from "./grids/grid-row/grid-row.component";
import { CardCoverComponent } from "./grids/cards/card-cover/card-cover.component";
import { CardDetailsComponent } from "./grids/cards/card-details/card-details.component";
import { CardHorizontalComponent } from "./grids/cards/card-horizontal/card-horizontal.component";
import { CardVerticalComponent } from "./grids/cards/card-vertical/card-vertical.component";

// pwa controller
import { PwaControllerComponent } from "./pwa/pwa-controller/pwa-controller.component";
import { PwaInstallComponent } from "./pwa/pwa-install/pwa-install.component";
import { PwaRefreshComponent } from "./pwa/pwa-refresh/pwa-refresh.component";

@NgModule({
  declarations: [
    WrapperComponent,
    ContainerComponent,
    BlockComponent,
    ToolbarComponent,
    ButtonBadgeComponent,
    ButtonCircleComponent,
    ButtonIconComponent,
    ButtonIncrementComponent,
    ButtonStandardComponent,
    ModalBackdropComponent,
    ModalBottomSheetComponent,
    ModalSnackbarComponent,
    ModalSuccessComponent,
    GridListComponent,
    GridRowComponent,
    CardCoverComponent,
    CardDetailsComponent,
    CardHorizontalComponent,
    CardVerticalComponent,
    PwaControllerComponent,
    PwaInstallComponent,
    PwaRefreshComponent,
  ],
  imports: [CommonModule, DirectivesModule],
  exports: [
    WrapperComponent,
    ContainerComponent,
    BlockComponent,
    ToolbarComponent,
    ButtonBadgeComponent,
    ButtonCircleComponent,
    ButtonIconComponent,
    ButtonIncrementComponent,
    ButtonStandardComponent,
    ModalBackdropComponent,
    ModalBottomSheetComponent,
    ModalSnackbarComponent,
    ModalSuccessComponent,
    GridListComponent,
    GridRowComponent,
    CardCoverComponent,
    CardDetailsComponent,
    CardHorizontalComponent,
    CardVerticalComponent,
    PwaControllerComponent,
  ],
})
export class SharedModule {}
