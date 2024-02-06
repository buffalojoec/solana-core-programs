/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Address,
  getAddressDecoder,
  getAddressEncoder,
} from '@solana/addresses';
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
  getU64Decoder,
  getU64Encoder,
} from '@solana/codecs-numbers';
import { getStringDecoder, getStringEncoder } from '@solana/codecs-strings';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlySignerAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';

export type CreateAccountWithSeedInstruction<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountNewAccount extends string | IAccountMeta<string> = string,
  TAccountBaseAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountNewAccount extends string
        ? WritableAccount<TAccountNewAccount>
        : TAccountNewAccount,
      TAccountBaseAccount extends string
        ? ReadonlySignerAccount<TAccountBaseAccount>
        : TAccountBaseAccount,
      ...TRemainingAccounts
    ]
  >;

export type CreateAccountWithSeedInstructionWithSigners<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountNewAccount extends string | IAccountMeta<string> = string,
  TAccountBaseAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountNewAccount extends string
        ? WritableAccount<TAccountNewAccount>
        : TAccountNewAccount,
      TAccountBaseAccount extends string
        ? ReadonlySignerAccount<TAccountBaseAccount> &
            IAccountSignerMeta<TAccountBaseAccount>
        : TAccountBaseAccount,
      ...TRemainingAccounts
    ]
  >;

export type CreateAccountWithSeedInstructionData = {
  discriminator: number;
  base: Address;
  seed: string;
  amount: bigint;
  space: bigint;
  programAddress: Address;
};

export type CreateAccountWithSeedInstructionDataArgs = {
  base: Address;
  seed: string;
  amount: number | bigint;
  space: number | bigint;
  programAddress: Address;
};

export function getCreateAccountWithSeedInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{
      discriminator: number;
      base: Address;
      seed: string;
      amount: number | bigint;
      space: number | bigint;
      programAddress: Address;
    }>([
      ['discriminator', getU32Encoder()],
      ['base', getAddressEncoder()],
      ['seed', getStringEncoder()],
      ['amount', getU64Encoder()],
      ['space', getU64Encoder()],
      ['programAddress', getAddressEncoder()],
    ]),
    (value) => ({ ...value, discriminator: 3 })
  ) satisfies Encoder<CreateAccountWithSeedInstructionDataArgs>;
}

export function getCreateAccountWithSeedInstructionDataDecoder() {
  return getStructDecoder<CreateAccountWithSeedInstructionData>([
    ['discriminator', getU32Decoder()],
    ['base', getAddressDecoder()],
    ['seed', getStringDecoder()],
    ['amount', getU64Decoder()],
    ['space', getU64Decoder()],
    ['programAddress', getAddressDecoder()],
  ]) satisfies Decoder<CreateAccountWithSeedInstructionData>;
}

export function getCreateAccountWithSeedInstructionDataCodec(): Codec<
  CreateAccountWithSeedInstructionDataArgs,
  CreateAccountWithSeedInstructionData
> {
  return combineCodec(
    getCreateAccountWithSeedInstructionDataEncoder(),
    getCreateAccountWithSeedInstructionDataDecoder()
  );
}

export type CreateAccountWithSeedInput<
  TAccountPayer extends string,
  TAccountNewAccount extends string,
  TAccountBaseAccount extends string
> = {
  payer: Address<TAccountPayer>;
  newAccount: Address<TAccountNewAccount>;
  baseAccount: Address<TAccountBaseAccount>;
  base: CreateAccountWithSeedInstructionDataArgs['base'];
  seed: CreateAccountWithSeedInstructionDataArgs['seed'];
  amount: CreateAccountWithSeedInstructionDataArgs['amount'];
  space: CreateAccountWithSeedInstructionDataArgs['space'];
  programAddress: CreateAccountWithSeedInstructionDataArgs['programAddress'];
};

export type CreateAccountWithSeedInputWithSigners<
  TAccountPayer extends string,
  TAccountNewAccount extends string,
  TAccountBaseAccount extends string
