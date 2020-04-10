import dynamic from 'next/dynamic'

const ThreeFrameNoSSR = dynamic(
  () => import('../components/three-playground.js'),
  { ssr: false }
)

function Home() {
  return (
    // <canvas id="c"></canvas>
    <canvas id="three-pg-id">
      <ThreeFrameNoSSR />
    </canvas>
  )
}

export default Home