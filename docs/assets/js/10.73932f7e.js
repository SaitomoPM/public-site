(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{288:function(e,t,o){"use strict";o.r(t);var r=o(10),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"windows-installation-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-installation-instructions"}},[e._v("#")]),e._v(" Windows Installation Instructions")]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("This guide provides step-by-step instructions for setting up the ar.io node on a Windows computer. It covers installing necessary software, cloning the repository, creating an environment file, starting the Docker container, setting up networking, and installing and configuring NGINX Docker. No prior coding experience is required.")]),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("p",[e._v("Before starting the installation process, ensure you have the following:")]),e._v(" "),t("ul",[t("li",[e._v("A Windows computer")]),e._v(" "),t("li",[e._v("Administrative privileges on the computer")])]),e._v(" "),t("h2",{attrs:{id:"install-required-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-required-packages"}},[e._v("#")]),e._v(" Install Required Packages")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Install GitHub CLI (gh):")]),e._v(" "),t("ul",[t("li",[e._v("Download the latest release of gh CLI from "),t("a",{attrs:{href:"https://github.com/cli/cli/releases/tag/v2.31.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("Run the "),t("code",[e._v("gh-cli-latest.windows-amd64.msi")]),e._v(" installer and follow the prompts.")])])]),e._v(" "),t("li",[t("p",[e._v("Install Docker:")]),e._v(" "),t("ul",[t("li",[e._v("Download Docker Desktop for Windows from "),t("a",{attrs:{href:"https://www.docker.com/products/docker-desktop/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("Run the installer and follow the prompts.")]),e._v(" "),t("li",[e._v("During installation, make sure to select the option to use WSL (Windows Subsystem for Linux) rather than Hyper-V.")]),e._v(" "),t("li",[e._v("Restart your PC.")]),e._v(" "),t("li",[e._v("Update Windows Subsystem for Linux (WSL):\n"),t("ul",[t("li",[e._v("Open the command prompt as an administrator:\n"),t("ul",[t("li",[e._v("Press Windows Key + R.")]),e._v(" "),t("li",[e._v("Type cmd and press Enter.")]),e._v(" "),t("li",[e._v('Right-click on the "Command Prompt" application in the search results.')]),e._v(" "),t("li",[e._v('Select "Run as administrator" from the context menu.')])])]),e._v(" "),t("li",[e._v("Run the following commands:"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("wsl --update\nwsl --shutdown\n")])])])])])]),e._v(" "),t("li",[e._v("Restart Docker Desktop.")])])]),e._v(" "),t("li",[t("p",[e._v("Install Git:")]),e._v(" "),t("ul",[t("li",[e._v("Download Git for Windows from "),t("a",{attrs:{href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("Run the installer and use the default settings.")])])])]),e._v(" "),t("h2",{attrs:{id:"clone-the-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clone-the-repository"}},[e._v("#")]),e._v(" Clone the Repository")]),e._v(" "),t("ol",[t("li",[e._v("Clone the main repository:\n"),t("ul",[t("li",[e._v("Open the command prompt:\n"),t("ul",[t("li",[e._v("Press "),t("code",[e._v("Windows Key + R")]),e._v(".")]),e._v(" "),t("li",[e._v("Type "),t("code",[e._v("cmd")]),e._v(" and press "),t("code",[e._v("Enter")]),e._v(".")])])]),e._v(" "),t("li",[e._v("Navigate to the directory where you want to clone the repository:\n"),t("ul",[t("li",[e._v("Use the "),t("code",[e._v("cd")]),e._v(" command to change directories. For example, to navigate to the "),t("code",[e._v("Documents")]),e._v(" directory:"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd Documents\n")])])]),t("ul",[t("li",[e._v("More detailed instructions on navigating with the "),t("code",[e._v("cd")]),e._v(" command can be found "),t("a",{attrs:{href:"https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cd",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("strong",[e._v("NOTE")]),e._v(": Your database of Arweave Transaction Headers will be created in the project directory, not Docker. So, if you are using an external hard drive to turn an old machine into a node, install the node directly to that external drive.")])])])])]),e._v(" "),t("li",[e._v("Run the following command:"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gh repo clone ar-io/ar-io-node\n")])])])])])])]),e._v(" "),t("h2",{attrs:{id:"create-the-environment-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-the-environment-file"}},[e._v("#")]),e._v(" Create the Environment File")]),e._v(" "),t("ol",[t("li",[t("p",[e._v('Create a ".env" file:')]),e._v(" "),t("ul",[t("li",[e._v("Open a text editor (e.g., Notepad):\n"),t("ul",[t("li",[e._v("Press "),t("code",[e._v("Windows Key")]),e._v(' and search for "Notepad".')]),e._v(" "),t("li",[e._v('Click on "Notepad" to open the text editor.')])])]),e._v(" "),t("li",[e._v("Paste the following content into the new file, replacing <your-domain> with the domain address you are using to access the node:"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("GRAPHQL_HOST=arweave.net\nGRAPHQL_PORT=443\nSTART_HEIGHT=1000000\nARNS_ROOT_HOST=<your-domain>\n")])])]),t("ul",[t("li",[e._v("The GRAPHQL values set the proxy for GQL queries to arweave.net, You may use any available gateway that supports GQL queries. If omitted, your node can support GQL queries on locally indexed transactions, but only L1 transactions are indexed by default.")]),e._v(" "),t("li",[t("code",[e._v("START_HEIGHT")]),e._v(" is an optional line. It sets the block number where your node will start downloading and indexing transactions headers. Omitting this line will begin indexing at block 0.")]),e._v(" "),t("li",[t("code",[e._v("ARNS_ROOT_HOST")]),e._v(" sets the starting point for resolving ARNS names, which are accessed as a subdomain of a gateway. It should be set to the url you are pointing to your node, excluding any protocol prefix. For example, use "),t("code",[e._v("node-ar.io")]),e._v(" and not "),t("code",[e._v("https://node-ar.io")]),e._v(". If you are using a subdomain to access your node and do not set this value, the node will not understand incoming requests.")])])]),e._v(" "),t("li",[e._v('Save the file with the name ".env" and make sure to select "All Files" as the file type. This helps to ensure the file saves as ".env" and not ".env.txt"')])]),e._v(" "),t("p",[t("strong",[e._v("Note")]),e._v(": The "),t("code",[e._v(".env")]),e._v(" file should be saved inside the same directory where you cloned the repository (e.g., "),t("code",[e._v("ar-io-node")]),e._v(").")])])]),e._v(" "),t("h2",{attrs:{id:"start-the-docker-containers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-the-docker-containers"}},[e._v("#")]),e._v(" Start the Docker Containers")]),e._v(" "),t("ol",[t("li",[e._v("Start the Docker container:\n"),t("ul",[t("li",[e._v("Open the command prompt:\n"),t("ul",[t("li",[e._v("Press "),t("code",[e._v("Windows Key + R")]),e._v(".")]),e._v(" "),t("li",[e._v("Type "),t("code",[e._v("cmd")]),e._v(" and press "),t("code",[e._v("Enter")]),e._v(".")])])]),e._v(" "),t("li",[e._v("Navigate to the directory where you cloned the repository (e.g., "),t("code",[e._v("ar-io-node")]),e._v("):\n"),t("ul",[t("li",[e._v("Use the "),t("code",[e._v("cd")]),e._v(" command to change directories. For example, if the repository is located in the "),t("code",[e._v("Documents")]),e._v(" directory, you would enter:"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd Documents\\ar-io-node\n")])])])]),e._v(" "),t("li",[e._v("If the directory path contains spaces, enclose it in double quotation marks. For example:"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('cd "C:\\My Documents\\ar-io-node"\n')])])])]),e._v(" "),t("li",[e._v("Use the "),t("code",[e._v("dir")]),e._v(" command to list the contents of the current directory and verify that you're in the correct location:"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dir\n")])])])])])]),e._v(" "),t("li",[e._v("Once you are in the correct directory, run the following command to start the Docker container:"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker compose up -d --build\n")])])]),t("ul",[t("li",[e._v("Explanation of flags:\n"),t("ul",[t("li",[t("code",[e._v("up")]),e._v(": Start the Docker containers.")]),e._v(" "),t("li",[t("code",[e._v("-d")]),e._v(": Run the containers as background processes (detached mode).")]),e._v(" "),t("li",[t("code",[e._v("--build")]),e._v(": Build a new container for the project. Use this flag when you make changes to the code or environmental variables.")])])])])]),e._v(" "),t("li",[e._v("If prompted by the firewall, allow access for Docker when requested.")])])])]),e._v(" "),t("h2",{attrs:{id:"test-localhost"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#test-localhost"}},[e._v("#")]),e._v(" Test Localhost")]),e._v(" "),t("ul",[t("li",[e._v("Open your web browser.")]),e._v(" "),t("li",[e._v("Enter "),t("code",[e._v("http://localhost:3000/3lyxgbgEvqNSvJrTX2J7CfRychUD5KClFhhVLyTPNCQ")]),e._v(" in the address bar.")]),e._v(" "),t("li",[e._v("If you can see the image, your node is operating correctly.")])]),e._v(" "),t("h2",{attrs:{id:"set-up-router-port-forwarding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-up-router-port-forwarding"}},[e._v("#")]),e._v(" Set Up Router Port Forwarding")]),e._v(" "),t("p",[e._v("To expose your node to the internet and use a custom domain, follow these steps:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Obtain a Domain Name:")]),e._v(" "),t("ul",[t("li",[e._v("Choose a domain registrar (e.g., "),t("a",{attrs:{href:"https://www.namecheap.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Namecheap"),t("OutboundLink")],1),e._v(") and purchase a domain name.")])])]),e._v(" "),t("li",[t("p",[e._v("Point the Domain at Your Home Network:")]),e._v(" "),t("ul",[t("li",[e._v("In your browser, go to https://www.whatsmyip.org/ to display your public ip address. It can be found at the top of the screen. Note this number down.")]),e._v(" "),t("li",[e._v("Access your domain registrar's settings (e.g., Namecheap's cPanel).")]),e._v(" "),t("li",[e._v('Navigate to the DNS settings for your domain. In cPanel this is under the "Zone Editor" tab.')]),e._v(" "),t("li",[e._v('Create an A record with your registrar for your domain and wildcard subdomains, using your public IP address. For example, if your domain is "ar.io," create a record for "ar.io" and "*.ar.io."\n'),t("ul",[t("li",[e._v("Instructions may vary depending on the domain registrar and cPanel. Consult your registrar's documentation or support for detailed steps.")])])])])]),e._v(" "),t("li",[t("p",[e._v("Obtain the Local IP Address of Your Machine:")]),e._v(" "),t("ul",[t("li",[e._v("Open the command prompt:\n"),t("ul",[t("li",[e._v("Press "),t("code",[e._v("Windows Key + R")]),e._v(".")]),e._v(" "),t("li",[e._v("Type "),t("code",[e._v("cmd")]),e._v(" and press "),t("code",[e._v("Enter")]),e._v(".")])])]),e._v(" "),t("li",[e._v("Run the following command:"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ipconfig\n")])])])]),e._v(" "),t("li",[e._v("Look for the network adapter that is currently connected to your network (e.g., Ethernet or Wi-Fi).")]),e._v(" "),t("li",[e._v("Note down the IPv4 Address associated with the network adapter. It should be in the format of "),t("code",[e._v("192.168.X.X")]),e._v(" or "),t("code",[e._v("10.X.X.X")]),e._v(".")]),e._v(" "),t("li",[e._v("This IP address will be used for port forwarding.")])])]),e._v(" "),t("li",[t("p",[e._v("Set Up Router Port Forwarding:")]),e._v(" "),t("ul",[t("li",[e._v("Access your home router settings:\n"),t("ul",[t("li",[e._v("Open a web browser.")]),e._v(" "),t("li",[e._v("Enter your router's IP address in the address bar (e.g., "),t("code",[e._v("192.168.0.1")]),e._v(").")]),e._v(" "),t("li",[e._v("If you're unsure of your router's IP address, consult your router's documentation or contact your Internet Service Provider (ISP).")])])]),e._v(" "),t("li",[e._v("Navigate to the port forwarding settings in your router configuration.\n"),t("ul",[t("li",[e._v("The exact steps may vary depending on your router model. Consult your router's documentation or support for detailed steps.")])])]),e._v(" "),t("li",[e._v("Set up port forwarding rules to forward incoming traffic on ports 80 and 443 to the local IP address of your machine where the node is installed.\n"),t("ul",[t("li",[e._v("Configure the ports to point to the local IP address noted in the previous step.")]),e._v(" "),t("li",[e._v("Save the settings.")])])])])])]),e._v(" "),t("h2",{attrs:{id:"install-and-configure-nginx-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-and-configure-nginx-docker"}},[e._v("#")]),e._v(" Install and Configure NGINX Docker")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Clone the NGINX Docker repository:")]),e._v(" "),t("ul",[t("li",[e._v("Open the command prompt:\n"),t("ul",[t("li",[e._v("Press "),t("code",[e._v("Windows Key + R")]),e._v(".")]),e._v(" "),t("li",[e._v("Type "),t("code",[e._v("cmd")]),e._v(" and press "),t("code",[e._v("Enter")]),e._v(".")])])]),e._v(" "),t("li",[e._v("Navigate to the directory where you want to clone the repository (This should not be done inside the directory for the node):\n"),t("ul",[t("li",[e._v("Use the "),t("code",[e._v("cd")]),e._v(" command to change directories. For example, to navigate to the "),t("code",[e._v("Documents")]),e._v(" directory:"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd Documents\n")])])])])])]),e._v(" "),t("li",[e._v("Run the following command:"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gh repo clone bobinstein/dockerized-nginx\n")])])])])]),e._v(" "),t("p",[t("strong",[e._v("Note")]),e._v(": This NGINX container was designed to easily automate many of the more technical aspects of setting up NGNIX and obtaining an ssl certificate so your node can be accessed with https. However, wildcard domain certifications cannot be universally automated due to significant security concerns. Be sure to follow the instructions in this project for obtaining wildcard domain certificates in order for your node to function properly.")])]),e._v(" "),t("li",[t("p",[e._v("Follow the instructions provided in the repository for setting up NGINX Docker.")])])]),e._v(" "),t("p",[e._v("Congratulations! Your ar.io node is now running and connected to the internet. Test it by entering https://<your-domain>/3lyxgbgEvqNSvJrTX2J7CfRychUD5KClFhhVLyTPNCQ in your browser.")]),e._v(" "),t("p",[t("strong",[e._v("Note")]),e._v(": If you encounter any issues during the installation process, please seek assistance from the "),t("a",{attrs:{href:"https://discord.gg/7zUPfN4D6g",target:"_blank",rel:"noopener noreferrer"}},[e._v("ar.io community"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);