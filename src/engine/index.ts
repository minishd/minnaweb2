import { simd } from "wasm-feature-detect";

let isSimdSupported = await simd();

declare global {
  function onRequestFile(url: string): void;
  function onUpdateSystemGraphic(name: string): void;
  function onUpdateConnectionStatus(status: number): void;
  function onLoadMap(mapName: string): void;
  function onPlayerSpriteUpdated(sprite: string, idx: number, id: number): void;
  function onPlayerTeleported(mapId: number, x: number, y: number): void;
}

globalThis.onRequestFile = (url) => {
  console.log("onRequestFile:", url);
};

globalThis.onUpdateSystemGraphic = (name) => {
  console.log("onUpdateSystemGraphic:", name);
};

globalThis.onUpdateConnectionStatus = (status) => {
  console.log("onUpdateConnectionStatus:", status);
};

globalThis.onLoadMap = (mapName) => {
  console.log("onLoadMap:", mapName);
};

globalThis.onPlayerSpriteUpdated = (sprite, idx, id) => {
  console.log("onPlayerSpriteUpdated:", sprite, idx, id);
};

globalThis.onPlayerTeleported = (mapId, x, y) => {
  console.log("onPlayerTeleported", mapId, x, y);
};

export const { default: createEasyRpgPlayer } = await (isSimdSupported
  ? import("./ynoengine-simd.js")
  : import("./ynoengine.js"));
