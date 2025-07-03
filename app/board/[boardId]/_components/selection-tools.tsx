'use client';

import { useSelectionBounds } from '@/hooks/use-selection-bounds';
import { Camera, Color } from '@/types/canvas';
import { useSelf } from '@liveblocks/react';
import { memo } from 'react';

interface SelectionToolsProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
}

export const SelectionTools = memo(({ camera, setLastUsedColor }: SelectionToolsProps) => {
  const selection = useSelf((me) => me.presence.selection);
  const selectionBounds = useSelectionBounds();

  return <div>Select</div>;
});

SelectionTools.displayName = 'SelectionTools';
