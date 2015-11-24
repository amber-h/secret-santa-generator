#! /bin/bash
SHA1=$1

# Deploy image to Docker Hub
docker push amberhoule/secret-santa-client:$SHA1
docker push amberhoule/secret-santa-server:$SHA1

# Create new Elastic Beanstalk version
EB_BUCKET=secret-santa-dockerrun
DOCKERRUN_FILE=$SHA1-Dockerrun.aws.json
sed "s/<TAG>/$SHA1/" < Dockerrun.aws.json.template > $DOCKERRUN_FILE
aws s3 cp $DOCKERRUN_FILE s3://$EB_BUCKET/$DOCKERRUN_FILE
aws elasticbeanstalk create-application-version --application-name secret-santa-sender \
  --version-label $SHA1 --source-bundle S3Bucket=$EB_BUCKET,S3Key=$DOCKERRUN_FILE

# Update Elastic Beanstalk environment to new version
aws elasticbeanstalk update-environment --environment-name secret-santa-sender-stg \
    --version-label $SHA1
