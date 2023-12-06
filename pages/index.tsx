import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: "400", preload: true, subsets: ["devanagari"] });

export default function Home() {
  return (
    <div className={poppins.className}>
      Getting Started Page
    </div>
  )
}
