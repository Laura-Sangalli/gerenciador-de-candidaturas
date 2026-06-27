export default function BackgroundDecoration() {
  return (
    <svg
      className="background-decoration"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lado esquerdo */}
      <g stroke="#AEB5C4" strokeWidth="1.2" fill="none" opacity="0.5">
        <path d="M0 0 C180 80 220 260 420 170" />
        <path d="M0 20 C180 120 220 300 420 210" />
        <path d="M0 40 C180 160 220 340 420 230" />
        <path d="M0 60 C180 200 220 380 420 250" />
        <path d="M0 80 C180 240 220 420 420 270" />
        <path d="M0 90 C180 280 220 460 420 290" />
        <path d="M0 100 C180 320 220 500 420 310" />
      </g>

      {/* Lado direito */}
      <g
        transform="translate(1920 0) scale(-1 1)"
        stroke="#AEB5C4"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      >
        <path d="M0 0 C180 80 220 260 420 170" />
        <path d="M0 20 C180 120 220 300 420 210" />
        <path d="M0 40 C180 160 220 340 420 250" />
        <path d="M0 60 C180 200 220 380 420 290" />
        <path d="M0 80 C180 240 220 420 420 330" />
        <path d="M0 90 C180 280 220 460 420 370" />
        <path d="M0 100 C180 320 220 500 420 410" />
      </g>
    </svg>
  );
}