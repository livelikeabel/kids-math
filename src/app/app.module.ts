import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CardHoleBoardComponent } from "./card-hole-board/card-hole-board.component";
import { CardComponent } from "./card-board/card/card.component";
import { CardHoleComponent } from "./card-hole-board/card-hole/card-hole.component";
import { CardBoardComponent } from "./card-board/card-board.component";

@NgModule({
  declarations: [
    AppComponent,
    CardHoleBoardComponent,
    CardComponent,
    CardHoleComponent,
    CardBoardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
