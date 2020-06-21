# Housekeeping

Housekeeping functions automates the up-keeping of the AWS platform.

## Functions

#### EC2 Tag and Destroy

Will go through all of your EC2 instances, checks if the instance has the required tags,
if it does not, it will stop the instance, and add it to a report.
Not as dangerous as it sounds, but still is very fun.

Rules located at `/rules/housekeeping/ec2-tags.json`.
