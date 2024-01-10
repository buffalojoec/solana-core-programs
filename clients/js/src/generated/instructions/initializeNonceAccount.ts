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
import { getU32Decoder, getU32Encoder } from '@solana/codecs-numbers';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  WritableAccount,
} from '@solana/instructions';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';

export type InitializeNonceAccountInstruction<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountNonceAccount extends string | IAccountMeta<string> = string,
  TAccountRecentBlockhashesSysvar extends
    | string
    | IAccountMeta<string> = 'SysvarRecentB1ockHashes11111111111111111111',
  TAccountRentSysvar extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountNonceAccount extends string
        ? WritableAccount<TAccountNonceAccount>
        : TAccountNonceAccount,
      TAccountRecentBlockhashesSysvar extends string
        ? ReadonlyAccount<TAccountRecentBlockhashesSysvar>
        : TAccountRecentBlockhashesSysvar,
      TAccountRentSysvar extends string
        ? ReadonlyAccount<TAccountRentSysvar>
        : TAccountRentSysvar,
      ...TRemainingAccounts
    ]
  >;

export type InitializeNonceAccountInstructionWithSigners<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountNonceAccount extends string | IAccountMeta<string> = string,
  TAccountRecentBlockhashesSysvar extends
    | string
    | IAccountMeta<string> = 'SysvarRecentB1ockHashes11111111111111111111',
  TAccountRentSysvar extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountNonceAccount extends string
        ? WritableAccount<TAccountNonceAccount>
        : TAccountNonceAccount,
      TAccountRecentBlockhashesSysvar extends string
        ? ReadonlyAccount<TAccountRecentBlockhashesSysvar>
        : TAccountRecentBlockhashesSysvar,
      TAccountRentSysvar extends string
        ? ReadonlyAccount<TAccountRentSysvar>
        : TAccountRentSysvar,
      ...TRemainingAccounts
    ]
  >;

export type InitializeNonceAccountInstructionData = {
  discriminator: number;
  nonceAuthority: Address;
};

export type InitializeNonceAccountInstructionDataArgs = {
  nonceAuthority: Address;
};

export function getInitializeNonceAccountInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number; nonceAuthority: Address }>([
      ['discriminator', getU32Encoder()],
      ['nonceAuthority', getAddressEncoder()],
    ]),
    (value) => ({ ...value, discriminator: 6 })
  ) satisfies Encoder<InitializeNonceAccountInstructionDataArgs>;
}

export function getInitializeNonceAccountInstructionDataDecoder() {
  return getStructDecoder<InitializeNonceAccountInstructionData>([
    ['discriminator', getU32Decoder()],
    ['nonceAuthority', getAddressDecoder()],
  ]) satisfies Decoder<InitializeNonceAccountInstructionData>;
}

export function getInitializeNonceAccountInstructionDataCodec(): Codec<
  InitializeNonceAccountInstructionDataArgs,
  InitializeNonceAccountInstructionData
> {
  return combineCodec(
    getInitializeNonceAccountInstructionDataEncoder(),
    getInitializeNonceAccountInstructionDataDecoder()
  );
}

export type InitializeNonceAccountInput<
  TAccountNonceAccount extends string,
  TAccountRecentBlockhashesSysvar extends string,
  TAccountRentSysvar extends string
> = {
  nonceAccount: Address<TAccountNonceAccount>;
  recentBlockhashesSysvar?: Address<TAccountRecentBlockhashesSysvar>;
  rentSysvar?: Address<TAccountRentSysvar>;
  nonceAuthority: InitializeNonceAccountInstructionDataArgs['nonceAuthority'];
};

export type InitializeNonceAccountInputWithSigners<
  TAccountNonceAccount extends string,
  TAccountRecentBlockhashesSysvar extends string,
  TAccountRentSysvar extends string
> = {
  nonceAccount: Address<TAccountNonceAccount>;
  recentBlockhashesSysvar?: Address<TAccountRecentBlockhashesSysvar>;
  rentSysvar?: Address<TAccountRentSysvar>;
  nonceAuthority: InitializeNonceAccountInstructionDataArgs['nonceAuthority'];
};

export function getInitializeNonceAccountInstruction<
  TAccountNonceAccount extends string,
  TAccountRecentBlockhashesSysvar extends string,
  TAccountRentSysvar extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  input: InitializeNonceAccountInputWithSigners<
    TAccountNonceAccount,
    TAccountRecentBlockhashesSysvar,
    TAccountRentSysvar
  >
): InitializeNonceAccountInstructionWithSigners<
  TProgram,
  TAccountNonceAccount,
  TAccountRecentBlockhashesSysvar,
  TAccountRentSysvar
