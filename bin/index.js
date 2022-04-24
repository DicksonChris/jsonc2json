#! /usr/bin/env node

const jsoncParser = require("jsonc-parser");
const fs = require("fs");

require("yargs").command(
    "$0 <source file> <destination file>",
    "Takes a JSONC file as its first argument and outputs it as a JSON file to the second argument.\n\nIntended for converting a package.jsonc file to a package.json file.",
    () => {},
    function ({  sourcefile, destinationfile }) {
        console.log({sourcefile: sourcefile, destinationfile})

        const filename = sourcefile;
        
        try {
            // Get the file contents
            const sourceJSONC = fs.readFileSync(process.cwd() + "/" + filename, "utf8");
            // Parse for JSON from the provided file using jsonc-parser library
            const parsedJSON = jsoncParser.parse(sourceJSONC);
            const stringifiedJSON = JSON.stringify(parsedJSON, null, 4);
            // Write the parsed JSON to the destination file
            fs.writeFileSync(destinationfile, stringifiedJSON);
        } catch (err) {
            // If there is an error, print it to the console
            console.error(err);
        }
    }
).argv;