import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const listViewIcons = ['list', 'border-all']

export default function FilteringMenu(props) {
  const { filter, onChange } = props

  return (
    <div className='filtering-menu mb-2'>
      <FontAwesomeIcon
        size='2x'
        icon={listViewIcons[filter.view.list]}
        className='clickable hoverable'
        onClick={() => onChange('view', { list: +!filter.view.list })}
      />
    </div>
  )
}