>;
export function getInitializeNonceAccountInstruction<
  TAccountNonceAccount extends string,
  TAccountRecentBlockhashesSysvar extends string,
  TAccountRentSysvar extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  input: InitializeNonceAccountInput<
    TAccountNonceAccount,
    TAccountRecentBlockhashesSysvar,
    TAccountRentSysvar
  >
): InitializeNonceAccountInstruction<
  TProgram,
  TAccountNonceAccount,
  TAccountRecentBlockhashesSysvar,
  TAccountRentSysvar
>;
export function getInitializeNonceAccountInstruction<
  TAccountNonceAccount extends string,
  TAccountRecentBlockhashesSysvar extends string,
  TAccountRentSysvar extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  input: InitializeNonceAccountInput<
    TAccountNonceAccount,
    TAccountRecentBlockhashesSysvar,
    TAccountRentSysvar
  >
): IInstruction {
  // Program address.
  const programAddress =
    '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getInitializeNonceAccountInstructionRaw<
      TProgram,
      TAccountNonceAccount,
      TAccountRecentBlockhashesSysvar,
      TAccountRentSysvar
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    nonceAccount: { value: input.nonceAccount ?? null, isWritable: true },
    recentBlockhashesSysvar: {
      value: input.recentBlockhashesSysvar ?? null,
      isWritable: false,
    },
    rentSysvar: { value: input.rentSysvar ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.recentBlockhashesSysvar.value) {
    accounts.recentBlockhashesSysvar.value =
      'SysvarRecentB1ockHashes11111111111111111111' as Address<'SysvarRecentB1ockHashes11111111111111111111'>;
  }
  if (!accounts.rentSysvar.value) {
    accounts.rentSysvar.value =
      'SysvarRent111111111111111111111111111111111' as Address<'SysvarRent111111111111111111111111111111111'>;
  }

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getInitializeNonceAccountInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as InitializeNonceAccountInstructionDataArgs,
    programAddress
  );

  return instruction;
}

export function getInitializeNonceAccountInstructionRaw<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountNonceAccount extends string | IAccountMeta<string> = string,
  TAccountRecentBlockhashesSysvar extends
    | string
    | IAccountMeta<string> = 'SysvarRecentB1ockHashes11111111111111111111',
  TAccountRentSysvar extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    nonceAccount: TAccountNonceAccount extends string
      ? Address<TAccountNonceAccount>
      : TAccountNonceAccount;
    recentBlockhashesSysvar?: TAccountRecentBlockhashesSysvar extends string
      ? Address<TAccountRecentBlockhashesSysvar>
      : TAccountRecentBlockhashesSysvar;
    rentSysvar?: TAccountRentSysvar extends string
      ? Address<TAccountRentSysvar>
      : TAccountRentSysvar;
  },
  args: InitializeNonceAccountInstructionDataArgs,
  programAddress: Address<TProgram> = '11111111111111111111111111111111' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.nonceAccount, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.recentBlockhashesSysvar ??
          ('SysvarRecentB1ockHashes11111111111111111111' as Address<'SysvarRecentB1ockHashes11111111111111111111'>),
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.rentSysvar ??
          ('SysvarRent111111111111111111111111111111111' as Address<'SysvarRent111111111111111111111111111111111'>),
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getInitializeNonceAccountInstructionDataEncoder().encode(args),
    programAddress,
  } as InitializeNonceAccountInstruction<
    TProgram,
    TAccountNonceAccount,
    TAccountRecentBlockhashesSysvar,
    TAccountRentSysvar,
    TRemainingAccounts
  >;
}

export type ParsedInitializeNonceAccountInstruction<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[]
> = {
  programAddress: Address<TProgram>;
  accounts: {
    nonceAccount: TAccountMetas[0];
    recentBlockhashesSysvar: TAccountMetas[1];
    rentSysvar: TAccountMetas[2];
  };
  data: InitializeNonceAccountInstructionData;
};

export function parseInitializeNonceAccountInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[]
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedInitializeNonceAccountInstruction<TProgram, TAccountMetas> {
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
      nonceAccount: getNextAccount(),
      recentBlockhashesSysvar: getNextAccount(),
      rentSysvar: getNextAccount(),
    },
    data: getInitializeNonceAccountInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
