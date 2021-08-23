---
title: Wget
---

[Wget](https://www.gnu.org/software/wget/) is used to retrieve files from the command line. I mostly use two of the commands.

## Fetching a single file

```bash
wget https://example.com/link-to-file.png
```

With a name:

```bash
wget -O new-file-name.png https://example.com/link-to-file.png
```

## Fetching multiple files

List all the files you want in `files.txt`

```txt
https://example.com/link-to-file-1.png
https://example.com/link-to-file-2.png
https://example.com/link-to-file-3.png
```

Then run this and wget will fetch all the files:

```bash
wget -i ./files.txt
```