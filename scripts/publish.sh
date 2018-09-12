#!/bin/bash

BUCKET=bsd-launchbox-learner-production
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

VERSION=$npm_package_version
echo "Publishing version $VERSION to S3..."

DIST_DIR=$DIR/../dist/
rm -rf $DIST_DIR/$VERSION
mkdir $DIST_DIR/$VERSION
cp $DIST_DIR/bsd-overlay.js $DIST_DIR/$VERSION/bsd-overlay-$VERSION.js
cp -r $DIR/../docs $DIST_DIR/$VERSION
cp -r $DIR/../example $DIST_DIR/$VERSION
FIND="\.\.\/dist\/bsd-overlay.js"
REPLACE="\.\.\/bsd-overlay-${VERSION}.js"
sed -i -e "s/$FIND/$REPLACE/g" $DIST_DIR/$VERSION/example/index.html

aws s3 sync $DIST_DIR/$VERSION s3://$BUCKET/resources/modules/bsd-overlay/$VERSION