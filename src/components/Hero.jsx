import { Button } from "./Button"

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w[900px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">

        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Swole<span  className="text-blue-400">normous</span></h1>
      </div>
      <p className="text-sm md:text-base font-light">I herby acknowledge that I amy become <span className="text-blue-400 font-medium">unblelievably swolenormous</span> and accept all risks of becoming the local <span className="text-blue-400 font-medium">mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
      <Button func={() => {
        window.location.href = '#generate'
      }} text={'Accept & Begin'} />
    </div>
  )
}
