import { onCleanup, onMount } from "solid-js";
import { createEasyRpgPlayer } from "../engine";

function PlayerCard() {
  return <></>;
}

function PlayerList() {
  return <></>;
}

function ChatMessage() {
  return <></>;
}

function ChatInput() {
  return <></>;
}

function Chat() {
  return <></>;
}

export default function RpgPage() {
  const focusSelf = (e: MouseEvent & { currentTarget: HTMLCanvasElement }) => {
    e.currentTarget.focus();
  };

  let canvas!: HTMLCanvasElement;

  onMount(async () => {
    let player = await createEasyRpgPlayer({
      game: undefined,
      saveFs: undefined,
    });
    (player as any).initApi();

    // Allow room connection
    player.api.sessionReady();

    canvas.focus();
  });

  onCleanup(() => {
    // Emscripten doesn't shut down on it's own
    // So do this for now
    location.reload();
  });

  return (
    <div id="rpg-container">
      <div id="frame-container">
        <canvas ref={canvas} id="canvas" tabindex="-1" on:click={focusSelf} />
      </div>
    </div>
  );
}
