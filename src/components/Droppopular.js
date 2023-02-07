import Dropitem from "./Dropitem"

const Droppopular = ({ data }) => {
  return (
    <div className="gray-drop">
        <>
        {data.map((item) => 
            <Dropitem item = {item} key = {item.id}/>
        )}
        </>
    </div>
  )
}

export default Droppopular
