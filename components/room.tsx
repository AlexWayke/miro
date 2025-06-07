'use client';

import { ReactNode } from 'react';
import { ClientSideSuspense, LiveblocksProvider } from '@liveblocks/react';
import { RoomProvider } from '@liveblocks/react/suspense';

interface RoomProps {
  children: ReactNode;
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
}

export const Room = ({ children, roomId, fallback }: RoomProps) => {
  return (
    <LiveblocksProvider
      publicApiKey={'pk_dev_Uzd7Dopfuh6FSpFbwFPjw6wok7qKbZqAPTvbsWO121a1tMHWyWvX4EeoRek-XADq'}
    >
      <RoomProvider id={roomId} initialPresence={{}}>
        <ClientSideSuspense fallback={fallback}>{() => children}</ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
};
