_example() {
  COMPREPLY=()
  local word="${COMP_WORDS[COMP_CWORD]}"

  local command="${COMP_WORDS[1]}"
  local completions="$(example completions "$command")"
  COMPREPLY=( $(compgen -W "$completions" -- "$word") )
}

complete -F _example example
