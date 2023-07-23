import Table3_col from '@/components/table_3_col'
import Table3col_1_price from '@/components/table_3col_1_price'
import Head from 'next/head'

const Drinks = ({ menus }) => {
  const items = [
    //prettier-ignore
    {name: 'aperitifs', display: 'Aperitifs'},
    { name: 'brandy', display: 'Brandy' },
    { name: 'ports', display: 'Ports' },
    { name: 'liqueurs', display: 'Liqueurs' },
    { name: 'spirits', display: 'Spirits' },
    { name: 'lager', display: 'Lager' },
    { name: 'soft-drinks', display: 'Soft Drinks' },
    { name: 'water', display: 'Mineral Water' },
  ]
  return (
    <>
      <Head>
        <title>Drinks - Bangkok Pavilion | Thai Restaurant in Deal, Kent, UK</title>
        <meta description="Drinks Menus of Bangkok Pavilion restaurant in Deal, Kent UK" />
        <meta keywords="Thai food, Deal Kent UK, drinks, wine" />
      </Head>
      <div className="menusBox">
        <Table3_col menus={menus.filter(m => m.category === 'wine')} title="Wines" />
        {items.map(item => (
          <Table3col_1_price
            key={item.name}
            menus={menus.filter(m => m.category === item.name)}
            title={item.display}
          />
        ))}
      </div>
    </>
  )
}

export default Drinks

export async function getStaticProps() {
  const res = await fetch('https://bangkokpavilion.co.uk/api/all_menus?menu=drinks')
  const menus = await res.json()

  return {
    props: { menus },
  }
}
