import { getAdvanceNonceAccountInstructionRaw } from "@solana-program/system";
import { Address } from "@solana/web3.js";

function go<
  TNonceAccountAddress extends string,
  TNonceAuthorityAddress extends string
>(
  nonceAccount: Address<TNonceAccountAddress>,
  nonceAuthority: Address<TNonceAuthorityAddress>
) {
  return getAdvanceNonceAccountInstructionRaw({
    nonceAccount,
    nonceAuthority,
  });
}
