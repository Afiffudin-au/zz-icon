import { useState } from 'react'
import style from './RadioButtonsGroup.module.scss'
export default function RadioButtonsGroup() {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const handleCheck = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div className={style.container}>
      <form>
        <label>
          <input type='radio' name='radio' checked={isChecked || true} />
          <span onClick={handleCheck}>Icons</span>
        </label>
        <label>
          <input type='radio' name='radio' checked={isChecked} />
          <span onClick={handleCheck}>Packs</span>
        </label>
      </form>
    </div>
  )
}
