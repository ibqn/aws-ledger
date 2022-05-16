import { Stack, StackProps } from 'aws-cdk-lib'
import { type Construct } from 'constructs'

import { ApiGateway } from '@constructs/api-gateway'
import { Table } from '@constructs/table'

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

    new Table(this, 'Table')
    new ApiGateway(this, 'ApiGateway', { stageName })
  }
}
