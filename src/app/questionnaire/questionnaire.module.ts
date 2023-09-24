import { NgModule } from '@angular/core';
import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { ProgressComponent } from './progress/progress.component';
import { NzGridModule} from 'ng-zorro-antd/grid'
import { TriesComponent } from './tries/tries.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzImageModule } from 'ng-zorro-antd/image';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [NzStepsModule, NzGridModule, NzInputModule, NzButtonModule, NzProgressModule, NzImageModule,  FormsModule],
  declarations: [
    QuestionnaireComponent,
    ProgressComponent,
    TriesComponent
  ],
  exports: [QuestionnaireComponent,
    ProgressComponent,
    TriesComponent]
})
export class QuestionnaireModule { }
