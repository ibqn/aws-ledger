import { aws_apigateway } from 'aws-cdk-lib'
import { type Construct } from 'constructs'

type ApiGatewayProps = {
  stageName: string
}

export class ApiGateway extends aws_apigateway.RestApi {
  constructor(scope: Construct, id: string, props: ApiGatewayProps) {
    const { stageName } = props

    super(scope, id, { deployOptions: { stageName } })

    // Remove once Lambda integration methods are defined
    this.root.addMethod('ANY')
  }
}
