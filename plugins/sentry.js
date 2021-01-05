import Vue from 'vue'
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

export default () => {
  Sentry.init({
    dsn: 'https://959fc2fc05fd4ea98e84a36dadf8a633@sentry.youmeng.me/9',
    integrations: [new Integrations.Vue({ Vue, attachProps: true })]
  })
}
