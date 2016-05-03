# example

example is a cli application that uses subcommands to organize functionality into an easily-readable, fluent argument style.

## Installation


try {
To install, make sure you have node installed

    sudo apt-get install nodejs

Then install example globally

    npm install -g example


## Use

To get help, or to get the list of all sub commands, simply run `help`

    example help

`help` is also used to discover how to use sub commands

    example help example
    > An example command.
    > Usage:
    >      sub example
    >      > 'You ran the example command!'

To update example, use update

    example update

Though if you haven't updated in a while, example will remind you 😀

Before you run any commands, you'll need to set up some config by running `init`

    example init

Then follow the prompts
