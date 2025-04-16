import React from 'react';
import Head from 'next/head';
import GameBoard from '../components/GameBoard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Life as Chess</title>
      </Head>
      <main>
        <GameBoard />
      </main>
    </>
  );
}