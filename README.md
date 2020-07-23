# Seed builder

This repository holds the source code of the **seed builder** for the generation of a **Django api & React web** .

## Installation:

For the latest stable version:

```bash
npm install -g seed-builder
```

## Examples

-  Build a project
```bash
seed-builder
```

-  Build a project with specific params
```bash
seed-builder build -i ./settings/SeedManifest.json
```

-  Export modules (override)
```bash
seed-builder export -i SeedManifest.json -m views:__all__
```

-  Show help
```bash
seed-builder -h
```