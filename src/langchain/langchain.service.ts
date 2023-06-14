import { Injectable } from '@nestjs/common';
import { LangchainModel } from 'langchain';

@Injectable()
export class LangchainService {
  private langchainModel: LangchainModel;

  constructor() {
    this.langchainModel = new LangchainModel();
  }

  public addData(data: string[]): void {
    this.langchainModel.addData(data);
  }

  public getDataAsString(): string {
    return this.langchainModel.getDataAsString();
  }
}
