module.exports = [
  {
    title: "Welcome",
    path: "/",
  },
  {
    title: "Network overview",
    children: [
      {
        title: "Introduction",
        path: "/introduction",
      },
      {
        title: "Arweave and the Permaweb",
        path: "/arweave",
      },
      {
        title: "The IO Token",
        path: "/token.md",
      },
      {
        title: "Gateway Architecture",
        path: "/gateways/gateways",
      },
      {
        title: "Arweave name System (ArNS)",
        path: "/arns.md",
      },
    ],
  },
  {
    title: "Gateway Operators",
    children: [
      {
        title: "Getting Started",
        children: [
          {
            title: "Setting up on Windows",
            path: "/gateways/ar-io-node/windows-setup",
          },
          {
            title: "Setting up on Linux",
            path: "/gateways/ar-io-node/linux-setup",
          },
        ],
      },
      {
        title: "AR.IO HTTP API",
        path: "/gateways/ar-io-node/api",
      },
    ],
  },
  {
    title: "Ecosystem and Community",
    children: [
      {
        title: "AR.IO Foundation",
        path: "/foundation",
      },
      {
        title: "AR.IO Labs",
        path: "/labs",
      },
      {
        title: "Community Resources",
        path: "/community-resources",
      },
    ],
  },
  {
    title: "Glossary",
    path: "/glossary",
  },
];
