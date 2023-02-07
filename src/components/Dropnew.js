import Dropitem from "./Dropitem"

const Dropnew = ({ data, toggleTabMenu, type }) => {
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

export default Dropnew
