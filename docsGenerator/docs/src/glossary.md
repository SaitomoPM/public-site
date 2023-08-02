---
prev: false
next: false
---

# Glossary

Many novel terms and acronyms are used by the Arweave ecosystem as well as some new ones introduced in this paper. The list below is intended to serve as a non-exhaustive reference of those terms:

- **Arweave Name System (ArNS)**: a decentralized and censorship-resistant naming system enabled by AR.IO gateways which connects friendly names to permaweb applications, pages, and data.

- **Arweave Name Token (ANT), “Name Token”**: a SmartWeave based token, that is connected to each registered ArNS Name. Each ANT gives the owner the ability to update the subdomains and Arweave transaction IDs used by the registered name as well as transfer ownership and other functions.

- **Arweave Network Standards (ANS)**: Drafts and finalized standards for data formats, tag formats, data protocols, custom gateway features and anything that is built on top the Arweave Network. Specific standards are denoted by an associated number, e.g., ANS-###.

- **Bundle, bundling**: an Arweave concept introduced in ANS-104 that allows for a way of writing multiple independent data transactions into one top level transaction. Bundled transactions contain multiple independent transactions, called data items, wrapped into one larger transaction. This offers two major network benefits:

    - A scaling solution for increasing the throughput of uploads to the Arweave network,

    - Allows delegation of payment for an upload to a third party, while maintaining the identity and signature of the person who created the upload, without them needing to have a wallet with funds.

- **Bundler**: a third party service that bundles data files on a user’s behalf.

- **Chunk**: A chunk is a unit of data that is stored on the Arweave network. It represents a piece of a larger file that has been split into smaller, manageable segments for efficient storage and retrieval.

- **Decentralized**, decentralization, etc: a nonbinary, many axis scale enabling a system or platform to be: permissionless, trustless, verifiable, transparent, open-source, composable, resilient, and censorship resistant. Ultimately, something that is decentralized is not prone to single points of failure or influence.

- **Gateway**: a node operating on the Arweave network that provides services for reading from, writing to, and indexing the data stored on the permaweb. Sometimes referred to as “permaweb nodes”.

- **Indexing**: The act of organizing transaction data tags into queryable databases.

- **Layer 1 (L1)**: refers to the transactions that occur on the base protocol layer of Arweave.

- **Layer 2 (L2) - Bundles**: Unlike other blockchain projects which consider Layer 2 to be the transactions that occur on side-chains and ultimately “settled up” with their base Layer 1 network, Arweave refers to Layer 2 transactions as the files and metadata contained within bundled transactions.

- **Layer 2 (L2) – Infrastructure**: Layer 2 may also refer to the technology / infrastructure stack built “above” a base layer. In this use, the AR.IO Network would be considered Layer 2 infrastructure to the base Arweave protocol.

- **Manifest (aka Path Manifest, Arweave Manifest)**: special “aggregate” files uploaded to Arweave that map user-definable sub-paths with other Arweave transaction IDs. This allows users to create logical groups of content, for example a directory of related files, or the files and assets that make up a web page or application. Instead of having to manually collate these assets, manifests group them together so that an entire website or app can be launched from a single manifest file. Gateways can interpret this structure, so that users can then reference individual transactions by their file name and/or path.

- **Mempool**: short for "memory pool," is a component of Arweave mining nodes that temporarily stores valid transactions that have been broadcasted to the network but have not yet been added to a block.

- **Miner (aka Arweave Node)**: a node operating on the Arweave network responsible for data storage and recall.

- **Permaweb**: The permaweb is the permanent and decentralized web of files and applications built on top of Arweave.

- **Permaweb Service Token (PST)**: An alternate term used within the Arweave ecosystem to denote a SmartWeave Token (SWT).

- **Seeding**: Refers to the act of propagating new data throughout the network. Miner nodes seed Layer 1 transaction data to other miners, while gateways ensure that the Layer 1 transactions they receive reach the Arweave nodes. Both gateways and Arweave nodes seed Layer 1 transactions and data chunks.

- **SmartWeave**: Arweave’s smart contract protocol.

- **SmartWeave Token (SWT)**: A smart contract token built on SmartWeave.

- **Transaction ID (txID)**: Every transaction and data file uploaded to Arweave is assigned a unique identifier code known as the Transaction ID. These txID’s can be referenced by users to easily locate and retrieve files.

- **Trust-minimization**: Relates to enacting network security by minimizing the number of entities and the degree to which they must be trusted to achieve reliable network interactions. A network with trust-minimizing mechanisms means that it has reduced exposure to undesirable third-party actions and built-in incentives to reward good behavior while punishing bad behavior.
