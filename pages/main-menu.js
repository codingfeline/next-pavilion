import Table4col_1_price from '@/components/table_4col_1_price'
import Head from 'next/head'

const MainMenu = ({ menus }) => {
  const items = [
    //prettier-ignore
    { name: 'starters', display: 'Starters'},
    { name: 'soups', display: 'Soups' },
    { name: 'chicken_duck', display: 'Chicken and Duck' },
    { name: 'pork', display: 'Pork' },
    { name: 'pork_ribs', display: 'Pork Ribs' },
    { name: 'beef', display: 'Beef' },
    { name: 'seafood', display: 'Seafood' },
    { name: 'curry', display: 'Curry' },
    { name: 'salad', display: 'Salad' },
    { name: 'vegetables', display: 'Vegetables' },
    { name: 'rice', display: 'Rice' },
    { name: 'noodles', display: 'Noodles' },
  ]
  return (
    <>
      <Head>
        <title>Main Menu - Bangkok Pavilion | Thai Restaurant in Deal, Kent, UK</title>
        <meta description="Main Menus of Bangkok Pavilion restaurant in Deal, Kent UK" />
        <meta keywords="Thai food, Deal Kent UK, Main Menu, Bangkok Pavilion" />
      </Head>
      <div className=" menusBox">
        {items.map(item => (
          <Table4col_1_price
            key={item.name}
            menus={menus.filter(m => m.category === item.name)}
            title={item.display}
          />
        ))}
      </div>
    </>
  )
}

export default MainMenu

export async function getStaticProps() {
  const res = await fetch('https://bangkokpavilion.co.uk/api/all_menus?menu=main')
  const menus = await res.json()

  return {
    props: { menus },
  }
}
