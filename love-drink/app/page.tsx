import React from 'react';
import { playfair } from "../utils/font"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className={`${playfair.className} text-6xl text-bold`}>I ♡ Drink</h1><br />
      <p className="text-center mb-8">
        このアプリは、ノンアルコール&ローアルコール&アルコールの飲料とあなたの新たな出会いをサポートします。<br /><br />
        ※妊娠中や授乳期の飲酒は、胎児・乳児の発育に悪影響を与えるおそれがあります。<br />
        ※お酒は20歳になってから。
      </p>
      <button className="w-60 bg-sky-300 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded mb-2">ログインして利用する</button>
      <button className="w-60 bg-sky-300 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded mb-2">会員登録する</button>
      <button className="w-60 text-white hover:text-sky-500 font-bold py-2 px-4 rounded">登録せずゲスト利用する</button>
    </div>
  );
}
