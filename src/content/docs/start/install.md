---
title: Install
description: Download Fels for Windows or Linux and put it on your PATH.
---

Fels runs on 64-bit Windows and Linux, and builds programs for both. The
[latest release](https://github.com/fels-lang/fels/releases/latest) has a download for each.

## Windows

1. Download `fels-<version>-x86_64-windows.zip` from the latest release.
2. Unpack it and run `install.ps1` in that folder. It copies Fels to `%LOCALAPPDATA%\fels` and
   puts it on your PATH.
3. Open a new terminal and type `fels version` to check that it works.

## Linux

1. Download `fels-<version>-x86_64-linux.tar.gz` and unpack it.
2. Run `./install.sh` in that folder. It copies Fels to `~/.fels` and puts it on your PATH.
3. Open a new terminal and type `fels version`.

Fels needs the C++ runtime of GCC 11 or newer (Ubuntu 22.04, Debian 12, Fedora 35 and later).

## Editor

`fels lsp` is a language server: errors as you type, completion, hover and go to definition.

- **Zed**: install the [Fels extension](https://github.com/fels-lang/zed-fels). It adds run
  buttons beside `main` and each test.
- **Other editors**: point your LSP client at `fels lsp`, and use the
  [tree-sitter grammar](https://github.com/fels-lang/tree-sitter-fels) for highlighting.

## Building Fels yourself

The compiler is written in Zig 0.16. You need an LLVM build that includes its C headers: on
Linux, llvm.org's release (`LLVM-22.1.6-Linux-X64.tar.xz`, which the build links statically), on
Windows `clang+llvm-22.1.6-x86_64-pc-windows-msvc.tar.xz`.

```sh
zig build -Dllvm-path=path/to/llvm
zig build test -Dllvm-path=path/to/llvm
```

The compiler lands in `zig-out/bin`.

Stuck? Ask in #help on the [Fels Discord](https://discord.gg/QBV3XgGhDn).

Next: [your first program](/start/first-program/).
