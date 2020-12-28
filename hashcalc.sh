echo -n $1 | openssl md5 | cut -c 1-8 | pbcopy
