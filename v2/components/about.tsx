export function About() {
  return (
    <section className="space-y-4 text-lg leading-relaxed">
      <p>
        I&apos;m a first year bioengineering phd student @ UPenn, advised by Dr. Sherry Gao. 
      </p>
      <p>
      I&apos;m interested in AI-driven biomolecular design.
      </p>
      <p>
        In my free time, I like to {" "}
        <a
          href="https://hevy.com/user/0pv0"
          target="_blank"
          className="text-gray-900 hover:text-gray-600 underline transition-colors duration-200"
        >
          lift
        </a>
        ,{" "}
        <a
          href="https://beliapp.co/app/pranay_"
          target="_blank"
          className="text-gray-900 hover:text-gray-600 underline transition-colors duration-200"
        >
          eat
        </a>
        , and read.
      </p>
      <p>
        Feel free to reach out at{" "}
        <a
          href="mailto:pvure@seas.upenn.edu"
          className="text-gray-900 hover:text-gray-600 underline transition-colors duration-200"
        >
          pvure@seas.upenn.edu
        </a>
        .
      </p>
    </section>
  );
}
