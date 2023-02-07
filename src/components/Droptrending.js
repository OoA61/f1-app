import Dropitem from "./Dropitem"

const Droptrending = ({ data }) => {
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

export default Droptrending
