import { defineConfig } from 'vite';
import vituum from 'vituum';
import pug from '@vituum/vite-plugin-pug';

const isPreview = process.argv.includes('preview');

export default defineConfig(({ command }) => ({
  base: command === 'serve' && !isPreview ? '/' : '/landing-keepsake-vite/',
  plugins: [vituum(), pug()],
}));
