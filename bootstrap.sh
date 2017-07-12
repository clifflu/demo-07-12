#!/bin/bash

if [ `uname` != "Linux" ]; then
  echo "The script is designed for Linux only, now exit."
  exit 1
fi

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
SCRIPT="$DIR/index.js"

npm install -g forever
forever restart -s "$SCRIPT" || forever start -s "$SCRIPT"
echo "forever restart -s \"$SCRIPT\" || forever start -s \"$SCRIPT\"" >> /etc/rc.local
chmod a+x /etc/rc.local
