// App.tsx は、このアプリの「一番外側の画面」を作るファイル。
// 今はまだ機能はなく、画面が1枚表示されるだけの状態にしてある。
// 今後ここに、ダッシュボード画面やオンボーディング画面などを
// 切り替えて表示するしくみを追加していく。

function App() {
  return (
    // 画面全体を画面いっぱいの高さにして、中央に内容を寄せている
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0E]">
      <div className="text-center">
        {/* アプリ名のタイトル */}
        <h1 className="text-3xl font-bold text-white">TimeIsMoney</h1>
        {/* まだ何もできないことを伝える説明文 */}
        <p className="mt-2 text-[#8E8E93]">
          ここから画面を作っていきます
        </p>
      </div>
    </div>
  )
}

export default App
