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
    let player: any = await createEasyRpgPlayer({
      game: undefined,
      saveFs: undefined,
    });
    player.initApi();
    canvas.focus();
  });

  onCleanup(() => {
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
