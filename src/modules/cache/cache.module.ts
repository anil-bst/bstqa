import { Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import { ConfigModule } from '@config/config.module';
import { ConfigService } from '@config/config.service';
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: CacheService,
      useFactory: (configService: ConfigService) => {
        return new CacheService({
          host: configService.get('REDIS_HOST') || '127.0.0.1',
          port: parseInt(configService.get('REDIS_PORT'), 10) || 6379,
          // password: configService.get('REDIS_PASSWORD') || 'foobared',
          db: parseInt(configService.get('REDIS_DB'), 10) || 0,
          connectTimeout: 2000,
          maxRetriesPerRequest: 1,
          cacheType: 'redis',
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [CacheService],
})
export class CacheModule {}
