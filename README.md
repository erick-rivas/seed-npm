# Seed builder

This repository holds the source code of the **seed project builder** for the development of a **Django api & React web** .

## Installation:

For the latest stable version:

```bash
$ npm install -g seed-builder
```

## Examples

-  Build project
```bash
$ seed-builder build -i SeedManifest.json
```

-  Export modules
```bash
$ seed-builder export -i SeedManifest.json -m views:__all__
```

-  Show help
```bash
$ seed-builder -h
```