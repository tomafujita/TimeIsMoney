import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Viteの設定ファイル（開発サーバーやビルド方法をここで指定する）
// https://vite.dev/config/
export default defineConfig({
  // react(): Reactのコードを使えるようにするプラグイン
  // tailwindcss(): Tailwind CSS（デザイン用のCSSクラス集）を使えるようにするプラグイン
  plugins: [react(), tailwindcss()],
})
