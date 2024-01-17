---
title: Git
---

[Git](https://git-scm.com) is a version control system I use for all my projects.

## Aliases

I almost never type a full git command but instead have a variety of aliases like `g` for `git status`. You can view the [full list on Github](https://github.com/rknightuk/dotfiles/blob/master/git/aliases.zsh). Some of the more useful and unusual ones are listed below.

## Git Logs

```bash
git log --graph --pretty=format'\'':%C(red)%h%Cgreen%d%Creset %s %C(blue) %an, %ar%Creset'\
```

I alias this to `gl` which gives a nicer output than standard:

```git
* ecf4ca4 Fix typo Robb Knight, 4 hours ago
* fecce5a Add copy to clipboard feature Robb Knight, 5 hours ago
* 418d17c Menu now shows and hides Robb Knight, 10 hours ago
```

### Commits Per Day

```git
git log --date=short --pretty=format:%ad | sort | uniq -c
```

Example:

```
 1 2017-12-08
 6 2017-12-26
12 2018-01-01
13 2018-01-02
10 2018-01-14
 7 2018-01-17
 5 2018-01-18
```

### Limit Commits

```git
# limit to 5 commits
git log -n 5
```

### Date Format

```git
git log --date=iso
```

### Get Last Modified Date

```git
git log -1 --format="%ad" -- index.html

# get updated for all files
git ls-tree -r --name-only HEAD | while read filename; do
  echo "$(git log -1 --format="%ad" -- $filename) $filename"
done
```

## Interactively Stage Partial Changes

`git add -p` will go through each hunk of changes and allow you to add them ready for commiting.

## Git Cherry Pick

`git cherry-pick HASH` allows you to take a commit from another branch and add it to your current one. Useful when you commit to the wrong branch, or have changes you need from elsewhere.

## Git Stash

Git stash allows you to temporarily _staash_ changes you've made and then apply them again later.

```bash
$ git stash

# change branch, pull recent changes, etc

$ git stash apply
```

## Get Deleted File Back Before Commit

```bash
git checkout path/to/file.txt
```

## Git Remote

### Viewing Git Repository Remote Urls

`git remote -v`

Output:

```bash
origin  git@github.com:rknightuk/awesome-repo.git (fetch)
origin  git@github.com:rknightuk/awesome-repo.git (push)
```

### Changing a Git Remote

e.g. Changing the `origin` remote url

1. Remove the current one `git remote rm origin`
2. Add the new one with `git remote add origin https://github.com/rknightuk/awesome-repo.git`

## Set Default Branch for Git Init

```bash
git config --global init.defaultBranch main
```

## Change Commit Message

```bash
git commit --amend
```

## Links

- [Oh Shit, Git!?!](https://ohshitgit.com/)
- [The Git Commit Hash - Mike Street](https://www.mikestreety.co.uk/blog/the-git-commit-hash)
- [imsky/git-fresh: Keep your Git repo fresh.](https://github.com/imsky/git-fresh)
- [Mastering Git submodules. Hair-pulling. Helpless rage… | by Christophe Porteneuve | Medium](https://medium.com/@porteneuve/mastering-git-submodules-34c65e940407)
- [Teach Yourself Git Without Learning a Single Git Command | itoshkov.github.io](https://itoshkov.github.io/git-tutorial)
- [gitmoji | An emoji guide for your commit messages](https://gitmoji.dev/)