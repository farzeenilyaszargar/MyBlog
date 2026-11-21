import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import styles from "../docs.module.css";

const oldeTome = localFont({ src: "../OldeTome.ttf", display: "swap", variable: "--font-olde-tome" });
const email = "farzeen@nap.cx";

export const metadata: Metadata = {
  title: { absolute: "Support — The Last Bet" },
  description: "Help, how to play, and contact for The Last Bet: One More Spin on iOS.",
  alternates: { canonical: "/bet/support" },
  icons: { icon: "/bet/spade.svg", apple: "/bet/spade.svg" },
};

export default function BetSupportPage() {
  return (
    <div className={`${styles.page} ${oldeTome.variable}`}>
      <main className={styles.content}>
        <Link className={styles.back} href="/bet">← The Last Bet</Link>
        <h1 className={styles.title}>Support</h1>
        <p className={styles.sub}>The Last Bet: One More Spin · a pixel-art slot-machine roguelike for iPhone</p>

        <div className={styles.card}>
          <p>Found a bug or have a question? Email <a href={`mailto:${email}`}>{email}</a>. Please include your device model, iOS version, and what happened. We aim to reply within a few days.</p>
        </div>

        <h2>How to play</h2>
        <ul>
          <li>Pull the lever. Each pull costs the current stake, shown under the lever.</li>
          <li>Match 3 or more symbols along a line, in a straight row, or 3 down one reel. Several wins in one pull stack a combo.</li>
          <li>After every 7 pulls the store opens. Tap a card to buy a boon. Buying it again levels it up. Tap one of your slots to sell.</li>
          <li>From round 2, each round brings a bane: a rule that works against you. Tap its badge (bottom left) to read it.</li>
          <li>Tap <b>?</b> during play for the paytable.</li>
          <li>If you can’t cover a pull, you go all in with what you have. You lose at 0 coins. You win at 100 quintillion.</li>
        </ul>

        <h2>FAQ</h2>
        <p><b>Is this real gambling?</b> No. The Last Bet uses no real money. Coins exist only inside the game and can never be bought, cashed out or exchanged for anything of value.</p>
        <p><b>Does it need the internet?</b> No. It plays fully offline.</p>
        <p><b>Where is my progress saved?</b> On your device. Deleting the app deletes your progress.</p>
        <p><b>The game feels too hard.</b> Winning depends on building an engine. Try committing to one family of boons, like fruit and cherries, instead of picking at random.</p>

        <footer className={styles.footer}>© 2026 The Last Bet · <Link href="/bet/support">Support</Link> · <Link href="/bet/privacy">Privacy</Link></footer>
      </main>
    </div>
  );
}
