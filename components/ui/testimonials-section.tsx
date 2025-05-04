"use client";

import { Testimonial } from "@/components/ui/testimonial-card";

interface TestimonialsSectionProps {
  title?: string;
  description?: string;
}

export function TestimonialsSection({
  title = "Trusted by 1200+ Riders",
  description = "Don't just take our word for it - hear what our community has to say about our services."
}: TestimonialsSectionProps) {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <Testimonial
            name="Jin Wei Tan"
            role="Rider"
            company="Woodlands"
            rating={4}
            testimonial="I've been using this bike wash service for a few months now, and I couldn't be happier. The full-body foam wash leaves my bike looking brand new every time. The chain maintenance is top-notch, and the ceramic coating really helps keep it cleaner for longer. Highly recommend!"
            image="/placeholder-avatar-1.png"
          />
          
          <Testimonial
            name="Mei Ling Ong"
            role="Rider"
            company="Choa Chu Kang"
            rating={5}
            testimonial="Fantastic service! My bike has never looked better. The attention to detail is amazing, especially the rim cleaning and chain care. The ceramic coating gives it an extra shine that lasts. It's definitely worth the investment!"
            image="/placeholder-avatar-2.png"
          />
          
          <Testimonial
            name="Yeo Kok Meng"
            role="Rider"
            company="Tampines"
            rating={3}
            testimonial="Everything about the service is good — the foam wash, chain maintenance, and ceramic coating were all done well. The only downside is that the location is a bit far for me, but I choose to support local businesses."
            image="/placeholder-avatar-3.png"
          />
          
          <Testimonial
            name="Faizan Mizanin"
            role="Rider"
            company="Jurong East"
            rating={5}
            testimonial="Excellent service from start to finish! My R3 wasn't just cleaned—it was transformed. The ceramic coating is worth every penny, and the staff is both professional and passionate about bikes."
            image="https://i1.sndcdn.com/avatars-000082153234-awz1t0-t1080x1080.jpg"
          />
        </div>
      </div>
    </section>
  );
} 