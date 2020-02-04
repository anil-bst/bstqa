interface Content {
  stepItem: string;
  imgUrl: string;
}
interface ISteps {
  gamePlatform: string;
  stepsHeading: string;
  type?: string;
  firstImage: string;
  stepsContent: Content[];
}

export interface IHowToJoin {
  blocks: ISteps[];
}
