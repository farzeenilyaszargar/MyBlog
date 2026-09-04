"use client";

import Image from "next/image";
import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function getClientTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem("fizzy-theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return "light";
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === "fizzy-theme") {
      onStoreChange();
    }
  };

  const handleThemeChange = () => onStoreChange();

  window.addEventListener("storage", handleStorage);
  window.addEventListener("fizzy-theme-change", handleThemeChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener("fizzy-theme-change", handleThemeChange);
  };
}

function getSnapshot(): Theme {
  return getClientTheme();
}

function getServerSnapshot(): Theme {
  return "light";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isSunIcon = theme !== "light";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    window.localStorage.setItem("fizzy-theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.dispatchEvent(new Event("fizzy-theme-change"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center justify-center p-0"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      <Image
        src={theme === "light" ? "/dark.png" : "/light.png"}
        alt={theme === "light" ? "Dark mode" : "Light mode"}
        width={theme === "light" ? 18 : 22}
        height={theme === "light" ? 18 : 22}
        className={isSunIcon ? "invert" : ""}
        sizes="22px"
      />
    </button>
  );
}
