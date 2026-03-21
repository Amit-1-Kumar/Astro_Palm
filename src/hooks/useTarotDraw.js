import { useState, useCallback } from 'react';
import { tarotDeck } from '@/data/tarotDeckData';

export const useTarotDraw = () => {
  const [drawnCards, setDrawnCards] = useState([]);
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffleAndDraw = useCallback((count = 1) => {
    setIsShuffling(true);
    // Simulate real shuffling delay
    setTimeout(() => {
      const shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
      setDrawnCards(shuffled.slice(0, count));
      setIsShuffling(false);
    }, 1200); 
  }, []);

  return { drawnCards, isShuffling, shuffleAndDraw };
};
