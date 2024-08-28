import {persistence} from './types';
import {debounce} from 'throttle-debounce';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore need the type definition
import {debounce as DebounceType} from '@types/throttle-debounce';

const cache: Record<string, Promise<unknown>> = {};
const debounced: Record<string, DebounceType<(value: unknown) => Promise<unknown>>> = {};

const cachedPersistence = (base: persistence): persistence => ({
  load: <T>(key: string): Promise<T | undefined> => {
    if (cache[key] === undefined) {
      cache[key] = base.load<T>(key);
    }
    return cache[key] as Promise<T>;
  },
  save: <T>(key: string, value: T): void => {
    // Cache a resolved promise, ensures immediate access to latest result
    cache[key] = Promise.resolve(value);

    // As persistence can be slow, debounce save calls based on key
    if (!debounced[key]) {
      debounced[key] = debounce(200, (value) => {
        base.save(key, value);
      });
    }
    debounced[key](value);
  }
});

export default cachedPersistence;
