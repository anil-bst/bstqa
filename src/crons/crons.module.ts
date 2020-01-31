import { Module } from '@nestjs/common';
import { CronsService } from '@app/crons/crons.service';

@Module({
  imports: [],
  providers: [CronsService],
  exports: [CronsService],
})
export class CronModule {}
