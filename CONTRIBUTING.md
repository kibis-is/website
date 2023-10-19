# Contributing guide

### Table of contents

* [1. Commit messages](#1-commit-messages)
  * [1.1. Type](#11-type)
  * [1.2. Scope](#12-scope)
  * [1.3. Subject](#13-subject)
* [2. Pull requests](#2-pull-requests)
  * [2.1 Branching strategy](#21-branching-strategy)
  * [2.2 Merge to main](#22-merge-to-main)
* [3. Pre-releases](#3-pre-releases)
  * [3.1. Working on a future release](#31-working-on-a-future-release)
  * [3.2. Releasing a bug fix on the default distribution channel](#32-releasing-a-bug-fix-on-the-default-distribution-channel)
  * [3.3. Publishing beta release to the default distribution channel](#33-publishing-beta-release-to-the-default-distribution-channel)
  * [3.4. Working on a new future release](#34-working-on-a-new-future-release)

## 1. Commit messages

Commit messages lean heavily towards the convention set out by [conventional commits][conventional-commits].

Each commit message must be in the format that includes a **type**, an optional **scope** and a **subject**:
```
type(scope?): subject  #scope is optional
```

Limit the whole message to 72 characters or less!

Example:

```
build(terraform): burn it all down
```

### 1.1. Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: npm)
* **chore**: Changes that don't really fall under any other type
* **ci**: Changes to the CI configuration files and scripts
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **revert**: Revert a previous commit
* **test**: Adding missing tests or correcting existing tests

### 1.2. Scope

A scope may be provided to a commit’s type, to provide additional contextual information and is contained within a parenthesis

### 1.3. Subject

The subject contains a succinct description of the change:

* use the present tense ("Add feature" not "Added feature")
* use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* don't capitalise the first letter
* don't use a fullstop (.) at the end. <- Not this

<sup>[Back to top ^](#table-of-contents)</sup>

## 2. Pull requests

### 2.1 Branching strategy

The branching strategy is loosely followed by the [GitFlow][gitflow] git branching strategy. There are two permanent branches;
* `beta` branch, which should always contain the latest code, and is where all feature branches are merged. It can contain unstable code.
* `main` branch should only receive code from the `beta` branch or, if necessary, merge `hotfix` branches. It should only contain stable code.

<sup>[Back to top ^](#table-of-contents)</sup>

### 2.2 Merge to main

1. When a release is production ready, checkout the `main` branch and pull the latest:
```shell
git checkout main
git pull
```
2. Now, we want the `main` branch to mirror the commit history of `beta`, so we want to use Git's fast-forward option; so we use:
```shell
git merge origin/beta --ff-only
```
> 💡 **TIP:** If you want to merge up to a certain commit from `beta`, first checkout the `beta` branch and reset locally to the specific commit. Then checkout `main` and merge from your _local_ `beta` branch:
> ```shell
> git checkout beta
> git reset <commit_hash> --hard # use --hard flag to avoid add loads of files
> git checkout main
> git merge beta --ff-only # notice the absence of origin/ as we will be using our local branch
>```
3. Finally, we want to push the updated `main` branch, so we simply use:
```shell
git push
```

> ⚠️ **NOTE:** Any merge to the `main` branch triggers a deployment to both the SANDBOX and PRODUCTION environments.

<sup>[Back to top ^](#table-of-contents)</sup>

## 3. Pre-releases

### 3.1. Working on a future release

We now decide to work on a future major release, which will be composed of multiple features, some of them being breaking changes. We want to publish our package for each new feature developed for test purpose, however we do not want to increment our package version or make it available until all the features are developed and tested.

To implement that workflow we can commit our first feature to the `beta` branch. When pushing that commit, **semantic-release** will publish the pre-release version `2.0.0-beta.1`.

The Git history of the repository is now:

```
* feat: initial commit # => v1.0.0
| \
|  * feat: first feature \n\n BREAKING CHANGE: it breaks something # => v2.0.0-beta.1
```

We can continue to work on our future release by committing and pushing other features or bug fixes on the `beta` branch. With each push, **semantic-release** will publish a new pre-release.

With another feature, the Git history of the repository is now:

```
* feat: initial commit # => v1.0.0
| \
|  * feat: first feature \n\n BREAKING CHANGE: it breaks something # => v2.0.0-beta.1
|  * feat: second feature # => v2.0.0-beta.2
```

<sup>[Back to top ^](#table-of-contents)</sup>

## 3.2. Releasing a bug fix on the default distribution channel

In the meantime we can also continue to commit changes and release updates to `1.0.0`.

For example, we can commit a bug fix with the message `fix: a fix` to `main`. When pushing that commit, **semantic-release** will release the version `1.0.1`.

The Git history of the repository is now:

```
* feat: initial commit # => v1.0.0
| \
|  * feat: first feature \n\n BREAKING CHANGE: it breaks something # => v2.0.0-beta.1
|  * feat: second feature # => v2.0.0-beta.2
| fix: a fix # => v1.0.1
```

<sup>[Back to top ^](#table-of-contents)</sup>

## 3.3. Publishing beta release to the default distribution channel

Once we've developed and pushed all the features & fixes we want to include in the future version `2.0.0` in the `beta` branch, we can release it to the default distribution channel.

1. First, merge into `beta` any bug fixes:
```shell
git merge origin/main --ff-only
```

2. Next, checkout the `main` branch and pull the latest:
```shell
git checkout main
git pull
```
3. Now, we want the `main` branch to mirror the commit history of `beta`, so we want to use Git's fast-forward option; so we use:
```shell
git merge origin/beta --ff-only
```
> ⚠️**NOTE:** As `beta` and `main` branches may have diverged, this merge might require to resolve conflicts.

Once beta branch has been rebased on to `main`, **semantic-release** will release the version `2.0.0`.

The Git history of the repository is now:

```
* feat: initial commit # => v1.0.0
| \
|  * feat: first feature \n\n BREAKING CHANGE: it breaks something # => v2.0.0-beta.1
|  * feat: second feature # => v2.0.0-beta.2
| fix: a fix # => v1.0.1
| /
| Merge branch beta into main # => v2.0.0
```

<sup>[Back to top ^](#table-of-contents)</sup>

## 3.4. Working on a new future release

We can now start to work on a new future major release, version `3.0.0`.

To do so we first need to update the `beta` branch with all the changes from `main` (the commits `fix: a fix`). As `beta` and `main` branches have diverged, this merge might require to resolve conflicts.

We can now commit our new feature on `beta`. When pushing that commit, **semantic-release** will publish the pre-release version `3.0.0-beta.1`.

The Git history of the repository is now:

```
* feat: initial commit # => v1.0.0
| \
|  * feat: first feature \n\n BREAKING CHANGE: it breaks something # => v2.0.0-beta.1
|  * feat: second feature # => v2.0.0-beta.2
| fix: a fix # => v1.0.1
| /
| Merge branch beta into main # => v2.0.0
| \
|  | Merge branch main into beta
|  | feat: new feature \n\n BREAKING CHANGE: it breaks another thing # => v3.0.0-beta.1
```

<sup>[Back to top ^](#table-of-contents)</sup>

[conventional-commits]: https://www.conventionalcommits.org
[gitflow]: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
