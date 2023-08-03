---
permalink: /arns/
next: false
prev: false
---

# ARNS

## Overview

Arweave URLs and Transaction IDs are long, difficult to remember, and occasionally miscategorized as spam. The Arweave Name System (ArNS) aims to resolve these problems in a decentralized manner. ArNS is a censorship-resistant naming system stored on Arweave, purchased with IO tokens (or test tokens while in development), enabled through ar.io gateway domains, and used to connect friendly domain names to permaweb dApps, web pages, data, and identities.

It's like a permissionless address book for anything on the permaweb, powered by SmartWeave.

This system works similarly to traditional DNS services, where users can purchase a name in a registry and DNS Name servers resolve these names to IP addresses. With ArNS, the registry is decentralized, permanent and stored on Arweave (with SmartWeave). This means that apps and infrastructure cannot just read the latest state of the registry but can also check any point in time in the past, creating a “Wayback Machine” of permanent data.

Users can register a name, like ardrive, within the ArNS Registry. Before owning a name, they must create an Arweave Name Token (ANT), another SWT and open-source protocol used by ArNS to track the ownership and control over the name. ANTs allow the owner to set a pointer to any type of permaweb data, like a page, dapp or file, via its Arweave Transaction ID. The system shall be flexible and allow users to purchase names permanently or lease them for a defined period based on whatever fits their use case.

Each ar.io gateway acts as both a SmartWeave cache and an ArNS Name resolver. They will generate the latest state of both the ArNS Registry and its related ANTs and serve this information rapidly for apps and users. ar.io gateways will also resolve that name as one of their own subdomains, e.g., https://ardrive.arweave.net and proxy all requests to the associated Arweave Transaction ID. This means that ANTs work across all ar.io gateways that support them: https://ardrive.ar-io.dev, https://ardrive.g8way.io/, etc.

Users can easily reference these friendly names in their browsers, and other applications and infrastructure can build rich solutions on top of these ArNS primitives.

## The ARNS Registry

The ArNS Registry is a list of all the registered names and their associated ANT smart contract addresses. Registering a name requires spending IO tokens for the type of duration purchase. The system shall allow users to either lease a name on a yearly basis or purchase that name permanently.

Once added, name records cannot be removed from the registry. A leased name’s associated ANT smart contract address cannot be changed until the lease has expired and a new one is purchased. Care must be taken by the owners of permanent name purchases to ensure that their ANT supports an evolve ability should it be desired to add or modify functionality in the future as these name purchases are permanently tied to the associated ANT. Owners of permanently purchased names must understand the consequences of private key loss, which results in not being able to update any data pointers for this name.

## Arweave Name Token (ANT)

To establish ownership of a record in the ArNS Registry, each record contains both a friendly name and a reference to an Arweave Name Token, ANT. Name Tokens are unique SmartWeave tokens that gives their owners the ability to update the Arweave Transaction IDs that their associated friendly names point to.

The ANT SmartWeave Contract is a standardized contract that contains the specific ArNS Record specification required by ar.io gateways who resolve ArNS names and their Arweave Transaction IDs. It also contains other basic functionality to establish ownership and the ability to transfer and update the Arweave Transaction ID.

Name Tokens have an owner, who can transfer the token and control all of its modifiable settings. These settings include modifying the time to live (ttl) for each name contained in the ANT, and other settings like the ANT Name, Ticker, and an ANT Controller. The controller can only manage the ANT and set and update records, name, and the ticker, but cannot transfer the ANT. Note that ANTs are initially created by an end user, in accordance with network standards, who then has to ability to transfer its ownership or assign a controller as they see fit.

Secondary markets could be created by ecosystem partners that facilitate the trade of Name Tokens. Additionally, tertiary markets could be created that support the leasing of these friendly names to other users. Such markets, if any, would be created by third parties unrelated to and outside of the scope of this paper or control of the Foundation

## Under_names

ANT owners and controllers can configure multiple subdomains for their registered ArNS name known as “under_names” or more easily written “undernames”. These undernames are assigned individually at the time of registration or can be added on to any registered name at any time.

Under*names use an underscore “*” in place of a more typically used dot “.“ to separate the subdomain from the main ArNS domain.

This means users can trust dapp_ardrive just like you would trust ardrive since the owner of ardrive is the only one who can configure dapp_ardrive.

Some other features that undernames allow include:

- Other users could never register a name that resembles an undername on ardrive since “\_” is not allowed to be registered in the ArNS registry.

- Another user can register dapp-ardrive but this is a separate ArNS domain altogether. In traditional DNS, it’s like the difference in trusting dapp-ardrive.io (suspicious!) over the legitimate dapp.ardrive.io

- Undernames are configured in the ANT that is referenced for a given name. ANT owners can add more undernames as subDomains in the ANT’s records object, each of which can point to a different Arweave Transaction ID.

- Undernames can go multiple levels deep, like version_dapp_ardrive but most not be longer than the total MAX_NAME_LENGTH of an ArNS name.

Undernames give more versatility and utility to owning an ArNS name.
