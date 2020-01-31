import { Controller, Get, Res, Req, NotFoundException } from '@nestjs/common';
import { Response, Request } from 'express';
import * as fs from 'fs';
import { APP_CONST } from '@app/constants/app.constants';

@Controller('')
export class SitemapController {
  @Get('*.xml')
  async getSiteMap(
    @Res()
    res: Response,
    @Req()
    req: Request,
  ) {
    const xlmPath = APP_CONST.SITE_MAP_DIR + req.url;
    if (fs.existsSync(xlmPath)) {
      const siteMapStream = fs.createReadStream(xlmPath);
      res.header('Content-Type', 'application/xml');
      siteMapStream.pipe(res);
    } else {
      throw new NotFoundException();
    }
  }
}
