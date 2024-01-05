import { create } from 'ipfs-http-client';

export function createIpfsClient() {
    const projectId = "fd151fa0685f4158b5d3db9bba6fbfe6"; //process.env.API_KEY;
    const projectSecret = "vs+9jfoUv2CJuETH8y8a0NHp7kNt5fmxRhV7rM7ElD8x86uoCpBbRA"; //process.env.API_SECRET;
    const auth = 'Basic ' + btoa(projectId + ':' + projectSecret);
    const remoteClient = create({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
        apiPath: '/api/v0/pin',
        headers: {
          authorization: auth,
        }
      });

    return remoteClient;
}