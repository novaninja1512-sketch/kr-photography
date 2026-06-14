import React, { useState, useEffect } from 'react';

const ALL_ITEMS = [
  {
    id: 1,
    title: "Ananya & Vikram",
    category: "Weddings",
    location: "Udaipur, Rajasthan",
    desc: "A royal union at the City Palace",
    type: "landscape",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZSkzWqdI91dd7j6d5kqe8L6jWAXpyZlu8inFGtm3agaW1LPUj722DQlTbpXWn4fNqveGixJSGWDu3oBIkE8V-8g_Gll2kI74wxvf9CF0RO1H2PxFaYhrbCb05Uoeknu_TeFgNWHS3oDEIJJnTJu5jmMzdy7e5XI_TgaN1iZgo6RspCN4MATdFMfXik8pe1Dv9daGES99z7LMYa7wQrfqa_p8uLivIQrycqF4ftQsdh4gfeMk7rLMcKg",
    aspect: "aspect-[16/9]"
  },
  {
    id: 2,
    title: "The Sabyasachi Bride",
    category: "Portraits",
    location: "Bridal Editorial",
    desc: "Heirloom elegance",
    type: "portrait",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm2Cm0NvnyzbKZzXAzF_NqIozURogbbCUzrlWpm-XlYvGoFKrKRWYy3Qkx6C04EB0TqOaux5mKNys9hKhH0qXVthrP8W6sHwcxrRz9v-L8Q2t_HPa6S7ALv68m6SslahmK_aZML4ZqlXilAhvsNJJbHHUSnh7pSThub_3nr_NAfm6ZHR8mcTqoC51BDBrjN6Woez-PzXcOaMreBMYOjl_e4erL8wz3vePCr46qDjR0Ydh-L9aQB2gs_A",
    aspect: "aspect-[3/4]"
  },
  {
    id: 3,
    title: "Riya & Sahil",
    category: "Pre-Wedding",
    location: "Mumbai",
    desc: "Golden hour romance",
    type: "square",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXLV8UbvT0HcKZkYNwHhmx1IjJ6OZOGAFC53sMFPXRD-Z_-TR-DEGLzAgBRXVLJ-058CMckbr0WmmWL2miAzNZkXxRyGQbO-Vq7bkslMpMp-T9Tu98_4HSZTuPU09pQ8_0xnmKWPU9qFfho_n5SGFytc4McrqW3UeNftMXf9z8CNDysvo8rw53lBSo5H76vvraiosViTrApdp1UMQNWmloT3xKpgkOwdyPxk0YrWJ65FNQTgAmSwxTsQ",
    aspect: "aspect-square"
  },
  {
    id: 4,
    title: "Celestial Mandap",
    category: "Destination",
    location: "Goa Mandap",
    desc: "Pastel twilight architecture",
    type: "square",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_9OPWWrXXCtgC8Xhat8Cinx6wcxOLP5g4Ltc0MjvNC37YKi2vKeShwnWIGHQvwsrdmfpznWBxjDNyhEuoju4USSnJZCPRqrgWQ-2u6bkm3Qa5dKCK4xjXP9cQEjM9loXsyLrZUeR7UMCbkZziM28C_6SXB7YsSJL9Hnd-d_L7iCOSDvHcS38SClL-TQ8t6POU5fhuAdsouxlJ1DpT_3Nh0LIpKmLWGRxNYYLMN7l01CwpNc634yKCxg",
    aspect: "aspect-square"
  },
  {
    id: 5,
    title: "Legacy of Kings",
    category: "Portraits",
    location: "Groom Portraits",
    desc: "Cinematic medium portrait",
    type: "portrait",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-xW614cCU_f2LpNTmTLoCn7GQfW8zvyhoN-t8B1sbY4jJCQULDkyUsSfyYRwDhW5MSvwvnVpMe-a7_SzdEFtGUhkAXZKwDhmISER_GyxhRJ72E95PkcMm2UKjnUFMm-IDwmeymRzBVQiwV7HZlj3NRD-rKEmqgyG2IBwgzmlH2C6p8-8yTPYQZaKpu1FGlNwG6qzWM40xrC9ooF0h_YzYEpCP6ZSrb5TVIKfGJqoJMRtTHbjRVDo0cg",
    aspect: "aspect-[2/3]"
  },
  {
    id: 6,
    title: "Under the Stars",
    category: "Films",
    location: "Night Celebration",
    desc: "Warm orange bokeh magic",
    type: "landscape",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu4B77nrzarURQHxp7Sd_rBNzbqYbSFl9DwR9kH-USftzvoTeJqlet1wme1Fu_CRTJTMIHyQZ0cTwoELocLIy5JDX1Mb46XC0cU7jXwXqxkEISJkrUj7L4khpmmjxipPJaSR221b4BVn-zhM0ZNeUaSSFzbAApMwoZQhzqty3wnk6JruJJxKdC-qiXazhH3wwmIsd-nXAyGUsSMXBRUmPqv2HaUIZMqbAcAWX6YgwAXtqtuIvVgLTFjQ",
    aspect: "aspect-[21/9]"
  }
];

