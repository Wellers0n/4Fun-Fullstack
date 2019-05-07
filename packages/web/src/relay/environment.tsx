import {Environment, Network, Store, RecordSource} from 'relay-runtime'
import fetchQuery from './fetchQuery'

const network = Network.create(fetchQuery)

const source = new RecordSource()
const store = new Store(source)

const env = new Environment({
    network,
    store
})

export default env