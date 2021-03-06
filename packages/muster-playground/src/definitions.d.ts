/**
 * Remove the variants of the second union of string literals from
 * the first.
 *
 * @see https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
 */
declare type Diff<T extends string | symbol | number, U extends string | symbol | number> = ({
  [P in T]: P
} &
  { [P in U]: never } & { [x: string]: never })[T];

/**
 * Drop keys `K` from `T`.
 *
 * @see https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
 */
declare type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

declare type Purify<T extends string> = { [P in T]: T }[T];

declare module '*.json' {
  const value: any;
  export default value;
}

declare module 'babel-standalone' {
  import * as babelCore from 'babel-core';
  export = babelCore;
}

declare module 'react-reflex' {
  export const ReflexContainer: any;
  export const ReflexElement: any;
  export const ReflexSplitter: any;
}
