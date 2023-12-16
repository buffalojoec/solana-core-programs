/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
import { Program } from '../shared';

export const SPL_MEMO_PROGRAM_ADDRESS =
  'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo' as Address<'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo'>;

export type SplMemoProgram =
  Program<'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo'>;

export function createSplMemoProgram(): SplMemoProgram {
  return {
    name: 'splMemo',
    address: SPL_MEMO_PROGRAM_ADDRESS,
  };
}
