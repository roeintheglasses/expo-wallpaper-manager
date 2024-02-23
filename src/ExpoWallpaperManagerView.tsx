import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoWallpaperManagerViewProps } from './ExpoWallpaperManager.types';

const NativeView: React.ComponentType<ExpoWallpaperManagerViewProps> =
  requireNativeViewManager('ExpoWallpaperManager');

export default function ExpoWallpaperManagerView(props: ExpoWallpaperManagerViewProps) {
  return <NativeView {...props} />;
}
