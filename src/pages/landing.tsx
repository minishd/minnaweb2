import { A } from "@solidjs/router";

export default function LandingPage() {
  return (
    <>
      <link rel="preload" as="image" href="/doormain2.png" />

      <A href="/unconscious">
        <div id="door">
          <img src="/doorglowA.png" draggable={false} />
        </div>
      </A>
    </>
  );
}
