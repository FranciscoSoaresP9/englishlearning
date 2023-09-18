import { NgModule } from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { MainPageComponent } from './main-page.component';
import { QuestionnaireModule } from '../questionnaire/questionnaire.module';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  imports: [QuestionnaireModule, NzSelectModule, NzGridModule],
  declarations: [MainPageComponent],
  exports: [MainPageComponent]
})
export class MainPageModule { }
