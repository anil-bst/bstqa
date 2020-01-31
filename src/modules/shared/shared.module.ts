import { Module, HttpModule } from '@nestjs/common';
import { RouteUtils, LocaleUtils } from '@app/utils';

const imports = [HttpModule];
const providers = [RouteUtils, LocaleUtils];
@Module({
  imports,
  providers,
  exports: [...imports, ...providers],
})
export class SharedModule {}
