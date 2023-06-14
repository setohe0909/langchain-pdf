import { Module } from '@nestjs/common';
import { Gpt3Service } from './langchain/gpt3.service';
import { LangchainService } from './langchain/langchain.service';
import { ChatController } from './langchain/chat.controller';

@Module({
  imports: [],
  controllers: [ChatController],
  providers: [Gpt3Service, LangchainService],
})
export class AppModule {}
