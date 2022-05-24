import { Stack, type StackProps } from 'aws-cdk-lib'
import { type Construct } from 'constructs'

import { ApiGateway } from '@constructs/api-gateway'
import { Table } from '@constructs/table'
import { CreateAccountFunction } from '@constructs/functions/create-account'

type LedgerStackProps = StackProps & {
  stageName: string
}

export class LedgerStack extends Stack {
  constructor(scope: Construct, id: string, props: LedgerStackProps) {
    const { stageName, ...stackProps } = props

    super(scope, id, {
      description: 'Contains all Ledger application resources',
      ...stackProps,
    })

    const table = new Table(this, 'Table')
    const apiGateway = new ApiGateway(this, 'ApiGateway', { stageName })
    new CreateAccountFunction(this, 'CreateAccountFunction', { table, apiGateway })
  }
}
