import React from 'react'
import { CardStack, Highlight } from './ui/CardStack';

const Quote = () => {
  return (
    <section className="w-full py-15">
      <h1 className='heading'>Card <span className="text-purple">Quote</span></h1>
      <div className="h-[25rem] text-justify flex items-center justify-center w-full">
        <CardStack items={cardsQuote} />
      </div>
    </section>
  )
}

const cardsQuote = [
  {
    id: 0,
    name: "Katsuki Bakugo",
    designation: "My Hero Academia",
    content: (
      <p>
        If all you ever do is <Highlight>look down</Highlight> on people, you won&apos;t be able to <Highlight>recognize</Highlight> your own <Highlight>weaknesses</Highlight>.
      </p>
    ),
  },
  {
    id: 1,
    name: "Kafka Hibino",
    designation: "Kaiju No. 8",
    content: (
      <p>
        <Highlight>Chasing</Highlight> your <Highlight>dreams</Highlight> means there&apos;s always someone out there who&apos;s <Highlight>beating</Highlight> you at the thing you care about most.
      </p>
    ),
  },
  {
    id: 2,
    name: "Izuku Midoriya",
    designation: "My Hero Academia",
    content: (
      <p>
        That&apos;s right. <Highlight>Don&apos;t worry</Highlight> about what other people think! Hold your <Highlight>head up</Highlight> high and plunge forward!.
      </p>
    ),
  },
];

export default Quote