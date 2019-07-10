import { Environment, Network, Store, RecordSource } from "relay-runtime";
import { installRelayDevTools } from "relay-devtools";
import cacheHandler from './cacheHandler';
import RelayNetworkLogger from 'relay-runtime/lib/RelayNetworkLogger';

if (__DEV__) {
  installRelayDevTools();
}

const network = Network.create(
  __DEV__ ? RelayNetworkLogger.wrapFetch(cacheHandler) : cacheHandler
);

const source = new RecordSource();
const store = new Store(source);

const env = new Environment({
  network,
  store
});

export default env;
