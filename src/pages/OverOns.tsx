import PageHeader from '../components/PageHeader'
import { ImageFrame, Prose, Section, TwoColumn } from '../components/ui'
import aboutUsPagePic from '../assets/auto-district-overons.jpeg'
import { getYearsActive } from '../constants/company'

function OverOns() {
  return (
    <>
      <PageHeader title="Wie zijn we" />
      <Section>
        <TwoColumn ratio="1fr 1.1fr">
          <Prose sx={{ fontSize: '1.2rem' }}>
            We zijn een jong gemotiveerd team met veel passie voor het vak. Na{' '}
            {getYearsActive()} jaar ervaring blijven we telkens weer bijscholen
            op het gebied van de allernieuwste technieken in de autowereld met
            als doel u zo goed mogelijk van dienst te kunnen zijn.
          </Prose>
          <ImageFrame src={aboutUsPagePic} alt="Auto District Poeldijk" />
        </TwoColumn>
      </Section>
    </>
  )
}

export default OverOns
