/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  mapEncoder,
} from '@solana/codecs-core';
import {
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import {
  getU32Decoder,
  getU32Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import {
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
} from '@solana/instructions';
import {} from '../shared';

export type RequestHeapFrameInstruction<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<TRemainingAccounts>;

export type RequestHeapFrameInstructionWithSigners<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<TRemainingAccounts>;

export type RequestHeapFrameInstructionData = {
  discriminator: number;
  /**
   * Requested transaction-wide program heap size in bytes.
   * Must be multiple of 1024. Applies to each program, including CPIs.
   */
  bytes: number;
};

export type RequestHeapFrameInstructionDataArgs = {
  /**
   * Requested transaction-wide program heap size in bytes.
   * Must be multiple of 1024. Applies to each program, including CPIs.
   */
  bytes: number;
};

export function getRequestHeapFrameInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{
      discriminator: number;
      /**
       * Requested transaction-wide program heap size in bytes.
       * Must be multiple of 1024. Applies to each program, including CPIs.
       */
      bytes: number;
    }>([
      ['discriminator', getU8Encoder()],
      ['bytes', getU32Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 1 })
  ) satisfies Encoder<RequestHeapFrameInstructionDataArgs>;
}

export function getRequestHeapFrameInstructionDataDecoder() {
  return getStructDecoder<RequestHeapFrameInstructionData>([
    ['discriminator', getU8Decoder()],
    ['bytes', getU32Decoder()],
  ]) satisfies Decoder<RequestHeapFrameInstructionData>;
}

export function getRequestHeapFrameInstructionDataCodec(): Codec<
  RequestHeapFrameInstructionDataArgs,
  RequestHeapFrameInstructionData
> {
  return combineCodec(
    getRequestHeapFrameInstructionDataEncoder(),
    getRequestHeapFrameInstructionDataDecoder()
  );
}

export type RequestHeapFrameInput = {
  bytes: RequestHeapFrameInstructionDataArgs['bytes'];
};

export type RequestHeapFrameInputWithSigners = {
  bytes: RequestHeapFrameInstructionDataArgs['bytes'];
};

export function getRequestHeapFrameInstruction<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111'
>(
  input: RequestHeapFrameInputWithSigners
): RequestHeapFrameInstructionWithSigners<TProgram>;
export function getRequestHeapFrameInstruction<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111'
>(input: RequestHeapFrameInput): RequestHeapFrameInstruction<TProgram>;
export function getRequestHeapFrameInstruction<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111'
>(input: RequestHeapFrameInput): IInstruction {
  // Program address.
  const programAddress =
    'ComputeBudget111111111111111111111111111111' as Address<'ComputeBudget111111111111111111111111111111'>;

  // Original args.
  const args = { ...input };

  const instruction = getRequestHeapFrameInstructionRaw(
    args as RequestHeapFrameInstructionDataArgs,
    programAddress
  );

  return instruction;
}

export function getRequestHeapFrameInstructionRaw<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  args: RequestHeapFrameInstructionDataArgs,
  programAddress: Address<TProgram> = 'ComputeBudget111111111111111111111111111111' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: remainingAccounts ?? [],
    data: getRequestHeapFrameInstructionDataEncoder().encode(args),
    programAddress,
  } as RequestHeapFrameInstruction<TProgram, TRemainingAccounts>;
}

export type ParsedRequestHeapFrameInstruction<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111'
> = {
  programAddress: Address<TProgram>;
  data: RequestHeapFrameInstructionData;
};

export function parseRequestHeapFrameInstruction<TProgram extends string>(
  instruction: IInstruction<TProgram> & IInstructionWithData<Uint8Array>
): ParsedRequestHeapFrameInstruction<TProgram> {
  return {
    programAddress: instruction.programAddress,
    data: getRequestHeapFrameInstructionDataDecoder().decode(instruction.data),
  };
}
