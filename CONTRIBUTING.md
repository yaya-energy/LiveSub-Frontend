# Contributing to LiveSub

First off, thank you for considering contributing to LiveSub. It's people like you that make LiveSub such a great tool.

## How to Contribute

You can contribute in several ways like creating new features, fixing bugs, improving documentation and examples, or translating any document here to your language.

### Reporting Issues

Before submitting an issue, please check that it has not already been reported. If you have a new issue, click the [issue](link-to-your-issues-page) button and describe it in detail.

### Pull Requests

Pull Requests (PRs) are always welcome. Here's how to get started:

1. **Fork the repository**: This can be done by clicking the Fork button on the top right of the main repository page.
2. **Clone your fork locally**: Use the following command to clone the repository to your local machine:
```bash
git clone https://github.com/your-username/LiveSub.git
```
3. **Create a branch for your changes**: It's best to create a branch for your changes to keep them organized and separate from the main branch:
```bash
git checkout -b branch-name
```
Replace **your-branch-name** with a descriptive name for your branch.

4. **Make your changes:** Add, edit, delete files as required for your contribution.
5. **Commit and push your code to your fork:**
```bash
git commit -m 'Brief description of your changes'
git push origin branch-name
```
6. **Push to your fork:** After committing your changes, push them to your forked repository on GitHub:
```bash
git push origin your-branch-name
```
7. **Submit a Pull Request:** Go to the original LiveSub repository, and you'll see a banner to create a pull request from your new branch. Click the 'New Pull Request' button to submit your changes for review.
Please ensure that you've tested your changes and that all your code adheres to the project's coding standards and guidelines.

### Contribution Prerequisites

- Ensure you have [Node.js (at a minimum v14)](link-to-Node-installation-guide) and [Yarn](link-to-Yarn-installation-guide) installed.
- You are comfortable using Git and GitHub.
- Read our [Code of Conduct](LINK_TO_CODE_OF_CONDUCT.md).

### Setup Development Environment

Here's a quick guide on how to set up LiveSub for development:

```bash
git clone https://github.com/your-username/LiveSub.git
cd LiveSub
yarn install
yarn start
```

## Styleguides

### Git Commit Messages
Use the present tense ("Add feature" not "Added feature").
Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
Limit the first line to 72 characters or less.
Reference issues and pull requests liberally after the first line.

### JavaScript Styleguide
- All JavaScript must adhere to the [JavaScript Standard Style](link-to-JavaScript-Standard-Style).

### Documentation Styleguide
Use Markdown.
Reference your methods and classes in your documentation.
Keep documentation updates in the same PR as your code changes.

### Code review process
The core team looks at Pull Requests on a regular basis. After feedback has been given, we expect responses within two weeks. After two weeks, we may close the PR if it isn't showing any activity.

### Community
Where possible, we use GitHub to directly communicate with our community. In some cases, if the topic is more appropriate, we may use [Gitter](link-to-your-Gitter).

Where possible, we use GitHub to directly communicate with our community. In some cases, if the topic is more appropriate, we may use Gitter.
