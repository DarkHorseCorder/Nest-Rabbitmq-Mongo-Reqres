import { MailOptions } from './mailer.types';

export default abstract class AbstractMailer {
  abstract send(mailOptions: MailOptions): Promise<void>;
}
