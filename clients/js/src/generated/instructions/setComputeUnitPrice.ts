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
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import {
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
} from '@solana/instructions';
import { Context } from '../shared';

export type SetComputeUnitPriceInstruction<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<TRemainingAccounts>;

export type SetComputeUnitPriceInstructionWithSigners<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<TRemainingAccounts>;

export type SetComputeUnitPriceInstructionData = {
  discriminator: number;
  /** Transaction compute unit price used for prioritization fees. */
  microLamports: bigint;
};

export type SetComputeUnitPriceInstructionDataArgs = {
  /** Transaction compute unit price used for prioritization fees. */
  microLamports: number | bigint;
};

export function getSetComputeUnitPriceInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{
      discriminator: number;
      /** Transaction compute unit price used for prioritization fees. */
      microLamports: number | bigint;
    }>([
      ['discriminator', getU8Encoder()],
      ['microLamports', getU64Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 3 })
  ) satisfies Encoder<SetComputeUnitPriceInstructionDataArgs>;
}

export function getSetComputeUnitPriceInstructionDataDecoder() {
  return getStructDecoder<SetComputeUnitPriceInstructionData>([
    ['discriminator', getU8Decoder()],
    ['microLamports', getU64Decoder()],
  ]) satisfies Decoder<SetComputeUnitPriceInstructionData>;
}

export function getSetComputeUnitPriceInstructionDataCodec(): Codec<
  SetComputeUnitPriceInstructionDataArgs,
  SetComputeUnitPriceInstructionData
> {
  return combineCodec(
    getSetComputeUnitPriceInstructionDataEncoder(),
    getSetComputeUnitPriceInstructionDataDecoder()
  );
}

export type SetComputeUnitPriceInput = {
  microLamports: SetComputeUnitPriceInstructionDataArgs['microLamports'];
};

export type SetComputeUnitPriceInputWithSigners = {
  microLamports: SetComputeUnitPriceInstructionDataArgs['microLamports'];
};

export function getSetComputeUnitPriceInstruction<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: SetComputeUnitPriceInputWithSigners
): SetComputeUnitPriceInstructionWithSigners<TProgram>;
export function getSetComputeUnitPriceInstruction<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: SetComputeUnitPriceInput
): SetComputeUnitPriceInstruction<TProgram>;
export function getSetComputeUnitPriceInstruction<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111'
>(
  input: SetComputeUnitPriceInputWithSigners
): SetComputeUnitPriceInstructionWithSigners<TProgram>;
export function getSetComputeUnitPriceInstruction<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111'
>(input: SetComputeUnitPriceInput): SetComputeUnitPriceInstruction<TProgram>;
export function getSetComputeUnitPriceInstruction<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111'
>(
  rawContext: Pick<Context, 'getProgramAddress'> | SetComputeUnitPriceInput,
  rawInput?: SetComputeUnitPriceInput
): IInstruction {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as Pick<
    Context,
    'getProgramAddress'
  >;
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as SetComputeUnitPriceInput;

  // Program address.
  const defaultProgramAddress =
    'ComputeBudget111111111111111111111111111111' as Address<'ComputeBudget111111111111111111111111111111'>;
  const programAddress = (
    context.getProgramAddress
      ? context.getProgramAddress({
          name: 'splComputeBudget',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Address<TProgram>;

  // Original args.
  const args = { ...input };

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [];

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  return Object.freeze({
    ...getSetComputeUnitPriceInstructionRaw(
      args as SetComputeUnitPriceInstructionDataArgs,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  });
}

export function getSetComputeUnitPriceInstructionRaw<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  args: SetComputeUnitPriceInstructionDataArgs,
  programAddress: Address<TProgram> = 'ComputeBudget111111111111111111111111111111' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: remainingAccounts ?? [],
    data: getSetComputeUnitPriceInstructionDataEncoder().encode(args),
    programAddress,
  } as SetComputeUnitPriceInstruction<TProgram, TRemainingAccounts>;
}
