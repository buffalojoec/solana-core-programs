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
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';

export type WithdrawNonceAccountInstruction<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountNonceAccount extends string | IAccountMeta<string> = string,
  TAccountRecipientAccount extends string | IAccountMeta<string> = string,
  TAccountRecentBlockhashesSysvar extends
    | string
    | IAccountMeta<string> = 'SysvarRecentB1ockHashes11111111111111111111',
  TAccountRentSysvar extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TAccountNonceAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountNonceAccount extends string
        ? WritableAccount<TAccountNonceAccount>
        : TAccountNonceAccount,
      TAccountRecipientAccount extends string
        ? WritableAccount<TAccountRecipientAccount>
        : TAccountRecipientAccount,
      TAccountRecentBlockhashesSysvar extends string
        ? ReadonlyAccount<TAccountRecentBlockhashesSysvar>
        : TAccountRecentBlockhashesSysvar,
      TAccountRentSysvar extends string
        ? ReadonlyAccount<TAccountRentSysvar>
        : TAccountRentSysvar,
      TAccountNonceAuthority extends string
        ? ReadonlySignerAccount<TAccountNonceAuthority>
        : TAccountNonceAuthority,
      ...TRemainingAccounts
    ]
  >;

export type WithdrawNonceAccountInstructionWithSigners<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountNonceAccount extends string | IAccountMeta<string> = string,
  TAccountRecipientAccount extends string | IAccountMeta<string> = string,
  TAccountRecentBlockhashesSysvar extends
    | string
    | IAccountMeta<string> = 'SysvarRecentB1ockHashes11111111111111111111',
  TAccountRentSysvar extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TAccountNonceAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountNonceAccount extends string
        ? WritableAccount<TAccountNonceAccount>
        : TAccountNonceAccount,
      TAccountRecipientAccount extends string
        ? WritableAccount<TAccountRecipientAccount>
        : TAccountRecipientAccount,
      TAccountRecentBlockhashesSysvar extends string
        ? ReadonlyAccount<TAccountRecentBlockhashesSysvar>
        : TAccountRecentBlockhashesSysvar,
      TAccountRentSysvar extends string
        ? ReadonlyAccount<TAccountRentSysvar>
        : TAccountRentSysvar,
      TAccountNonceAuthority extends string
        ? ReadonlySignerAccount<TAccountNonceAuthority> &
            IAccountSignerMeta<TAccountNonceAuthority>
        : TAccountNonceAuthority,
      ...TRemainingAccounts
    ]
  >;

export type WithdrawNonceAccountInstructionData = {
  discriminator: number;
  withdrawAmount: bigint;
};

export type WithdrawNonceAccountInstructionDataArgs = {
  withdrawAmount: number | bigint;
};

export function getWithdrawNonceAccountInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{
      discriminator: number;
      withdrawAmount: number | bigint;
    }>([
      ['discriminator', getU32Encoder()],
      ['withdrawAmount', getU64Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 5 })
  ) satisfies Encoder<WithdrawNonceAccountInstructionDataArgs>;
}

export function getWithdrawNonceAccountInstructionDataDecoder() {
  return getStructDecoder<WithdrawNonceAccountInstructionData>([
    ['discriminator', getU32Decoder()],
    ['withdrawAmount', getU64Decoder()],
  ]) satisfies Decoder<WithdrawNonceAccountInstructionData>;
}

export function getWithdrawNonceAccountInstructionDataCodec(): Codec<
  WithdrawNonceAccountInstructionDataArgs,
  WithdrawNonceAccountInstructionData
> {
  return combineCodec(
    getWithdrawNonceAccountInstructionDataEncoder(),
    getWithdrawNonceAccountInstructionDataDecoder()
  );
}

export type WithdrawNonceAccountInput<
  TAccountNonceAccount extends string,
  TAccountRecipientAccount extends string,
  TAccountRecentBlockhashesSysvar extends string,
  TAccountRentSysvar extends string,
  TAccountNonceAuthority extends string
> = {
  nonceAccount: Address<TAccountNonceAccount>;
  recipientAccount: Address<TAccountRecipientAccount>;
  recentBlockhashesSysvar?: Address<TAccountRecentBlockhashesSysvar>;
  rentSysvar?: Address<TAccountRentSysvar>;
  nonceAuthority: Address<TAccountNonceAuthority>;
  withdrawAmount: WithdrawNonceAccountInstructionDataArgs['withdrawAmount'];
};

export type WithdrawNonceAccountInputWithSigners<
  TAccountNonceAccount extends string,
  TAccountRecipientAccount extends string,
  TAccountRecentBlockhashesSysvar extends string,
  TAccountRentSysvar extends string,
  TAccountNonceAuthority extends string
> = {
  nonceAccount: Address<TAccountNonceAccount>;
  recipientAccount: Address<TAccountRecipientAccount>;
  recentBlockhashesSysvar?: Address<TAccountRecentBlockhashesSysvar>;
  rentSysvar?: Address<TAccountRentSysvar>;
  nonceAuthority: TransactionSigner<TAccountNonceAuthority>;
  withdrawAmount: WithdrawNonceAccountInstructionDataArgs['withdrawAmount'];
};

