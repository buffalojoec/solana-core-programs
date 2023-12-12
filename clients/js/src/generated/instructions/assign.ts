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
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  Context,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';

export type AssignInstruction<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAccount extends string
        ? WritableSignerAccount<TAccountAccount>
        : TAccountAccount,
      ...TRemainingAccounts
    ]
  >;

export type AssignInstructionWithSigners<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAccount extends string
        ? WritableSignerAccount<TAccountAccount> &
            IAccountSignerMeta<TAccountAccount>
        : TAccountAccount,
      ...TRemainingAccounts
    ]
  >;

export type AssignInstructionData = {
  discriminator: number;
  programAddress: Address;
};

export type AssignInstructionDataArgs = { programAddress: Address };

export function getAssignInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number; programAddress: Address }>([
      ['discriminator', getU32Encoder()],
      ['programAddress', getAddressEncoder()],
    ]),
    (value) => ({ ...value, discriminator: 1 })
  ) satisfies Encoder<AssignInstructionDataArgs>;
}

export function getAssignInstructionDataDecoder() {
  return getStructDecoder<AssignInstructionData>([
    ['discriminator', getU32Decoder()],
    ['programAddress', getAddressDecoder()],
  ]) satisfies Decoder<AssignInstructionData>;
}

export function getAssignInstructionDataCodec(): Codec<
  AssignInstructionDataArgs,
  AssignInstructionData
> {
  return combineCodec(
    getAssignInstructionDataEncoder(),
    getAssignInstructionDataDecoder()
  );
}

export type AssignInput<TAccountAccount extends string> = {
  account: Address<TAccountAccount>;
  programAddress: AssignInstructionDataArgs['programAddress'];
};

export type AssignInputWithSigners<TAccountAccount extends string> = {
  account: TransactionSigner<TAccountAccount>;
  programAddress: AssignInstructionDataArgs['programAddress'];
};

export function getAssignInstruction<
  TAccountAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: AssignInputWithSigners<TAccountAccount>
): AssignInstructionWithSigners<TProgram, TAccountAccount>;
export function getAssignInstruction<
  TAccountAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: AssignInput<TAccountAccount>
): AssignInstruction<TProgram, TAccountAccount>;
export function getAssignInstruction<
  TAccountAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  input: AssignInputWithSigners<TAccountAccount>
): AssignInstructionWithSigners<TProgram, TAccountAccount>;
export function getAssignInstruction<
  TAccountAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  input: AssignInput<TAccountAccount>
): AssignInstruction<TProgram, TAccountAccount>;
export function getAssignInstruction<
  TAccountAccount extends string,
  TProgram extends string = '11111111111111111111111111111111'
>(
  rawContext: Pick<Context, 'getProgramAddress'> | AssignInput<TAccountAccount>,
  rawInput?: AssignInput<TAccountAccount>
): IInstruction {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as Pick<
    Context,
    'getProgramAddress'
  >;
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as AssignInput<TAccountAccount>;

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
    typeof getAssignInstructionRaw<TProgram, TAccountAccount>
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    account: { value: input.account ?? null, isWritable: true },
  };

  // Original args.
  const args = { ...input };

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [];

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  return Object.freeze({
    ...getAssignInstructionRaw(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as AssignInstructionDataArgs,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  });
}

export function getAssignInstructionRaw<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    account: TAccountAccount extends string
      ? Address<TAccountAccount>
      : TAccountAccount;
  },
  args: AssignInstructionDataArgs,
  programAddress: Address<TProgram> = '11111111111111111111111111111111' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.account, AccountRole.WRITABLE_SIGNER),
      ...(remainingAccounts ?? []),
    ],
    data: getAssignInstructionDataEncoder().encode(args),
    programAddress,
  } as AssignInstruction<TProgram, TAccountAccount, TRemainingAccounts>;
}