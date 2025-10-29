export function About() {
  return (
    <section className="space-y-4 text-lg leading-relaxed">
      <p>
        I&apos;m a first year bioengineering phd student @ penn, interested in ai-driven biomolecule design
      </p>
      <p>
        Right now, I&apos;m in in the Sherry Gao lab.
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
          pvure@seas.upenn.edu
        </a>
        .
      </p>
    </section>
  );
}
