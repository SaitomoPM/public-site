---
permalink: "/gateways/upgrade/"
# tags: [upgrade, git, docker, windows, linux]
---

# Upgrading your Gateway

To ensure the optimal performance and security of your AR.IO Gateway, it's essential to regularly upgrade to the latest version. Notably, indexed data resides separate from Docker. As a result, neither upgrading the Gateway nor pruning Docker will erase your data or progress. Here's how you can perform the upgrade:

## Prerequisites

- Your Gateway should have been cloned using git. If you haven't, follow the installation instructions for [windows](/gateways/ar-io-node/windows-setup) or [linux](/gateways/ar-io-node/linux-setup).


## Upgrade Steps

1. **Pull the latest changes from the repository**

    Navigate to your cloned repository directory and execute the following command:

    ```
    git pull
    ```

2. **Shut down Docker**

    Depending on your operating system, use the respective commands:

    <details>
    <summary>Linux</summary>

    ```
    sudo docker-compose down
    ```

    </details>

    <details>
    <summary>Windows</summary>

    ```

    docker-compose down -v

    ```

    </details>


3. **Prune Docker** (Optional)


    It's a good practice to clean up unused Docker resources. Again, use the command based on your OS:

    <details>
    <summary>Linux</summary>

    ```

    sudo docker system prune

    ```

    </details>

    <details>
    <summary>Windows</summary>

    ```

    docker system prune

    ```

    </details>

4. **Rebuild the Docker container**

    Finally, build the Docker container again to implement the changes:

    <details>
    <summary>Linux</summary>

    ```
    sudo docker-compose up -d --build 
    ```

    </details>

    <details>
    <summary>Windows</summary>

    ```
    docker-compose up -d --build 
    ```

    </details>

That's it! Your AR.IO Gateway is now upgraded to the latest version. Ensure to test and verify that everything is functioning as expected. If you encounter any issues, reach out to the [AR.IO community](https://discord.gg/7zUPfN4D6g) for assistance.
