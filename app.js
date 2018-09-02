const grpc = require('grpc');
const path = require('path');

const PROTO_PATH = path.resolve(__dirname, './protos/account.proto');
const accountProto = grpc.load(PROTO_PATH).account;


const { Account } = require('./models');

async function addAccount(call, callback) {
  let ret = await Account.create(call.request);
  callback(null, { code: 0, msg: 'OK', err: '' });
}

async function main() {
  const server = new grpc.Server();
  server.addService(accountProto.AccountOp.service, { addAccount });
  server.bind('0.0.0.0:3003', grpc.ServerCredentials.createInsecure());
  server.start();
};


main();