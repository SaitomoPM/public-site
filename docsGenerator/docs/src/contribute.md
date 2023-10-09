# Contributing to AR.IO Docs

## Overview

The AR.IO Docs serve as a primary source of information and guidance for users, developers, and contributors interacting with the AR.IO platform. As such, maintaining its clarity, accuracy, and comprehensiveness is paramount. This document outlines the standardized procedures and best practices for contributing to these docs. By following this guide, contributors can ensure that their additions and modifications align with the established documentation structure and conventions.

Contributions can range from minor typographical corrections to the addition of entire new sections. Regardless of the scale, every contribution is valuable. Proper setup, understanding the file structure, and familiarity with the submission process are essential components of effective contribution. The sections that follow delve into each stage of the contribution process, from initial setup and local development to the submission of changes for review.

By adhering to this guide, contributors can streamline the review and integration of their changes, ensuring that the AR.IO Docs remain a reliable and up-to-date resource for all its users.

## Prerequisites

- [Github account](https://github.com/)
- [Git installed on your computer](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Nodejs version 16.15.1
- [Yarn installed on your computer](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

## Initial Setup

### Fork the Repository

While logged into your Github account, visit the repository for the [AR.IO public site](https://github.com/ar-io/public-site)

Near the top right of the page, there will be a button labeled "fork".

Clicking this will begin the process of making a copy of the public-site repo under your own account.

On the next screen, make sure the box labeled "copy the `main` branch only" is NOT checked, then click "create fork"

This process only needs to be completed once, you will not need to create a new fork each time you want to submit an edit.

### Clone your Fork

Once you have your fork created, you'll need to clone it onto your computer in order to make your edits.

Navigate the the location you want to clone the repo and open a terminal (or command prompt/powershell on Windows)

run the command:

```
git clone -b main https://github.com/yourusernamehere/public-site
```

Be sure to replace "yourusernamehere" with your Github username

### Link Upstream

The AR.IO Public Site, and especially the docs portal, is constantly evolving. You are going to want to be able to pull updates from the AR.IO repo into your fork without having to delete it and create a new fork. To do this, you can link the original repo to your fork as "upstream".

From inside the fork on your computer, run the command:

```
git remote add upstream https://github.com/ar-io/public-site
```

You can then check to make sure the upstream source was added with:

```
git remote -v
```

#### Pull updates

Periodically, you should check if there have been updates to the original repo by using"

```
git fetch upstream
```

If changes show up, you can merge them into your own repo by ensuring you are on the "main" branch, and then running the merge command:

```
git checkout main
git merge upstream/main
```

### Install Dependencies for Docs Portal

The AR.IO Public Site is primarily a static html website. There are no dependencies that need to be installed in order to launch and view the site as a whole. However, the docs portal is a Vuepress app nested inside that html website. In order to launch the docs portal for review, or to build it into static html, you are going to need to install its dependencies.

From in the root directory of the Public Site, navigate into the docs portal and run the install command:

```
cd docsGenerator/docs
yarn install
```

**NOTE**: This repository uses yarn to manage dependency versions, installing dependencies with npm instead of yarn can lead to errors.

## Editing

Vuepress generates content using markdown (.md) files. Each markdown file can be displayed as its own content page. The location (url) of each page is **generally** determined by the file's location in the file-structure of the vuepress app, though this can be overridden by using frontmatter. Adding a new content page can be as simple as dropping a new file in the appropriate location in the file-structure and adding a reference to it in the sidebar configuration file.

### Branches

You should always ensure that you are starting from an up to date version of the main branch. See [Pull Updates](#pull-updates) for instructions.

Once you are up to date and on the main branch, you should always create a new branch specific to the changes you are making. This can be done with the command:

```
git checkout -b <new-branch-name>
```

Replace `<new-branch-name>` with a short, descriptive name for what you are changing. Do not reuse branches for future edits, you should always create a fresh branch based on the most up to date version of the main branch.

### What is Markdown?

Markdown is a lightweight markup language that allows you to format plain text documents with simple syntax. It's commonly used for creating documentation, README files, and web content. Markdown files are easy to read, write, and convert into various formats, such as HTML.

Here are some commonly used Markdown syntax elements:

1. **Headings**: Use hash symbols (#) to denote headings. The number of hashes determines the heading level (e.g., `# Heading 1`, `## Heading 2`).

2. **Emphasis**: Surround text with asterisks (*) or underscores (\_) for emphasis. For example, `*italic\*`or`_italic_`renders as italic, and`**bold**`or`**bold**` renders as bold.

3. **Lists**: Create unordered lists by starting lines with hyphens (-), plus signs (+), or asterisks (\*). Ordered lists use numbers (1., 2., etc.).

4. **Links**: Enclose the linked text in square brackets [] and the URL in parentheses (). For example, [AR.IO](https://ar.io) creates a link to AR.IO's Public website.

5. **Images**: Similar to links, but with an exclamation mark (!) at the beginning. For example, `![Alt Text](image.jpg)` embeds an image.

6. **Code**: Use backticks ( ` ) to denote inline code . For code blocks, indent each line with four spaces or use triple backticks (```) before and after the code block.

7. **Horizontal Rule**: To create a horizontal rule, use three or more hyphens (-), asterisks (\*), or underscores (\_).

To denote a Markdown file, save it with the .md extension (e.g., `document.md`).

When used in a VuePress app, Markdown files are rendered into HTML by VuePress's built-in Markdown compiler, which supports most standard html tags as well. This includes the ability to assign css classes for additional styling.

### Frontmatter

Vuepress supports injecting certain options into your markdown files. These options, collectively, are known as frontmatter. There are 5 items that you will primarily use for these docs. All of them may be omitted without issue, or included for additional customization. These are:

1. **title**: This sets the title for the page. It will be displayed on the left side of the browser tab when a user accesses that page. If omitted, the title will be pulled from the sidebar for that page.

2. **permalink**: Vuepress sets urls based on the filestructure of the project. This can be overridden using permalink, and a custom url can be assigned to a specific page.

3. **prev**: Sets the value for the “previous page” button that appears at the bottom of the page. If omitted, this will be pulled from the sidebar. The button can be removed from the page by setting the value to “false”.

4. **next**: Similar to `prev`, this sets the “next page” button value.

5. **tags**: accepts a list of key words that can be accessed by the “search” function, as well as helping with SEO.

Frontmatter uses YAML syntax, sandwiched inside two lines of three dashes `---` , like so:

```
---
title: Frontmatter Instructions
permalink: "/frontmatter/"
prev: "./what-is-markdown"
next: false
tags: ["frontmatter", "permalink", "other tags"]
---
```

### CSS

If you add html elements into your markdown file, you can assign custom css classes to them. The easiest way to customize a class is to add it to the primary global css file located at `/docsGenerator/docs/src/.vuepress/theme/styles/index.styl`

The file is written in stylus, but supports standard css syntax.

**NOTE**: It is a good idea to be overly specific with your class names, as the content of the index.styl file will affect the entire docs portal.

### Adding to the Sidebar

The sidebar is rendered from a JavaScript array of objects. It is possible to configure multiple different sidebars, and have them display depending on the filepath a user is currently viewing. The docs portal only uses a single default sidebar at the moment. The configuration file for the sidebar is located at `/docs/src/.vuepress/theme/configs/default_sidebar_config.js`

To add a new item to the sidebar, simply choose where you want the item to appear, and insert an object with the following format:

```
{
title: "Text you want to display",
path: "Filepath to new file"
}
```

The sidebar, when rendered, will find all the H2 tags (##) in the file, and automatically display them as sub-headers in the sidebar, which work as links to that specific section of the page.

You can also make a sidebar item into an expandable menu by adding a children attribute, which will be an array of objects similar to the parent:

```
{
title: "Label",
children: [
    {
    title: "First Subtext",
    path: "Filepath to file"
    },
    {
    title: "Second Subtext",
    path: "Filepath to second file"
    }
  ]
}
```

Children can be nested for several layers if desired.

Below is the current sidebar configuration to serve as an example:

```
module.exports = [
  {
    title: "Welcome",
    path: "/",
  },
  {
    title: "Network Overview",
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
        title: "Network Protocols",
        path: "/network-protocols"
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
            title: "Overview",
            path: "/gateways/ar-io-node/overview"
          },
          {
            title: "Setting up on Windows",
            path: "/gateways/ar-io-node/windows-setup",
          },
          {
            title: "Setting up on Linux",
            path: "/gateways/ar-io-node/linux-setup",
          },
          {
            title: "Join the Network",
            path: "/gateways/ar-io-node/testnet"
          },
          {
            title: "Upgrading",
            path: "/gateways/ar-io-node/upgrading"
          }

        ],
      },
      {
        title: "Advanced Configurations",
        path: "/gateways/ar-io-node/advanced-config"
      },
      {
        title: "AR.IO HTTP API",
        path: "/gateways/ar-io-node/api",
      },
      {
        title: "AR.IO Admin API",
        path: "/gateways/ar-io-node/admin/admin-api"
      }
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
```

## Development and Deployment

### Launching Development Server

From inside the `docsGenerator/docs` directory in your terminal, you can launch a development server in order to preview your edits. This will automatically update as you are making edits, but if some changes do not immediately appear you can shut the server down and restart it for a hard refresh:

```
yarn dev
```

The development server will, by default, launch at localhost:8080. The server can be shut down with `ctrl+c` or by killing the terminal used to start it.

The most common error when attempting to launch the development server comes from not having a compatible version of Nodejs. If you get an error, try switching to Node version 16.15.1

### Building Static Files

The Vuepress docs portal is nested inside a static html website. For ease of deployment, Vuepress can build the docs portal into static html files and place them in the docs/ folder in the root of the website. This is not necessary for submitting a pr, but it may be useful for local testing. You can do this by navigating your terminal inside the docs portal Vuepress app `docsGenerator/docs` and running the command:

```
yarn build
```

### Creating Your Pull Request

Once you have all of your local changes committed and synced to your github account, you can create a Pull Request and have the team review the changes for integration into the public site.

1. Ensure that all of your changes are committed to your own repository. All commits should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) standards.

2. Navigate to your forked repository's page on GitHub.

3. Switch to the branch you created for your changes.

4. You should see a banner indicating that you recently pushed a new branch. Click on the "Compare & pull request" button on that banner.

5. Make sure the base repository is set to the original AR.IO repository and the base branch is set to "staging".

6. Provide a brief description of your changes in the pull request form. Ensure your title adheres to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) standards.

7. Review the changes and confirm they appear as expected.

8. Once you're ready, click on the "Create pull request" button. The AR.IO team will review the request and, if approved, merge your changes into the staging branch of the repository. The changes will later be merged into the main branch for production deployment.
