const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-gradient-to-br ${
                i % 2 === 0
                  ? "from-primary/30 to-primary/10 animate-pulse"
                  : "from-secondary/30 to-secondary/10"
              } transform transition-transform duration-300 hover:scale-105`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-base-content/70 mb-6">{subtitle}</p>
        <a
          href="https://discord.gg/rRjaJuW59w"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-lg font-bold text-white bg-primary rounded-lg shadow-md hover:bg-primary-focus transition-transform transform hover:scale-105"
        >
          Join Discord
        </a>
        <p className="mt-4 text-sm text-base-content/60">
          Or contact me on{" "}
          <a
            href="https://www.linkedin.com/in/prajjwal-rawat-886151278/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-primary hover:text-primary-focus"
          >
            Linkedin
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
