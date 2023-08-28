---
permalink: "/network-protocols/"
---

# Network Protocols

## Overview

The AR.IO Network consists of AR.IO Gateway nodes, which are identified by their registered Arweave wallet addresses and either their IP addresses or hostnames, as stored in the network's smart contract Gateway Address Registry (GAR).

These nodes adhere to the AR.IO Network Protocols, creating a collaborative environment of Gateway nodes that vary in scale and specialization. The network ensures a fundamental level of service quality and trust minimization among its participants.

Being part of the network grants AR.IO Gateways an array of advantages, such as:

- Simplified advertising of services and end user discovery via the Gateway Address Registry.

- More rapid bootstrapping of key Gateway operational data due to prioritized data request fulfillment among Gateways joined to the network.

- Sharing of data processing results.

- Access to support channels tailored for operators.

- Enhanced trust and transparency through the use of AGPL-3 licenses, which mandate public disclosure of any software changes, thereby reinforcing the network's integrity and reliability.

- Improved network reliability and performance through an incentive protocol, which uses a system of rewards and evaluations to encourage high-quality service from Gateways.


## Gateway Address Registry (GAR)

Any Gateway operator that whishes to join the AR.IO Network must register their node in the AR.IO SmartWeave Contract's "Gateway Address Registry", known as the GAR. Registration involves staking a minimum amount of IO tokens and providing additional metadata describing the Gateway service offered.

This metadata includes details such as:

<div style="text-align: center">
    <table class="inline-table">
        <tr>
            <th colspan="2" style="font-weight: bold; text-decoration: underline">Gateway Registry Metadata</th>
        </tr>
        <tr>
            <th style="font-weight: bold">Item</th>
            <th style="font-weight: bold">Description</th>
        </tr>
        <tr>
            <th>Wallet Address</th>
            <td>The Operator's Arweave wallet address, the primary identifier of the Gateway. A single wallet can only be registered to one Gateway at a time.</td>
        </tr>
        <tr>
            <th>IO Token Stake</th>
            <td>The amount of IO tokens staked, which must be above the network minimum (e.g., 5,000 ɸ).</td>
        </tr>
        <tr>
            <th>Target Address</th>
            <td>IP address / port / protocol / URL used to access this Gateway.</td>
        </tr>
        <tr>
            <th>Delegated Staking Status</th>
            <td>Elective to open delegation to the public with optional allow list for delegated staking support.</td>
        </tr>
        <tr>
            <th>Gateway Reward Distribution Ratio</th>
            <td>Indicates how this Gateway's protocol rewards are distributed to delegates vs kept by the operator.</td>
        </tr>
    </table>
</div>

After joining the network, the operator's Gateway can be easily discovered by permaweb apps, its health can be observed, and it can participate in the AR.IO data sharing protocol.

The Gateway operator can modify their Gateway's GAR configuration as needed, which includes adding more tokens to their stake or removing them. Operators can completely remove their stake and leave the AR.IO Network following a minimum network exit wait time. This exit time ensures that Gateways cannot quickly escape from an anticipated penalty.

The GAR advertises the specific attributes of each Gateway including its stake, delegates, and settings. This enables permaweb apps and users to discover which Gateways are currently available and meet their needs. Apps that read the GAR can sort and filter it using the Gateway metadata, for example, ranking Gateways with the highest stake at the top of the list. This would allow users to prefer the lower-trust, higher staked Gateways before settling on a higher-trust, lower staked Gateway.

## Staking

Staking tokens serves a dual purpose in the AR.IO Network:

- It acts as a method of public commitment, and

- It qualifies participants for reward distribution.

In the AR.IO Network, "staking" designates the act of locking a specified amount of IO tokens into a protocol-controlled vault. These tokens act as a form of collateral and public commitment, encouraging network participants to act in the network's best interests. Once tokens are deposited in the vault, they remain locked until either the participant triggers the "unstake" function or the vault's predetermined lock period expires.

It is important to note that unlike other protocols, the IO token is non-inflationary. Therefore, the staking mechanism in the AR.IO Network is not designed to function as a yield-generation tool. By staking their tokens, participants become eligible for potential rewards, fostering an atmosphere of mutual trust within the network. Specifically, Gateway operators stake tokens to facilitate their Gateway integration and establish public trust. Once connected, they become eligible for rewards driven by the protocol and gain access to the network's shared resources.