// main.tsx は、このアプリが起動したときに一番最初に実行されるファイル。
// index.html の中にある <div id="root"></div> という場所を探して、
// そこに App.tsx で作った画面（Appコンポーネント）を描画（表示）している。

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // アプリ全体のスタイル（見た目）を読み込む
import App from './App.tsx' // 実際に表示する画面の中身

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
