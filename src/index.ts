import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoWallpaperManager.web.ts
// and on native platforms to ExpoWallpaperManager.ts
import ExpoWallpaperManagerModule from './ExpoWallpaperManagerModule';
import ExpoWallpaperManagerView from './ExpoWallpaperManagerView';
import { ChangeEventPayload, ExpoWallpaperManagerViewProps } from './ExpoWallpaperManager.types';

// Get the native constant value.
export const PI = ExpoWallpaperManagerModule.PI;

export function hello(): string {
  return ExpoWallpaperManagerModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoWallpaperManagerModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoWallpaperManagerModule ?? NativeModulesProxy.ExpoWallpaperManager);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoWallpaperManagerView, ExpoWallpaperManagerViewProps, ChangeEventPayload };
