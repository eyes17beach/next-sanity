export default function FilteringMenu(props) {
  const { filter, onChange } = props

  return (
    <div className='filtering-menu mb-2'>
      <div onClick={() => onChange('view', { list: +!filter.view.list })}>
        List filter - {filter.view.list}
      </div>
    </div>
  )
}
