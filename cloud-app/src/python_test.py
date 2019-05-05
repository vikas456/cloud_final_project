import json
import urllib.parse
import boto3

print('Loading function')

client = boto3.client('cloudfront')


def lambda_handler():
    #print("Received event: " + json.dumps(event, indent=2))

    # create invalidation for cloudfront
    try:
        print("here")
        response = client.create_invalidation(
                    DistributionId='E2JKYWAM206M3K',
                    InvalidationBatch={
                        'Paths': {
                            'Quantity': 1,
                            'Items': [
                                '/*',
                            ]
                        },
                        'CallerReference': 'timestamp'
                    }
        )
        print(response)
        print("done")
    except Exception as e:
        print(e)
        # print('Et is in the same region as this function.'.format(key, bucket))
        raise e


lambda_handler()