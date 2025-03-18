import React from 'react'
import '../style/nice.css'
import nice1 from '../image/nice1.png'
import nice2 from '../image/nice2.png'
import nice3 from '../image/nice3.png'
import nice4 from '../image/nice5.png'
import nice5 from '../image/nice5.png'
import nice6 from '../image/nice6.png'
import nice7 from '../image/nice7.png'
import nice8 from '../image/nice8.png'
import nice9 from '../image/nice9.png'
import NiceContent from './NiceContent'
import NiceCard from './NiceCard'
function Nice() {
  return (
    <section className='nice'>            
    <div className="container">
        <div className="nice__wrapper">
            <div>
<NiceContent photo={nice1} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "/>
<NiceContent photo={nice2}/>
            </div>
            <div className="nice__box">
<NiceCard photo={nice3}/>
<NiceCard photo={nice4}/>
<NiceCard photo={nice5}/>
<NiceCard photo={nice6}/>
<NiceCard photo={nice7}/>
<NiceCard photo={nice8}/>
<NiceCard photo={nice9}/>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Nice
