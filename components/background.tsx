export function Background() {
  return (
    <div className='-z-10 fixed left-0 top-0 h-screen w-screen dark:bg-[#111010] bg-white dark:bg-dot-white/[0.1] bg-dot-black/[0.2]'>
      {/* Radial gradient for the container to give a faded look */}
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#111010] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
    </div>
  );
}
