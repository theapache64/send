import { Type, Expose } from 'class-transformer';

/**
* Generated using MockAPI (https://github.com/theapache64/Mock-API) : Tue Aug 14 11:22:06 UTC 2018
*/

export class SmtpConfig {

  @Expose({ name: 'port' })
  readonly port: string;

  @Expose({ name: 'host' })
  readonly host: string;

  @Expose({ name: 'password' })
  readonly password: string;

  @Expose({ name: 'username' })
  readonly username: string;

}

export class SendConfig {

  @Type(() => SmtpConfig)
  @Expose({ name: 'smtp_config' })
  readonly smtpConfig: SmtpConfig;

  @Expose({ name: 'default_domain' })
  readonly defaultDomain: string;

  @Expose({ name: 'name' })
  readonly name: string;

}
