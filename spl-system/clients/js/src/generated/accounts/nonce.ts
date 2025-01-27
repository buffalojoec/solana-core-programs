/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  EncodedAccount,
  FetchAccountConfig,
  FetchAccountsConfig,
  MaybeAccount,
  MaybeEncodedAccount,
  assertAccountExists,
  assertAccountsExist,
  decodeAccount,
  fetchEncodedAccount,
  fetchEncodedAccounts,
} from '@solana/accounts';
import {
  Address,
  getAddressDecoder,
  getAddressEncoder,
} from '@solana/addresses';
import { Codec, Decoder, Encoder, combineCodec } from '@solana/codecs-core';
import {
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getU64Decoder, getU64Encoder } from '@solana/codecs-numbers';
import {
  NonceState,
  NonceStateArgs,
  NonceVersion,
  NonceVersionArgs,
  getNonceStateDecoder,
  getNonceStateEncoder,
  getNonceVersionDecoder,
  getNonceVersionEncoder,
} from '../types';

export type Nonce<TAddress extends string = string> = Account<
  NonceAccountData,
  TAddress
>;

export type MaybeNonce<TAddress extends string = string> = MaybeAccount<
  NonceAccountData,
  TAddress
>;

export type NonceAccountData = {
  version: NonceVersion;
  state: NonceState;
  authority: Address;
  blockhash: Address;
  lamportsPerSignature: bigint;
};

export type NonceAccountDataArgs = {
  version: NonceVersionArgs;
  state: NonceStateArgs;
  authority: Address;
  blockhash: Address;
  lamportsPerSignature: number | bigint;
};

export function getNonceAccountDataEncoder() {
  return getStructEncoder<NonceAccountDataArgs>([
    ['version', getNonceVersionEncoder()],
    ['state', getNonceStateEncoder()],
    ['authority', getAddressEncoder()],
    ['blockhash', getAddressEncoder()],
    ['lamportsPerSignature', getU64Encoder()],
  ]) satisfies Encoder<NonceAccountDataArgs>;
}

export function getNonceAccountDataDecoder() {
  return getStructDecoder<NonceAccountData>([
    ['version', getNonceVersionDecoder()],
    ['state', getNonceStateDecoder()],
    ['authority', getAddressDecoder()],
    ['blockhash', getAddressDecoder()],
    ['lamportsPerSignature', getU64Decoder()],
  ]) satisfies Decoder<NonceAccountData>;
}

export function getNonceAccountDataCodec(): Codec<
  NonceAccountDataArgs,
  NonceAccountData
> {
  return combineCodec(
    getNonceAccountDataEncoder(),
    getNonceAccountDataDecoder()
  );
}

export function decodeNonce<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): Nonce<TAddress>;
export function decodeNonce<TAddress extends string = string>(
  encodedAccount: MaybeEncodedAccount<TAddress>
): MaybeNonce<TAddress>;
export function decodeNonce<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress> | MaybeEncodedAccount<TAddress>
): Nonce<TAddress> | MaybeNonce<TAddress> {
  return decodeAccount(
    encodedAccount as MaybeEncodedAccount<TAddress>,
    getNonceAccountDataDecoder()
  );
}

export async function fetchNonce<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<Nonce<TAddress>> {
  const maybeAccount = await fetchMaybeNonce(rpc, address, config);
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybeNonce<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<MaybeNonce<TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return decodeNonce(maybeAccount);
}

export async function fetchAllNonce(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<Nonce[]> {
  const maybeAccounts = await fetchAllMaybeNonce(rpc, addresses, config);
  assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}

export async function fetchAllMaybeNonce(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<MaybeNonce[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) => decodeNonce(maybeAccount));
}

export function getNonceSize(): number {
  return 80;
}
