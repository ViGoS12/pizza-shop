import ContentLoader from 'react-content-loader'

const Skeleton: React.FC = () => {
  return (
    <div>
      <ContentLoader
        className='pizza-block'
        speed={2}
        width={280}
        height={531}
        viewBox='0 0 280 531'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'>
        <circle cx='135' cy='122' r='122' />
        <rect x='0' y='266' rx='15' ry='15' width='280' height='27.2' />
        <rect x='0' y='313' rx='10' ry='10' width='280' height='88.4' />
        <rect x='0' y='430' rx='15' ry='15' width='90' height='30' />
        <rect x='126' y='420' rx='25' ry='25' width='152.26' height='46' />
      </ContentLoader>
    </div>
  )
}

export default Skeleton
