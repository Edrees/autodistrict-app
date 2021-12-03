import Container from '@mui/material/Container'
import SimpleSlider from '../components/HeroImage'
// import styles from '../styles/Home.module.css'

function Home() {
  return (
    <Container maxWidth={false} disableGutters>
      <SimpleSlider />
      {/* <div className={styles.mains}>Welcome to Next.js!</div> */}
    </Container>
  )
}

export default Home
