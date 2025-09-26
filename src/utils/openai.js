import OpenAI from 'openai';
import { OPEN_AI_GPT_Key } from "./constants";

const openai = new OpenAI({
    apiKey: OPEN_AI_GPT_Key,
    dangerouslyAllowBrowser: true
});

export default openai; 