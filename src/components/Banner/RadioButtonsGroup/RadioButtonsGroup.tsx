import style from './RadioButtonsGroup.module.scss'
export default function RadioButtonsGroup() {
  return (
    <div className={style.container}>
      <form>
        <label>
          <input type='radio' name='radio' checked={true} />
          <span>HTML</span>
        </label>
        <label>
          <input type='radio' name='radio' />
          <span>CSS</span>
        </label>
      </form>
    </div>
  )
}
