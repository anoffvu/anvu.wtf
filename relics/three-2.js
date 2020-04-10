import dynamic from 'next/dynamic'

const ThreeFrameNoSSR = dynamic(
  () => import('../components/three-two.js'),
  { ssr: false }
)

function Home() {
  return (
    <div id="three-two-id">
      <ThreeFrameNoSSR />
    </div>
  )
}

export default Home