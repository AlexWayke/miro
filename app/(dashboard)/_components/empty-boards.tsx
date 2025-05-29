import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const EmptyBoards = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/empty-boards.svg" height={140} width={140} alt="Empty" />
      <h2 className="text-2xl font-semibold mt-6">Create your first board0</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="pt-4">
        <Button size="lg">Create Organization</Button>
      </div>
    </div>
  );
};
