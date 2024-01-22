import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, setActiveThumbnailId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const ActiveThumbnailBtnClassName = isActive
    ? 'active-thumbnail-btn'
    : 'thumbnail-image'

  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-item">
      <button
        className="thumbnail-btn"
        type="button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={ActiveThumbnailBtnClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
