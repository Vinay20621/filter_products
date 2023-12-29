const ProductList = ({filteredProductList, loading}) => {
  
    if(loading)
      return <>Loading</> // use your loading state or component
  
    return (
      <div className="w-full h-[80%] px-3">
          <div className="w-full">Products: </div>
          <div className="w-full  flex flex-wrap gap-1 justify-evenly items-start overflow-y-auto">
              {
                  filteredProductList.map((product) => (
                      <div key={product.id} className='w-[19%] h-fit my-3 rounded-xl overflow-hidden border border-gray-200 min-w-32 ' >
                          <img
                              src={product.thumbnail}
                              alt='product'
                              className='w-full h-28 object-cover'
                          />
                          <div className="mt-2 mb-2 px-3">
                              <div className="font-semibold text-sm">
                                  {(product.title.length > 15)? product.title.substring(0,22) + '...': product.title}
                              </div>
                              <div className="text-sm text-gray-600">
                                  {product.category}
                              </div>
                          </div>
                      </div>
                  ))
              }
          </div>
      </div>
    )
  }
  
  export default ProductList