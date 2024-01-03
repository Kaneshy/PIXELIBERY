import { pedidos } from '@/constants/pedido'

const ProductsCart = () => {
    return (
        <main>
            {pedidos.map((x, index) => {
                return (
                    <section className='flex justify-between' key={index}>
                        <div>
                            <img width={100} src={x.imagen} alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <p className=' text-base-semibold'>{x.title}</p>
                            <div className='flex gap-x-2'>
                                <div className='flex-1 gap-x-2 flex justify-center items-center'>
                                    <button >
                                        <p className='px-2 rounded-full bg-slate-300'>-</p>
                                    </button>
                                    <p>{x.total}</p>
                                    <button >
                                        <p className='px-2 rounded-full bg-slate-300'>+</p>
                                    </button>
                                </div>
                                <div>
                                    Eliminar
                                </div>
                            </div>
                        </div>
                        <div className='text-base-semibold'>
                            ${x.price}
                        </div>
                    </section>
                )
            })}
        </main>

    )
}

export default ProductsCart