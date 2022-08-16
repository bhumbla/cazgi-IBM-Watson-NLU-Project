import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      //Returns the emotions as an HTML table
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
              Object.entries(this.props.emotions).map((ele) => {
                  return ( <tr>
                      <td>{ele[0]}</td>
                      <td>{ele[1]}</td>
                  </tr>)
              })
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;