import { Test, TestingModule } from '@nestjs/testing';
import { TournamentsPublicController } from './tournaments-public.controller';

describe('Tournaments Controller', () => {
  let controller: TournamentsPublicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TournamentsPublicController],
    }).compile();

    controller = module.get<TournamentsPublicController>(
      TournamentsPublicController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
