"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IconSun, IconMoon, IconDeviceDesktop } from "@tabler/icons-react";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-full transition-colors ${
          theme === "light"
            ? "bg-primary text-primary-foreground"
            : "hover:bg-muted"
        }`}
        aria-label="Light mode"
      >
        <IconSun size={18} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-full transition-colors ${
          theme === "dark"
            ? "bg-primary text-primary-foreground"
            : "hover:bg-muted"
        }`}
        aria-label="Dark mode"
      >
        <IconMoon size={18} />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-full transition-colors ${
          theme === "system"
            ? "bg-primary text-primary-foreground"
            : "hover:bg-muted"
        }`}
        aria-label="System mode"
      >
        <IconDeviceDesktop size={18} />
      </button>
    </div>
  );
} 