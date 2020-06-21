import { APIGatewayProxyHandler } from 'aws-lambda';
import * as AWS from 'aws-sdk';
import 'source-map-support/register';
import {AWSError} from "aws-sdk";
import {DescribeInstancesResult} from "aws-sdk/clients/ec2";

export const main: APIGatewayProxyHandler = async (_event, _context) => {

    AWS.config.region = 'eu-west-2';

    const ec2 = new AWS.EC2();

    ec2.describeInstances(async (error: AWSError, data: DescribeInstancesResult) => {
        if (error) {
            console.log(error, error.stack);

            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: 'Could not describe all EC2 instances.'
                }, null, 2)
            }
        }
    });

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Cleaned up all instances.'
        }, null, 2)
    }
}
