import type { Card, Suit } from '../types/card';

const SUITS: Suit[] = ['desert', 'citadel', 'oasis', 'mirage'];

export const generateDeck = (): Card[] => {
    const deck: Card[] = [];
    for(let rank = 1; rank <= 13; rank++) {
        for(const suit of SUITS) {
            const id = `${suit}-${rank}`;
            const displayName = `${rank} of ${suit}`;
            const value = rank;
            deck.push({ id, suit, rank, displayName, value });
        }
    }
    return deck;
}

export const shuffleDeck = (deck: Card[]): Card[] => {
    // do a Fisher-Yates shuffle
    const shuffledDeck = [...deck];
    for(let i = shuffledDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    return shuffledDeck;
}

export const drawCard = (deck: Card[]): { card: Card | null, remainingDeck: Card[] } => {
    if(deck.length === 0) {
        return { card: null, remainingDeck: [] };
    }
    const [card, ...remainingDeck] = deck;
    return { card, remainingDeck };
}