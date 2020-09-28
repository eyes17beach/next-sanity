import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FilteringMenu(props) {
  const { filter, onChange } = props

  return (
    <div className='filtering-menu mb-2'>
      <FontAwesomeIcon
        size='lg'
        icon='list'
        className='clickable hoverable'
        onClick={() => onChange('view', { list: +!filter.view.list })}
      />
    </div>
  )
}
