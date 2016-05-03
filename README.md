# example

example is a cli application that uses subcommands to organize functionality into an easily-readable, fluent argument style.

## Installation


To install, make sure you have git installed

    sudo apt-get install git

Then clone the repo somewhere on your path

    cd ~/bin
    git clone https://github.com/doug-wade/example-sub

You may have to make the script executable as well

    chmod a+x ~/bin/example



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
