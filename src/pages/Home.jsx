import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            alt="Cinematic Hero"
            className="w-full h-full object-cover ken-burns"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZSkzWqdI91dd7j6d5kqe8L6jWAXpyZlu8inFGtm3agaW1LPUj722DQlTbpXWn4fNqveGixJSGWDu3oBIkE8V-8g_Gll2kI74wxvf9CF0RO1H2PxFaYhrbCb05Uoeknu_TeFgNWHS3oDEIJJnTJu5jmMzdy7e5XI_TgaN1iZgo6RspCN4MATdFMfXik8pe1Dv9daGES99z7LMYa7wQrfqa_p8uLivIQrycqF4ftQsdh4gfeMk7rLMcKg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-gutter">
          <span className="font-label-md text-label-md uppercase tracking-[0.3em] text-primary mb-6 block opacity-0 translate-y-4 transition-all duration-1000 delay-300 animate-[fadeInUp_1s_ease_forwards]">
            Est. 2012
          </span>
          <h1 className="font-display-lg text-headline-lg md:text-display-lg text-on-background mb-6 leading-tight">
            Stories of Love.<br />Captured Forever.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Luxury Wedding Photography & Films Across India. We don't just take photos; we weave visual legacies of your most cherished moments.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              to="/portfolio"
              className="gold-border px-10 py-4 font-label-md text-label-md uppercase tracking-widest transition-all duration-300 hover:bg-primary hover:text-background min-w-[220px] text-center"
            >
              View Portfolio
            </Link>
            <Link
              to="/inquire"
              className="px-10 py-4 font-label-md text-label-md uppercase tracking-widest transition-all duration-300 text-on-background border border-transparent hover:border-primary/50 min-w-[220px] text-center"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Stories */}
      <section className="py-section-gap overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter mb-16 flex justify-between items-end">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-widest text-primary mb-4 block">
              Collections
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-background">
              Signature Stories
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors pb-1 border-b border-outline-variant hover:border-primary"
          >
            View All Stories
          </Link>
        </div>
        <div className="flex space-x-8 overflow-x-auto scrollbar-hide px-gutter pb-8 snap-x snap-mandatory cursor-grab active:cursor-grabbing">
          {/* Story Card 1 */}
          <div className="min-w-[85vw] md:min-w-[600px] snap-center group">
            <div className="relative aspect-[4/5] overflow-hidden mb-6 border border-surface-container-highest">
              <img
                alt="Udaipur Wedding"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA0wI5pdQ3PMX_vOK25ngQ-MTCN1gC3lrBXXYjWih1zvIH2uYh6V39WcuENDxVfj6iI3qOgwnGd0_gBWio6sDBtHNqD3MwE0eDQWFyjDH7W7PUPjcHzyGAAKEkvEnC22iWKTBl9IfKylNZnt5KrkbxQb1kvNUGrX3YUN5iN25SvPjawVS-42s6bPYxdBXRG3KyGx-EApxSW523-4y1ZoyO8uyqLe35JyrUukMid59ErpZhn1Ev4RvT9Q"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <span className="font-label-md text-label-md uppercase tracking-widest text-primary mb-2">
                  Location
                </span>
                <p className="font-headline-md text-headline-md text-on-background">
                  The City Palace, Udaipur
                </p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-2">
                  A Royal Lake Affair
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Arjun & Ananya's three-day celebration amidst the Aravalli hills.
                </p>
              </div>
            </div>
          </div>

          {/* Story Card 2 */}
          <div className="min-w-[85vw] md:min-w-[600px] snap-center group">
            <div className="relative aspect-[4/5] overflow-hidden mb-6 border border-surface-container-highest">
              <img
                alt="The Royal Bride"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm2Cm0NvnyzbKZzXAzF_NqIozURogbbCUzrlWpm-XlYvGoFKrKRWYy3Qkx6C04EB0TqOaux5mKNys9hKhH0qXVthrP8W6sHwcxrRz9v-L8Q2t_HPa6S7ALv68m6SslahmK_aZML4ZqlXilAhvsNJJbHHUSnh7pSThub_3nr_NAfm6ZHR8mcTqoC51BDBrjN6Woez-PzXcOaMreBMYOjl_e4erL8wz3vePCr46qDjR0Ydh-L9aQB2gs_A"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <span className="font-label-md text-label-md uppercase tracking-widest text-primary mb-2">
                  Portraiture
                </span>
                <p className="font-headline-md text-headline-md text-on-background">
                  Meher's Editorial Bridal
                </p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-2">
                  The Heritage Bride
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Fine art bridal portraits at the historic Rambagh Palace, Jaipur.
                </p>
              </div>
            </div>
          </div>

          {/* Story Card 3 */}
          <div className="min-w-[85vw] md:min-w-[600px] snap-center group">
            <div className="relative aspect-[4/5] overflow-hidden mb-6 border border-surface-container-highest bg-surface-container">
              <img
                alt="Goa Wedding"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEDD3cCoA2X7dB2-1S4CjK-5mMXJCtFY0XcylQy7R47504LU48h6W-ji4UNXzHTqXM-cdin4GQyQggTETq_y9ANmM2jDdXVuK4uH9cVyU0JlYLOHM_94hsxdkCuw0gow2QQiliztu5gmB3JX7KLOXw8wzvkhN9izRbweEFcQ0peIjzvpJ0A8vTw4AEjlOmpVEymqa5itd6aDQuVozn9RN5wLCTOtlZQRf-3Xh6eGkextrj3J5wvW0_MA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <span className="font-label-md text-label-md uppercase tracking-widest text-primary mb-2">
                  Destination
                </span>
                <p className="font-headline-md text-headline-md text-on-background">
                  Beachside Vows, Goa
                </p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-2">
                  Sunset Serenade
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  A minimalist and modern luxury beach wedding under the Goan sky.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Split) */}
      <section className="py-section-gap bg-surface-container-lowest overflow-hidden">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-stretch min-h-[700px]">
          <div className="w-full md:w-1/2 relative">
            <img
              alt="Photographer Portrait"
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk_rwVAEZ4zOkpNWTj8NcXzan55VFXUd9SI8TL7MbeSQe3wQbMC5vBUsngHIwi0ZAllOhQZlf8OYzGBXIQnEdcsDcQHefAK3_XKPKTnfZhaZ7fs1ARoCtrELFaw-8bEj8B7s_RNsw5EWjz0VXV1Od1dyVgAqJ9IEk-_dWQhRAAjnuw6gxP_0PpJXkMOkPfIt2YvB26pmOk0UQvBvHiFIrns5pJ9jvUY4eCinUSKKmPUjmqiA6e30_naA"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center px-gutter md:px-24 py-20 bg-background">
            <span className="font-label-md text-label-md uppercase tracking-widest text-primary mb-6 block">
              Our Philosophy
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-8 leading-snug">
              Capturing the soul of every celebration.
            </h2>
            <div className="space-y-6">
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                For over a decade, we have traveled the globe to document the world's most exclusive weddings. Our approach is rooted in photojournalism with an editorial eye for fashion and detail.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                We believe that every love story is a masterpiece. Our goal is to create timeless imagery that feels as cinematic as a Bollywood film and as refined as a luxury magazine spread.
              </p>
            </div>
            <div className="mt-12 flex items-center space-x-6">
              <div className="h-px w-20 bg-primary"></div>
              <span className="font-headline-md text-headline-md text-primary italic">
                Karthik Raja, Founder
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-section-gap px-gutter">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-20">
            <span className="font-label-md text-label-md uppercase tracking-widest text-primary mb-4 block">
              Global Coverage
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-background">
              Featured Destinations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Udaipur */}
            <div className="relative group h-[500px] overflow-hidden border border-primary/20">
              <img
                alt="Udaipur"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLStkMziliua4JzrWfw8HC_XpgaMyPecMomY_mljWd24h7RDH1KfT7Kcn3gMCcVnOg8b3DDiu2_uanVWLtGQEI_D0rAxffgka1avrDGkXlAwqDa-enKvDsbk3jTLbe5RUR_wRK3_mviBu5LRd_z5oMrlAClH8ED8ayV86dadNzRndh2cmROpnx_Gt2SHzTkx1LyrJkZRoaiF_r_XSjExwPEqDFvdHCXzIdRqrkNKDL0Cw4wRXh0fcgvQ"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h3 className="font-display-lg text-headline-md text-on-background mb-2 tracking-widest uppercase">
                  Udaipur
                </h3>
                <div className="h-px w-12 bg-primary mb-4 transition-all duration-500 group-hover:w-32"></div>
                <p className="font-label-md text-label-md uppercase tracking-widest text-on-surface group-hover:text-primary transition-colors">
                  The City of Lakes
                </p>
              </div>
            </div>
            {/* Jaipur */}
            <div className="relative group h-[500px] overflow-hidden border border-primary/20">
              <img
                alt="Jaipur"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8ZOHPZ6EKCqsTLKq6w09GWMDHijhSc8lJVoQp-BpWslLKB-PWLyTY0UA8jhL2UFXWzNecTu6oOhVH3ePJsLn8CNxf_Q_k16VQq7UfubEFkQgxWeFG26Pab4XvrOD4SFB5dOu3nlPj1NThxLBMpgoRm7Vi6Wd5PbbdIyqQg8YdMjDBTNtdsPcOfjFRQcxDLIgRwkutju9x04koImSraet9nrO_LyGLmyED8puSmla8np_2Ljm2HAsbYQ"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h3 className="font-display-lg text-headline-md text-on-background mb-2 tracking-widest uppercase">
                  Jaipur
                </h3>
                <div className="h-px w-12 bg-primary mb-4 transition-all duration-500 group-hover:w-32"></div>
                <p className="font-label-md text-label-md uppercase tracking-widest text-on-surface group-hover:text-primary transition-colors">
                  The Pink City
                </p>
              </div>
            </div>
            {/* Goa */}
            <div className="relative group h-[500px] overflow-hidden border border-primary/20">
              <img
                alt="Goa"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMNvdzaam01XkOrzRdkdfvgBXBtMeVidoksdD8p1b44aw2zDb0TA7wPORwryNFPUxmJuj30CBnf1lncnKFu0xCop2Yfl_KEHZmkLSNiKAIPPzugQ92fGazXJEAs5neVTLhVEcH4E4i3an_6eo3kLkQOB2HGX7deeWUKIstocm7kyxtqXszF3eusFqKzvSCC541dmY3eDI6IOCPso6xqCieGxGgu5JfIxIp5ILEgBpfpoHoOgsB_MupnA"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h3 className="font-display-lg text-headline-md text-on-background mb-2 tracking-widest uppercase">
                  Goa
                </h3>
                <div className="h-px w-12 bg-primary mb-4 transition-all duration-500 group-hover:w-32"></div>
                <p className="font-label-md text-label-md uppercase tracking-widest text-on-surface group-hover:text-primary transition-colors">
                  The Coastal Haven
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Quote Section */}
      <section className="py-section-gap bg-surface-container-lowest px-gutter">
        <div className="max-w-3xl mx-auto text-center">
          <div className="h-10 w-px bg-primary mx-auto mb-8"></div>
          <p className="font-quote text-quote text-on-background italic mb-8">
            "Karthik and his team didn't just capture our wedding; they captured the emotions that we didn't even realize we were feeling. Every photo feels like a portal back to that magical day in Udaipur. They are true artists of the highest caliber."
          </p>
          <div className="h-10 w-px bg-primary mx-auto mb-8"></div>
          <span className="font-label-md text-label-md uppercase tracking-widest text-primary block">
            Isha & Rohan
          </span>
          <span className="font-body-md text-body-md text-on-surface-variant block mt-2">
            Udaipur, 2023
          </span>
        </div>
      </section>
    </>
  );
}
