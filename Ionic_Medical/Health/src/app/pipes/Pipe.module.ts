import { NgModule } from '@angular/core';
import { SafePipe  } from './SafePipe';
import { ArrayFilterPipe  } from './array-filter.pipe';

@NgModule({
  declarations: [  SafePipe,ArrayFilterPipe], 
  imports: [  ],
  exports: [SafePipe,ArrayFilterPipe]
})
export class PipeModule {}