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
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  ReadonlySignerAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  Context,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
  getProgramAddress,
} from '../shared';

export type CreateEmptyLutInstruction<
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111',
  TAccountAddress extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAddress extends string
        ? WritableAccount<TAccountAddress>
        : TAccountAddress,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority>
        : TAccountAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts
    ]
  >;

export type CreateEmptyLutInstructionWithSigners<
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111',
  TAccountAddress extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAddress extends string
        ? WritableAccount<TAccountAddress>
        : TAccountAddress,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority> &
            IAccountSignerMeta<TAccountAuthority>
        : TAccountAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts
    ]
  >;

export type CreateEmptyLutInstructionData = {
  discriminator: number;
  recentSlot: bigint;
  bump: number;
};

export type CreateEmptyLutInstructionDataArgs = {
  recentSlot: number | bigint;
  bump: number;
};

export function getCreateEmptyLutInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{
      discriminator: number;
      recentSlot: number | bigint;
      bump: number;
    }>([
      ['discriminator', getU32Encoder()],
      ['recentSlot', getU64Encoder()],
      ['bump', getU8Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 0 })
  ) satisfies Encoder<CreateEmptyLutInstructionDataArgs>;
}

export function getCreateEmptyLutInstructionDataDecoder() {
  return getStructDecoder<CreateEmptyLutInstructionData>([
    ['discriminator', getU32Decoder()],
    ['recentSlot', getU64Decoder()],
    ['bump', getU8Decoder()],
  ]) satisfies Decoder<CreateEmptyLutInstructionData>;
}

export function getCreateEmptyLutInstructionDataCodec(): Codec<
  CreateEmptyLutInstructionDataArgs,
  CreateEmptyLutInstructionData
> {
  return combineCodec(
    getCreateEmptyLutInstructionDataEncoder(),
    getCreateEmptyLutInstructionDataDecoder()
  );
}

export type CreateEmptyLutInput<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string
> = {
  address: Address<TAccountAddress>;
  authority?: Address<TAccountAuthority>;
  payer?: Address<TAccountPayer>;
  systemProgram?: Address<TAccountSystemProgram>;
  recentSlot: CreateEmptyLutInstructionDataArgs['recentSlot'];
  bump: CreateEmptyLutInstructionDataArgs['bump'];
};

export type CreateEmptyLutInputWithSigners<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string
> = {
  address: Address<TAccountAddress>;
  authority?: TransactionSigner<TAccountAuthority>;
  payer?: TransactionSigner<TAccountPayer>;
  systemProgram?: Address<TAccountSystemProgram>;
  recentSlot: CreateEmptyLutInstructionDataArgs['recentSlot'];
  bump: CreateEmptyLutInstructionDataArgs['bump'];
};

export function getCreateEmptyLutInstruction<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: CreateEmptyLutInputWithSigners<
    TAccountAddress,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram
  >
): CreateEmptyLutInstructionWithSigners<
  TProgram,
  TAccountAddress,
  TAccountAuthority,
  TAccountPayer,
  TAccountSystemProgram
>;
export function getCreateEmptyLutInstruction<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: CreateEmptyLutInput<
    TAccountAddress,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram
  >
): CreateEmptyLutInstruction<
  TProgram,
  TAccountAddress,
  TAccountAuthority,
  TAccountPayer,
  TAccountSystemProgram
>;
export function getCreateEmptyLutInstruction<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111'
>(
  input: CreateEmptyLutInputWithSigners<
    TAccountAddress,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram
  >
): CreateEmptyLutInstructionWithSigners<
  TProgram,
  TAccountAddress,
  TAccountAuthority,
  TAccountPayer,
  TAccountSystemProgram
>;
export function getCreateEmptyLutInstruction<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111'
>(
  input: CreateEmptyLutInput<
    TAccountAddress,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram
  >
): CreateEmptyLutInstruction<
  TProgram,
  TAccountAddress,
  TAccountAuthority,
  TAccountPayer,
  TAccountSystemProgram
>;
export function getCreateEmptyLutInstruction<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | CreateEmptyLutInput<
        TAccountAddress,
        TAccountAuthority,
        TAccountPayer,
        TAccountSystemProgram
      >,
  rawInput?: CreateEmptyLutInput<
    TAccountAddress,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram
  >
): IInstruction {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as Pick<
    Context,
    'getProgramAddress'
  >;
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as CreateEmptyLutInput<
    TAccountAddress,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram
  >;

  // Program address.
  const defaultProgramAddress =
    'AddressLookupTab1e1111111111111111111111111' as Address<'AddressLookupTab1e1111111111111111111111111'>;
  const programAddress = (
    context.getProgramAddress
      ? context.getProgramAddress({
          name: 'splAddressLookupTable',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Address<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getCreateEmptyLutInstructionRaw<
      TProgram,
      TAccountAddress,
      TAccountAuthority,
      TAccountPayer,
      TAccountSystemProgram
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    address: { value: input.address ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = getProgramAddress(
      context,
      'splSystem',
      '11111111111111111111111111111111'
    );
    accounts.systemProgram.isWritable = false;
  }

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [];

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  return Object.freeze({
    ...getCreateEmptyLutInstructionRaw(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as CreateEmptyLutInstructionDataArgs,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  });
}

export function getCreateEmptyLutInstructionRaw<
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111',
  TAccountAddress extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    address: TAccountAddress extends string
      ? Address<TAccountAddress>
      : TAccountAddress;
    authority: TAccountAuthority extends string
      ? Address<TAccountAuthority>
      : TAccountAuthority;
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
  },
  args: CreateEmptyLutInstructionDataArgs,
  programAddress: Address<TProgram> = 'AddressLookupTab1e1111111111111111111111111' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.address, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.authority, AccountRole.READONLY_SIGNER),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(
        accounts.systemProgram ?? {
          address:
            '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getCreateEmptyLutInstructionDataEncoder().encode(args),
    programAddress,
  } as CreateEmptyLutInstruction<
    TProgram,
    TAccountAddress,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram,
    TRemainingAccounts
  >;
}
