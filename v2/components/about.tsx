export function About() {
  return (
    <section className="space-y-4 text-lg leading-relaxed">
      <p>
        I&apos;m a junior at Duke interested in the design of low-latency, high-throughput backend systems. I have experience working on ETL pipelines at growth stage startups and I enjoy thinking about algorithmic problems.
      </p>
      <p>
        Right now, I&apos;m on the Data Platform team at Ramp working on their internal feature store for ML decisioning models.
      </p>
      <p>
        In my free time, I like to explore new tech,{" "}
        <a
          href="https://youtu.be/OT7CZKSR5z4"
          target="_blank"
          className="text-gray-900 hover:text-gray-600 underline transition-colors duration-200"
        >
          play with fire
        </a>
        , and{" "}
        <a
          href="https://beliapp.co/app/aaaronhsu"
          target="_blank"
          className="text-gray-900 hover:text-gray-600 underline transition-colors duration-200"
        >
          try different restaurants
        </a>
        .
      </p>
      <p>
        Feel free to reach out at{" "}
        <a
          href="mailto:aaronhsu4606@gmail.com"
          className="text-gray-900 hover:text-gray-600 underline transition-colors duration-200"
        >
          aaronhsu4606@gmail.com
        </a>
        .
      </p>
    </section>
  );
}
