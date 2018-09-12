#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
VERSION=$npm_package_version
DIST_DIR=$DIR/../dist/
sed -e "s/%VERSION%/$VERSION/g" $DIR/../tutorials/main.md > $DIR/../tutorials/main.x.md

