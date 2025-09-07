import React from "react";
import TitleHeader from "./TitleHeader";
import GlowCard from "./GlowCard";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding py-20">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Us?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16 gap-6">
          {testimonials.map((testimonial, index) => (
            <GlowCard key={index} className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.imgPath} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.mentions}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "{testimonial.content}"
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;