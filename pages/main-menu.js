import Table4col_1_price from '@/components/table_4col_1_price'
import React from 'react'

const MainMenu = ({ menus }) => {
  return (
    <>
      <div className="bg-slate-100">
        <Table4col_1_price menus={menus} title={'Main Menus'} />
      </div>
    </>
  )
}

export default MainMenu

export async function getStaticProps() {
  const res = await fetch(
    'https://bangkokpavilion.co.uk/api/all_menus?menu=main'
  )
  const menus = await res.json()

  return {
    props: { menus },
  }
}
