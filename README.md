# jsonc2json

Made to create a commented version of `package.json`

## Purpose

Creates a `package.jsonb` file that you can actually comment. Then it can be compiled into the actual `package.json` which node recognizes.


## Quick Setup

### 1. Install the tool

From the project root run:

```shell
git clone https://github.com/DicksonChris/jsonc2json.git
cd jsonc2json
npm install -g .
```

### 2. Add one line to `package.json`

Add the following line to `package.json` inside the `scripts` object:

```json
"scripts": {
        "build:json": "jsonc2json package.jsonc package.json",
```

### 3. Create your new jsonc file

```shell
cp package.json package.jsonc
```

### 4. Use it. 

Now whenever you want to edit your projects `package.json` file, instead you can edit the `package.jsonb` file and comment it to your hearts content.

### 5. Issues

Oh boy... probably don't use this. 

One issue I can think of is if you `npm i <some-package>` the `.json` file will have new lines which the `.jsonb` file doesn't. This seems solvable by checking the automatically differences before compiling but we'll see.


## Documentation

Takes the source file, outputs the destination file if it can.

```shell
jsonc2json <source file> <destination file>
```
