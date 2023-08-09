import { firestore } from 'firebase-admin';

interface messageBase {
  id: string;
  message: string;
  reply?: string;
  author?: {
    displayName: string;
    photoURL?: string;
  };
}
export interface InMessage extends messageBase {
  createAt: string;
  replyAt?: string;
}

export interface InMessageServer extends messageBase {
  createAt: firestore.Timestamp;
  replyAt?: firestore.Timestamp;
}
