import boto3

# Get the service resource.
dydb = boto3.resource('dynamodb')

# Create the DynamoDB table.
table = dydb.create_table(
    TableName='properties',
    KeySchema= [   {
            'AttributeName': 'propertyid',
            'KeyType': 'HASH'
        },
        ],
    AttributeDefinitions = [  {
'AttributeName': 'propertyid',
   'AttributeType': 'S'
        },
    ],
     ProvisionedThroughput = {
        'ReadCapacityUnits': 1,
        'WriteCapacityUnits': 1
                                             }
      )

# Wait until the table exists.
table.wait_until_exists()

# Print out some data about the table.
print(table.item_count)