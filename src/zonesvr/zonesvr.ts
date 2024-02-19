import * as dogsvr from 'dogsvr/main_thread';
import { TsrpcCL } from 'dogsvr-cl-tsrpc';

dogsvr.setLogLevel(dogsvr.LOG_LEVEL_TRACE);

const connLayer: TsrpcCL = new TsrpcCL(3000);
connLayer.setAuthFunc(async (msg: dogsvr.Msg) => {
    return true;
});

const mainThreadInfo: dogsvr.MainThreadInfo =
{
    workerThreadRunFile: "./zonesvr_logic.js",
    workerThreadNum: 2,
    connLayer: connLayer,
}
dogsvr.startServer(mainThreadInfo);
