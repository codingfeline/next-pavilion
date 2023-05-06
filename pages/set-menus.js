import Table4col_2_price from '@/components/table_4col_2_price'

const SetMenus = ({ menus }) => {
  const items = [
    //prettier-ignore
    { name: 'lunch_menus', title: 'Lunch Menus'},
    { name: 'choices', title: 'Choices' },
    { name: 'set_menu', title: 'Set Menus' },
  ]

  return (
    <>
      <div className="menusBox">
        <Table4col_2_price
          menus={menus.filter(m => m.category === 'lunch_menus')}
          title="Lunch Menus"
        />
      </div>
    </>
  )
}

export default SetMenus

export async function getStaticProps() {
  const res = await fetch(
    'https://bangkokpavilion.co.uk/api/all_menus?menu=set_and_lunch'
  )
  const menus = await res.json()

  return {
    props: { menus },
  }
}
