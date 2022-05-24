#!/usr/bin/env node

import 'source-map-support/register'
import { App } from 'aws-cdk-lib'
import { LedgerStage } from 'lib/ledger-stage'

const STAGE = 'stage'
const DEFAULT_STAGE = 'dev'

const app = new App()

const stageName: string = app.node.tryGetContext(STAGE)?.toLowerCase() || DEFAULT_STAGE

new LedgerStage(app, stageName, {
  stageName,
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
})
