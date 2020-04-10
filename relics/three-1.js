import dynamic from 'next/dynamic'

const ThreeFrameNoSSR = dynamic(
  () => import('../components/three-container.js'),
  { ssr: false }
)

function Home() {
  return (
    <div id="root">
      <ThreeFrameNoSSR />
      <style>{`
        #root{
          width: 30rem
        }
      `}
      </style>
    </div>
  )
}

export default Home