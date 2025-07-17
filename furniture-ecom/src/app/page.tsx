// src/app/page.tsx
import Hero from "@/components/Hero"
import Service from "@/components/Service"
import Collection from "@/components/Collections"
import Beautify from "@/components/Beautify"
import HowItWorks from "@/components/HowItWorks"
import MailingList from "@/components/MailingList"
import Gallery from "@/components/Gallery"
export default function HomePage() {
  return (
    <main className="text-center">
      <div className="pt-20">
        <Hero/>
        <Service/>
        <Collection/>
        <Beautify/>
        <Gallery/>
        <HowItWorks/>
        <MailingList/>
      </div>
      
    </main>
  )
}
