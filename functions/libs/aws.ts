import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { captureAWSClient } from 'aws-xray-sdk-core'

export const ddb = new DocumentClient()
/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
captureAWSClient((ddb as any).service)
