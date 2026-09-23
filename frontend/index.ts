import { defineCoinModule } from '../../../src/coin-modules/types'

export default defineCoinModule({
  id: 'peercoin', name: 'Peercoin', ticker: 'PPC',
  networkId: 'peercoin-mainnet', supportsMemo: false, satsPerCoin: 1000000,
  utxoReadProfile: 'electrum',
  cryptoParams: {
    p2pkhPrefix: 55, p2shPrefix: 117, wifPrefix: 183,
    derivationPath: "m/44'/6'/0'/0/0", addressType: 'p2pkh', txVersion: 3,
    bech32Hrp: 'pc',
  },
})
