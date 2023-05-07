import Table2_col from '@/components/table_2_col'
import Table4col_1_price from '@/components/table_4col_1_price'
import Table4col_1_price_per_person from '@/components/table_4col_1_price_per_person'
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
        <Table2_col
          menus={menus.filter(m => m.category === 'choices')}
          title="Choose one starter below for a 2-course lunch"
        />
        <Table4col_1_price_per_person
          menus={menus.filter(m => m.category === 'set_menu')}
          title="Set Menus"
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
