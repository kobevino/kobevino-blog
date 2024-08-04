import { MantineColorScheme } from "@mantine/core";

export const isDarkMode = (theme: MantineColorScheme) =>
  theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches;
