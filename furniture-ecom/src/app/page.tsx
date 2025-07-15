// src/app/page.tsx
import Hero from "@/components/Hero"
import Service from "@/components/Service"
import Collection from "@/components/Collections"
export default function HomePage() {
  return (
    <main className="text-center">
      <div className="pt-20">
        <Hero/>
        <Service/>
        <Collection/>
      </div>
      
    </main>
  )
}
