---
title: Command Line
---

I use [iTerm](https://iterm2.com) with [ZSH](https://www.zsh.org) and [Oh My Zsh](https://ohmyz.sh). My dotfiles are available [on Github](https://github.com/rknightuk/dotfiles). 


## Make Directory

```bash
mkdir directory_name
```

## Move File

```bash
mv myfile.txt new_location/myfile.txt

# Use move to rename a file in place
mv old_name.txt new_name.txt
```

## View Contents of File

```bash
cat myfile.txt
```

## Write or Append to File

```bash
# Overwrite existing contents
echo "Some content" > myfile.txt

# Append to content
echo "Some content" >> myfile.txt
```

## Diff Two Files

```bash
`diff file1.txt file2.txt`

# open in VSCode
`diff file1.txt file2.txt | code -`

# open in Sublime Text
`diff file1.txt file2.txt | sublime -n`
```

## Batch Image Resize

Using [sips](https://ss64.com/osx/sips.html) (scriptable image processing system):

```bash
$ sips -Z 640 *.jpg
```

## Invert Image Colours

```bash
for FILE in *; do convert $FILE -channel RGB -negate $FILE; done
```

## QuickLook a File

```bash
qlmanage -p myfile.txt
```

## Output to Variable

```bash
VARIABLE=$(pwd)
```

## Show Calendar

```bash
$ cal
$ cal -y 2021
```

### Variable is null

```bash
if [ -z "$VAR" ]; then
    echo "VAR is null"
    exit
fi
```

### Output file list

```bash
for file in ./dir/*; do
      echo "${file##*/}"
    done

```

## Related

- [Terminal](/macos/terminal/)

## Links

- [sivel/speedtest-cli: Command line interface for testing internet bandwidth using speedtest.net](https://github.com/sivel/speedtest-cli)
- [deweller/switchaudio-osx: Change the audio source for Mac OS X from the command line.](https://github.com/deweller/switchaudio-osx)
- [Badassify your terminal and shell](https://jilles.me/badassify-your-terminal-and-shell/)
- [Dotfiles Are Meant to Be Forked](https://zachholman.com/2010/08/dotfiles-are-meant-to-be-forked/)
- [The Terminal • furbo.org](https://furbo.org/2014/09/03/the-terminal/)
- [boyter/scc: Sloc, Cloc and Code: scc is a very fast accurate code counter with complexity calculations and COCOMO estimates written in pure Go](https://github.com/boyter/scc)
- [localhost.run tunnel](http://localhost.run/)
- [ngrok - secure introspectable tunnels to localhost](https://ngrok.com/)
- [cURL to fetch](https://kigiri.github.io/fetch/)
- [Planter - indented text files to folders](https://brettterpstra.com/projects/planter/)
- [Linux/BSD command line wizardry: Learn to think in sed, awk, and grep | Ars Technica](https://arstechnica.com/gadgets/2021/08/linux-bsd-command-line-101-using-awk-sed-and-grep-in-the-terminal/)
- [Share local sites via secure tunnels with Expose - Share local sites via secure tunnels with Expose](https://expose.dev/)