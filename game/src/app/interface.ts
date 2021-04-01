export enum STATUS_ONE_SQUARE {
  PC = 'PC',
  FREE = 'FREE',
  USER = 'USER',
}

export enum EVENT {
  NEW_ROUND = 'NEW_ROUND',
  GAME_FINISHED = 'GAME_FINISHED',
}

export interface Score {
  userCount: number;
  pcCount: number;
  winner: STATUS_ONE_SQUARE.USER | STATUS_ONE_SQUARE.PC;
}

