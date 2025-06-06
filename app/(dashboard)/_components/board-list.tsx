'use client';

import { useQuery } from 'convex/react';

import { api } from '@/convex/_generated/api';

import { EmptyBoards } from './empty-boards';
import { EmptyFavorites } from './empty-favorites';
import { EmptySearch } from './empty-search';
import { BoardCard } from './board-card';
import { NewBoardButton } from './new-board-button';
import { use } from 'react';

interface BoardListProps {
  orgId: string;
  query: Promise<{
    search?: string;
    favorites?: string;
  }>;
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const queryFill = use(query);
  const data = useQuery(api.boards.get, { orgId, ...queryFill });

  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl">{queryFill.favorites ? 'Favorite boards' : 'Team boards'}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <NewBoardButton orgId={''} />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }

  if (!data?.length && queryFill.search) {
    return <EmptySearch />;
  }

  if (!data?.length && queryFill.favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return (
    <div>
      <h2 className="text-3xl">{queryFill.favorites ? 'Favorite boards' : 'Team boards'}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageURL}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};
