#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
SUBDOMAIN=bsd-overlay-$USER
DOMAIN=serveo.net
PORT=3827

# Start the node process to serve the dist directory.
node $DIR/index.js $PORT &

COLOUR='\033[0;33m'
NC='\033[0m' # No Color

echo "--------------------------------------"
echo "You can now use the version which is currently in 'dist' from the web."
echo "Just add the following to your HTML:"
echo -e "${COLOUR}<script type=\"text/javascript\" src=\"https://$SUBDOMAIN.$DOMAIN/dist/bsd-overlay.js\"></script>${NC}"
echo

# Start the serveo tunnel to expose this port to the world.
ssh -R $SUBDOMAIN:80:localhost:$PORT $DOMAIN

echo -e "${COLOUR}Ctrl-c again please!${NC}"
wait $(jobs -p)