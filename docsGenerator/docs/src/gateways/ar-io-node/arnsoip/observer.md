# The Role of Observers

## Introduction

The AR.IO Network shall utilize the ArNS Observation and Incentive Protocol (OIP) to incentivize gateways and ensure the operational integrity of the network. This protocol introduces the role of “observers” to the network. Observers play a crucial role: they evaluate other gateways' ability to resolve ArNS names both accurately and in a timely manner.

Each epoch (approximately 7 block-days), a random pool of active ar.io gateways will be selected to perform observation duties. Within the epoch, observers are tasked with evaluating a subset of ArNS names for each gateway in the network. The to-be-evaluated ArNS names include a set of names randomly determined by the protocol, known as “predetermined names”, which are common across all observers within the epoch, as well as a set of “chosen names” picked at the discretion of each individual observer.

Each observer shall assess the performance of the selected ArNS names (across all ar.io gateways) and summarize those findings in a report which detail the following:

- General information:

    - The observer’s Arweave address

    - The starting block height of the epoch

    - The block height at which the report was generated

- Overall Gateway Operator assessment:

    - The Arweave address that the observer expects to be the owner / operator of the gateway

    - The Arweave address that the observed gateway actually reports

    - A final “pass or fail” rollup determination for each observed gateway

    - Failure reason (if applicable)

- ArNS assessments for each gateway:

    - Gateway FQDN

    - Observed ArNS name

    - The block height at which the name was assessed

    - The transaction ID that the observer expects the associated name to resolve to

    - The transaction ID that the gateway actually resolves to

    - The data hash that the observer expects the associated name to resolve to

    - The data hash that the gateway actually resolves to

    - The “pass or fail” score associated with the observed name

    - Failure reason (if applicable)

    - Timing / performance information associated with the name resolution such as time to first byte and total duration

    - The above is repeated for the entire name pool

Observers shall upload their completed reports (in JSON format) to the Arweave network as Layer 1 transactions as well as submit an interaction to the ar.io smart contract detailing each gateway that they observed to have “failed” their assessments.

Details around how the results of these reports are evaluated and result in reward distributions are forthcoming.

## Example Observation Report

[https://observe.ar.io/ar-io/observer/reports/current](https://observe.ar.io/ar-io/observer/reports/current)

<img :src="$withBase('/images/observer-report.png')" class="amazingdiagram" style="width: 75%">