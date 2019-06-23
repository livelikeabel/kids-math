import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CardHoleBoardComponent } from "./card-hole-board/card-hole-board.component";
import { CardComponent } from "./card-board/card/card.component";
import { CardHoleComponent } from "./card-hole-board/card-hole/card-hole.component";
import { CardBoardComponent } from "./card-board/card-board.component";
import { Level2Component } from "./level2/level2.component";
import { Level1Component } from "./level1/level1.component";
import { CardHoleBoardLevelTwoComponent } from "./card-hole-board-level-two/card-hole-board-level-two.component";
import { CardHoleLevelTwoComponent } from "./card-hole-board-level-two/card-hole-level-two/card-hole-level-two.component";
import { Level3Component } from './level3/level3.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    CardHoleBoardComponent,
    CardComponent,
    CardHoleComponent,
    CardBoardComponent,
    Level2Component,
    Level1Component,
    CardHoleBoardLevelTwoComponent,
    CardHoleLevelTwoComponent,
    Level3Component,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragDropModule,
    RouterModule.forRoot([
      { path: "", component: MainComponent },
      { path: "level1", component: Level1Component },
      { path: "level2", component: Level2Component },
      { path: "level3", component: Level3Component }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
