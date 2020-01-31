/* tslint:disable:max-classes-per-file */
import Redis from 'ioredis';
import Memcached from 'memcached';

export class CacheService {
  private readonly cacheClient: any;

  constructor(cacheConfigObj: any) {
    if (cacheConfigObj.cacheType === 'redis') {
      this.cacheClient = new RedisService(cacheConfigObj);
    } else {
      this.cacheClient = new MemcachedService(cacheConfigObj);
    }
  }

  async get(key: string): Promise<any> {
    return this.cacheClient.get(key);
  }

  async set(key: string, value: string): Promise<any> {
    return this.cacheClient.set(key, value);
  }

  async flushAll(): Promise<any> {
    return this.cacheClient.flushAll();
  }
}

class RedisService {
  private readonly redisClient: any;

  constructor(redisConfigObj: any) {
    this.redisClient = new Redis({
      port: redisConfigObj.port,
      host: redisConfigObj.host,
      db: redisConfigObj.db,
      connectTimeout: redisConfigObj.connectTimeout,
      maxRetriesPerRequest: redisConfigObj.maxRetriesPerRequest,
      retryStrategy: (times: any) => {
        const delay = Math.min(times * 500, 3000);
        return delay;
      },
    });
  }

  async get(key: string): Promise<any> {
    return this.redisClient.get(key);
  }

  async set(key: string, value: string): Promise<any> {
    return this.redisClient.set(key, value);
  }

  async flushAll(): Promise<any> {
    return this.redisClient.flushdb();
  }
}

class MemcachedService {
  private readonly memcachedClient: any;
  constructor(cacheConfigObj: any) {
    this.memcachedClient = new Memcached(
      cacheConfigObj.host + cacheConfigObj.port,
      {
        retries: cacheConfigObj.maxRetriesPerRequest,
        retry: 2000,
        remove: true,
      },
    );
  }

  async get(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.memcachedClient.get(key, (err: Error, result: string) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
    });
  }

  async set(key: string, value: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.memcachedClient.set(key, value, 1000, (err: Error) => {
        if (err) {
          return reject(err);
        }
        return resolve(true);
      });
    });
  }

  async flushAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.memcachedClient.flush((err: Error, result: any) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
    });
  }
}
