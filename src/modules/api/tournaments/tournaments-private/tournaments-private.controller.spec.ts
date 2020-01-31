import { Test, TestingModule } from '@nestjs/testing';
import { TournamentsPrivateController } from './tournaments-private.controller';

describe('TournamentsPrivate Controller', () => {
  let controller: TournamentsPrivateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TournamentsPrivateController],
    }).compile();

    controller = module.get<TournamentsPrivateController>(
      TournamentsPrivateController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
