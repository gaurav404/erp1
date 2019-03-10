import React from 'react'
import PropTypes from 'prop-types'
const SelectTextGroup = ({
  name,error,onChange,options,value
})=>{
  const selectoptions = options.map(item=><option key={item.label} value={item.value}>{item.label}</option>);
  return (
    <div className="form-group">
      <select
        className={"form-control form-control-lg"+(error?" is-invalid":"")}
        name={name}
        value={value}
        onChange={onChange}
      >{selectoptions}</select>
      {error&&(<div className="invalid-feedback">{error}</div>)}
    </div>
  );
}

SelectTextGroup.propTypes ={
  name:PropTypes.string.isRequired,
  options:PropTypes.array.isRequired,
  value:PropTypes.string,
  error:PropTypes.string,
  onChange:PropTypes.func.isRequired
}
export default SelectTextGroup;
