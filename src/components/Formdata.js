import React from 'react';
class Formdata extends React.Component {
    constructor() {
      super();
      this.displayData = [];
      this.tempArr = [];
      this.state = {
        qty: 0,
        price: 0,
        result: 0,
        index:0,
        showdata : this.displayData,
        animals : this.tempArr,
      }
      this.appendData = this.appendData.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
    };
   
    appendData() {
      // this.tempArr.push(this.state.result ); //totla niche aave che
         this.displayData.push(<tr className='addr0' key="xyz"> 
            <td><input type="text" name='product[]'  placeholder='Enter Product Name' className="form-control" /></td>
            <td><input type="number" name='qty[]'   placeholder='Enter Qty' className="form-control qty" step="0" min="0" onChange={this.handleChange}/></td>
            <td><input type="number" name='price[]'  placeholder='Enter Price' className="form-control price" step="0.00" min="0"  onChange={this.handleChange2}/></td>
            <td><input type="number" name='total[]' placeholder='0.00' className="form-control total" value={this.state.result} /></td>
            </tr>);

         this.setState({
            // showdata : this.displayData,
            // postVal : 0,
            // animals : this.tempArr
         });
      }
    handleChange(priceValue,index) {
        let getTextAreaValue = priceValue;
        this.setState(prevState => ({
            qty :getTextAreaValue,
            result: getTextAreaValue * prevState.price
            
        }))
        console.log(this.state.result);
        this.tempArr[index] = getTextAreaValue * priceValue
        console.log(index)
    }
    handleChange2(qtyValue,index) {
      console.log(index);
        let getTextAreaValue2 = qtyValue;
        this.setState({
            price :getTextAreaValue2,
            result: getTextAreaValue2 * this.state.qty 
        });
        this.tempArr[index] = getTextAreaValue2 * this.state.qty ;
    }
  render() {
    return (
          <div id="mainContainer">
             <div >
             <input  type="submit" className="button" onClick={() => this.appendData()}  value="+"/>
             </div>
             <div id="display-data-Container">
             <table className="table table-bordered table-hover" id="tab_logic" border="1">
                    <thead>
                    <tr>
                        <th className="text-center"> Product </th>
                        <th className="text-center"> Qty </th>

                        <th className="text-center"> Price </th>
                        <th className="text-center"> Total </th>
                    </tr>
                    </thead>
                    <tbody>
                          
                        
                        {this.displayData.map((singleService, index) => (
                          
                              <tr className='addr0'  key={index}> 
                              <td><input type="text" name='product[]'  placeholder='Enter Product Name' className="form-control" /></td>
                              <td><input type="number" name='qty[]'   placeholder='Enter Qty' className="form-control qty" step="0" min="0" onChange={(e) => this.handleChange(e.target.value,index)}/></td>
                              <td><input type="number" name='price[]'  placeholder='Enter Price' className="form-control price" step="0.00" min="0"  onChange={(e) => this.handleChange2(e.target.value,index)}/></td>
                              <td><input type="number" name='total[]' placeholder='0.00' className="form-control total" value={this.tempArr[index]} readOnly/></td>
                              </tr>
                        ))}
                    </tbody>
             </table>
             </div>
          </div>
      );
  }
}


export default Formdata;