#!/bin/bash

BUCKET=bsd-launchbox-learner-production
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

VERSION=1.0.0
DIST_DIR=$DIR/../dist/
rm -rf $DIST_DIR/$VERSION
mkdir $DIST_DIR/$VERSION
cp $DIST_DIR/bsd-overlay.js $DIST_DIR/$VERSION/bsd-overlay-$VERSION.js
cp -r $DIR/../docs $DIST_DIR/$VERSION

aws s3 sync $DIST_DIR/$VERSION s3://$BUCKET/resources/modules/bsd-overlay/$VERSION