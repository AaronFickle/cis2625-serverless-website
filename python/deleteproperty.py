import json
import boto3

# Get the service resource.
# Instantiate a table resouce objectable resource object
dydbTable = boto3.resource('dynamodb').Table('properties')

def lambda_handler(event, context):

    dydbTable.delete_item(
        Key={
        "pid":event["queryStringParameters"]["pid"]
           }
    )
    
    body = {"result":"The property is deleted"}
   
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(body)
    }