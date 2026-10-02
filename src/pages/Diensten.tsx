import type { ReactNode } from 'react'
import PageHeader from '../components/PageHeader'
import {
  Section,
  SectionHeading,
  ServiceCardGrid,
  UspList,
} from '../components/ui'
import { SERVICE_CARDS } from '../constants/services'

interface ServicesUSPProps {
  title: string
  desc: ReactNode
}

const servicesUSP: ServicesUSPProps[] = [
  {
    title: 'APK Keuring',
    desc: (
      <>
        Snel en flexibel ingepland. Onze{' '}
        <strong>gecertificeerde keurmeesters</strong> controleren uw auto
        grondig volgens de RDW-richtlijnen.
      </>
    ),
  },
  {
    title: 'Onderhoud & Reparatie',
    desc: (
      <>
        Grote of kleine beurt? Wij onderhouden elk merk met behoud van
        fabrieksgarantie en vullen uw (digitale) serviceboekje netjes in.
      </>
    ),
  },
  {
    title: 'Airco Service & Lekdetectie',
    desc: (
      <>
        Blijf koel in de zomer en voorkom storingen. Wij verzorgen het complete
        onderhoud, vullen aircosystemen <strong>(R134a & R1234yf)</strong> én
        sporen micro-lekkages nauwkeurig op met formeergas.
      </>
    ),
  },
  {
    title: 'DSG & Automaat Service',
    desc: (
      <>
        Haperingen of toe aan onderhoud? Wij zijn gespecialiseerd in het
        spoelen, repareren en inleren van{' '}
        <strong>DSG-versnellingsbakken</strong>.
      </>
    ),
  },
  {
    title: 'Autosleutels & Afstandsbedieningen Inleren',
    desc: (
      <>
        Kwijt, stuk of een extra sleutel nodig? Wij{' '}
        <strong>
          programmeren en inleren autosleutels en afstandsbedieningen
        </strong>{' '}
        voor de meeste merken en modellen.
      </>
    ),
  },
  {
    title: 'Banden & Professionele Montage',
    desc: (
      <>
        Bestel uw banden online via <strong>BandenConcurrent</strong> en kies
        Auto District Poeldijk als uw vaste <strong>montagepartner</strong>. Wij
        verzorgen de complete demontage, montage, balancering én veilige
        seizoensopslag.
      </>
    ),
  },
  {
    title: 'Diagnose & Storingen',
    desc: (
      <>
        Brandt er een storingslampje? Met{' '}
        <strong>geavanceerde diagnose-apparatuur</strong> achterhalen en
        verhelpen we snel de exacte oorzaak.
      </>
    ),
  },
  {
    title: 'Lekdetectie & Rookgas Diagnose',
    desc: (
      <>
        Heeft u last van een onverklaarbare storing, vermogensverlies of vocht?
        Met behulp van <strong>geavanceerde rookmachines</strong> sporen wij
        lucht-, vacuüm- en vloeistoflekkages snel en schadevrij op.
      </>
    ),
  },
  {
    title: 'Walnut Blasting (Kleppen stralen)',
    desc: (
      <>
        Ervaar je vermogensverlies of een onregelmatig stationair toerental? Met{' '}
        <strong>walnut blasting</strong> reinigen wij de inlaatkanalen en
        kleppen van direct ingespoten motoren grondig, zonder deze te
        beschadigen.
      </>
    ),
  },
  {
    title: 'Elektronische Distributie Service',
    desc: (
      <>
        De distributieriem is het hart van uw motor. Wij{' '}
        <strong>
          vervangen en stellen uw distributieriem of -ketting elektronisch
        </strong>{' '}
        uiterst nauwkeurig af, zodat uw motor weer perfect op tijd loopt.
      </>
    ),
  },
]

export default function Diensten() {
  return (
    <>
      <PageHeader title="Onze diensten" />
      <Section>
        <ServiceCardGrid services={SERVICE_CARDS} />
      </Section>
      <Section tone="paper">
        <SectionHeading title="Waarvoor kunt u bij Auto District terecht?" />
        <UspList items={servicesUSP} />
      </Section>
    </>
  )
}
