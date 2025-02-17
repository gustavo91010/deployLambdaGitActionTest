import { log } from './log.mjs';

export const handler = async (event) => {
  log('log de execução! após o github actions'+ JSON.stringify(event))

  return {
    statusCode: 200,
    body: JSON.stringify(event),

  }
};

