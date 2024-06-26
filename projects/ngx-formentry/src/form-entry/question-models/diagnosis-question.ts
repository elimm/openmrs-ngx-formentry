import { QuestionBase } from './question-base';
import { AfeControlType } from '../../abstract-controls-extension/afe-control-type';
import { DiagnosisQuestionOptions } from './interfaces/diagnosis-question-options';

export class DiagnosisQuestion extends QuestionBase {
  rendering: string;
  options: any[];
  dataSource?: any;

  constructor(options: DiagnosisQuestionOptions) {
    super(options);
    this.renderingType = 'select';
    this.options = options.options;
    this.controlType = AfeControlType.AfeFormControl;
    this.dataSource = options.dataSource || '';
  }
}
