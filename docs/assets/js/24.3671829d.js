(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{303:function(t,e,a){"use strict";a.r(e);var i=a(10),s=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"network-protocols"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#network-protocols"}},[t._v("#")]),t._v(" Network Protocols")]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[t._v("The AR.IO Network consists of AR.IO Gateway nodes, which are identified by their registered Arweave wallet addresses and either their IP addresses or hostnames, as stored in the network's smart contract Gateway Address Registry (GAR).")]),t._v(" "),e("p",[t._v("These nodes adhere to the AR.IO Network Protocols, creating a collaborative environment of Gateway nodes that vary in scale and specialization. The network ensures a fundamental level of service quality and trust minimization among its participants.")]),t._v(" "),e("p",[t._v("Being part of the network grants AR.IO Gateways an array of advantages, such as:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Simplified advertising of services and end user discovery via the Gateway Address Registry.")])]),t._v(" "),e("li",[e("p",[t._v("More rapid bootstrapping of key Gateway operational data due to prioritized data request fulfillment among Gateways joined to the network.")])]),t._v(" "),e("li",[e("p",[t._v("Sharing of data processing results.")])]),t._v(" "),e("li",[e("p",[t._v("Access to support channels tailored for operators.")])]),t._v(" "),e("li",[e("p",[t._v("Enhanced trust and transparency through the use of AGPL-3 licenses, which mandate public disclosure of any software changes, thereby reinforcing the network's integrity and reliability.")])]),t._v(" "),e("li",[e("p",[t._v("Improved network reliability and performance through an incentive protocol, which uses a system of rewards and evaluations to encourage high-quality service from Gateways.")])])]),t._v(" "),e("h2",{attrs:{id:"gateway-address-registry-gar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gateway-address-registry-gar"}},[t._v("#")]),t._v(" Gateway Address Registry (GAR)")]),t._v(" "),e("p",[t._v('Any Gateway operator that whishes to join the AR.IO Network must register their node in the AR.IO SmartWeave Contract\'s "Gateway Address Registry", known as the GAR. Registration involves staking a minimum amount of IO tokens and providing additional metadata describing the Gateway service offered.')]),t._v(" "),e("p",[t._v("After joining the network, the operator's Gateway can be easily discovered by permaweb apps, its health can be observed, and it can participate in the AR.IO data sharing protocol.")]),t._v(" "),e("p",[t._v("The Gateway operator can modify their Gateway's GAR configuration as needed, which includes adding more tokens to their stake or removing them. Operators can completely remove their stake and leave the AR.IO Network following a minimum network exit wait time. This exit time ensures that Gateways cannot quickly escape from an anticipated penalty.")]),t._v(" "),e("p",[t._v("The GAR advertises the specific attributes of each Gateway including its stake and settings. This enables permaweb apps and users to discover which Gateways are currently available and meet their needs. Apps that read the GAR can sort and filter it using the Gateway metadata, for example, ranking Gateways with the highest stake at the top of the list. This would allow users to prefer the lower-trust, higher staked Gateways before settling on a higher-trust, lower staked Gateway.")]),t._v(" "),e("h2",{attrs:{id:"staking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#staking"}},[t._v("#")]),t._v(" Staking")]),t._v(" "),e("p",[t._v("Staking tokens serves a dual purpose in the AR.IO Network:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("It acts as a method of public commitment, and")])]),t._v(" "),e("li",[e("p",[t._v("It qualifies participants for reward distribution.")])])]),t._v(" "),e("p",[t._v('In the AR.IO Network, "staking" designates the act of locking a specified amount of IO tokens into a protocol-controlled vault. These tokens act as a form of collateral and public commitment, encouraging network participants to act in the network\'s best interests. Once tokens are deposited in the vault, they remain locked until either the participant triggers the "unstake" function or the vault\'s predetermined lock period expires.')]),t._v(" "),e("p",[t._v("It is important to note that unlike other protocols, the IO token is non-inflationary. Therefore, the staking mechanism in the AR.IO Network is not designed to function as a yield-generation tool. By staking their tokens, participants become eligible for potential rewards, fostering an atmosphere of mutual trust within the network. Specifically, Gateway operators stake tokens to facilitate their Gateway integration and establish public trust. Once connected, they become eligible for rewards driven by the protocol and gain access to the network's shared resources.")]),t._v(" "),e("h2",{attrs:{id:"schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#schema"}},[t._v("#")]),t._v(" Schema")]),t._v(" "),e("h3",{attrs:{id:"gateway-schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gateway-schema"}},[t._v("#")]),t._v(" Gateway Schema")]),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("table",{staticClass:"inline-table",attrs:{id:"gateway-table"}},[e("tr",[e("th",{staticStyle:{"font-weight":"bold","text-decoration":"underline"},attrs:{colspan:"3"}},[t._v("Gateway")])]),t._v(" "),e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])]),t._v(" "),e("tr",[e("th",[t._v("operatorStake")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",{staticClass:"align-left"},[t._v("The total stake of the Gateway's operator.")])]),t._v(" "),e("tr",[e("th",[t._v("start")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",{staticClass:"align-left"},[t._v("Block number in which the Gateway joined the network.")])]),t._v(" "),e("tr",[e("th",[t._v("end")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",{staticClass:"align-left"},[t._v("Block number in which the Gateway can leave the network, setting to 0 means no end date.")])]),t._v(" "),e("tr",[e("th",[t._v("status")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",{staticClass:"align-left"},[t._v('Participation status of the Gateway, "joined" - participating in the network, "hidden" - not leaving, but not participating, "leaving" - in the process of withdrawing from the network.')])]),t._v(" "),e("tr",[e("th",[t._v("vaults")]),t._v(" "),e("td",[t._v("array of objects")]),t._v(" "),e("td",{staticClass:"align-left"},[t._v("The locked tokens staked by the Gateway operator, "),e("a",{attrs:{href:"#token-vault"}},[t._v("view schema")]),t._v(".")])]),t._v(" "),e("tr",[e("th",[t._v("settings")]),t._v(" "),e("td",[t._v("object")]),t._v(" "),e("td",{staticClass:"align-left"},[t._v("Additional configuration settings for the Gateway, "),e("a",{attrs:{href:"#gateway-settings"}},[t._v("view schema")]),t._v(".")])])])]),t._v(" "),e("h3",{attrs:{id:"token-vault"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#token-vault"}},[t._v("#")]),t._v(" Token Vault")]),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("table",{staticClass:"inline-table",attrs:{id:"token-vault-table"}},[e("tr",[e("th",{staticStyle:{"font-weight":"bold","text-decoration":"underline"},attrs:{colspan:"3"}},[t._v("Token Vault")])]),t._v(" "),e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])]),t._v(" "),e("tr",[e("th",[t._v("balance")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",{staticClass:"align-left"},[t._v("Positive integer, the number of IO tokens locked.")])]),t._v(" "),e("tr",[e("th",[t._v("start")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",{staticClass:"align-left"},[t._v("Block number in which locking starts.")])]),t._v(" "),e("tr",[e("th",[t._v("end")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",{staticClass:"align-left"},[t._v("Block number in which locking ends. Setting to 0 means no end date.")])])])]),t._v(" "),e("h3",{attrs:{id:"gateway-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gateway-settings"}},[t._v("#")]),t._v(" Gateway Settings")]),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("table",{staticClass:"inline-table",attrs:{id:"gateway-settings-table"}},[e("tr",[e("th",{staticStyle:{"font-weight":"bold","text-decoration":"underline"},attrs:{colspan:"4"}},[t._v("Gateway Settings")])]),t._v(" "),e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Required")]),t._v(" "),e("th",[t._v("Description")])]),t._v(" "),e("tr",[e("th",[t._v("label")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("yes")]),t._v(" "),e("td",{staticClass:"align-left"},[t._v("The friendly name used to label the Gateway.")])]),t._v(" "),e("tr",[e("th",[t._v("fqdn")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("yes")]),t._v(" "),e("td",{staticClass:"align-left"},[t._v("The fully qualified domain name at which the Gateway can be reached. e.g. arweave.net")])]),t._v(" "),e("tr",[e("th",[t._v("port")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("yes")]),t._v(" "),e("td",{staticClass:"align-left"},[t._v("The port used by the Gateway. e.g. 443")])]),t._v(" "),e("tr",[e("th",[t._v("protocol")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("yes")]),t._v(" "),e("td",{staticClass:"align-left"},[t._v("Web protocol used by this Gateway "),e("code",[t._v('"https"')]),t._v(", or "),e("code",[t._v('"http"')])])]),t._v(" "),e("tr",[e("th",[t._v("properties")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("no")]),t._v(" "),e("td",{staticClass:"align-left"},[t._v("An Arweave transaction ID containing additional properties of the Gateway.")])]),t._v(" "),e("tr",[e("th",[t._v("note")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("no")]),t._v(" "),e("td",{staticClass:"align-left"},[t._v("An Arweave transaction ID containing additional notes the Gateway operator can set to include things like announcements, maintenance, or other operational updates.")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);