const FILTERS = ["All", "Weddings", "Pre-Wedding", "Destination", "Portraits", "Films"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState(ALL_ITEMS);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredItems(ALL_ITEMS);
    } else {
      setFilteredItems(ALL_ITEMS.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <main className="pt-32 pb-section-gap">
      {/* Header & Filters */}
      <header className="px-gutter max-w-container-max mx-auto mb-16 sm:mb-20 text-center">
        <h1 className="font-display-lg text-4xl sm:text-5xl md:text-display-lg text-on-background mb-6">The Gallery</h1>
        <div className="w-10 h-[1px] bg-primary/40 mx-auto mb-12"></div>
        <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-10 gap-y-4 px-4">
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative font-label-md text-xs sm:text-label-md uppercase tracking-[0.2em] transition-colors py-2 ${
                activeFilter === filter
                  ? "text-primary filter-active"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </header>

      {/* Portfolio Grid */}
      <section className="px-gutter max-w-container-max mx-auto">
        <div className="masonry-grid transition-all duration-500">
          {filteredItems.map(item => {
            let colSpanClass = "masonry-item-square";
            if (item.type === "landscape") colSpanClass = "masonry-item-landscape";
            if (item.type === "portrait") colSpanClass = "masonry-item-portrait";

            return (
              <div
                key={item.id}
                className={`${colSpanClass} relative group overflow-hidden gold-border-subtle bg-surface-container-low transition-all duration-500 hover:z-10`}
              >
                <div className={`${item.aspect} overflow-hidden`}>
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    src={item.src}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 sm:p-8 backdrop-blur-[2px]">
                  <p className="font-label-md text-xs sm:text-label-md text-primary mb-2 uppercase tracking-widest">
                    {item.location}
                  </p>
                  <h3 className="font-headline-md text-lg sm:text-headline-md text-on-background">
                    {item.title}
                  </h3>
                  {item.desc && (
                    <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant mt-2 italic">{item.desc}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-gap px-gutter max-w-[800px] mx-auto text-center mt-20 sm:mt-24">
        <div className="w-10 h-[1px] bg-primary mb-8 mx-auto"></div>
        <p className="font-quote text-lg sm:text-quote text-on-background italic mb-8 leading-relaxed">
          "Photography is not about capturing a moment, it's about preserving a legacy. Every frame we craft is a testament to the grandeur of your love story."
        </p>
        <div className="w-10 h-[1px] bg-primary mb-8 mx-auto"></div>
        <p className="font-label-md text-label-md text-primary uppercase tracking-[0.3em]">
          Karan Rathore
        </p>
      </section>
    </main>
  );
}
