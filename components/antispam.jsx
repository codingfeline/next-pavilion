import { useState, useEffect } from 'react'
import { FaCheck, FaCross } from 'react-icons/fa'

const Antispam = ({ setPermission }) => {
  const [no1, setNo1] = useState('')
  const [no2, setNo2] = useState('')
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)

  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const rand1 = () => setNo1(Math.floor(Math.random() * 10 + 1))
  const rand2 = () => setNo2(Math.floor(Math.random() * 10 + 1))

  const randomize = () => {
    rand1()
    rand2()
  }

  const compare1 = a => {
    if (a === no1) setCheck1(true)
    else setCheck1(false)
  }
  const compare2 = val => {
    if (val === no2 && check1) setCheck2(true)
    setTimeout(() => {
      setPermission(true)
    }, 1500)
  }

  useEffect(() => {
    rand1()
    rand2()
  }, [])

  return (
    <>
      <h2>antispam</h2>
      <div className={`bg-red-100 `}>
        <h3>
          <span className="inline-block w-1/6 bg-slate-400 m-1 p-1 text-center">
            {no1}
          </span>
          {arr1.map(a => (
            <span
              className="bg-red-300 mx-1 p-1 cursor-pointer hover:bg-red-400"
              onClick={() => compare1(a)}
            >
              {a}
            </span>
          ))}
          {check1 ? (
            <FaCheck className="text-green-500 inline-block ml-2" />
          ) : (
            ''
          )}
        </h3>
        {check1 && (
          <h3>
            <span className="inline-block w-1/6 bg-slate-400 m-1 p-1 text-center">
              {no2}
            </span>
            {arr2.map(a => (
              <span
                className="bg-red-300 mx-1 p-1 cursor-pointer hover:bg-red-400"
                onClick={() => compare2(a)}
              >
                {a}
              </span>
            ))}
            {check2 && <FaCheck className="text-green-500 inline-block ml-2" />}
          </h3>
        )}
      </div>
      {/* <button onClick={randomize}>randomize</button> */}
    </>
  )
}

export default Antispam
