if [[ ! -o interactive ]]; then
    return
fi

compctl -K _example example

_example() {
  local word words completions
  read -cA words
  word="${words[2]}"

  completions="$(example completions "${word}")"

  reply=("${(ps:\n:)completions}")
}
