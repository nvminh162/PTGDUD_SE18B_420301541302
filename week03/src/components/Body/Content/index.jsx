import content from '../../../assets/content.png'

const Content = ({className}) => {
  return (
    <div className={`${className} flex justify-center items-center`}>
      <img src={content} alt="content" />
    </div>
  )
}

export default Content
