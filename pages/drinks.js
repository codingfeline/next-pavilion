import Table3_col from '@/components/table_3_col'

const Drinks = ({ menus }) => {
  return (
    <div className="menusBox">
      <Table3_col
        menus={menus.filter(m => m.category === 'wine')}
        title="Wines"
      />
    </div>
  )
}

export default Drinks

export async function getStaticProps() {
  const res = await fetch(
    'https://bangkokpavilion.co.uk/api/all_menus?menu=drinks'
  )
  const menus = await res.json()

  return {
    props: { menus },
  }
}
