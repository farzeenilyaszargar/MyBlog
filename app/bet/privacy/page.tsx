import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import styles from "../docs.module.css";

const oldeTome = localFont({ src: "../OldeTome.ttf", display: "swap", variable: "--font-olde-tome" });
const email = "farzeen@nap.cx";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy — The Last Bet" },
  description: "The Last Bet collects no personal data. Nothing leaves your device.",
  alternates: { canonical: "/bet/privacy" },
  icons: { icon: "/bet/spade.svg", apple: "/bet/spade.svg" },
};

export default function BetPrivacyPage() {
  return (
    <div className={`${styles.page} ${oldeTome.variable}`}>
      <main className={styles.content}>
        <Link className={styles.back} href="/bet">← The Last Bet</Link>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.sub}>The Last Bet: One More Spin · Last updated 21 November 2026</p>
        <div className={styles.card}><p><b>Short version:</b> the game collects no personal data. Nothing leaves your device.</p></div>

        <h2>What the app collects</h2>
        <p>Nothing. The app has no accounts, no analytics, no advertising and no tracking, and it does not connect to the internet.</p>

        <h2>What stays on your device</h2>
        <p>Your saved run, settings and statistics (such as your best round) are stored locally on your device so you can keep playing. They are never sent to us or anyone else, and they are removed when you delete the app.</p>

        <h2>Ratings</h2>
        <p>The app may show Apple’s standard prompt asking you to rate it. That prompt is run by Apple; we don’t receive any information from it.</p>

        <h2>Children</h2>
        <p>The app does not knowingly collect any information from anyone, including children.</p>

        <h2>Third parties</h2>
        <p>No third-party SDKs, ad networks or analytics services are included in the app.</p>

        <h2>This website</h2>
        <p>This policy covers the app. The website you’re reading (fizzy.blog) uses Vercel Analytics to count visits and the X (Twitter) pixel to measure ads. Those apply only to the website, never to the game.</p>

        <h2>Changes</h2>
        <p>If this ever changes (for example, if an online leaderboard is added), this page will be updated before that version is released, and the App Store privacy details will be updated to match.</p>

        <h2>Contact</h2>
        <p>Questions about privacy: <a href={`mailto:${email}`}>{email}</a></p>

        <footer className={styles.footer}>© 2026 The Last Bet · <Link href="/bet/support">Support</Link> · <Link href="/bet/privacy">Privacy</Link></footer>
      </main>
    </div>
  );
}
