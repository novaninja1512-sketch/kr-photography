import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const TIMELINE_STEPS = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "The journey begins with an intimate conversation. We delve into your vision, the textures of your love story, and the unique elements that will define your celebration."
  },
  {
    step: "02",
    title: "Planning",
    desc: "Strategic choreography of light and timing. We collaborate with your planners to ensure every significant moment is captured within its perfect cinematic frame."
  },
  {
    step: "03",
    title: "The Celebration",
    desc: "Where the magic unfolds. Our team operates with refined restraint, capturing raw emotion and grandeur without ever disrupting the sanctity of your moments."
  },
  {
    step: "04",
    title: "Storytelling",
    desc: "The meticulous process of curation. We weave together visual poetry, selecting the most resonant frames to build a narrative that transcends time."
  },
  {
    step: "05",
    title: "Delivery",
    desc: "A cinematic unveiling. Your films and portraits are presented in a bespoke digital gallery, designed to be shared and cherished for generations to come."
  }
];

export default function Experience() {
  const scrollRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    scrollRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="px-gutter mb-section-gap max-w-container-max mx-auto">
        <div className="relative w-full aspect-[16/7] overflow-hidden">
          <img
            alt="The K.R. Experience"
            className="w-full h-full object-cover scale-110 transition-transform duration-[40s] ease-out animate-[kenburns_40s_infinite_alternate]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHrcqOVWih3h7HKqsfh3YPWtHj4HsdLoQ7_ficMkFeZSAdD-rC7PaYntutv3ilh8WlY0bzhNZg_ag33X2zAPPZom-oSqWmp0A7Hzn8yM6-ryLmDGgZVxgSpgrtFtPUeV3o4UpfV2ajiXyZFrgV56ZVTIPuf7NSc7MwaoWFjJELabLU-WsstrJ3bNMALofjwticaGM6Iu8xxKKadKaz6ul1mrvZ_rchsNq3JENTAYQ2ihlUKfb54AqJWA"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute bottom-12 left-12">
            <h1 className="font-display-lg text-display-lg text-primary mb-2">The K.R. Experience</h1>
            <p className="font-label-md text-label-md uppercase tracking-[0.3em] text-on-surface-variant">
              A Journey Through Timeless Artistry
            </p>
          </div>
        </div>
      </section>

      {/* The Journey Timeline */}
      <section
        ref={el => scrollRefs.current[0] = el}
        className="px-gutter mb-section-gap max-w-container-max mx-auto scroll-reveal"
      >
        <div className="text-center mb-24">
          <span className="font-label-md text-label-md uppercase tracking-[0.5em] text-primary-container mb-4 block">
            The Process
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Crafting Your Legacy</h2>
        </div>
        <div className="relative">
          {/* Vertical Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 hidden md:block"></div>
          <div className="space-y-32">
            {TIMELINE_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={step.step}
                  className={`flex flex-col md:flex-row items-center md:justify-between group ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`w-full md:w-[45%] text-center ${isEven ? "md:text-left" : "md:text-right"}`}>
                    <span className="font-display-lg text-label-md text-primary/40 block mb-2 font-bold tracking-widest">
                      Step {step.step}
                    </span>
                    <h3 className="font-headline-md text-headline-md text-primary mb-4">
                      {step.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-primary bg-background z-10 flex items-center justify-center my-8 md:my-0">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div className="w-full md:w-[45%]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section
        ref={el => scrollRefs.current[1] = el}
        className="px-gutter mb-section-gap max-w-container-max mx-auto scroll-reveal"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Wedding Films */}
          <div className="group relative overflow-hidden aspect-[4/5] md:aspect-auto md:h-[700px] border border-primary/20 hover:border-primary transition-all duration-700">
            <img
              alt="Wedding Films"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgOg93tg0TMrPUEIa1Q141gj0ZMXR8BLszNgfnRknJ66sAOmgRDUcGyQD9nxULP_s5X_P-1kOHYAJ5YW_07LED2M5x1-FEP4BxmG4UpIWs_Ra4eAnHhucoXPG3vrbx_7DJ8ANUqWL3VTwC62BWrzzRJicP8XkJwy0zFLnAMkBle9EHdQJYT0IlckSvFER61MPiM0gk2Ub-ROzPVVJja4qVdswSOBmjHww35_lZwGys1j9JREjqwLN_vQ"
            />
            <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 w-full p-12 bg-gradient-to-t from-background to-transparent">
              <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4 block">
                Cinematic Artistry
              </span>
              <h3 className="font-display-lg text-headline-lg text-on-surface mb-6">Wedding Films</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-sm">
                Every glance, every whisper, captured in 4K resolution with the grain and texture of true cinema.
              </p>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 font-label-md text-label-md text-primary uppercase tracking-widest group/link"
              >
                Explore Collections
                <span className="material-symbols-outlined group-hover/link:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          {/* Bridal Portraits */}
          <div className="group relative overflow-hidden aspect-[4/5] md:aspect-auto md:h-[700px] border border-primary/20 hover:border-primary transition-all duration-700">
            <img
              alt="Bridal Portraits"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD87vpGUI_8x0p1uyd_WG8hTPb-NypMx5le6RFb5Vgu1KsOxa_mCjpa6S0k46lodSnmHiZaA5zXQZmKML1PH-E0DQ0mQN5_JWHd4vhQZCbzXEIqcO7VE-lAxb9gZtakq9r7vBZd1QT-WPkBEykXA9uV96cdPAmfRDe2_a04CzlrvnFU8uyDgS1wNwHJomcq4N72F8FDNQexudpwNQCS_WxtpFjB5jPNsA8LA7qhUgZf54G6hN_vF1InoQ"
            />
            <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 w-full p-12 bg-gradient-to-t from-background to-transparent">
              <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4 block">
                Static Poetry
              </span>
              <h3 className="font-display-lg text-headline-lg text-on-surface mb-6">Bridal Portraits</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-sm">
                Freezing a moment in time. Heirloom quality portraits that honor heritage and modern elegance.
              </p>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 font-label-md text-label-md text-primary uppercase tracking-widest group/link"
              >
                View Gallery
                <span className="material-symbols-outlined group-hover/link:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Style Testimonial */}
      <section
        ref={el => scrollRefs.current[2] = el}
        className="bg-tertiary-fixed text-inverse-on-surface py-section-gap px-gutter scroll-reveal"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-px bg-outline mx-auto mb-12"></div>
          <h2 className="font-quote text-quote italic mb-12 leading-relaxed">
            "K.R. didn't just film our wedding; they captured the invisible threads of emotion that we felt but couldn't describe. Looking at the portraits is like stepping back into that dream. It is the most beautiful investment we've ever made."
          </h2>
          <div className="w-12 h-px bg-outline mx-auto mb-8"></div>
          <div className="space-y-2">
            <p className="font-label-md text-label-md uppercase tracking-widest font-bold">The Kapoor Family</p>
            <p className="font-body-md text-body-md opacity-70">New Delhi • Summer 2023</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={el => scrollRefs.current[3] = el}
        className="py-section-gap px-gutter text-center scroll-reveal"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Ready to tell your story?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
            We take a limited number of commissions each year to ensure the highest standard of artistic integrity for every couple.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/inquire"
              className="px-12 py-5 border border-primary text-primary font-label-md uppercase tracking-[0.2em] hover:bg-primary hover:text-on-primary-fixed transition-all duration-300"
            >
              Inquire Now
            </Link>
            <Link
              to="/portfolio"
              className="px-12 py-5 bg-surface-container-high border border-outline-variant text-on-surface font-label-md uppercase tracking-[0.2em] hover:border-primary transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
