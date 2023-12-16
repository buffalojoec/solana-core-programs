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
import { getU32Decoder, getU32Encoder } from '@solana/codecs-numbers';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  WritableAccount,
} from '@solana/instructions';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';

export type UpgradeNonceAccountInstruction<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountNonceAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountNonceAccount extends string
        ? WritableAccount<TAccountNonceAccount>
        : TAccountNonceAccount,
      ...TRemainingAccounts
    ]
  >;

export type UpgradeNonceAccountInstructionWithSigners<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountNonceAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountNonceAccount extends string
        ? WritableAccount<TAccountNonceAccount>
        : TAccountNonceAccount,
      ...TRemainingAccounts
    ]
  >;

export type UpgradeNonceAccountInstructionData = { discriminator: number };

export type UpgradeNonceAccountInstructionDataArgs = {};

export function getUpgradeNonceAccountInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>([
      ['discriminator', getU32Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 12 })
  ) satisfies Encoder<UpgradeNonceAccountInstructionDataArgs>;
}

export function getUpgradeNonceAccountInstructionDataDecoder() {
  return getStructDecoder<UpgradeNonceAccountInstructionData>([
    ['discriminator', getU32Decoder()],
  ]) satisfies Decoder<UpgradeNonceAccountInstructionData>;
}

export function getUpgradeNonceAccountInstructionDataCodec(): Codec<
  UpgradeNonceAccountInstructionDataArgs,
  UpgradeNonceAccountInstructionData
> {
  return combineCodec(
    getUpgradeNonceAccountInstructionDataEncoder(),
    getUpgradeNonceAccountInstructionDataDecoder()
  );
}

export type UpgradeNonceAccountInput<TAccountNonceAccount extends string> = {
  nonceAccount: Address<TAccountNonceAccount>;
};

export type UpgradeNonceAccountInputWithSigners<
  TAccountNonceAccount extends string
> = {
  nonceAccount: Address<TAccountNonceAccount>;
};

export function getUpgradeNonceAccountInstruction<
  TAccountNonceAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  input: UpgradeNonceAccountInputWithSigners<TAccountNonceAccount>
): UpgradeNonceAccountInstructionWithSigners<TProgram, TAccountNonceAccount>;
export function getUpgradeNonceAccountInstruction<
  TAccountNonceAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  input: UpgradeNonceAccountInput<TAccountNonceAccount>
): UpgradeNonceAccountInstruction<TProgram, TAccountNonceAccount>;
export function getUpgradeNonceAccountInstruction<
  TAccountNonceAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(input: UpgradeNonceAccountInput<TAccountNonceAccount>): IInstruction {
  // Program address.
  const programAddress =
    '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getUpgradeNonceAccountInstructionRaw<TProgram, TAccountNonceAccount>
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    nonceAccount: { value: input.nonceAccount ?? null, isWritable: true },
  };

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getUpgradeNonceAccountInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    programAddress
  );

  return instruction;
}

export function getUpgradeNonceAccountInstructionRaw<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountNonceAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    nonceAccount: TAccountNonceAccount extends string
      ? Address<TAccountNonceAccount>
      : TAccountNonceAccount;
  },
  programAddress: Address<TProgram> = '11111111111111111111111111111111' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.nonceAccount, AccountRole.WRITABLE),
      ...(remainingAccounts ?? []),
    ],
    data: getUpgradeNonceAccountInstructionDataEncoder().encode({}),
    programAddress,
  } as UpgradeNonceAccountInstruction<
    TProgram,
    TAccountNonceAccount,
    TRemainingAccounts
  >;
}
