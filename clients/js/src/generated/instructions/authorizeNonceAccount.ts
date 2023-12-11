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
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  Context,
  ResolvedAccount,
  accountMetaWithDefault,
  expectAddress,
  getAccountMetasWithSigners,
} from '../shared';

export type AuthorizeNonceAccountInstruction<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountNonceAccount extends string | IAccountMeta<string> = string,
  TAccountNonceAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountNonceAccount extends string
        ? WritableAccount<TAccountNonceAccount>
        : TAccountNonceAccount,
      TAccountNonceAuthority extends string
        ? ReadonlySignerAccount<TAccountNonceAuthority>
        : TAccountNonceAuthority,
      ...TRemainingAccounts
    ]
  >;

export type AuthorizeNonceAccountInstructionWithSigners<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountNonceAccount extends string | IAccountMeta<string> = string,
  TAccountNonceAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountNonceAccount extends string
        ? WritableAccount<TAccountNonceAccount>
        : TAccountNonceAccount,
      TAccountNonceAuthority extends string
        ? ReadonlySignerAccount<TAccountNonceAuthority> &
            IAccountSignerMeta<TAccountNonceAuthority>
        : TAccountNonceAuthority,
      ...TRemainingAccounts
    ]
  >;

export type AuthorizeNonceAccountInstructionData = {
  discriminator: number;
  nonceAccountArg: Address;
};

export type AuthorizeNonceAccountInstructionDataArgs = {
  nonceAccountArg: Address;
};

export function getAuthorizeNonceAccountInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number; nonceAccountArg: Address }>([
      ['discriminator', getU32Encoder()],
      ['nonceAccountArg', getAddressEncoder()],
    ]),
    (value) => ({ ...value, discriminator: 7 })
  ) satisfies Encoder<AuthorizeNonceAccountInstructionDataArgs>;
}

export function getAuthorizeNonceAccountInstructionDataDecoder() {
  return getStructDecoder<AuthorizeNonceAccountInstructionData>([
    ['discriminator', getU32Decoder()],
    ['nonceAccountArg', getAddressDecoder()],
  ]) satisfies Decoder<AuthorizeNonceAccountInstructionData>;
}

export function getAuthorizeNonceAccountInstructionDataCodec(): Codec<
  AuthorizeNonceAccountInstructionDataArgs,
  AuthorizeNonceAccountInstructionData
> {
  return combineCodec(
    getAuthorizeNonceAccountInstructionDataEncoder(),
    getAuthorizeNonceAccountInstructionDataDecoder()
  );
}

export type AuthorizeNonceAccountInput<
  TAccountNonceAccount extends string,
  TAccountNonceAuthority extends string
> = {
  nonceAccount: Address<TAccountNonceAccount>;
  nonceAuthority: Address<TAccountNonceAuthority>;
  nonceAccountArg?: AuthorizeNonceAccountInstructionDataArgs['nonceAccountArg'];
};

export type AuthorizeNonceAccountInputWithSigners<
  TAccountNonceAccount extends string,
  TAccountNonceAuthority extends string
> = {
  nonceAccount: Address<TAccountNonceAccount>;
  nonceAuthority: TransactionSigner<TAccountNonceAuthority>;
  nonceAccountArg?: AuthorizeNonceAccountInstructionDataArgs['nonceAccountArg'];
};

export function getAuthorizeNonceAccountInstruction<
  TAccountNonceAccount extends string,
  TAccountNonceAuthority extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: AuthorizeNonceAccountInputWithSigners<
    TAccountNonceAccount,
    TAccountNonceAuthority
  >
): AuthorizeNonceAccountInstructionWithSigners<
  TProgram,
  TAccountNonceAccount,
  TAccountNonceAuthority
>;
export function getAuthorizeNonceAccountInstruction<
  TAccountNonceAccount extends string,
  TAccountNonceAuthority extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: AuthorizeNonceAccountInput<
    TAccountNonceAccount,
    TAccountNonceAuthority
  >
): AuthorizeNonceAccountInstruction<
  TProgram,
  TAccountNonceAccount,
  TAccountNonceAuthority
>;
export function getAuthorizeNonceAccountInstruction<
  TAccountNonceAccount extends string,
  TAccountNonceAuthority extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  input: AuthorizeNonceAccountInputWithSigners<
    TAccountNonceAccount,
    TAccountNonceAuthority
  >
): AuthorizeNonceAccountInstructionWithSigners<
  TProgram,
  TAccountNonceAccount,
  TAccountNonceAuthority
>;
export function getAuthorizeNonceAccountInstruction<
  TAccountNonceAccount extends string,
  TAccountNonceAuthority extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  input: AuthorizeNonceAccountInput<
    TAccountNonceAccount,
    TAccountNonceAuthority
  >
): AuthorizeNonceAccountInstruction<
  TProgram,
  TAccountNonceAccount,
  TAccountNonceAuthority
>;
export function getAuthorizeNonceAccountInstruction<
  TAccountNonceAccount extends string,
  TAccountNonceAuthority extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | AuthorizeNonceAccountInput<TAccountNonceAccount, TAccountNonceAuthority>,
  rawInput?: AuthorizeNonceAccountInput<
    TAccountNonceAccount,
    TAccountNonceAuthority
  >
): IInstruction {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as Pick<
    Context,
    'getProgramAddress'
  >;
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as AuthorizeNonceAccountInput<TAccountNonceAccount, TAccountNonceAuthority>;

  // Program address.
  const defaultProgramAddress =
    '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  const programAddress = (
    context.getProgramAddress
      ? context.getProgramAddress({
          name: 'splSystem',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Address<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getAuthorizeNonceAccountInstructionRaw<
      TProgram,
      TAccountNonceAccount,
      TAccountNonceAuthority
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    nonceAccount: { value: input.nonceAccount ?? null, isWritable: true },
    nonceAuthority: { value: input.nonceAuthority ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!args.nonceAccountArg) {
    args.nonceAccountArg = expectAddress(accounts.nonceAccount.value);
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
    ...getAuthorizeNonceAccountInstructionRaw(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as AuthorizeNonceAccountInstructionDataArgs,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  });
}

export function getAuthorizeNonceAccountInstructionRaw<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountNonceAccount extends string | IAccountMeta<string> = string,
  TAccountNonceAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    nonceAccount: TAccountNonceAccount extends string
      ? Address<TAccountNonceAccount>
      : TAccountNonceAccount;
    nonceAuthority: TAccountNonceAuthority extends string
      ? Address<TAccountNonceAuthority>
      : TAccountNonceAuthority;
  },
  args: AuthorizeNonceAccountInstructionDataArgs,
  programAddress: Address<TProgram> = '11111111111111111111111111111111' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.nonceAccount, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.nonceAuthority,
        AccountRole.READONLY_SIGNER
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getAuthorizeNonceAccountInstructionDataEncoder().encode(args),
    programAddress,
  } as AuthorizeNonceAccountInstruction<
    TProgram,
    TAccountNonceAccount,
    TAccountNonceAuthority,
    TRemainingAccounts
  >;
}
