import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <div>
      <div style={{position: 'relative', height: '900px',  overflow: 'hidden'}}>
      <iframe src="https://kino.is/301"   style={{position: 'absolute', width: '100%', height: '100%', transform: 'scale(1.2)'}}></iframe>
      </div>
    </div>
  )
}

export default Home
