export type Suit = 'desert' | 'citadel' | 'oasis' | 'mirage';

export interface Card {
  id: string;
  suit: Suit;
  rank: number;
  displayName: string;
  value: number;
}
