'use client'

import { useState, useEffect } from 'react'
import { FaCheck, FaCross } from 'react-icons/fa'

const Antispam = ({ setPermission }) => {
  const [no1, setNo1] = useState('')
  const [check1, setCheck1] = useState(false)
  const [arr1, setArr1] = useState([])

  const randomize = () => {
    rand1()
  }

  // to run upon wrong click
  const randArray1 = () => setArr1(arr1.sort((a, b) => 0.5 - Math.random()))

  const compare1 = a => {
    if (a === no1) {
      setCheck1(true)
      setTimeout(() => {
        setPermission(true)
      }, 1500)
    } else {
      rand1()
      randArray1()
    }
  }
  const rand1 = () => setNo1(Math.floor(Math.random() * 12 + 1))

  useEffect(() => {
    setArr1(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].sort(
        (a, b) => 0.5 - Math.random()
      )
    )

    rand1()
  }, [])

  return (
    <>
      <div
        className={`flex items-center w-full h-screen absolute top-0 right-0  `}
      >
        <div
          className={`bg-slate-200 p-4  w-full transition-all delay-900 rounded-lg shadow-xl border-8 border-slate-300 flex flex-col items-center
         `}
        >
          <h3 className="flex flex-col items-cente w-80 ">
            <div className="text-lg">
              Click on <span className="val-a text-2xl">{no1}</span> below to
              proceed
            </div>
            <div className="flex items-center">
              <div className="choices">
                {arr1.map(a => (
                  <span
                    key={a}
                    className={`val-b 
                ${a === no1 ? 'hover:bg-green-400' : 'hover:bg-red-500'}
                `}
                    onClick={() => compare1(a)}
                  >
                    {a}
                  </span>
                ))}
              </div>
              {check1 && (
                <FaCheck className="text-green-500 inline-block ml-2 text-5xl" />
              )}
            </div>
          </h3>
        </div>
      </div>
      {/* <button onClick={randomize}>randomize</button> */}
    </>
  )
}

export default Antispam
