import { Injectable } from '@nestjs/common';
import AbstractMailer from './mailer.abstract';
import { MailOptions } from './mailer.types';

const sleep = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
  });

@Injectable()
export default class MockMailerService extends AbstractMailer {
  public mails: MailOptions[] = [];

  async send(mailOptions: MailOptions) {
    this.mails.push({ ...mailOptions });
    await sleep(1000);
    console.log('Mail successfully sent!', mailOptions);
  }
}
