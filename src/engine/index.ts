import { simd } from "wasm-feature-detect";

let isSimdSupported = await simd();

declare global {
  function onRequestFile(url: string): void;
  function onUpdateSystemGraphic(name: string): void;
  function onUpdateConnectionStatus(status: number): void;
  function onLoadMap(mapName: string): void;
  function onPlayerSpriteUpdated(sprite: string, idx: number, id: number): void;
  function onPlayerTeleported(mapId: number, x: number, y: number): void;
  function syncPlayerData(
    uuid: string,
    rank: number,
    accountBin: number,
    badge: string,
    medals: number[],
    id: number,
  ): void;
}

globalThis.onRequestFile = (url) => {
  console.log("onRequestFile:", url);
};

globalThis.onUpdateSystemGraphic = (name) => {
  console.log("onUpdateSystemGraphic:", name);
};

globalThis.onUpdateConnectionStatus = (status) => {
  let statusText;
  switch (status) {
    case 0:
      statusText = "disconnected";
      break;
    case 1:
      statusText = "connected";
      break;
    case 2:
      statusText = "connecting";
      break;
    default:
      statusText = "unknown";
      break;
  }

  console.log("onUpdateConnectionStatus:", statusText);
};

globalThis.onLoadMap = (mapName) => {
  console.log("onLoadMap:", mapName);
};

globalThis.onPlayerSpriteUpdated = (sprite, idx, id) => {
  console.log("onPlayerSpriteUpdated:", sprite, idx, id);
};

globalThis.onPlayerTeleported = (mapId, x, y) => {
  console.log("onPlayerTeleported:", mapId, x, y);
};

globalThis.syncPlayerData = (uuid, rank, accountBin, badge, medals, id) => {
  console.log("syncPlayerData:", uuid, rank, accountBin, badge, medals, id);
};

export const { default: createEasyRpgPlayer } = await (isSimdSupported
  ? import("./ynoengine-simd.js")
  : import("./ynoengine.js"));
