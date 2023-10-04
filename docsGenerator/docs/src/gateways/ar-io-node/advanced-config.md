---
---
# Advanced Configuration

## Overview

The Getting Started guides for [windows](./windows-setup.md) and [linux](./linux-setup.md) contain all the information needed to start your ar.io Gateway node successfully with basic configurations. There are also ever expanding advanced configuration options that allow you to run your node in a way that is customized to your specific use case. 

Most of the below options can be added to your `.env` file in order to customize its operation. Any changes made to your `.env`  require you to stop the docker containers running your node, and restarting them with the `--build` flag in order for the changes to take effect. See [ENV](./env.md) for a complete list of environmental variables you can set.

## Data Storage Location

You can set a custom location for your AR.IO Gateway to save the data it pulls from the Arweave network. There are three primary types of data stored, and you can set a unique storage location for each of these independently. These are "chunks data", "contiguous data", and "headers data". The custom location for each of these can be set in your .env file like this:

```
CHUNKS_DATA_PATH=<file path>
CONTIGUOUS_DATA_PATH=<file path>
HEADERS_DATA_PATH=<file path>
```

Be sure to replace "\<file path>" with the path to the location where you would like the data stored. If these values are omitted, the data will be stored in the "data" directory inside your Gateway code repository.

## Admin API Key

HTTP endpoints under "/ar-io/admin" are protected by an admin API key. These endpoints allow you to get certain analytics data or make adjustments to your node as it's running. When your node starts, it reads your environmental variables to see if a key is set. If not, a random key is generated. The key name is `ADMIN_API_KEY` and it should be set in your `.env` file like this:

```
ADMIN_API_KEY=SUPER_SECRET_PASSWORD
```

View examples of the admin endpoints [here](./admin/admin-api.md)

## Wallet Association

In order to participate in the greater [ar.io network](/../), Gateway nodes need to associate themselves with an Arweave wallet. This can be configured by setting the `AR_IO_WALLET` key value in your `.env` file.

```
AR_IO_WALLET=1seRanklLU_1VTGowDZdD7s_-7k1qowT6oeFZHUZiZo
```

## Unbundling

AR.IO Gateway nodes support unbundling and indexing [ANS-104](https://github.com/ArweaveTeam/arweave-standards/blob/master/ans/ANS-104.md) bundle data. This is disabled by default, but can be turned on with several different configuration options. You can set these configurations with the `ANS104_UNBUNDLE_FILTER` and `ANS104_INDEX_FILTER` keys in your .env:

```
ANS104_UNBUNDLE_FILTER="<filter string>"
ANS104_INDEX_FILTER="<filter string>"
```

The following types of filters are supported:

```
{ "never": true } # the default
{ "always": true }
{ "attributes": { "owner": <owner key>, ... }}
{ "tags": [{ "name": <utf8 tag name>, "value": <utf8 tag value> }, ...]}
{ "and": [ <nested filter>, ... ]}
{ "or": [ <nested filter>, ... ]}
```

## Content Moderation

You are able to set your Gateway to block specific transactions or data-items you don't want to serve. Unlike previous configuration options in this list, blocking content can be achieved without the need to add to your .env file and rebuild your Gateway. Instead, make a `PUT` request to your Gateway at `/ar-io/admin/block-data`. As this is an admin endpoint, you will need to have configured your `ADMIN_API_KEY`. Using curl as an example, the request should be formatted as follows:

```
curl -X PUT -H "Authorization: Bearer <ADMIN_KEY>" \
  -H "Content-Type: application/json" \
  "http://<HOST>:<PORT>/ar-io/admin/block-data" \
  -d '{ "id": "<ID>", "notes": "Example notes", "source": "Example source" }'
```

* **id** (string):  This will be the transaction ID of the content you want to add to your block list.
* **notes** (string): Internal notes regarding why a particular ID is blocked.
* **source** (string): Identifier of a particular source of IDs to block. (e.g. the name of a block list)

`notes` and `source` are used for documentation only, and have no effect on your block list itself.