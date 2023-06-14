import { Controller, Post, Body } from '@nestjs/common';
import { Gpt3Service } from './gpt3.service';
import { LangchainService } from './langchain.service';

@Controller('chat')
export class ChatController {
  constructor(
    private gpt3Service: Gpt3Service,
    private langchainService: LangchainService,
  ) {}

  @Post()
  async generateChatResponse(
    @Body() userInput: { message: string },
  ): Promise<string> {
    const prompt =
      userInput.message + ' ' + this.langchainService.getDataAsString();
    return this.gpt3Service.generateText(prompt);
  }
}
