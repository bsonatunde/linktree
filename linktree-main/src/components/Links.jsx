import Button from './Button'
import React from 'react'

const Links = () => {
  return (
    <div className='w-[80%] mx-auto flex-col py-2 mt-[-30px]'>
        <Button id='twitter' url='https://twitter.com/bhinary_jay' description='Twitter Link' title=""/>      
        <Button id='btn__zuri' url='https://training.zuri.team/' description='Zuri Team' title=""/>
        <Button id='books' url='http://books.zuri.team' description='Zuri Books' title="Search for book"/>
        <Button id='book__python' url='https://books.zuri.team/python-for-beginners?ref_id=bsonat' description='Python Books' title="python book" />
        <Button id='pitch' url='https://background.zuri.team' description='Background Check for Coders' title="Project" />
        <Button id='book__design' url='https://books.zuri.team/design-rules' description='Design Books' title="Team book        "/>

    </div>
  )
}

export default Links
