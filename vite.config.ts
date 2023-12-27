import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import pluginChecker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), pluginChecker({ typescript: true })],
});
