export declare const $NestedValue: unique symbol;

// TODO: Couldn't get this to work yet, it's a lot of effort for no real result I guess
export type NestedValue<
  TValue extends unknown[] | Record<string, unknown> | Map<unknown, unknown> =
    | unknown[]
    | Record<string, unknown>,
> = {
  [$NestedValue]: never;
} & TValue;

export declare type IsFlatObject<T extends object> = Extract<
  Exclude<T[keyof T], NestedValue | Date | FileList>,
  any[] | object
> extends never
  ? true
  : false;

export type UniversalDict = Record<string, unknown>;

export type DictKeys<T> = Array<keyof T>;

export type ExtractedStrings<T> = Extract<keyof T, string>;
export type DictKeysExtended<T> = Array<ExtractedStrings<T>>;
