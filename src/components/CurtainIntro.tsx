export default function CurtainIntro() {
  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "calc(100vh - 3.5rem)" }}
      aria-label="Welcome to the UCF Fashion Society website"
    >
      <div className="absolute inset-0 fs-curtain" />
      <div className="absolute inset-0 fs-curtain-shade" />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <p className="fs-curtain-text text-white text-center font-['Monsieur_La_Doulaise'] text-5xl sm:text-7xl lg:text-8xl">
          Welcome to the UCF Fashion Society Website
        </p>
      </div>
    </section>
  );
}
