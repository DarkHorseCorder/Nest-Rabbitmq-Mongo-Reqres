import { Module, Provider } from '@nestjs/common';
import AbstractMailer from './mailer.abstract';
import MockMailerService from './mock.mailer.service';

const providers: Provider[] = [
  {
    provide: AbstractMailer,
    useClass: MockMailerService,
  },
];

@Module({
  providers,
  exports: providers,
})
export class MailerModule {}
