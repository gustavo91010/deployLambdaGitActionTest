import { log } from './log.mjs';

export const handler = async (event) => {
  log( JSON.stringify(event));

  return {
    statusCode: 200,
    body:`<html><body> Dados de requisicao ${ JSON.stringify(event) }</body></html>`,
    headers:{
      "content-type":"text/html"
    }

  }
};

