'use strict';

const JRPCClient = require('@desuuuu/jrpc-client');
const TCPTransport = require('@desuuuu/jrpc-transport-tcp');

(async () => {
  let client = new JRPCClient({
    transport: new TCPTransport({
      host: 'example.com',
      port: 1234
    })
  });

  try {
    let result = await client.call('method', [ 'params' ]);

    console.log(result); // The call's result

    //=> ...
  } catch (error) {
    console.error(error); // A transport error or an RPC error
  }

  await client.destroy();
})();
