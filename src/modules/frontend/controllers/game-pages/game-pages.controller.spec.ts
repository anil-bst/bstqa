import { Test, TestingModule } from '@nestjs/testing';
import { GamePagesController } from './game-pages.controller';

describe('GamePages Controller', () => {
  let controller: GamePagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GamePagesController],
    }).compile();

    controller = module.get<GamePagesController>(GamePagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
