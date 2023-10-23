/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Base58EncodedAddress,
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
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  WritableSignerAccount,
} from '@solana/instructions';
import {
  Context,
  CustomGeneratedInstruction,
  ResolvedAccount,
  Signer,
  WrappedInstruction,
  accountMetaWithDefault,
  getAccountMetasAndSigners,
} from '../shared';

// Output.
export type CreateAccountInstruction<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountNewAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountNewAccount extends string
        ? WritableSignerAccount<TAccountNewAccount>
        : TAccountNewAccount,
      ...TRemainingAccounts
    ]
  >;

export type CreateAccountInstructionData = {
  discriminator: number;
  lamports: bigint;
  space: bigint;
  programId: Base58EncodedAddress;
};

export type CreateAccountInstructionDataArgs = {
  lamports: number | bigint;
  space: number | bigint;
  programId: Base58EncodedAddress;
};

export function getCreateAccountInstructionDataEncoder(): Encoder<CreateAccountInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{
      discriminator: number;
      lamports: number | bigint;
      space: number | bigint;
      programId: Base58EncodedAddress;
    }>(
      [
        ['discriminator', getU32Encoder()],
        ['lamports', getU64Encoder()],
        ['space', getU64Encoder()],
        ['programId', getAddressEncoder()],
      ],
      { description: 'CreateAccountInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 0 })
  ) as Encoder<CreateAccountInstructionDataArgs>;
}

export function getCreateAccountInstructionDataDecoder(): Decoder<CreateAccountInstructionData> {
  return getStructDecoder<CreateAccountInstructionData>(
    [
      ['discriminator', getU32Decoder()],
      ['lamports', getU64Decoder()],
      ['space', getU64Decoder()],
      ['programId', getAddressDecoder()],
    ],
    { description: 'CreateAccountInstructionData' }
  ) as Decoder<CreateAccountInstructionData>;
}

export function getCreateAccountInstructionDataCodec(): Codec<
  CreateAccountInstructionDataArgs,
  CreateAccountInstructionData
> {
  return combineCodec(
    getCreateAccountInstructionDataEncoder(),
    getCreateAccountInstructionDataDecoder()
  );
}

export function createAccountInstruction<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountNewAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    payer: TAccountPayer extends string
      ? Base58EncodedAddress<TAccountPayer>
      : TAccountPayer;
    newAccount: TAccountNewAccount extends string
      ? Base58EncodedAddress<TAccountNewAccount>
      : TAccountNewAccount;
  },
  args: CreateAccountInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = '11111111111111111111111111111111' as Base58EncodedAddress<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.newAccount, AccountRole.WRITABLE_SIGNER),
      ...(remainingAccounts ?? []),
    ],
    data: getCreateAccountInstructionDataEncoder().encode(args),
    programAddress,
  } as CreateAccountInstruction<
    TProgram,
    TAccountPayer,
    TAccountNewAccount,
    TRemainingAccounts
  >;
}

// Input.
export type CreateAccountInput<
  TAccountPayer extends string,
  TAccountNewAccount extends string
> = {
  payer?: Signer<TAccountPayer>;
  newAccount: Signer<TAccountNewAccount>;
  lamports: CreateAccountInstructionDataArgs['lamports'];
  space: CreateAccountInstructionDataArgs['space'];
  programId: CreateAccountInstructionDataArgs['programId'];
};

export async function createAccount<
  TReturn,
  TAccountPayer extends string,
  TAccountNewAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      CreateAccountInstruction<TProgram, TAccountPayer, TAccountNewAccount>,
      TReturn
    >,
  input: CreateAccountInput<TAccountPayer, TAccountNewAccount>
): Promise<TReturn>;
export async function createAccount<
  TAccountPayer extends string,
  TAccountNewAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: CreateAccountInput<TAccountPayer, TAccountNewAccount>
): Promise<
  WrappedInstruction<
    CreateAccountInstruction<TProgram, TAccountPayer, TAccountNewAccount>
  >
>;
export async function createAccount<
  TAccountPayer extends string,
  TAccountNewAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  input: CreateAccountInput<TAccountPayer, TAccountNewAccount>
): Promise<
  WrappedInstruction<
    CreateAccountInstruction<TProgram, TAccountPayer, TAccountNewAccount>
  >
>;
export async function createAccount<
  TReturn,
  TAccountPayer extends string,
  TAccountNewAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | CreateAccountInput<TAccountPayer, TAccountNewAccount>,
  rawInput?: CreateAccountInput<TAccountPayer, TAccountNewAccount>
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as CreateAccountInput<TAccountPayer, TAccountNewAccount>;

  // Program address.
  const defaultProgramAddress =
    '11111111111111111111111111111111' as Base58EncodedAddress<'11111111111111111111111111111111'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'splSystem',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Base58EncodedAddress<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof createAccountInstruction<TProgram, TAccountPayer, TAccountNewAccount>
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    payer: { value: input.payer ?? null, isWritable: true },
    newAccount: { value: input.newAccount ?? null, isWritable: true },
  };

  // Original args.
  const args = { ...input };

  // Get account metas and signers.
  const [accountMetas, signers] = getAccountMetasAndSigners(
    accounts,
    'programId',
    programAddress
  );

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [];

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: createAccountInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as CreateAccountInstructionDataArgs,
      programAddress,
      remainingAccounts
    ),
    signers,
    bytesCreatedOnChain,
  };
}