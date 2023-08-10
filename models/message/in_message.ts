import { firestore } from 'firebase-admin';

interface messageBase {
  id: string;
  /** 사용자가 남긴 질문 */
  message: string;
  /** 댓글 */
  reply?: string;
  author?: {
    displayName: string;
    photoURL?: string;
  };
  /** 비공개 처리 여부*/
  deny?: boolean;
}
export interface InMessage extends messageBase {
  createAt: string;
  replyAt?: string;
}

export interface InMessageServer extends messageBase {
  createAt: firestore.Timestamp;
  replyAt?: firestore.Timestamp;
}
