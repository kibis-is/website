import { useEffect, useState } from 'react';

// types
import { IUseTypewriterEffectOptions } from './types';

export default function useTypingEffect({
  text,
  duration = 50,
  isTypeByLetter = true,
}: IUseTypewriterEffectOptions): string {
  // state
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  // misc
  const items: string[] = isTypeByLetter ? text.split('') : text.split(' ');

  useEffect(() => setCurrentPosition(0), [text]);
  useEffect(() => {
    let intervalId: number;

    if (currentPosition >= items.length) {
      return;
    }

    intervalId = window.setInterval(
      () => setCurrentPosition((prevPosition) => prevPosition + 1),
      duration
    );

    return () => clearInterval(intervalId);
  }, [currentPosition, items, duration]);

  return items.slice(0, currentPosition).join(isTypeByLetter ? '' : ' ');
}
