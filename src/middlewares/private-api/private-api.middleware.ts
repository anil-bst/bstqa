import {
  Injectable,
  NestMiddleware,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@config/config.service';

@Injectable()
export class PrivateApiMiddleware implements NestMiddleware {
  constructor(private configService: ConfigService) {}
  use(req: any, res: any, next: () => void) {
    const authToken = req.headers.authorization;
    if (authToken === this.configService.get('PRIVATE_API_TOKEN')) {
      next();
    } else {
      throw new UnauthorizedException('Token is required');
    }
  }
}
