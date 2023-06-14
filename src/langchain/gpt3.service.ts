import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class Gpt3Service {
  private openaiEndpoint =
    'https://api.openai.com/v1/engines/davinci-codex/completions';
  private apiKey = 'YOUR_OPENAI_API_KEY';

  public async generateText(prompt: string): Promise<string> {
    try {
      const response = await axios.post(
        this.openaiEndpoint,
        {
          prompt,
          max_tokens: 100,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
        },
      );

      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('Error generating text with GPT-3:', error);
      throw error;
    }
  }
}
