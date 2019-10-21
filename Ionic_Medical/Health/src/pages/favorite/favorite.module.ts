import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritePage } from './favorite';
import { PipeModule } from '../../app/pipes/Pipe.module';

@NgModule({
  declarations: [
    FavoritePage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritePage),
    PipeModule
  ],
})
export class FavoritePageModule {}
