
function Body({handleTextChange}) {
  return (
    <>
      <body className='mt-[100px] border-2 border-red-500'>
      <div onClick={()=>{handleTextChange("compress")}}>
      compresss
     </div>
      </body>
    </>
  )
}

export default Body
