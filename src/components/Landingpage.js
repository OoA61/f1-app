import image from '../images/australia.jpeg'

const Landingpage = () => {
  return (
    <div className="landing-page-body">
      <div>
        <fieldset className='account-box'>
          <legend>Account: Gronkey</legend>
          <table>
            <tr>
              <td>Balance: </td>
              <td>$683,920,472</td>
            </tr>
          </table>
        </fieldset>
      </div>
      <div className='landing-races'>
        <div className="landing-box">
          <h1>Last Race: Australian Gran Prix</h1>
          <div  className='image-box'>
            <img src={ image } alt="Australian GP" width="600px"/>
          </div>
        </div>
        <div className="landing-box">
          <h1>Next Race: Australian Gran Prix</h1>
          <div  className='image-box'>
            <img src={ image } alt="Australian GP" width="600px"/>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Landingpage
