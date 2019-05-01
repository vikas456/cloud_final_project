#!/bin/bash

echo "starting script"
aws cloudformation create-stack --stack-name testingstack --template-body file://formation.template
echo "created stack"
sleep 10
# aws s3api put-object --bucket websitehostbucket684 --key index.html --body index.html --content-type text/html
# aws s3api put-object --bucket websitehostbucket684 --key error.html --body error.html --content-type text/html
echo "finish uploading objects"
