import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'createAchievement' : ActorMethod<[string], string>,
  'queryAll' : ActorMethod<[], Array<string>>,
}