> = {
  payer: TransactionSigner<TAccountPayer>;
  newAccount: Address<TAccountNewAccount>;
  baseAccount: TransactionSigner<TAccountBaseAccount>;
  base: CreateAccountWithSeedInstructionDataArgs['base'];
  seed: CreateAccountWithSeedInstructionDataArgs['seed'];
  amount: CreateAccountWithSeedInstructionDataArgs['amount'];
  space: CreateAccountWithSeedInstructionDataArgs['space'];
  programAddress: CreateAccountWithSeedInstructionDataArgs['programAddress'];
};

export function getCreateAccountWithSeedInstruction<
  TAccountPayer extends string,
  TAccountNewAccount extends string,
  TAccountBaseAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  input: CreateAccountWithSeedInputWithSigners<
    TAccountPayer,
    TAccountNewAccount,
    TAccountBaseAccount
  >
): CreateAccountWithSeedInstructionWithSigners<
  TProgram,
  TAccountPayer,
  TAccountNewAccount,
  TAccountBaseAccount
>;
export function getCreateAccountWithSeedInstruction<
  TAccountPayer extends string,
  TAccountNewAccount extends string,
  TAccountBaseAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  input: CreateAccountWithSeedInput<
    TAccountPayer,
    TAccountNewAccount,
    TAccountBaseAccount
  >
): CreateAccountWithSeedInstruction<
  TProgram,
  TAccountPayer,
  TAccountNewAccount,
  TAccountBaseAccount
>;
export function getCreateAccountWithSeedInstruction<
  TAccountPayer extends string,
  TAccountNewAccount extends string,
  TAccountBaseAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  input: CreateAccountWithSeedInput<
    TAccountPayer,
    TAccountNewAccount,
    TAccountBaseAccount
  >
): IInstruction {
  // Program address.
  const programAddress =
    '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getCreateAccountWithSeedInstructionRaw<
      TProgram,
      TAccountPayer,
      TAccountNewAccount,
      TAccountBaseAccount
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    payer: { value: input.payer ?? null, isWritable: true },
    newAccount: { value: input.newAccount ?? null, isWritable: true },
    baseAccount: { value: input.baseAccount ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getCreateAccountWithSeedInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as CreateAccountWithSeedInstructionDataArgs,
    programAddress
  );

  return instruction;
}

export function getCreateAccountWithSeedInstructionRaw<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountNewAccount extends string | IAccountMeta<string> = string,
  TAccountBaseAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    newAccount: TAccountNewAccount extends string
      ? Address<TAccountNewAccount>
      : TAccountNewAccount;
    baseAccount: TAccountBaseAccount extends string
      ? Address<TAccountBaseAccount>
      : TAccountBaseAccount;
  },
  args: CreateAccountWithSeedInstructionDataArgs,
  programAddress: Address<TProgram> = '11111111111111111111111111111111' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.newAccount, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.baseAccount, AccountRole.READONLY_SIGNER),
      ...(remainingAccounts ?? []),
    ],
    data: getCreateAccountWithSeedInstructionDataEncoder().encode(args),
    programAddress,
  } as CreateAccountWithSeedInstruction<
    TProgram,
    TAccountPayer,
    TAccountNewAccount,
    TAccountBaseAccount,
    TRemainingAccounts
  >;
}

export type ParsedCreateAccountWithSeedInstruction<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[]
> = {
  programAddress: Address<TProgram>;
  accounts: {
    payer: TAccountMetas[0];
    newAccount: TAccountMetas[1];
    baseAccount: TAccountMetas[2];
  };
  data: CreateAccountWithSeedInstructionData;
};

export function parseCreateAccountWithSeedInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[]
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCreateAccountWithSeedInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 3) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      payer: getNextAccount(),
      newAccount: getNextAccount(),
      baseAccount: getNextAccount(),
    },
    data: getCreateAccountWithSeedInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}