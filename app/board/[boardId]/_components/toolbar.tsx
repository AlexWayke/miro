import { Circle, MousePointer2, Pencil, Square, StickyNote, Type } from 'lucide-react';
import { ToolButton } from './tool-button';

export const Toolbar = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <ToolButton isActive={false} label="Select" icon={MousePointer2} onClick={() => {}} />
        <ToolButton isActive={false} label="Text" icon={Type} onClick={() => {}} />
        <ToolButton isActive={false} label="Sticky note" icon={StickyNote} onClick={() => {}} />
        <ToolButton isActive={false} label="Rectangle" icon={Square} onClick={() => {}} />
        <ToolButton isActive={false} label="Ellipse" icon={Circle} onClick={() => {}} />
        <ToolButton isActive={false} label="Pen" icon={Pencil} onClick={() => {}} />
      </div>
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  );
};

Toolbar.Skeleton = function ToolbarSkeleton() {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] shadow-md rounded-md" />
  );
};
