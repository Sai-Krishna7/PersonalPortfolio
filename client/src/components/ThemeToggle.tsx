import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // Track mounted state to avoid hydration issues
  const [mounted, setMounted] = useState(false);

  // After mounting, we can show the toggle safely
  useEffect(() => {
    setMounted(true);
  }, []);

  function toggleTheme() {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      className="fixed z-50 bottom-5 right-5"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="relative overflow-hidden rounded-full w-12 h-12 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-lg hover:scale-110 transition-all border-0"
      >
        <span className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 opacity-50"></span>
        <span className="relative z-10">
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </span>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}
