import { Component, OnInit } from '@angular/core';
import { Sentece } from '../shared/sentence.model';
import { senteces } from '../mock/sentece-mock';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent{
  senteces: Sentece[] = senteces
  round: number = 0
  currentSentece: Sentece = senteces[this.round]
  answer: any
  tries: number = 3
  
  save() {
    if(this.tries == 0) {
      alert('Game over')
    }
    if(this.currentSentece.ptSentace == this.answer) {
      alert('Good job')
      this.nextSentece()
    }else {
      alert('Wrong answer')
      this.tries--
    }
    this.answer = ''
  }

  nextSentece() {
    this.round++
    this.currentSentece = senteces[this.round]
    if(this.currentSentece == null){
      alert("Finished")
    }
  }

  calculateProgress(){

    return (100 / this.senteces.length) * this.round
  }
}
