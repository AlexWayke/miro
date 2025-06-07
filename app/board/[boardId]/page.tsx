import { Canvas } from './_components/canvas';
import { Room } from '@/components/room';
import { Loading } from './_components/loading';

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = async ({ params }: BoardIdPageProps) => {
  const paramsAwaited = await params;
  return (
    <Room roomId={paramsAwaited.boardId} fallback={<Loading />}>
      <Canvas boardId={paramsAwaited.boardId} />
    </Room>
  );
};

export default BoardIdPage;