export function getWithdrawNonceAccountInstruction<
  TAccountNonceAccount extends string,
  TAccountRecipientAccount extends string,
  TAccountRecentBlockhashesSysvar extends string,
  TAccountRentSysvar extends string,
  TAccountNonceAuthority extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  input: WithdrawNonceAccountInputWithSigners<
    TAccountNonceAccount,
    TAccountRecipientAccount,
    TAccountRecentBlockhashesSysvar,
    TAccountRentSysvar,
    TAccountNonceAuthority
  >
): WithdrawNonceAccountInstructionWithSigners<
  TProgram,
  TAccountNonceAccount,
  TAccountRecipientAccount,
  TAccountRecentBlockhashesSysvar,
  TAccountRentSysvar,
  TAccountNonceAuthority
>;
export function getWithdrawNonceAccountInstruction<
  TAccountNonceAccount extends string,
  TAccountRecipientAccount extends string,
  TAccountRecentBlockhashesSysvar extends string,
  TAccountRentSysvar extends string,
  TAccountNonceAuthority extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  input: WithdrawNonceAccountInput<
    TAccountNonceAccount,
    TAccountRecipientAccount,
    TAccountRecentBlockhashesSysvar,
    TAccountRentSysvar,
    TAccountNonceAuthority
  >
): WithdrawNonceAccountInstruction<
  TProgram,
  TAccountNonceAccount,
  TAccountRecipientAccount,
  TAccountRecentBlockhashesSysvar,
  TAccountRentSysvar,
  TAccountNonceAuthority
>;
export function getWithdrawNonceAccountInstruction<
  TAccountNonceAccount extends string,
  TAccountRecipientAccount extends string,
  TAccountRecentBlockhashesSysvar extends string,
  TAccountRentSysvar extends string,
  TAccountNonceAuthority extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  input: WithdrawNonceAccountInput<
    TAccountNonceAccount,
    TAccountRecipientAccount,
    TAccountRecentBlockhashesSysvar,
    TAccountRentSysvar,
    TAccountNonceAuthority
  >
): IInstruction {
  // Program address.
  const programAddress =
    '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getWithdrawNonceAccountInstructionRaw<
      TProgram,
      TAccountNonceAccount,
      TAccountRecipientAccount,
      TAccountRecentBlockhashesSysvar,
      TAccountRentSysvar,
      TAccountNonceAuthority
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    nonceAccount: { value: input.nonceAccount ?? null, isWritable: true },
    recipientAccount: {
      value: input.recipientAccount ?? null,
      isWritable: true,
    },
    recentBlockhashesSysvar: {
      value: input.recentBlockhashesSysvar ?? null,
      isWritable: false,
    },
    rentSysvar: { value: input.rentSysvar ?? null, isWritable: false },
    nonceAuthority: { value: input.nonceAuthority ?? null, isWritable: false },
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

  const instruction = getWithdrawNonceAccountInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as WithdrawNonceAccountInstructionDataArgs,
    programAddress
  );

  return instruction;
}

export function getWithdrawNonceAccountInstructionRaw<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountNonceAccount extends string | IAccountMeta<string> = string,
  TAccountRecipientAccount extends string | IAccountMeta<string> = string,
  TAccountRecentBlockhashesSysvar extends
    | string
    | IAccountMeta<string> = 'SysvarRecentB1ockHashes11111111111111111111',
  TAccountRentSysvar extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TAccountNonceAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    nonceAccount: TAccountNonceAccount extends string
      ? Address<TAccountNonceAccount>
      : TAccountNonceAccount;
    recipientAccount: TAccountRecipientAccount extends string
      ? Address<TAccountRecipientAccount>
      : TAccountRecipientAccount;
    recentBlockhashesSysvar?: TAccountRecentBlockhashesSysvar extends string
      ? Address<TAccountRecentBlockhashesSysvar>
      : TAccountRecentBlockhashesSysvar;
    rentSysvar?: TAccountRentSysvar extends string
      ? Address<TAccountRentSysvar>
      : TAccountRentSysvar;
    nonceAuthority: TAccountNonceAuthority extends string
      ? Address<TAccountNonceAuthority>
      : TAccountNonceAuthority;
  },
  args: WithdrawNonceAccountInstructionDataArgs,
  programAddress: Address<TProgram> = '11111111111111111111111111111111' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.nonceAccount, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.recipientAccount, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.recentBlockhashesSysvar ??
          'SysvarRecentB1ockHashes11111111111111111111',
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.rentSysvar ?? 'SysvarRent111111111111111111111111111111111',
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.nonceAuthority,
        AccountRole.READONLY_SIGNER
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getWithdrawNonceAccountInstructionDataEncoder().encode(args),
    programAddress,
  } as WithdrawNonceAccountInstruction<
    TProgram,
    TAccountNonceAccount,
    TAccountRecipientAccount,
    TAccountRecentBlockhashesSysvar,
    TAccountRentSysvar,
    TAccountNonceAuthority,
    TRemainingAccounts
  >;
}
