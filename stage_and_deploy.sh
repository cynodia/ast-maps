#!/bin/bash
CF_ID1="E1XAG5EBVMQWWB"
CF_ID2="E32C96K56BB5FT"

echo "Deploying to S3..."
aws s3 sync dist s3://mtbmaps.net/ --cache-control max-age=604800 --acl public-read > /dev/null
aws cloudfront create-invalidation --distribution-id $CF_ID1 --paths "/*"
aws cloudfront create-invalidation --distribution-id $CF_ID2 --paths "/*"
