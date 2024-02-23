import * as React from 'react';

import { ExpoWallpaperManagerViewProps } from './ExpoWallpaperManager.types';

export default function ExpoWallpaperManagerView(props: ExpoWallpaperManagerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
