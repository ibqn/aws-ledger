import { Stage, StageProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { LedgerStack } from 'lib/ledger-stack'

type LedgerStageProps = StageProps & {
  stageName: string
}

export class LedgerStage extends Stage {
  constructor(scope: Construct, id: string, props: LedgerStageProps) {
    const { stageName, env, ...otherStageProps } = props

    super(scope, id, { env, ...otherStageProps })

    new LedgerStack(this, 'ledger-stack', { stageName, env })
  }
}
