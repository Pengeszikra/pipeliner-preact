export default reducerObject => ({type,payload}, store) => 
  reducerObject[type] 
    ? reducerObject[type](payload) 
    : store