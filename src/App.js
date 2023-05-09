import {Container} from 'react-bootstrap'
import { useState } from 'react'
import React from 'react'
import Naving from './components/Naving.js';
import Headering from './components/Headering'
import Category from './components/Category';
import Cards from './components/Cards';
import {items} from './data'
function App() {
const [dataitem,setdata]=useState(items)
const allcategory=['الكل',...new Set(items.map((i)=>i.category))]
const filterbycategory=(cat)=>{
  if(cat === 'الكل') {
    setdata(items)
  }
  else{
  const newdata= items.filter((item)=>item.category === cat)
  setdata(newdata)}
}

const filterbysearch=(word)=>{
if(word!== ""){
  const newarr=items.filter((item)=>item.title === word)
  
  setdata(newarr)
}
}

  return (
    <div className="color-body font">
      <Naving filterbysearch={filterbysearch}/>
<Container>
<Headering/>
<Category filterbycategory={filterbycategory} allcategory={allcategory} />
<Cards dataitem={dataitem}/>

</Container>
    </div>
  );
}

export default App;