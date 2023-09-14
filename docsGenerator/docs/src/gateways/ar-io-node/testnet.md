---
prev: false
permalink: "/gateways/testnet/"
tags: [testnet, join, application, jwk, qty, fqdn, label, note, properties]
---

# Join the AR.IO Testnet

## Prerequisites

1. Must have a fully functional AR.IO gateway.
    - This includes the ability to resolve ArNS subdomains.
    - Follow installation instructions for [windows](/gateways/ar-io-node/windows-setup) or [linux](/gateways/ar-io-node/linux-setup) and get help from the [AR.IO community](https://discord.gg/7zUPfN4D6g).

2. Gateway must be associated with an Arweave Wallet.
    - Learn about creating Arweave wallets [here](/../wallet)

3. Arweave wallet must be funded with enough AR tokens to pay for transaction gas.

## Submit an Application

Joining the AR.IO Testnet requires staking Test IO Tokens. A minimum of 10,000. This means you must have Test IO Tokens before you are able to join. Currently, Test IO Tokens are distributed through an application system in the [AR.IO Discord](https://discord.gg/7zUPfN4D6g).

In the Discord, simply type `/apply` and select `Application to join the ar.io testnet!` to begin the process. The AR.IO team will review applications and verify that you have a fully functional AR.IO gateway, properly configured, that can be accessed by the internet.

Applicants who are approved will be sent 10,000 Test IO Tokens to facilitate joining the network. Applications will be processed at the discretion and availability of the AR.IO team. Be patient and do not ping or DM team members while waiting on your application to be processed.

## Setting up and Running the Join Script

Joining the AR.IO Testnet is currently completed by manually running a script. The process for doing so is as follows:

### Clone the Repo

In a terminal (Powershell or Command Line on Windows) navigate to the location where you want to clone the repo, then run the following command

```
git clone https://github.com/ar-io/testnet-contract
```

### Install dependencies

```
cd testnet-contract
yarn install
```

### Provide Wallet Keys

Joining the testnet requires signing and funding a transaction that interacts with the Testnet smart contract. This means the script needs access to your wallet. There are two ways this can be done:

1. Copy your wallet's JWK into a .env file in testnet-contract root directory.

2. Save a copy of your wallet JSON keyfile in the testnet-contract root directory as "key.json".

### Configure your settings

You will need to provide some information specific to your gateway before running the join script. You can do this by opening the script file in any code or text editor. The file is located at `testnet-contract > tools > join-network.ts`

Each line that needs to be edited begins with "const", followed by a variable name, and "=" sign, and its value. Each line is accompanied by a note to inform you of its purpose. The following variables MUST be changed in order to successfully join the AR.IO Testnet:

- **qty**: Quantity of Test IO Tokens to stake to join the Testnet. This value must be at least 10,000, and not greater than the number of Test IO tokens in your wallet.
- **label**: A friendly label for your Gateway. There currently a 16 character limit for this value.
- **fqdn**: Fully Qualified Domain Name - This is the domain name you have pointed at your Gateway.

There are also several variables you may edit, but are not required:

- **port**: The port used to access your Gateway, defaults to 443 (https).
- **protocol**: Set this to "http" if your Gateway is not configured to allow https connections.
- **properties**: This variable allows you to reference the TxId of any additional Gateway settings you've previously uploaded to Arweave. While we'll provide more detailed instructions and schema for doing so soon, it's safe to leave this unchanged for the time being.
- **note**: A note containing additional information you would like known about your Gateway.

These settings can be updated after joining the Testnet.

### Run the Script

Once you have Test IO Tokens and all of your settings configured properly, it's time to run the script and join the network. From the testnet-contract root directory, run the following command in your terminal:

```
yarn ts-node tools/join-network.ts
```

This will create an Arweave transaction interacting with the Testnet Smartweave contract, so it will require AR tokens to pay for gas. AR.IO recommends having at least 0.05 AR to ensure a successful transaction.


## Update Your Gateway Settings

Once you have successfully joined the Testnet, you can still update your Gateway settings. This is done by running the `update-gateway-settings.ts` script, in the same location as `join-network.ts`.

Updating your settings, just like joining the Testnet, involves interacting with the Smartweave contract for the Testnet. This means you must have AR in your wallet to pay for transaction gas.

In the `update-gateway-settings.ts` file, the same settings from `join-network.ts` are present, but many are commented out (the line they are on begins with "//", this tells the script not to look at those lines).

Find the line for the settings you want to change, uncomment them (remove the "//") and set their values to what you want to update.

Once The values for all of your updates are set, move further down in the file to the section that looks like this:

```
  const writeInteraction = await pst.writeInteraction(
    {
      function: 'updateGatewaySettings',
      label,
      fqdn,
      // port,
      // protocol,
      // properties,
      // note
    },
```

Make sure that any settings you want to update are not commented in this section, and any settings you don't want to change are commented.

Once this is done, run the script with `yarn ts-node tools/update-gateway-settings.ts`