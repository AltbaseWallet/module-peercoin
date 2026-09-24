# Altbase Peercoin module

Wallet metadata and native module registration for PPC. Keys and signatures stay local; all network reads and broadcasts use the Altbase backend. Transactions are tested with public fixtures, without sending user funds.

Public reads use the genesis-checked mainnet Electrum WebSocket servers listed in the [official Peercoin wallet](https://github.com/peercoin/peercoin_flutter/blob/main/lib/models/available_coins.dart), through the Altbase backend. This avoids the observed lag in the public Blockbook index. Peercoin amounts use six decimals; immature coinbase and coinstake outputs remain excluded from spending.
