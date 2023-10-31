import React from 'react';
import Image from 'next/image';


export default function Shop() {

  return (
    <main className="w-full h-screen">
    <section className="w-full h-96 grid grid-rows-3 grid-flow-col gap-4 px-24">
    <a href="/shop/product">
        <div className="card__product h-48 w-48 shadow-2xl">
            <span>Renegades</span>
        </div>
        </a>
    </section>
    </main>
  )
}
