import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.voting{
   export class voter extends Participant {
      voterID: string;
      fullName: string;
   }
   export class ifVoted extends Asset {
      voterID: string;
      votedOrNot: boolean;
   }
   export class candidateVote extends Asset {
      candID: string;
      totalVote: number;
   }
   export class vote extends Transaction {
      candidateVoteAsset: candidateVote;
      ifVotedAsset: ifVoted;
   }
// }
